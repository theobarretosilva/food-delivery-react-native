import { Text, View, StyleSheet, ScrollView, TouchableOpacity, Image } from "react-native";
import { categories } from '../../constants/index'
import { useState } from "react";
import { styles } from './categories.styles'

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
