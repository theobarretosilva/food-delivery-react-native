import { Text, View, ScrollView, TouchableOpacity, Image } from "react-native";
import { useEffect, useState } from "react";
import { styles } from './categories.styles'
import { getCategories } from "../../api";
import { urlFor } from "../../sanity";

export default function Categories() {
    const [activeCategory, setActiveCategory] = useState(null);
    let [categories, setCategories] = useState([]);

    useEffect(() => {
       getCategories().then(data => {
        setCategories(data)
       }) 
    },[])

    return(
        <View style={styles.mainView}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrollContentContainer} style={styles.scroll}>
                {categories.map((category, index) => {
                    let isActive = category._id==activeCategory;
                    return(
                        <View key={index} style={styles.viewCategory} >
                            <TouchableOpacity style={isActive? (styles.btnOn): (styles.btnOff)} onPress={() => setActiveCategory(category._id)}>
                                <Image style={styles.imgCategory} source={{uri: urlFor(category.image).url()}} />
                            </TouchableOpacity>
                            <Text style={isActive? (styles.textOn) : (styles.textOff)}>{category.name}</Text>
                        </View>
                    )
                })}
            </ScrollView>
        </View>
    )
}
