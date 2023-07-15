import { Image, StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import * as Icon from 'react-native-feather';

export default function RestaurantCard({item}) {
    return(
        <TouchableWithoutFeedback>
            <View style={styles.geralView}>
                <Image style={styles.img} source={item.image} />
                <View style={styles.innerView}>
                    <Text style={styles.rstName}>{item.name}</Text>
                    <View style={styles.rstView}>
                        <Image style={styles.imgStar} source={require('../assets/images/fullStar.png')} />
                        <Text style={styles.txtStar}>
                            <Text style={styles.stars}>{item.stars} </Text>
                            <Text style={styles.reviews}>
                                ({item.reviews} reviews) . <Text style={styles.category}>{item.category}</Text>
                            </Text>
                        </Text>
                    </View>
                    <View style={styles.rstAddress}>
                        <Icon.MapPin color="gray" width="15" height="15" />
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    geralView: {
        marginRight: 20,
        backgroundColor: '#FFFFFF',
        borderRadius: 24,
        elevation: 8,
        boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)'
    },
    img: {
        height: 130,
        width: 240,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    innerView: {
        paddingLeft: 5,
        paddingRight: 5,
        paddingBottom: 11,
        marginTop: 1,
    },
    rstName: {
      fontSize: 18,
      lineHeight: 25,
      fontWeight: 'bold',
      paddingTop: 6,
      paddingLeft: 8
    },
    rstView: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginLeft: 4,
    },
    imgStar: {
        height: 16,
        width: 16,
        marginLeft: 4
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
    }
})