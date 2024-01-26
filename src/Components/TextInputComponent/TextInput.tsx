import React from 'react';
import { TouchableOpacity, TextInput, StyleSheet } from 'react-native';

export type TextInputProps = {
    onChange: (text: string) => void;
    placeholder: string;
    backgroundColor: string
};

const CustomTextInput = (props: TextInputProps) => {
    const {
        onChange,
        placeholder,
        backgroundColor = '#f7f7f7'
    } = props;

    return (
        <TextInput
            onChangeText={(text) => onChange(text)}
            placeholder={placeholder}
            style={{
                backgroundColor: backgroundColor,
                height: 45,
                paddingHorizontal: 8
            }}
        >

        </TextInput>
    );
};

const styles = StyleSheet.create({
    sectionContainer: {
        alignItems: 'center',
    },

    linktextStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },

    lineStyle: {
        borderBottomColor: '#E8ECF4',
        borderBottomWidth: 1,
        flex: 1,
        marginVertical: 10,
    },

    orLoginWithContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
    },

    orLoginWithTextStyle: {
        color: '#0B0F07',
        marginHorizontal: 10,
    },
});

export default CustomTextInput;
