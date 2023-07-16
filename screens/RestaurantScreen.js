import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNavigation, useRoute } from '@react-navigation/native'
import * as Icon from 'react-native-feather';
import { themeColors } from "../theme";
import DishRow from "../components/dishRow";

export default function RestaurantScreen() {
    const {params} = useRoute();
    const navigation = useNavigation();
    let item = params;
    // console.log('Restaurant: ', item)
    return(
        <View>
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
                                <Image style={styles.imgStar} source={require('../assets/images/fullStar.png')} />
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

const styles = StyleSheet.create({
    geralView: {
        position: "relative"
    },
    itemImage: {
        width: '100%',
        height: 280,
    },
    touchable: {
        position: "absolute",
        top: 30,
        left: 16,
        backgroundColor: '#F9FAFB',
        padding: 8,
        borderRadius: 9999,
        boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
    },
    restaurantDscrpt: {
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        backgroundColor: "#FFFFFF",
        marginTop: -48,
        paddingTop: 30,
    },
    innerDscrpt: {
        paddingLeft: 12,
        paddingRight: 12,
    },
    restaurantName: {
        fontSize: 30,
        lineHeight: 36,
        fontWeight: "bold"
    },
    rstDscrpt: {
        display: "flex",
        flexDirection: "row",
        marginTop: 4,
        marginBottom: 4,
    },
    rstView: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    },
    imgStar: {
        height: 16,
        width: 16,
    },
    txtStar: {
        fontSize: 12,
        lineHeight: 16,
    },
    stars: {
        color: '#15803D'
    },
    reviews: {
        color: '#374151'
    },
    category: {
        fontWeight: '500'
    },
    rstAddress: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginLeft: 4
    },
    mapPin:{
        marginLeft: 4
    },
    nearby: {
        color: "#374151",
        fontSize: 12,
        lineHeight: 16
    },
    itemDscrpt: {
        color: '#6B7280',
        marginTop: 8,
    },
    viewMenu: {
        paddingBottom: 144,
        backgroundColor: '#FFFFFF'
    },
    txtMenu: {
        paddingLeft: 16,
        paddingRight: 16,
        paddingTop: 16,
        paddingBottom: 16,
        fontSize: 24,
        lineHeight: 32,
        fontWeight: "bold"
    }
})