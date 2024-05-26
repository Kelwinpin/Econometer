import { View, Text, StyleSheet } from "react-native";
import { colors } from "../../utils";
import { TouchableOpacity } from "react-native";

export default function DetailsScreen({route, navigation}){
    const {card} = route.params;

    return(
        <View style={styles.container}>
            <Text style={styles.title}>{card?.title.toUpperCase()}</Text>
            <Text style={styles.subTitle}>{card?.subtitle}</Text>
            <TouchableOpacity style = {styles.button} onPress={() => console.log("Gerar codigo")}>
                <Text style = {styles.text}>Pegar Desconto</Text>
            </TouchableOpacity>
        </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0F0F5",
    padding: 20,
    display: "flex",
    alignItems:"center",
  },
  title: {
    color: colors.primary.default,
    fontSize: 28,
    textAlign:"center",
    fontWeight: "bold",
  },
  subTitle: {
    color: "#6C6C80",
    fontSize: 20,
    fontWeight: "400",
  },
  button: {
    justifyContent:"center",
    height:70,
    width: 300,
    alignItems:"center",
    borderRadius:20,
    elevation:3,
    backgroundColor: colors.primary.default,
    marginTop: 32
  },
    
  text:{
    color: colors.white,
    fontSize:28,
    fontWeight:'bold',
    fontFamily:'roboto'
  },
});