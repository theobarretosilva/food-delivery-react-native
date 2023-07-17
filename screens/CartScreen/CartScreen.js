import { Image, ScrollView, StatusBar, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./CartScreen.styles";
import { featured } from '../../constants/index'
import * as Icon from 'react-native-feather';
import { useNavigation } from '@react-navigation/native'

export default function CartScreen() {
    const restaurant = featured.restaurants[0];
    const navigation = useNavigation();
    return(
        <View style={styles.geralView}>
            <StatusBar barStyle="dark-content" />
            <View style={styles.viewBackBtn}>
                <TouchableOpacity style={styles.touchable} onPress={() => navigation.goBack()}>
                    <Icon.ArrowLeft strokeWidth={3} stroke={'white'}  />
                </TouchableOpacity>
                <View>
                    <Text style={styles.txtUrCart}>Your cart</Text>
                    <Text style={styles.rstrntName}>{restaurant.name}</Text>
                </View>
            </View>
            <View style={styles.deliveryView}>
                <Image style={styles.imgBike} source={require('../../assets/images/bikeGuy.png')} />
                <Text style={styles.txtDeliver}>Deliver in 20-30 minutes</Text>
                <TouchableOpacity>
                    <Text style={styles.txtChange}>Change</Text>
                </TouchableOpacity>
            </View>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom: 50}} style={styles.scrollDishes}>
                {
                    restaurant.dishes.map((dish, index) => {
                        return(
                            <View style={styles.geralViewDish} key={index}>
                                <Text style={styles.qntdDish}>2 x</Text>
                                <Image style={styles.imgDish} source={dish.image} />
                                <Text style={styles.nameDish}>{dish.name}</Text>
                                <Text style={styles.priceDish}>${dish.price}</Text>
                                <TouchableOpacity style={styles.touchDish}>
                                    <Icon.Minus strokeWidth={2} height={20} width={20} stroke="white" />
                                </TouchableOpacity>
                            </View>
                        )
                    })
                }
            </ScrollView>
            <View style={styles.geralViewTotal}>

            </View>
        </View>
    )
}