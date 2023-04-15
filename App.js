import { StatusBar } from "expo-status-bar";
import {
  Image,
  Text,
  TextInput,
  TouchableHighlight,
  Animated,
  View,
} from "react-native";
import React, { useState } from "react";

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
    setLoading("O assistente está pensando. Por favor aguarde...")
    setUserQuestion("")
    setShowLabels(false)
    setActualResponse("")
    getOpenAIResponse(prompt)
    .then(async (response) => {
        const _response = await JSON.parse(response)
        setActualResponse(_response.data)
        setUserPrompt("")
        setUserQuestion(prompt)
        setShowLabels(true)
    })
};

  return (
    <Drawer>
      <View style={styles.container}>
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
          <Text style={{fontSize: 16}}>
            * Seja específico. Quanto mais detalhes você passar, mais chances de
            obter uma resposta correta.
          </Text>
        </View>
        <View style={showLabels === false ? {display: "none"} : styles.lblView}>
          <Text style={styles.labels}>{showLabels === false ? "" : "Sua pergunta: "}<Text style={styles.userQuestion}>{userQuestion}</Text></Text>
        </View>
        <View style={showLabels === false ? {display: "none"} : styles.lblView}>
          <Text style={styles.labels}>{showLabels === false ? "" : "Resposta: "}</Text>
        </View>     
        <TextInput
          selectionColor={colors.secondaryLighter}
          style={styles.response}
          multiline
          onChangeText={(text) => setActualResponse(text)}
          value={actualResponse ? actualResponse : loading}
        />
        <StyledButton title="Obter informação" onPress={() => getResponse(userPrompt)} />
      </View>
    </Drawer>
  );
}
