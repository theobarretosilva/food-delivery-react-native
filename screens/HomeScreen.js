import { TextInput, View, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import * as Icon from 'react-native-feather';
import React from "react";
import Categories from "../components/categories";

export default function HomeScreen() {
    return(
        <SafeAreaView style={{ backgroundColor: 'white' }}>
            <StatusBar barStyle="dark-content" />
            <View style={{ flexDirection: "row", alignItems: "center", paddingHorizontal: 4, paddingBottom: 2 }}>
                <View style={{ flexDirection: "row", flex: 1, alignItems: "center", padding: 7, borderRadius: 30, borderWidth: 1, borderColor: "gray", marginRight: 8 }}>
                    <Icon.Search height={25} width={25} stroke="gray" />
                    <TextInput placeholder="Restaurants" style={{ marginLeft: 7, flex: 1 }} />
                    <View style={{ flexDirection: "row", alignItems: "center", borderWidth: 0, borderLeftWidth: 2, paddingLeft: 2, borderLeftColor: "gray" }}>
                        <Icon.MapPin height={20} width={20} stroke="gray" style={{ marginLeft: 5 }} />
                        <Text style={{ color: "gray", marginLeft: 3 }}>New York, NYC</Text>
                    </View>
                </View>
                <View style={{ padding: 10, borderRadius: 20, backgroundColor: '#FB923C', marginRight: 4 }}>
                    <Icon.Sliders height="20" width="20" strokeWidth={2.5} stroke="white" />
                </View>
            </View>

            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 20}}>
                <Categories />
            </ScrollView>
        </SafeAreaView>
    )
}
