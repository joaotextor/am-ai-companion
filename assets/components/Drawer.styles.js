import { StyleSheet } from "react-native";
import { colors } from "../../colors"

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    padding: 16,
  },
  navigationContainer: {
    backgroundColor: colors.secondaryLighter,
  },
  paragraph: {
    padding: 16,
    fontSize: 15,
    textAlign: "left",
  },
  buttonView: {
    display: "flex",
    flexDirection: "row",
    marginTop: 15,
    height: "auto",
    borderBottomWidth: 2,
    alignItems: "center",
    justifyContent: "flex-start",
    borderColor: colors.trueBlack,
  },
  buttonImage: {
    height: 30,
    width: 30,
    marginLeft: 0,
    paddingLeft: 0,
    resizeMode: "contain",
  },
  link: {
    fontSize: 24,
    margin: 5,
  }
});
