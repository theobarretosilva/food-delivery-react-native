import { StyleSheet } from "react-native";

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
        fontSize: 18,
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
    }
})