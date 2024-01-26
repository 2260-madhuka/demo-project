import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from '@reduxjs/toolkit';
import { getAllUsers, getSingleUser } from "../../api/user.api";

export interface UserState {
    firstName: string;
    lastName: string;
    email: string;
    avatar: string
}

const initialState = {
    user: { data: [] },
    loading: true,
    error: ''
};

export const getUsers = createAsyncThunk(
    'userSlice/getAllUsers',
    async (pageId: string) => {
        try {
            const response = await getAllUsers(pageId);
            return response.data;
        } catch (error) {
            return error;
        }
    },
);

export const getUser = createAsyncThunk(
    'userSlice/getUser',
    async (id: string) => {
        try {
            const response = await getSingleUser(id);

            return response.data;
        } catch (error) {
            return error;
        }
    },
);

const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getUsers.pending, (state = initialState) => {
                state.loading = true;
                state.user = { data: state.user.data.length === 1 ? [] : [...state.user.data] };
            })
            .addCase(getUsers.fulfilled, (state = initialState, action) => {
                state.loading = false;
                state.user.data = [...state.user.data, ...action.payload.data] as any;
            })
            .addCase(getUsers.rejected, (state = initialState, action) => {
                state.loading = false;
                state.error = action.payload as any;
            })
        builder
            .addCase(getUser.pending, (state = initialState) => {
                state.loading = true;
                state.user = { data: [] };
            })
            .addCase(getUser.fulfilled, (state = initialState, action) => {
                state.loading = false;
                state.user.data = [action.payload.data] as any;
            })
            .addCase(getUser.rejected, (state = initialState, action) => {
                state.loading = false;
                state.error = action.payload as any;
            })
    },
});

export const { } = userSlice.actions;
export default userSlice.reducer;












