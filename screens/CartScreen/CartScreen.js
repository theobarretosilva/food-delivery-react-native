import { TouchableOpacity, View } from "react-native";
import { styles } from "./CartScreen.styles";
import { featured } from '../../constants/index'
import * as Icon from 'react-native-feather';

export default function CartScreen() {
    const restaurant = featured.restaurants[0];
    return(
        <View style={styles.geralView}>
            <View style={styles.viewBackBtn}>
                <TouchableOpacity style={styles.touchable} onPress={}>
                    <Icon.ArrowLeft strokeWidth={3} stroke={'white'}  />
                </TouchableOpacity>
            </View>
        </View>
    )
}