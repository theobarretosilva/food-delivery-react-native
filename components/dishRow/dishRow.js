import { Image, Text, TouchableOpacity, View } from "react-native";
import * as Icon from 'react-native-feather';
import { styles } from './dishRow.styles'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, removeFromCart, selectCartItems, selectCartItemsById } from '../../slices/cartSlice'
import { urlFor } from "../../sanity";

export default function DishRow({item}) {
    const dispatch = useDispatch();
    const totalItems = useSelector(state => selectCartItemsById(state, item._id));

    const handleIncrease = () => {
        dispatch(addToCart({...item}))
    }

    const handleDecrease = () => {
        dispatch(removeFromCart({id: item._id}))
    }
    return(
        <View style={styles.geralView}>
            <Image style={styles.imgItemMenu} source={{uri: urlFor(item.image).url()}} />
            <View style={styles.viewItem}>
                <View style={styles.innerViewItem}>
                    <Text style={styles.itemName}>{item.name}</Text>
                    <Text style={styles.itemDescription}>{item.description}</Text>
                </View>
                <View style={styles.viewPrice}>
                    <Text style={styles.itemPrice}>${item.price}</Text>
                    <View style={styles.viewAdd}>
                        <TouchableOpacity style={styles.touchableAdd} onPress={handleDecrease} disabled={!totalItems.length} >
                            <Icon.Minus strokeWidth={2} height={20} width={20} stroke={'white'} />
                        </TouchableOpacity>
                        <Text style={styles.qntdItem}>
                            {totalItems.length}
                        </Text>
                        <TouchableOpacity style={styles.touchableAdd} onPress={handleIncrease} >
                            <Icon.Plus strokeWidth={2} height={20} width={20} stroke={'white'} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}
