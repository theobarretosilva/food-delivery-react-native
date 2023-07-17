import { Image, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MapView, { Marker } from 'react-native-maps'
import { themeColors } from "../../theme";
import { styles } from './DeliveryScreen.styles'
import * as Icon from 'react-native-feather';
import { useSelector } from 'react-redux'
import { selectRestaurant } from '../../slices/restaurantSlice'

export default function DeliveryScreen() {
    const restaurant = useSelector(selectRestaurant);
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
                        <Text style={styles.txtEstArr}>Estimated Arrival</Text>
                        <Text style={styles.txtMinutes}>20-30 Minutes</Text>
                        <Text style={styles.txtOrdOwnWay}>Your order is own its way!</Text>
                    </View>
                    <Image style={styles.imgBikeGuy2} source={require('../../assets/images/bikeGuy2.gif')} />
                </View>
                <View style={styles.viewDeliverGuy}>
                    <View style={styles.innerViewDelGuy}>
                        <Image style={styles.imgDelGuy} source={require('../../assets/images/deliveryGuy.png')} />
                    </View>
                    <View style={styles.viewDataRider}>
                        <Text style={styles.txtRiderName}>Syed Noman</Text>
                        <Text style={styles.txtUrRider}>Your Rider</Text>
                    </View>
                    <View style={styles.geralViewTouchable}>
                        <TouchableOpacity style={styles.touchsBtns}>
                            <Icon.Phone fill={themeColors.bgColor(1)} stroke={themeColors.bgColor(1)} strokeWidth={1} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.touchsBtns} onPress={() => navigation.navigate('Home')}>
                            <Icon.X stroke={'red'} strokeWidth={4} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}