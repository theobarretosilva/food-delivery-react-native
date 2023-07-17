import { Text, TouchableOpacity, View } from 'react-native'
import { styles } from './cartIcon.styles'

export default function CartIcon() {
    return(
        <View style={styles.geralView}>
            <TouchableOpacity style={styles.geralTouch}>
                <View style={styles.viewCart}>
                    <Text style={styles.qntdCart}>3</Text>
                </View>
                <Text style={styles.txtViewCart}>View Cart</Text>
                <Text style={styles.txtPriceCart}>${23}</Text>
            </TouchableOpacity>
        </View>
    )
}