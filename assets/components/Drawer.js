import React, { Children, useRef, useState } from "react";
import { styles } from "./Drawer.styles";
import {
  DrawerLayoutAndroid,
  Text,
  TouchableWithoutFeedback,
  View,
  Linking,
  Image,
  BackHandler,
} from "react-native";

import CloseIcon from "./CloseIcon"

export default function Drawer(props) {
  const drawer = useRef(null);

  const closeDrawer = () => {
    drawer.current.closeDrawer()
    console.log("Drawer closed.")
  }

  const navigationView = () => (
    <View style={[styles.container, styles.navigationContainer]}>
        <CloseIcon handlePress={closeDrawer}/>
        <TouchableWithoutFeedback onPress={() => Linking.openURL("https://www.adeusmultas.com")}>
          <View style={styles.buttonView}>
            <Image style={styles.buttonImage} source={require("../images/recorra.png")}/>
            <Text style={styles.link}>Recorrer de uma multa</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => Linking.openURL("https://www.adeusmultas.com/contato")}>
          <View style={styles.buttonView}>
            <Image style={styles.buttonImage} source={require("../images/contact.png")}/>
            <Text style={styles.link}>Contato</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => BackHandler.exitApp()}>
          <View style={styles.buttonView}>
            <Image style={styles.buttonImage} source={require("../images/exit.png")}/>
            <Text style={styles.link}>Sair</Text>
          </View>
        </TouchableWithoutFeedback>
    </View>
  );

  return (
    <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={300}
      drawerPosition="right"
      renderNavigationView={navigationView}
    >
      {props.children}
    </DrawerLayoutAndroid>
  );
}
