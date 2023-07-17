import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import * as Icon from 'react-native-feather';
import { styles } from './dishRow.styles'

export default function DishRow({item}) {
    return(
        <View style={styles.geralView}>
            <Image style={styles.imgItemMenu} source={item.image} />
            <View style={styles.viewItem}>
                <View style={styles.innerViewItem}>
                    <Text style={styles.itemName}>{item.name}</Text>
                    <Text style={styles.itemDescription}>{item.description}</Text>
                </View>
                <View style={styles.viewPrice}>
                    <Text style={styles.itemPrice}>${item.price}</Text>
                    <View style={styles.viewAdd}>
                        <TouchableOpacity style={styles.touchableAdd}>
                            <Icon.Minus strokeWidth={2} height={20} width={20} stroke={'white'} />
                        </TouchableOpacity>
                        <Text style={styles.qntdItem}>
                            {2}
                        </Text>
                        <TouchableOpacity style={styles.touchableAdd}>
                            <Icon.Plus strokeWidth={2} height={20} width={20} stroke={'white'} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}
