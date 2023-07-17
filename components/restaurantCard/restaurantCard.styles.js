import { StyleSheet } from "react-native";
import { themeColors } from "../../theme";

export const styles = StyleSheet.create({
    geralView: {
        marginRight: 24,
        backgroundColor: '#FFFFFF',
        borderRadius: 24,
        elevation: 8,
        marginBottom: 15
    },
    img: {
        height: 144,
        width: 256,
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
    },
    innerView: {
        paddingLeft: 12,
        paddingRight: 12,
        paddingBottom: 16,
        marginTop: 8,
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