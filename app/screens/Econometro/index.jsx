import { TouchableOpacity, View } from "react-native";
import { Button } from "react-native-paper";
import { colors } from "../../utils";

export default function Econometro(){
    return(
        <View>
            <TouchableOpacity>
                <Button backgroundColor={colors.primary.dark}>Kelwin</Button>
            </TouchableOpacity>
        </View>
    )
} 