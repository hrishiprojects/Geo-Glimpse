import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text,View } from "react-native";

const Page = () => {
  return (
    <View style={styles.container}> 
      <Text>Category</Text>
    </View>
  )
}
export default Page;
const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff',
    alignItems:'center',
    justifyContent:'center'

  },

});