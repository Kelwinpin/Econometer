import { useEffect, useState } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { Card } from 'react-native-paper';
import { client } from "../../utils/instance/axiosInstance";
import { ScrollView } from "react-native-gesture-handler";

export function Home() {
    const [requests, setRequests] = useState([]);
    const [requesters, setRequesters] = useState({});
    const [patterns, setPatterns] = useState({});

    const getUserById = async (id) => {
        const { data } = await client.get(`/users/${id}`);
        return data.name;
    };

    const getPatternById = async (idEstablishment, idPattern) => {
        const { data } = await client.get(`/discount-patterns/establishments/${idEstablishment}/patterns/${idPattern}`);
        return data;
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
                    acc[userId] = 'Desconhecido'; // Fallback value
                }
                return acc;
            }, {});

            setRequesters(requesters);
        } catch (error) {
            console.error("Failed to fetch requesters:", error);
        }
    };

    const fetchPatterns = async (requests) => {
        try {
            const patternPromises = requests.map(req => getPatternById(req.establishment_id, req.discount_pattern_id));
            const results = await Promise.allSettled(patternPromises);

            const patterns = results.reduce((acc, result, index) => {
                const patternId = requests[index].discount_pattern_id;
                if (result.status === "fulfilled") {
                    acc[patternId] = result.value;
                } else {
                    console.error(`Failed to fetch pattern ${patternId}:`, result.reason);
                    acc[patternId] = {
                        rule: 'Desconhecido',
                        discount_type: 'Desconhecido',
                        discount_value: 0,
                        discount_percentage: 0
                    }; // Fallback value
                }
                return acc;
            }, {});

            setPatterns(patterns);
        } catch (error) {
            console.error("Failed to fetch patterns:", error);
        }
    };

    const cardsRequestData = async () => {
        try {
            const res = await client.get("/discount-request/establishment/1");
            setRequests(res.data);
            await fetchRequesters(res.data);
            await fetchPatterns(res.data);
        } catch (error) {
            console.error("Failed to fetch requests data:", error);
        }
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
                                margin: 16,
                                padding: 8,
                                borderRadius: 8,
                                width: 350,
                                height: 59,
                            }}
                        />
                        {patterns[req.discount_pattern_id] && (
                            <View style={{ padding: 8 }}>
                                <Text>Tipo de Desconto: {patterns[req.discount_pattern_id].discount_type}</Text>
                                {patterns[req.discount_pattern_id].discount_type === "Valor Fixo" ?                                 
                                    <Text>Valor do Desconto: ${patterns[req.discount_pattern_id].discount_value}</Text>
                                :
                                    <Text>Porcentagem de Desconto: {patterns[req.discount_pattern_id].discount_percentage}%</Text>
                                }
                                
                            </View>
                        )}
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    );
}
