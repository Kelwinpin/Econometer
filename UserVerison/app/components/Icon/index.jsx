import React from "react";
import { View } from "react-native";
import { colors } from "../../utils";
import Icon from 'react-native-vector-icons/FontAwesome5';

export default function IconNative({name, size=32 }) {
    return (
      <View style={{display: "flex", alignItems:"center", justifyContent:"center", borderRadius: 32}}>
        <Icon
          name={name}
          size={size}
          color={colors.primary.default}
        />
      </View>
    );
  }