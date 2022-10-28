import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import colors from "./src/config/colors";
import HomeScreen from "./src/screens/HomeScreen";

const App = () => {
  return (
    <View style={{ flex: 1, backgroundColor: colors.dark }}>
      <HomeScreen />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
