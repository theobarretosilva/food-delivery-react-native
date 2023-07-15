import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { themeColors } from '../theme'
import RestaurantCard from "./restaurantCard";

export default function FeaturedRow({title, description, restaurants}) {
    return(
        <View>
            <View style={styles.innerView}>
                <View>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.description}>{description}</Text>
                </View>
                <TouchableOpacity>
                    <Text style={styles.seeAll}>See All</Text>
                </TouchableOpacity>
            </View>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{paddingHorizontal: 15}}
                style={styles.scroll}
            >
                {
                    restaurants.map((restaurant, index) => {
                        return(
                            <RestaurantCard item={restaurant} key={index} />
                        )
                    })
                }
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    innerView: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingLeft: 24,
        paddingRight: 24,
        marginTop: 15
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20,
    },
    description: {
        color: '#9E9E9E',
        fontSize: 13.6
    },
    seeAll: {
        fontWeight: '500',
        color: themeColors.text
    },
    scroll: {
        overflow: 'visible',
        paddingTop: 15,
        paddingBottom: 15,
    }
})