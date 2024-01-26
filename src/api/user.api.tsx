import axios from 'axios';

export const getAllUsers = async (pageId: string) => {
    try {
        return await axios.get(
            `https://reqres.in/api/users?page=${pageId}`,
        )
    } catch (error) {
        throw error;
    }
};

export const getSingleUser = async (id: string) => {
    try {
        return await axios.get(
            `https://reqres.in/api/users/${id}`,
        )
    } catch (error) {
        throw error;
    }
};