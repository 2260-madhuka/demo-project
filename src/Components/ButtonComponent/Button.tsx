import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';

export interface ButtonProps {
  title: string;
  onPress?: () => void;
  backgroundColor?: string;
}

const Button = (props: ButtonProps) => {
  const {
    title,
    onPress,
    backgroundColor = '#3a86a8',
  } = props;



  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.rect}>
        <View style={styles.triangle} />
        <Text style={styles.textStyle}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  rect: {
    height: 45,
    width: 100,
    backgroundColor: '#3a86a8',
    justifyContent: 'center',
    alignItems: 'center',
  },
  triangle: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderBottomWidth: 10,
    borderLeftWidth: 10,
    borderTopColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: 'white',
    borderLeftColor: 'transparent',
  },
  textStyle: {
    color: '#FFF'
  }
});

export default Button;
