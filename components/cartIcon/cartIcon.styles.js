import { StyleSheet } from "react-native";
import { themeColors } from "../../theme";

export const styles = StyleSheet.create({
    geralView: {
        position: "absolute",
        bottom: 20,
        width: '100%',
        zIndex: 50
    },
    geralTouch: {
        backgroundColor: themeColors.bgColor(1),
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginLeft: 20,
        marginRight: 20,
        borderRadius: 9999,
        padding: 16,
        paddingTop: 12,
        paddingBottom: 12,
        boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)'
    },
    viewCart: {
        padding: 8,
        paddingLeft: 16,
        paddingRight: 16,
        borderRadius: 9999,
        backgroundColor: 'rgba(255, 255, 255, 0.3)'
    },
    qntdCart: {
        fontWeight: 800,
        color: '#FFFFFF',
        fontSize: 18,
        lineHeight: 28
    },
    txtViewCart: {
        textAlign: "center",
        fontWeight: 800,
        color: '#FFFFFF',
        fontSize: 18,
        lineHeight: 28
    },
    txtPriceCart: {
        fontWeight: 800,
        color: '#FFFFFF',
        fontSize: 18,
        lineHeight: 28
    }
})