import React from "react";
import { View } from "react-native";
import { colors } from "../../../utils";
import Icon from 'react-native-vector-icons/FontAwesome5';

interface ButtonTabBarProps {
    name: string;
}

export default function ButtonTabBar({name}:ButtonTabBarProps) {
    return (
        <View style={{backgroundColor:colors.primary.dark, padding:8, borderRadius: 32}}>
        <Icon
          name={name}
          size={24}
          color={colors.primary.default}
        />
      </View>
    );
  }