import { Text, TouchableHighlight, View } from "react-native";

import { styles } from "./StyledButton.styles"
import { colors } from "../../colors"

export default function StyledButton({title, onPress, ...props}) {
  return (
    <TouchableHighlight
      onPress={onPress}
      style={styles.submitButton}
      activeOpacity={0.85}
      underlayColor={colors.secondaryLighter}
    >
      <View style={styles.buttonTextView}>
        <Text style={styles.submitButtonText}>{title}</Text>
      </View>
    </TouchableHighlight>
  );
}
