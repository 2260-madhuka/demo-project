import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export interface UserCardComponentProps {
    id: string;
    name: string;
    onPress?: () => void;
}

const UserCardComponent = (props: UserCardComponentProps) => {
    const {
        id,
        name,
        onPress
    } = props;

    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.userCardContainer}>
                <View style={styles.userCardHeaderDataContainer}>
                    <Text style={styles.userCardHeaderDataTextStyle}>
                        ID
                    </Text>
                    <Text style={styles.userCardHeaderDataTextStyle}>
                        Name
                    </Text>
                </View>
                <View style={styles.userCardDataContainer}>
                    <Text style={styles.userCardDataTextStyle}>
                        {id}
                    </Text>
                    <Text style={styles.userCardDataTextStyle}>
                        {name}
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default UserCardComponent

const styles = StyleSheet.create({
    userCardContainer: {
        display: 'flex',
        flexDirection: 'row',
        gap: 16,
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 16,
        marginBottom: 14
    },
    userCardHeaderDataContainer: {
        display: 'flex',
        gap: 8

    },
    userCardDataContainer: {
        display: 'flex',
        gap: 8
    },
    userCardHeaderDataTextStyle: {
        fontSize: 18,
        fontWeight: '600'
    },
    userCardDataTextStyle: {
        fontSize: 18,
        fontWeight: '400',
        color: '#454950'
    }
})