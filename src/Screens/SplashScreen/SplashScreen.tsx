import { StyleSheet, Text, View, Image } from 'react-native'
import React, { FC, useEffect } from 'react'
import { RootNavigatorList } from '../../Navigation/Navigator'
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

type SplashScreenProps = NativeStackScreenProps<RootNavigatorList, "SplashScreen">

const SplashScreen: FC<SplashScreenProps> = (props) => {

    useEffect(() => {
        const timeOut = setTimeout(() => {
            props.navigation.replace('UserListScreen')
        }, 1000);
        return () => clearTimeout(timeOut)
    }, [])

    return (
        <View style={styles.splashContainer}>
            <Image
                style={styles.logoImage}
                source={require('../../assets/images/logo.png')}
            />
            <Text style={styles.splashText}>
                LAYOUTindex Demo
            </Text>
        </View>
    )
}

export default SplashScreen

const styles = StyleSheet.create({
    splashContainer: {
        flex: 1,
        backgroundColor: '#3a86a8',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    logoImage: {
        height: 338,
        width: 298
    },
    splashText: {
        color: '#fff',
        fontSize: 26,
        fontWeight: '500',
        marginTop: 35
    }
})