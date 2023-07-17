import { Text, TouchableOpacity, View } from 'react-native'
import { styles } from './cartIcon.styles'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { selectCartItems, selectCartTotal } from '../../slices/cartSlice'

export default function CartIcon() {
    const navigation = useNavigation();
    const cartItems = useSelector(selectCartItems);
    const cartTotal = useSelector(selectCartTotal)

    if(!cartItems.length) return;
    return(
        <View style={styles.geralView}>
            <TouchableOpacity onPress={() => navigation.navigate('Cart')} style={styles.geralTouch}>
                <View style={styles.viewCart}>
                    <Text style={styles.qntdCart}>{cartItems.length}</Text>
                </View>
                <Text style={styles.txtViewCart}>View Cart</Text>
                <Text style={styles.txtPriceCart}>${cartTotal}</Text>
            </TouchableOpacity>
        </View>
    )
}