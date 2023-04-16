import { useEffect, useState } from "react";
import { Image, Linking, Modal, Pressable, Text, View } from "react-native";
import { styles } from "./ModalAbout.styles";

export default function ModalAbout({isVisible}) {
  const [modalVisible, setModalVisible] = useState(false);
  useEffect(() => {
    setModalVisible(isVisible)
  },[isVisible])
  return (
      <Modal
        ref={(modal) => this.modal = modal}
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={[styles.modalText, styles.bold, styles.h1]}>Sobre o assistente</Text>
            <Text style={[styles.modalText]}>Aplicativo desenvolvido por João Textor.</Text>
            <Pressable onPress={() => Linking.openURL("https://github.com/joaotextor")}><Text style={[styles.modalText, styles.textLink]}>Repositório GitHub</Text></Pressable>
            <Pressable onPress={() => Linking.openURL("https://www.adeusmultas.com")}><Text style={[styles.modalText, styles.textLink]}>Adeus Multas</Text></Pressable>
            <Pressable onPress={() => Linking.openURL("mailto:joaotextor@gmail.com?subject=Bug report: Assistente Inteligente&body=Encontrei os seguintes erros/bugs: ")}><Text style={[styles.modalText, styles.textLink]}>Reportar Bug</Text></Pressable>
            <Text style={[styles.modalText]}>Powered By</Text>
            <Pressable onPress={() => Linking.openURL("https://openai.com")}><Image style={styles.openailogo} source={require("../images/OpenAI_Logo.png")}/></Pressable>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.textStyle}>Fechar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
  );
}
