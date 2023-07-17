import { Text, TouchableOpacity, View } from 'react-native'
import { styles } from './cartIcon.styles'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { selectCartItems } from '../../slices/cartSlice'

export default function CartIcon() {
    const navigation = useNavigation();
    const cartItems = useSelector(selectCartItems);
    if(!cartItems.length) return;
    return(
        <View style={styles.geralView}>
            <TouchableOpacity onPress={() => navigation.navigate('Cart')} style={styles.geralTouch}>
                <View style={styles.viewCart}>
                    <Text style={styles.qntdCart}>3</Text>
                </View>
                <Text style={styles.txtViewCart}>View Cart</Text>
                <Text style={styles.txtPriceCart}>${23}</Text>
            </TouchableOpacity>
        </View>
    )
}