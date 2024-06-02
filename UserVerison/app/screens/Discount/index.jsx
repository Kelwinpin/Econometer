import { ScrollView, TouchableOpacity, View } from "react-native";
import { Avatar, Card, IconButton } from 'react-native-paper';
import { colors } from "../../utils";
import { client } from "../../utils/instance/axiosInstance";
import { useEffect, useState } from "react";

export default function Discount({ navigation }){
    const [discounts, setDiscounts] = useState([])

    const cardsDiscountsData = async () => {
      const res = await client.get("/discount-patterns/establishments/1/patterns/")
      console.log(res.data);
      setDiscounts(res.data)
    }

    useEffect(()=>{
      cardsDiscountsData()
    },[])

    return(            
    <View style={{display:"flex", margin:"auto", padding:8}}>
        <ScrollView showsVerticalScrollIndicator={false}>
            {discounts.map(card => (
                <TouchableOpacity key={card.id} onPress={()=>{navigation.navigate("Details", {card: card})}}>
                    <Card.Title
                        title={card.rule}
                        subtitle={`${card.discount_type} de desconto de ${card.discount_percentage === 0 ? card.discount_value : card.discount_percentage}`}
                        left={(props) => <Avatar.Icon {...props} icon="folder" />}
                        style={
                            {
                                marginBottom: 16, 
                                shadowColor:colors.black, 
                                backgroundColor: colors.white, 
                                padding: 8, 
                                borderRadius: 8, 
                                width: 350, 
                                height: 59
                            }
                        }
                    />
                </TouchableOpacity>
            ))}
        </ScrollView>            
    </View>
    );
}