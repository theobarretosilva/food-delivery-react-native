import { Image, Text, View } from "react-native";
import { featured } from '../../constants'
import { useNavigation } from "@react-navigation/native";
import MapView, { Marker } from 'react-native-maps'
import { themeColors } from "../../theme";
import { styles } from './DeliveryScreen.styles'

export default function DeliveryScreen() {
    const restaurants = featured.restaurants[0];
    const navigation = useNavigation();
    return(
        <View style={{flex: 1}}>
            <MapView 
                initialRegion={{
                    latitude: restaurants.lat,
                    longitude: restaurants.lng,
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.01
                }}
                style={{flex: 1}}
                mapType="standard"
            >
                <Marker 
                    coordinate={{
                        latitude: restaurants.lat,
                        longitude: restaurants.lng,
                    }}
                    title={restaurants.name}
                    description={restaurants.description}
                    pinColor={themeColors.bgColor(1)}
                />
            </MapView>
            <View style={styles.geralViewBtm}>
                <View style={styles.innerViewBtm}>
                    <View>
                        <Text styled={styles.txtEstArr}>Estimated Arrival</Text>
                        <Text styled={styles.txtMinutes}>20-30 Minutes</Text>
                        <Text style={styles.txtOrdOwnWay}>Your order is own its way!</Text>
                    </View>
                    <Image style={styles.imgBikeGuy2} source={require('../../assets/images/bikeGuy2.gif')} />
                </View>
                <View>

                </View>
            </View>
        </View>
    )
}