import { ScrollView, TouchableOpacity, View } from "react-native";
import { Avatar, Card, IconButton } from 'react-native-paper';
import { colors } from "../../utils";

const cardsDiscountsData = [
    {
      title: "50% Off on Electronics",
      subtitle: "Save big on your favorite gadgets",
      avatarUrl: "https://example.com/images/electronics.png"
    },
    {
      title: "Buy 1 Get 1 Free",
      subtitle: "Exclusive offer on selected items",
      avatarUrl: "https://example.com/images/bogo.png"
    },
    {
      title: "20% Off on Clothing",
      subtitle: "Refresh your wardrobe with the latest fashion",
      avatarUrl: "https://example.com/images/clothing.png"
    },
    {
      title: "30% Off on Home Appliances",
      subtitle: "Upgrade your home with our best deals",
      avatarUrl: "https://example.com/images/appliances.png"
    },
    {
      title: "Special Discount on Books",
      subtitle: "Find your next favorite book at a great price",
      avatarUrl: "https://example.com/images/books.png"
    },
    {
      title: "Free Shipping on Orders Over $50",
      subtitle: "Shop more and save on delivery",
    },
    {
      title: "25% Off on Furniture",
      subtitle: "Revamp your home decor with stylish furniture",
      avatarUrl: "https://example.com/images/furniture.png"
    },
    {
      title: "Limited Time Offer on Groceries",
      subtitle: "Stock up on essentials with our exclusive discounts",
      avatarUrl: "https://example.com/images/groceries.png"
    },
    {
        title: "Limited Time Offer on Groceries",
        subtitle: "Stock up on essentials with our exclusive discounts",
        avatarUrl: "https://example.com/images/groceries.png"
      },
      {
          title: "Limited Time Offer on Groceries",
          subtitle: "Stock up on essentials with our exclusive discounts",
          avatarUrl: "https://example.com/images/groceries.png"
      }
  ];

export default function Discount({cardsDiscounts=cardsDiscountsData, navigation }){

    return(            
    <View style={{display:"flex", margin:"auto", padding:8}}>
        <ScrollView showsVerticalScrollIndicator={false}>
            {cardsDiscounts.map(card => (
                <TouchableOpacity onPress={()=>{navigation.navigate("Details", {card: card})}}>
                    <Card.Title
                        title={card.title}
                        subtitle={card.subtitle}
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