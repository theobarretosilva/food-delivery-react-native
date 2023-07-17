import { Image, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNavigation, useRoute } from '@react-navigation/native'
import * as Icon from 'react-native-feather';
import { themeColors } from "../../theme";
import DishRow from "../../components/dishRow/dishRow";
import { styles } from './RestaurantScreen.styles'
import CartIcon from "../../components/cartIcon/cartIcon";

export default function RestaurantScreen() {
    const {params} = useRoute();
    const navigation = useNavigation();
    let item = params;
    // console.log('Restaurant: ', item)
    return(
        <View>
            <CartIcon />
            <StatusBar barStyle="light-content" />
            <ScrollView>
                <View style={styles.geralView}>
                    <Image style={styles.itemImage} source={item.image}/>
                    <TouchableOpacity style={styles.touchable} onPress={() => navigation.goBack()}>
                        <Icon.ArrowLeft strokeWidth={3} stroke={themeColors.bgColor(1)} />
                    </TouchableOpacity>
                </View>
                <View style={styles.restaurantDscrpt}>
                    <View style={styles.innerDscrpt}>
                        <Text style={styles.restaurantName}>{item.name}</Text>
                        <View style={styles.rstDscrpt}>
                            <View style={styles.rstView}>
                                <Image style={styles.imgStar} source={require('../../assets/images/fullStar.png')} />
                                <Text style={styles.txtStar}>
                                    <Text style={styles.stars}>{item.stars} </Text>
                                    <Text style={styles.reviews}>
                                        ({item.reviews} reviews) • <Text style={styles.category}>{item.category}</Text>
                                    </Text>
                                </Text>
                            </View>
                            <View style={styles.rstAddress}>
                                <Icon.MapPin color="gray" width="15" height="15" style={styles.mapPin} />
                                <Text style={styles.nearby}> Nearby • {item.address}</Text>
                            </View>
                        </View>
                        <Text style={styles.itemDscrpt}>{item.description}</Text>
                    </View>
                </View>
                <View style={styles.viewMenu}>
                    <Text style={styles.txtMenu}>Menu</Text>
                    {
                        item.dishes.map((dish, index) => <DishRow item={{...dish}} key={index} />)
                    }
                </View>
            </ScrollView>
        </View>
    )
}
