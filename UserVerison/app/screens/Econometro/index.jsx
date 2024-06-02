import { View, StyleSheet, Text } from "react-native";
import { colors } from "../../utils";
import IconNative from "../../components/Icon";
import { useEffect, useState } from "react";
import { client } from "../../utils/instance/axiosInstance";

export default function Econometro(){
    const [moneySafed, setMoneySafed] = useState(0);

    const economyData = async () => {
        try {
            const {data} = await client.get(`/discount-request/15736958660/`);
            setMoneySafed(data.totalSafed)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        economyData()
    },[])

    return(
        <View style={styles.container}>
            <Text style = {styles.text}>
                Você economizou:
            </Text>
            <IconNative name={"money-bill-wave"} size={128}/>
            <Text style = {styles.moneyValue}>
                ${parseFloat(moneySafed)}
            </Text>
        </View>
    )
} 

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F0F0F5",
        padding: 20,
        display: "flex",
        alignItems:"center",
        gap: 32
    },
    button:{
      justifyContent:"center",
      height:70,
      width: 200,
      alignItems:"center",
      borderRadius:20,
      elevation:3,
      backgroundColor: colors.primary.default
    },
  
    text:{
      color: colors.black,
      fontSize:28,
      fontWeight:'bold',
      fontFamily:'roboto'
    },

    moneyValue: {
        color: colors.primary.dark,
        fontSize:28,
        fontWeight:'bold',
        fontFamily:'roboto'     
    }
})