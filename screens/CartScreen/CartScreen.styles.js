import { StyleSheet } from "react-native";
import { themeColors } from "../../theme";

export const styles = StyleSheet.create({
    geralView: {
        backgroundColor: '#FFFFFF'
    },
    viewBackBtn: {
        position: "relative",
        paddingTop: 16,
        paddingBottom: 16,
        elevation: 2,
        shadowColor: 'rgba(0, 0, 0, 0.05)',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 1,
        shadowRadius: 2,
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
        top: 20,
        left: 8
    }
})