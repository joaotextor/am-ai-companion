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
/*

TODO: BOTÃO 'SOBRE' -> MODAL LOGO DA OPENAI, BLABLABLA.
TODO: ALTERAR PARA TOUCHABLEHIGHLIGHT

*/
import CloseIcon from "./CloseIcon";
import ModalAbout from "./ModalAbout";

export default function Drawer(props) {
  const drawer = useRef(null);

  const [modalAboutVisible, setModalAboutVisible] = useState(false);

  const closeDrawer = () => {
    this.drawer.closeDrawer();
  };

  const navigationView = () => (
    <View style={[styles.container, styles.navigationContainer]}>
      <CloseIcon handlePress={closeDrawer} />
      <TouchableWithoutFeedback
        onPress={() => Linking.openURL("https://www.adeusmultas.com")}
      >
        <View style={styles.buttonView}>
          <Image
            style={styles.buttonImage}
            source={require("../images/recorra.png")}
          />
          <Text style={styles.link}>Recorrer de uma multa</Text>
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback
        onPress={() =>
          Linking.openURL("http://api.whatsapp.com/send?phone=5554984286630")
        }
      >
        <View style={styles.buttonView}>
          <Image
            style={styles.buttonImage}
            source={require("../images/contact.png")}
          />
          <Text style={styles.link}>Chamar no WhatsApp</Text>
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback
        onPress={() =>
          setModalAboutVisible(
            !modalAboutVisible ? !this.modal.visible : this.modal.visible
          )
        }
      >
        <View style={styles.buttonView}>
          <Image
            style={styles.buttonImage}
            source={require("../images/about.png")}
          />
          <Text style={styles.link}>Sobre o Assistente</Text>
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={() => BackHandler.exitApp()}>
        <View style={styles.buttonView}>
          <Image
            style={styles.buttonImage}
            source={require("../images/exit.png")}
          />
          <Text style={styles.link}>Sair</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );

  return (
    <DrawerLayoutAndroid
      ref={(drawer) => (this.drawer = drawer)}
      drawerWidth={300}
      drawerPosition="right"
      renderNavigationView={navigationView}
    >
      <ModalAbout isVisible={modalAboutVisible} />
      {props.children}
    </DrawerLayoutAndroid>
  );
}
