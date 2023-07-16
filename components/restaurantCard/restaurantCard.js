import { Image, Text, TouchableWithoutFeedback, View } from "react-native";
import * as Icon from 'react-native-feather';
import { useNavigation } from "@react-navigation/native";
import {styles} from './restaurantCard.styles'

export default function RestaurantCard({item}) {
    const navigation = useNavigation();
    return(
        <TouchableWithoutFeedback onPress={() => navigation.navigate('Restaurant', {...item})}>
            <View style={styles.geralView}>
                <Image style={styles.img} source={item.image} />
                <View style={styles.innerView}>
                    <Text style={styles.rstName}>{item.name}</Text>
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
            </View>
        </TouchableWithoutFeedback>
    )
}
