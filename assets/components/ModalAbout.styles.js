import { StyleSheet } from "react-native";
import { colors } from "../../colors";


export const styles = StyleSheet.create({
        centeredView: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 22,
        },
        modalView: {
          margin: 20,
          backgroundColor: colors.white,
          borderRadius: 20,
          padding: 35,
          alignItems: 'center',
          shadowColor: colors.trueBlack,
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 4,
          elevation: 5,
        },
        button: {
          borderRadius: 20,
          padding: 10,
          elevation: 2,
        },
        buttonClose: {
          backgroundColor: colors.secondary,
        },
        textStyle: {
          color: colors.white,
          fontWeight: 'bold',
          textAlign: 'center',
        },
        modalText: {
            fontSize: 16,
          marginBottom: 15,
          textAlign: 'center',
        },
        h1: {
            fontSize: 20
        },
        bold: {
            fontWeight: "bold",
        },
        textLink: {
            color: colors.secondary,
        },
        openailogo: {
            height: 30,
            width: 150,
            resizeMode: "contain",
            marginBottom: 20,
        }
    })