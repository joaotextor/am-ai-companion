import { StyleSheet } from "react-native";

import { colors } from "./colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: colors.lighter,
    alignItems: "center",
    justifyContent: "center",
  },
  amlogo: {
    marginTop: 30,
    marginBottom: 10,
    width: 140,
    height: 80,
    resizeMode: "contain",
  },
  sandwichButton: {
    position: "absolute",
    top: 0,
    right: 0,
    marginTop: 40,
    marginRight: 10,
  },
  input: {
    height: 40,
    fontSize: 16,
    borderRadius: 10,
    width: "100%",
    margin: 5,
    borderWidth: 2,
    padding: 10,
  },
  response: {
    flex: 1,
    marginTop: 10,
    fontSize: 18,
    width: "100%",
    textAlignVertical: "top",
  },
  lblView: {
    width: "100%",
    alignItems: "flex-start",
  },
  imageView: {
    display: "flex",
    flexDirection: "row",
    gap: 50,
    justifyContent: "space-between",
  },
  labels: {
    marginTop: 10,
    fontWeight: "bold",
    fontSize: 18,
  },
  userQuestion: {
    marginTop: 10,
    fontWeight: "normal",
    fontSize: 18,
  },
  responseView: {
    width: "100%",
    minHeight: "50%",
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    overflow: "scroll",
    borderWidth: 2,
    borderRadius: 50,
    padding: 10,
  },
  actualResponseView: {
    display: "flex",
    width: "100%",
    alignItems: "flex-start",
    height: 500,
    overflow: "scroll",
  },
  loadingLabel: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 5,
  },
  buttonsView: {
    // gap: 5,
    justifyContent: "space-evenly",
    display: "flex",
    flexDirection: "row",
    width: "100%",
  },
  toasty: {
    backgroundColor: colors.secondary,
  },
});
