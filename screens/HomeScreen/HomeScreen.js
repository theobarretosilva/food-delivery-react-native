import { TextInput, View, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import * as Icon from 'react-native-feather';
import React, { useEffect, useState } from "react";
import Categories from "../../components/categories/categories";
import { featured } from "../../constants";
import FeaturedRow from "../../components/featuredRow";
import { styles } from './HomeScreen.styles'
import { getFeaturedRestaurants } from "../../api";

export default function HomeScreen() {
    const [featuredRestaurants, setFeaturedRestaurants] = useState([]);

    useEffect(() => {
        getFeaturedRestaurants().then(data => {
            setFeaturedRestaurants(data)
        })
    },[])

    return(
        <SafeAreaView style={styles.geralSafAreVie}>
            <StatusBar barStyle="dark-content" />
            <View style={styles.innerGeralView}>
                <View style={styles.innerView}>
                    <Icon.Search height={25} width={25} stroke="gray" />
                    <TextInput placeholder="Restaurants" style={styles.input} />
                    <View style={styles.viewInput}>
                        <Icon.MapPin height={20} width={20} stroke="gray" style={{ marginLeft: 5 }} />
                        <Text style={styles.txtLocation}>New York, NYC</Text>
                    </View>
                </View>
                <View style={styles.viewSlider}>
                    <Icon.Sliders height="20" width="20" strokeWidth={2.5} stroke="white" />
                </View>
            </View>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 50}}>
                <Categories />
                <View style={styles.viewFeaRow}>
                    {
                        featuredRestaurants.map((item, index) => {
                            return(
                                <FeaturedRow
                                    key={index}
                                    title={item.name}
                                    restaurants={item.restaurants}
                                    description={item.description}
                                />
                            )
                        })
                    }
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
