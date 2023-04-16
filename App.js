import { StatusBar } from "expo-status-bar";
import {
  Image,
  Text,
  TextInput,
  TouchableHighlight,
  Animated,
  View,
  TouchableWithoutFeedback,
} from "react-native";

import Toast , {DURATION} from "react-native-easy-toast"

import React, { useRef, useState } from "react";

import * as Clipboard from 'expo-clipboard';

import { styles } from "./App.styles";
import { colors } from "./colors";

import Drawer from "./assets/components/Drawer";
import StyledButton from "./assets/components/StyledButton";
import axios from "axios";

export default function App() {
  const [userPrompt, setUserPrompt] = React.useState("");
  const [userQuestion, setUserQuestion] = React.useState("");
  const [showLabels, setShowLabels] = React.useState(false);
  const [actualResponse, setActualResponse] = React.useState("");
  const [loading, setLoading] = React.useState("");

  async function getOpenAIResponse(prompt) {
    const url =
      "https://46fa45c3yg4ncrn2nqt4qppzxq0fvvxd.lambda-url.sa-east-1.on.aws/";
    const config = {
      headers: {
        "x-api-key": process.env.API_KEY,
        "Content-Type": "application/json",
      },

      body: {
        question: `${prompt}`,
      },
    };
    const user = await axios
      .post(url, config)
      .then((response) => JSON.stringify(response))
      .catch((error) => JSON.stringify(error));

    return user;
  }

  const getResponse = (prompt) => {
    setLoading("O assistente está pensando. Por favor aguarde...");
    setUserQuestion("");
    setShowLabels(false);
    setActualResponse("");
    getOpenAIResponse(prompt).then(async (response) => {
      const _response = await JSON.parse(response);
      setActualResponse(_response.data);
      setUserPrompt("");
      setUserQuestion(prompt);
      setShowLabels(true);
      setLoading("");
    });
  };

  const copyToClipboard = async (text) => {
    await Clipboard.setStringAsync(text);
    this.toast.show("Resposta copiada para a área de transferência", 2000)
  }

  return (
    <Drawer>
      <View style={styles.container}>
      <View style={styles.sandwichButton}>
        <TouchableWithoutFeedback onPress={() => this.drawer.openDrawer()}>
          <Image source={require("./assets/images/menu.png")}></Image>
        </TouchableWithoutFeedback>
      </View>
        <StatusBar style="auto" />
        <Image
          style={styles.amlogo}
          source={require("./assets/images/am_logo.png")}
        />
        <TextInput
          selectionColor={colors.secondaryLighter}
          style={styles.input}
          onChangeText={(text) => setUserPrompt(text)}
          value={userPrompt}
          placeholder="O que você deseja saber?"
        />
        <View style={styles.lblView}>
          <Text style={{ fontSize: 16 }}>
            * Seja específico. Quanto mais detalhes você passar, mais chances de
            obter uma resposta correta.
          </Text>
          <Text style={loading ? styles.loadingLabel : { display: "none" }}>
            {loading}
          </Text>
        </View>
        <View
          style={
            showLabels === false ? { display: "none" } : styles.responseView
          }
        >
          <View
            style={showLabels === false ? { display: "none" } : styles.lblView}
          >
            <Text style={styles.labels}>
              {showLabels === false ? "" : "Sua pergunta: "}
              <Text style={styles.userQuestion}>{userQuestion}</Text>
            </Text>
          </View>
          <View style={styles.actualResponseView}>
            <Text style={styles.labels}>{"Resposta: "}</Text>
            <TextInput
              selectionColor={colors.secondaryLighter}
              style={styles.response}
              multiline
              onChangeText={(text) => setActualResponse(text)}
              value={actualResponse}
            />
          </View>
        </View>
        <View style={styles.buttonsView}>
          <View>
            <StyledButton
              title="Perguntar"
              onPress={() => getResponse(userPrompt)}
            />
          </View>
          {showLabels === true ? (
            <View>
              <StyledButton
                title="Copiar resposta"
                onPress={() => copyToClipboard(actualResponse)}
              />
            </View>
          ) : null}
        </View>
        <Toast ref={(toast) => this.toast = toast} position="top" style={styles.toasty}/>
      </View>
    </Drawer>
  );
}
