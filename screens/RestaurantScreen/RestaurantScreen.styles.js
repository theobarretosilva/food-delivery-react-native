import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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
        paddingTop: 25,
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