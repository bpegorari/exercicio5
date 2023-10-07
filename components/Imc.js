import { Text, View, StyleSheet ,TextInput, Pressable} from 'react-native';
import { useState } from 'react';

export default function Imc() {

let[peso, setPeso] = useState('');
let[altura, setAltura] = useState('');
let[resultado, setResultado] = useState('');

function pegaPeso(p){
  setPeso(p);
}
function pegaAltura(p){
  setAltura(p);
}

function calcular(p,a){
  let r = (p/(a*a)).toFixed(1);
  let f;
  if(r <18.5){
    f = "Abaixo do peso "+r;
  }else if(r <25){
    f = "Normal "+r;
  }else if(r <30){
    f = "Sobrepeso "+r;
  } else if(r<35){
    f="Obesidade grau 1 "+r;
  } else if(r <40){
    f = "Obesidade grau 2 "+r;
  }else{
    f = "Obesidade Mórbida"
  }
  setResultado(f);
}



  return (
    <View style={styles.container}>
      <TextInput  keyboardType='numeric' onChangeText={pegaPeso}
          placeholder="Peso em kg '72.5'" placeholderTextColor="#FFF"
          style={styles.input}/>
      <TextInput keyboardType='numeric' onChangeText={pegaAltura}
          placeholder="Altura em m '1.70'" placeholderTextColor="#FFF"
          style={styles.input}/>
      <Pressable onPress={()=>calcular(peso,altura)} style={{backgroundColor:"white", padding:10, borderRadius:15, margin:20}}>
      <Text>
      Calcular
      </Text>
      </Pressable>
      <Text style={{color:'white'}}>
        {resultado}
      </Text>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
   input:{
      height: 45,
      borderWidth: 1,
      borderColor: '#aaa',
      margin: 10,
      fontSize: 20,
      padding: 10,
      width:180,
      borderRadius:10,
      color:'#fff',
      alignItems:'center',
      justifyContent:'center'
      }
});
