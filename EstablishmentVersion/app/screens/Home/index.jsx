import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { client } from "../../utils/instance/axiosInstance";
export function Home(){

    const [requests, setRequests] = useState([]);

    const cardsRequestData = async () => {
        const res = await client.get("/discount-request/establishment/1");
        console.log(res.data);
        setRequests(res.data);
      }
  

    useEffect(()=>{
        cardsRequestData()
    }, [])
    return(
        <View>
            <Text>
            </Text>
        </View>
    )
}