import { Text, View, StyleSheet, ScrollView, TouchableOpacity, Image } from "react-native";
import { categories } from '../constants/index'
import { useState } from "react";

export default function Categories() {
    const [activeCategory, setActiveCategory] = useState(null);

    return(
        <View style={styles.mainView}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrollContentContainer} style={styles.scroll}>
                {categories.map((category, index) => {
                    let isActive = category.id==activeCategory;
                    return(
                        <View key={index} style={styles.viewCategory} >
                            <TouchableOpacity style={isActive? (styles.btnOn): (styles.btnOff)} onPress={() => setActiveCategory(category.id)}>
                                <Image style={styles.imgCategory} source={category.image} />
                            </TouchableOpacity>
                            <Text style={isActive? (styles.textOn) : (styles.textOff)}>{category.name}</Text>
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
    imgCategory: {
        width: 45,
        height: 45,
    },
    btnOn: {
        backgroundColor: '#757575',
        padding: 1,
        borderRadius: 25,
    },
    btnOff: {
        padding: 1,
        borderRadius: 25,
        backgroundColor: '#d6d6d6'
    },
    textOn: {
        fontWeight: '600',
        color: '#424242',
    },
    textOff: {
        color: '#9E9E9E',
    }
})