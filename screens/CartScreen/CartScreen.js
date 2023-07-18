import { Image, ScrollView, StatusBar, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./CartScreen.styles";
import * as Icon from 'react-native-feather';
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { selectRestaurant } from '../../slices/restaurantSlice'
import { removeFromCart, selectCartItems, selectCartTotal } from '../../slices/cartSlice'
import { useEffect, useState } from "react";
import { urlFor } from "../../sanity";

export default function CartScreen() {
    const restaurant = useSelector(selectRestaurant);
    const navigation = useNavigation();
    const cartItems = useSelector(selectCartItems)
    const cartTotal = useSelector(selectCartTotal)
    const [groupedItems, setGroupedItems] = useState({});
    const deliveryFee = 2;
    const dispatch = useDispatch();

    useEffect(() => {
        const items = cartItems.reduce((group, item) => {
            if(group[item._id]){
                group[item._id].push(item);
            }else{
                group[item._id] = [item]
            }
            return group;
        },{})
        setGroupedItems(items);
    },[cartItems])

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
                    Object.entries(groupedItems).map(([key, items]) => {
                        let dish = items[0];
                        return(
                            <View style={styles.geralViewDish} key={key}>
                                <Text style={styles.qntdDish}>{items.length} x</Text>
                                <Image style={styles.imgDish} source={{uri: urlFor(dish.image).url()}} />
                                <Text style={styles.nameDish}>{dish.name}</Text>
                                <Text style={styles.priceDish}>${dish.price}</Text>
                                <TouchableOpacity style={styles.touchDish} onPress={() => dispatch(removeFromCart({id: dish._id}))} >
                                    <Icon.Minus strokeWidth={2} height={20} width={20} stroke="white" />
                                </TouchableOpacity>
                            </View>
                        )
                    })
                }
            </ScrollView>
            <View style={styles.geralViewTotal}>
                <View style={styles.innerViewsTotal}>
                    <Text style={styles.txtsTotals}>Subtotal</Text>
                    <Text style={styles.txtsTotals}>${cartTotal}</Text>
                </View>
                <View style={styles.innerViewsTotal}>
                    <Text style={styles.txtsTotals}>Delivery Fee</Text>
                    <Text style={styles.txtsTotals}>${deliveryFee}</Text>
                </View>
                <View style={styles.innerViewsTotal}>
                    <Text style={styles.txtOrderTotal}>Order Total</Text>
                    <Text style={styles.txtOrderTotal}>${cartTotal + deliveryFee}</Text>
                </View>
                <View>
                    <TouchableOpacity style={styles.touchPlaceOrder} onPress={() => navigation.navigate('OrderPreparing')}>
                        <Text style={styles.txtPlaceOrder}>Place Order</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}