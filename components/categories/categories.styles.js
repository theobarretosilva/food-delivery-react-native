import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    mainView: {
        marginTop: 14,
    },
    scroll: {
        overflow: "visible"
    },
    scrollContentContainer: {
        paddingHorizontal: 17
    },
    viewCategory: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginRight: 27
    },
    imgCategory: {
        width: 45,
        height: 45,
    },
    btnOn: {
        backgroundColor: '#757575',
        padding: 1,
        borderRadius: 25,
    },
    btnOff: {
        padding: 1,
        borderRadius: 25,
        backgroundColor: '#d6d6d6'
    },
    textOn: {
        fontWeight: '600',
        color: '#424242',
    },
    textOff: {
        color: '#9E9E9E',
    }
})