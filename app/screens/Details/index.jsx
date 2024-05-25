import { View, Text, StyleSheet } from "react-native";

export default function DetailsScreen({route, navigation}){
    const {card} = route.params;

    return(
        <View style={styles.container}>
            <Text style={styles.title}>{card?.title}</Text>
            <Text style={styles.subTitle}>{card?.subtitle}</Text>
        </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0F0F5",
    padding: 20,
  },
  title: {
    color: "#322153",
    fontSize: 28,
    fontWeight: "bold",
  },
  subTitle: {
    color: "#6C6C80",
    fontSize: 18,
    fontWeight: "400",
  },
  section: {
    color: "#322153",
    fontSize: 16,
    fontWeight: "bold",
    paddingTop: 20,
  },
  text: {
    color: "#6C6C80",
    fontSize: 16,
  },
});