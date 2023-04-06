import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  constructor();
    super()
    this.state = {
      text: '',
      isSearchPressed : false
    }

  return (
    <View style={styles.container}>
      <TextInput
          style={styles.textinput}
          onChangeText={(text) => {
            this.setState({
              text: text,
            });
          }}
          value={this.state.text}
        />
        
        <TouchableOpacity style={styles.goButton}
          onPress={() => {
            this.setState({isSearchPressed : true});
            this.getWord(this.state.text)
          }}/>

      <StatusBar style="auto" />
    getWord =(word)=> {
     var searchword = word.toLowerCase()
      var url = "https://rupinwhitehatjr.github.io/dictionary/"+searchKeyword+".json"
      return fetch(url)
      then((data)) => {
        if(data.status === 200){
          return data.json()
       }
       else{
          return null
       }
      }
  }
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputBoxContainer : {
    flex : 0.3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputBox : {
    width: 100,
    alignSelf: 'center',
    height: 40,
  }
});
