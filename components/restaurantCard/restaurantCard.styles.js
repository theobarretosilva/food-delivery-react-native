import { StyleSheet } from "react-native";
import { themeColors } from "../../theme";

export const styles = StyleSheet.create({
    geralView: {
        marginRight: 20,
        backgroundColor: '#FFFFFF',
        borderRadius: 24,
        elevation: 8,
        boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
        shadowColor: themeColors.bgColor(0.2),
        shadowRadius: 7
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
    },
    mapPin:{
        marginLeft: 4
    },
    nearby: {
        color: "#374151",
        fontSize: 12,
        lineHeight: 16
    }
})