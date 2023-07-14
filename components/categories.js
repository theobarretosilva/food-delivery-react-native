import { Text, View, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { categories } from '../constants/index'

export default function Categories() {
    return(
        <View style={styles.mainView}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrollContentContainer} style={styles.scroll}>
                {categories.map((category, index) => {
                    return(
                        <View key={index} style={styles.viewCategory} >
                            <TouchableOpacity style={styles.touchableOpacity}>
                                <Text>{category.name}</Text>
                            </TouchableOpacity>
                        </View>
                    )
                })}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    mainView: {
        marginTop: 14,
    },
    scroll: {
        overflow: "visible"
    },
    scrollContentContainer: {
        paddingHorizontal: 17
    },
    viewCategory: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginRight: 27
    },
    touchableOpacity: {
        padding: 1,
        borderRadius: 25,
        backgroundColor: '#d6d6d6'
    }
})