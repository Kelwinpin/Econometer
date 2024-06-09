import { useEffect, useState } from "react";
import { View, TouchableOpacity } from "react-native";
import { Card } from 'react-native-paper';
import { client } from "../../utils/instance/axiosInstance";
import { ScrollView } from "react-native-gesture-handler";

export function Home() {
    const [requests, setRequests] = useState([]);
    const [requesters, setRequesters] = useState({});

    const getUserById = async (id) => {
        const { data } = await client.get(`/users/${id}`);
        return data.name;
    };

    const fetchRequesters = async (requests) => {
        try {
            const requesterPromises = requests.map(req => getUserById(req.user_id));
            const results = await Promise.allSettled(requesterPromises);

            const requesters = results.reduce((acc, result, index) => {
                const userId = requests[index].user_id;
                if (result.status === "fulfilled") {
                    acc[userId] = result.value;
                } else {
                    console.error(`Failed to fetch user ${userId}:`, result.reason);
                    acc[userId] = 'Desconhecido'; 
                }
                return acc;
            }, {});

            setRequesters(requesters);
        } catch (error) {
            console.error("Failed to fetch requesters:", error);
        }
    };

    const cardsRequestData = async () => {
        const res = await client.get("/discount-request/establishment/1");
        setRequests(res.data);
        fetchRequesters(res.data);
    };

    useEffect(() => {
        cardsRequestData();
    }, []);

    return (
        <View>
            <ScrollView showsVerticalScrollIndicator={false}>
                {requests.map(req => (
                    <TouchableOpacity key={req.id}>
                        <Card.Title
                            title={`Pedido de ${req.purchase_value}`}
                            subtitle={`Pedido por ${requesters[req.user_id] || 'Carregando...'}`}
                            style={{
                                marginBottom: 16,
                                padding: 8,
                                borderRadius: 8,
                                width: 350,
                                height: 59,
                            }}
                        />
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    );
}
