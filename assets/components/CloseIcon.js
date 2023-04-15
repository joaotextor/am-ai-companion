import { Image, TouchableWithoutFeedback, View } from "react-native";

import { styles } from "./CloseIcon.styles";

export default function CloseIcon({handlePress}) {
  return (
    <View style={styles.viewCloseIcon}>
      <TouchableWithoutFeedback onPress={handlePress}>
        <Image
          source={require("../images/close.png")}
          styles={styles.closeIcon}
        />
      </TouchableWithoutFeedback>
    </View>
  );
}
