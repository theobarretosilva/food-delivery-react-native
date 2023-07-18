import { StyleSheet } from "react-native";
import { themeColors } from "../../theme";

export const styles = StyleSheet.create({
    geralSafAreVie: {
        backgroundColor: '#FFFFFF'
    },
    innerGeralView: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginLeft: 4,
        marginRight: 3,
        marginTop: 15,
        paddingLeft: 16,
        paddingRight: 16,
        paddingBottom: 8,
        gap: 9
    },
    innerView: {
        display: "flex",
        flexDirection: "row",
        flex: 1,
        alignItems: "center",
        padding: 12,
        borderRadius: 9999,
        borderWidth: 1,
        borderColor: '#D1D5DB',
    },
    input: {
        marginLeft: 8,
        flex: 1
    },
    viewInput: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginLeft: 4,
        borderWidth: 0,
        borderLeftWidth: 2,
        paddingLeft: 8,
        borderLeftColor: '#D1D5DB'
    },
    txtLocation: {
        color: '#4B5563',
        marginLeft: 4
    },
    viewSlider: {
        padding: 12,
        borderRadius: 9999,
        backgroundColor: themeColors.bgColor(1)
    },
    viewFeaRow: {
        marginTop: 20,
        marginBottom: 20

    }
});