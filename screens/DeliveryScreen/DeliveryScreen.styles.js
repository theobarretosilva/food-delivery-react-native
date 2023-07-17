import { StyleSheet } from "react-native";
import { themeColors } from "../../theme";

export const styles = StyleSheet.create({
    geralViewBtm: {
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        marginTop: -48,
        backgroundColor: '#FFFFFF',
        position: "relative"
    },
    innerViewBtm: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 40
    },
    txtEstArr: {
        fontSize: 20,
        lineHeight: 28,
        color: '#374151',
        fontWeight: 600
    },
    txtMinutes: {
        fontSize: 30,
        lineHeight: 36,
        fontWeight: 800,
        color: '#374151'
    },
    txtOrdOwnWay: {
        marginTop: 8,
        color: '#374151',
        fontWeight: 600
    },
    imgBikeGuy2: {
        width: 96,
        height: 96
    },
    viewDeliverGuy: {
        backgroundColor: themeColors.bgColor(0.8),
        padding: 8,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderRadius: 9999,
        marginTop: 20,
        marginBottom: 20,
        marginLeft: 8,
        marginRight: 8,
    },
    innerViewDelGuy: {
        padding: 4,
        borderRadius: 9999,
        backgroundColor: 'rgba(255, 255, 255, 0.4)'
    },
    imgDelGuy: {
        height: 64,
        width: 64,
        borderRadius: 9999
    },
    viewDataRider: {
        flex: 1,
        marginLeft: 12
    },
    txtRiderName: {
        fontSize: 18,
        lineHeight: 28,
        fontWeight: "bold",
        color: '#FFFFFF'
    },
    txtUrRider: {
        fontWeight: 600,
        color: '#FFFFFF'
    },
    geralViewTouchable: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginLeft: 12,
        marginRight: 12,
        gap: 15
    },
    touchsBtns: {
        backgroundColor: '#FFFFFF',
        padding: 8,
        borderRadius: 9999
    }
})