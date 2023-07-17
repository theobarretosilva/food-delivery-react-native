import { StyleSheet } from "react-native";
import { themeColors } from "../../theme";

export const styles = StyleSheet.create({
    geralView: {
        backgroundColor: '#FFFFFF',
        borderTopLeftRadius: 14,
        borderTopRightRadius: 14,
        marginTop: 30,
        flex: 1
    },
    viewBackBtn: {
        position: "relative",
        paddingTop: 16,
        paddingBottom: 16,
        elevation: 2,
        shadowColor: 'rgba(0, 0, 0, 0.05)',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 1,
        shadowRadius: 2
    },
    touchable: {
        backgroundColor: themeColors.bgColor(1),
        position: "absolute",
        zIndex: 10,
        borderRadius: 9999,
        padding: 4,
        elevation: 3,
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 1,
        shadowRadius: 3,
        marginTop: 1,
        marginBottom: 2,
        marginLeft: -1,
        marginRight: -1,
        top: 16,
        left: 8
    },
    txtUrCart: {
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 20,
        lineHeight: 28
    },
    rstrntName: {
        textAlign: "center",
        color: '#6B7280'
    },
    deliveryView: {
        display: "flex",
        flexDirection: "row",
        paddingLeft: 16,
        paddingRight: 16,
        alignItems: "center",
        backgroundColor: themeColors.bgColor(0.2)
    },
    imgBike: {
        width: 80,
        height: 80,
        borderRadius: 9999
    },
    txtDeliver: {
        paddingLeft: 16,
        flex: 1
    },
    txtChange: {
        fontWeight: "bold",
        color: themeColors.text
    },
    scrollDishes: {
        backgroundColor: '#FFFFFF',
        paddingTop: 20
    },
    geralViewDish: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginLeft: 12,
        paddingTop: 8,
        paddingBottom: 8,
        paddingLeft: 16,
        paddingRight: 16,
        backgroundColor: '#FFFFFF',
        borderRadius: 24,
        marginLeft: 8,
        marginRight: 8,
        marginBottom: 12,
        elevation: 6,
        gap: 12
    },
    qntdDish: {
        fontWeight: "bold",
        color: themeColors.text
    },
    imgDish: {
        height: 56,
        width: 56,
        borderRadius: 9999
    },
    nameDish: {
        flex: 1,
        fontWeight: "bold",
        color: '#374151'
    },
    priceDish: {
        fontWeight: 600,
        fontSize: 16,
        lineHeight: 24
    },
    touchDish: {
        padding: 4,
        borderRadius: 9999,
        backgroundColor: themeColors.bgColor(1)
    },
    geralViewTotal: {
        padding: 24,
        paddingLeft: 32,
        paddingRight: 32,
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        backgroundColor: themeColors.bgColor(0.2),
        bottom: 0,
        gap: 11
    },
    innerViewsTotal: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    txtsTotals: {
        color: '#374151'
    },
    txtOrderTotal: {
        color: '#374151',
        fontWeight: 800
    },
    touchPlaceOrder: {
        backgroundColor: themeColors.bgColor(1),
        padding: 9,
        borderRadius: 9999
    },
    txtPlaceOrder: {
        color: '#FFFFFF',
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 18,
        lineHeight: 28
    }
})