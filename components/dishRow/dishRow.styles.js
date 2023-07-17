import { StyleSheet } from "react-native";
import { themeColors } from "../../theme";

export const styles = StyleSheet.create({
    geralView: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#FFFFFF",
        padding: 12,
        borderRadius: 24,
        elevation: 8,
        shadowColor: 'rgba(0, 0, 0, 0.75)',
        shadowOffset: { width: 0, height: 25 },
        shadowOpacity: 1,
        shadowRadius: 50,
        marginBottom: 12,
        marginLeft: 8,
        marginRight: 8
    },
    imgItemMenu: {
        borderRadius: 24,
        height: 100,
        width: 100
    },
    viewItem: {
        display: "flex",
        marginTop: 12,
    },
    innerViewItem: {
        paddingLeft: 12,
    },
    itemName: {
        fontSize: 20,
        lineHeight: 28,
    },
    itemDescription: {
        color: '#374151'
    },
    viewPrice: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 100,
        paddingLeft: 12
    },
    itemPrice: {
        color: '#374151',
        fontSize: 18,
        lineHeight: 28,
        fontWeight: "bold"
    },
    viewAdd: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center"
    },
    touchableAdd: {
        padding: 4,
        borderRadius: 9999,
        backgroundColor: themeColors.bgColor(1)
    },
    qntdItem: {
        paddingLeft: 10,
        paddingRight: 10
    }
})