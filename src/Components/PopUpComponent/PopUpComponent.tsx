import { Dimensions, Image, StyleProp, StyleSheet, Text, TouchableOpacity, View, ViewStyle } from 'react-native'
import React from 'react'
import { Overlay, OverlayProps } from 'react-native-elements';
import { Button } from '../'

export interface PopUpComponentProps {
    isVisible: boolean;
    backdropStyle?: StyleProp<ViewStyle>;
    overlayStyle?: StyleProp<ViewStyle>;
    onBackdropPress?(): void;
    onClosePress?(): void;
    children?: StyleProp<ViewStyle>;
    userFirstName?: string;
    userLastName?: string
    userEmail?: string;
    image?: string
}

const PopUpComponent = (props: PopUpComponentProps) => {
    const {
        children,
        isVisible,
        onBackdropPress,
        backdropStyle,
        overlayStyle,
        onClosePress,
        userFirstName,
        userLastName,
        userEmail,
        image
    } = props;

    return (
        <View>
            <View>
                <Overlay
                    overlayStyle={overlayStyle}
                    backdropStyle={backdropStyle}
                    isVisible={isVisible}
                    onBackdropPress={onBackdropPress}
                >
                    <View style={styles.popUpContainer}>
                        <View style={styles.userDetailsContainer}>
                            <View style={styles.userImageContainer}>
                                <Image
                                    style={styles.userImage}
                                    source={{
                                        uri: image,
                                    }}
                                />
                            </View>
                            <View style={styles.userDetails}>
                                <View style={styles.userHeaderData}>
                                    <Text style={styles.userCardHeaderDataTextStyle}>
                                        First Name
                                    </Text>
                                    <Text style={styles.userCardHeaderDataTextStyle}>
                                        Last Name
                                    </Text>
                                    <Text style={styles.userCardHeaderDataTextStyle}>
                                        Email
                                    </Text>
                                </View>
                                <View style={styles.userData}>
                                    <Text style={styles.userCardDataTextStyle}>
                                        {userFirstName}
                                    </Text>
                                    <Text style={styles.userCardDataTextStyle}>
                                        {userLastName}
                                    </Text>
                                    <Text style={styles.userCardDataTextStyle}>
                                        {userEmail}
                                    </Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.buttonContainer}>
                            <Button
                                title='Close'
                                onPress={onClosePress}
                            />
                        </View>
                    </View>
                </Overlay>
            </View>
        </View>
    )
}

export default PopUpComponent



const styles = StyleSheet.create({
    popUpContainer: {
        display: 'flex',
        flexDirection: 'column',
        paddingHorizontal: 8,
        paddingVertical: 24,
        width: Dimensions.get('window').width - 50,
    },
    userDetailsContainer: {
        display: 'flex',
        flexDirection: 'row',
        gap: 10
    },
    userImageContainer: {

    },
    userDetails: {
        display: 'flex',
        flexDirection: 'row',
        gap: 8,
    },
    userImage: {
        display: 'flex',
        width: 70,
        height: 70,
        borderRadius: 50
    },
    buttonContainer: {
        display: 'flex',
        marginTop: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    userHeaderData: {
        display: 'flex',
        gap: 8
    },
    userData: {
        display: 'flex',
        gap: 8
    },
    userCardHeaderDataTextStyle: {
        fontSize: 15,
        fontWeight: '500'
    },
    userCardDataTextStyle: {
        fontSize: 15,
        fontWeight: '400',
        color: '#454950'
    }
})