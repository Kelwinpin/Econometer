import { View, Text, StyleSheet } from "react-native";
import { colors } from "../../utils";
import { TouchableOpacity } from "react-native";
import { useEffect, useState } from "react";
import { client } from "../../utils/instance/axiosInstance";

export default function DetailsScreen({ route, navigation }) {
  const { card } = route.params;
  const [establishment, setEstablishment] = useState({})
  const [request, setRequest] = useState()

  const establishmentData = async () => {
    try {
      const res = await client.get(`/establishment/${card.establishment_id}`);
      setEstablishment(res.data);
    } catch (error) {
      console.error("Error fetching establishment data:", error);
    }
  }

  useEffect(() => {
    establishmentData();
  }, []);

  const createDiscountRequest = async () => {
    try {
      const res = await client.post(`/discount-request/${establishment.id}/15736958660/`, {
        validity: "2025-06-15",
        discount_value: 20.00,
        purchase_value: card.discount_percentage === 0 ? card.discount_value : card.discount_percentage,
        status: "pending",
        validation_date: null
      });
      console.log("Pedido cadastrado com sucesso", res.data.id);
      setRequest(res.data.id)
    } catch (err) {
      console.error("Error creating discount request:", err);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{establishment.name?.toUpperCase() || "Loading..."}</Text>
      <Text style={styles.subTitle}>{card?.rule}</Text>
      <Text style={styles.description}>{`${card.discount_type} de desconto de ${card.discount_percentage === 0 ? card.discount_value : card.discount_percentage}`}</Text>

      <TouchableOpacity style={styles.button} onPress={createDiscountRequest}>
        <Text style={styles.text}>Pedir desconto</Text>
      </TouchableOpacity>

      {request && 
        <Text style={styles.code}>
          {request}
        </Text>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0F0F5",
    padding: 20,
    display: "flex",
    alignItems: "center",
  },
  title: {
    color: colors.primary.default,
    fontSize: 28,
    textAlign: "center",
    fontWeight: "bold",
  },
  subTitle: {
    color: "#6C6C80",
    fontSize: 20,
    fontWeight: "400",
  },
  button: {
    justifyContent: "center",
    height: 70,
    width: 300,
    alignItems: "center",
    borderRadius: 20,
    elevation: 3,
    backgroundColor: colors.primary.default,
    marginTop: 32
  },
  description: {
    margin: 24,
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'roboto'
  },
  text: {
    color: colors.white,
    fontSize: 28,
    fontWeight: 'bold',
    fontFamily: 'roboto'
  },
  code: {
    color: colors.secondary,
    fontSize: 56,
    margin: 'auto',
    fontWeight: 'bold',
    fontFamily: 'roboto'
  }
});
