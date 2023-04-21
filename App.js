import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Platform,
} from "react-native";

export default function App() {
  console.log(Platform.OS);
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={require("./assets/img/Objects.webp")}
      >
        <View style={styles.form}>
          <View style={{ marginBottom: 20 }}>
            <Text style={styles.inputTitle}>Email Addres</Text>
            <TextInput style={styles.input} textAlign={"center"} />
          </View>
          <View style={{ marginBottom: 50 }}>
            <Text style={styles.inputTitle}>Password</Text>
            <TextInput
              style={styles.input}
              textAlign={"center"}
              secureTextEntry={true}
            />
          </View>
          <TouchableOpacity activeOpacity={0.8} style={styles.btn}>
            <Text style={styles.btnTitle}>Sign In</Text>
          </TouchableOpacity>
        </View>
        {/* <Text style={styles.text}>Hello, React Native</Text> */}

        <StatusBar style="auto" />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //  backgroundColor: "#fff",
    //  alignItems: "center",
    //  justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    //alignItems: "center",
  },
  form: {
    marginHorizontal: 30,
  },
  inputTitle: {
    color: `#fff8dc`,
    marginBottom: 10,
    fontSize: 18,
    textTransform: "uppercase",
  },
  input: {
    borderWidth: 2,
    borderColor: `#fff8dc`,
    height: 40,
    borderRadius: 5,
    color: `#fff8dc`,
    fontSize: 18,
    fontWeight: "bold",
  },
  btn: {
    backgroundColor: Platform.OS === "ios" ? "transparent" : `#6495ed`,
    height: 40,
    borderWidth: 2,
    borderColor: Platform.OS === "ios" ? "#00008b" : "transparent",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 20,
  },

  btnTitle: {
    color: Platform.OS === "ios" ? "#00008b" : "#fff8dc",
    textTransform: "uppercase",
    fontSize: 18,
  },
});
