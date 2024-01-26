import { ActivityIndicator, Dimensions, FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { FC, useEffect, useState } from 'react'
import { CustomTextInput, Button, UserCardComponent, PopUpComponent } from '../../Components'
import { useDispatch, useSelector } from 'react-redux';
import { UserState, getUser, getUsers } from '../../Redux/Slices/userSlice';
import { AppDispatch, RootState } from '../../Redux/store';
import { RefreshControl } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootNavigatorList } from '../../Navigation/Navigator';

type UserListScreenProps = NativeStackScreenProps<RootNavigatorList, "UserListScreen">

const UserListScreen: FC<UserListScreenProps> = () => {

    const [isPopUpVisible, setPopUpVisible] = useState(false);
    const [singleId, setSingleId] = useState('');
    const [selectedData, setSelectedData] = useState<UserState>({ firstName: '', lastName: '', email: '', avatar: '' });
    const [pageId, setPageId] = useState(1)


    const dispatch = useDispatch<AppDispatch>();
    const selector: any = useSelector<RootState>((state) => state.user);

    const showPopUp = (firstName: string, lastName: string, email: string, avatar: string) => {
        setSelectedData({ firstName, lastName, email, avatar });
        setPopUpVisible(true);
    };

    const hidePopUp = () => {
        setPopUpVisible(false);
    };

    useEffect(() => {
        if (singleId.trim() === '') {
            dispatch(getUsers(pageId.toString()))
        }
    }, [singleId, pageId]);

    return (
        <SafeAreaView>
            <View style={styles.mainContainer}>
                <View style={styles.headerContainer}>
                    <Text style={styles.headerTitle}>User Information</Text>
                </View>
                <View style={styles.inputContainer}>
                    <View style={{ flex: 1, marginRight: 16 }}>
                        <CustomTextInput
                            placeholder='User Id'
                            onChange={(text) => {
                                setSingleId(text)
                                setPageId(1)
                            }}
                            backgroundColor='#f7f7f7'
                        />
                    </View>
                    <Button
                        title='Search'
                        onPress={() => {
                            if (singleId.trim() != '') {
                                dispatch(getUser(singleId.trim()))
                            }
                        }}
                    />
                </View>
                <View style={styles.availableUsersTextContainer}>
                    <Text style={styles.availableUsersText}>
                        AVAILABLE USERS
                    </Text>
                </View>

                <View style={styles.userCardContainer}>
                    <FlatList
                        style={{
                            height: 550,
                        }}
                        data={selector?.user.data}
                        renderItem={({ item }) => (
                            <UserCardComponent
                                id={item.id}
                                name={item.first_name}
                                onPress={() => showPopUp(item.first_name, item.last_name, item.email, item.avatar)}
                            />
                        )}
                        refreshControl={
                            <RefreshControl
                                refreshing={selector.loading} />
                        }
                        keyExtractor={(_item, index) => index.toString()}
                        onEndReached={({ distanceFromEnd }) => {
                            if (distanceFromEnd > 0 && pageId <= 2) {
                                setPageId(pageId + 1);
                            }
                        }}
                        onEndReachedThreshold={0.5}
                    />
                </View>
                {isPopUpVisible &&
                    <PopUpComponent
                        isVisible={isPopUpVisible}
                        onBackdropPress={hidePopUp}
                        onClosePress={hidePopUp}
                        userFirstName={selectedData.firstName}
                        userLastName={selectedData.lastName}
                        userEmail={selectedData.email}
                        image={selectedData.avatar}
                    />
                }
            </View>
        </SafeAreaView>
    )
}

export default UserListScreen

const styles = StyleSheet.create({
    mainContainer: {
        display: 'flex',
    },
    headerContainer: {
        display: 'flex',
        backgroundColor: '#3a86a8',
        paddingLeft: 24,
        paddingVertical: 16
    },
    headerTitle: {
        color: '#fff',
        fontSize: 24,
        fontWeight: '600'
    },
    inputContainer: {
        display: 'flex',
        paddingHorizontal: 24,
        flexDirection: 'row',
        paddingVertical: 20,
        backgroundColor: '#fff'
    },
    availableUsersTextContainer: {
        display: 'flex',
        marginTop: 24,
        paddingLeft: 24
    },
    availableUsersText: {
        fontSize: 18,
        fontWeight: '500'
    },
    userCardContainer: {
        display: 'flex',
        paddingHorizontal: 24,
        marginTop: 24
    }
})