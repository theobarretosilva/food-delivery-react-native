import { Image, View } from "react-native";
import { styles } from "./OrderPreparingScreen.styles";
import { useEffect } from "react";
import { useNavigation } from '@react-navigation/native'

export default function OrderPreparingScreen() {
    const navigation = useNavigation();
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Delivery')
        }, 3000)
    }, [])
    return(
        <View style={styles.geralView}>
            <Image source={require('../../assets/images/delivery.gif')} style={styles.imgCenter} />
        </View>
    )
}