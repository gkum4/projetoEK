import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

var i;
var dimensoes = [];
for(i=0;i<240;i++) {
  dimensoes.push(0);
}
var fotos = [];
for(i=0; i<240; i++) {
  fotos.push({image:require('./images/black.png')});
}
var vez = 0; //0 = kuma; 1 = elisama

const fotosKuma = [
   {image:require('./images/Kuma/Kuma1.png')},
   {image:require('./images/Kuma/Kuma2.png')},
   {image:require('./images/Kuma/Kuma3.png')},
   {image:require('./images/Kuma/Kuma4.png')},
   {image:require('./images/Kuma/Kuma5.png')},
   {image:require('./images/Kuma/Kuma6.png')},
   {image:require('./images/Kuma/Kuma7.png')},
   {image:require('./images/Kuma/Kuma8.png')},
   {image:require('./images/Kuma/Kuma9.png')},
   {image:require('./images/Kuma/Kuma10.png')},
   {image:require('./images/Kuma/Kuma11.png')},
   {image:require('./images/Kuma/Kuma12.png')},
 ];

 const fotosElisama = [
   {image:require('./images/Eli/Eli1.png')},
   {image:require('./images/Eli/Eli2.png')},
   {image:require('./images/Eli/Eli3.png')},
   {image:require('./images/Eli/Eli4.png')},
   {image:require('./images/Eli/Eli5.png')},
   {image:require('./images/Eli/Eli6.png')},
   {image:require('./images/Eli/Eli7.png')},
   {image:require('./images/Eli/Eli8.png')},
   {image:require('./images/Eli/Eli9.png')},
   {image:require('./images/Eli/Eli10.png')},
   {image:require('./images/Eli/Eli11.png')},
   {image:require('./images/Eli/Eli12.png')},
 ];


const Row1to5 = () => {

  const [numero, mudarNumero] = useState(0);

  function press(identificador) {
    dimensoes[identificador] = 100;
    mudarNumero(Math.floor(Math.random() * 12));
    if(vez == 0) {
      fotos[identificador] = fotosKuma[numero];
      vez = 1;
      return;
    }
    if(vez == 1) {
      fotos[identificador] = fotosElisama[numero];
      vez = 0;
      return;
    }
  }

  function zerar() {
   for(i=0;i<240;i++) {
      dimensoes[i] = 0;
   }
   for(i=0; i<240; i++) {
      fotos[i] = {image:require('./images/black.png')};
   }
   mudarNumero(Math.floor(Math.random() * 12));
  }

  

  //function longPress(posi) {}

  return (
      <View style={{flex:1}}>
         <View style={styles.row}>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(0)} >
               <Image
               style={{height:dimensoes[0], width:dimensoes[0]}}
               source = {fotos[0].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(1)} >
               <Image
               style={{height:dimensoes[1], width:dimensoes[1]}}
               source = {fotos[1].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(2)} >
               <Image
               style={{height:dimensoes[2], width:dimensoes[2]}}
               source = {fotos[2].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(3)} >
               <Image
               style={{height:dimensoes[3], width:dimensoes[3]}}
               source = {fotos[3].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(4)} >
               <Image
               style={{height:dimensoes[4], width:dimensoes[4]}}
               source = {fotos[4].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(5)} >
               <Image
               style={{height:dimensoes[5], width:dimensoes[5]}}
               source = {fotos[5].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(6)} >
               <Image
               style={{height:dimensoes[6], width:dimensoes[6]}}
               source = {fotos[6].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(7)} >
               <Image
               style={{height:dimensoes[7], width:dimensoes[7]}}
               source = {fotos[7].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(8)} >
               <Image
               style={{height:dimensoes[8], width:dimensoes[8]}}
               source = {fotos[8].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(9)} >
               <Image
               style={{height:dimensoes[9], width:dimensoes[9]}}
               source = {fotos[9].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(10)} >
               <Image
               style={{height:dimensoes[10], width:dimensoes[10]}}
               source = {fotos[10].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(11)} >
               <Image
               style={{height:dimensoes[11], width:dimensoes[11]}}
               source = {fotos[11].image}
               />
            </TouchableOpacity>
         </View>

         <View style={styles.row}>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(12)} >
               <Image
               style={{height:dimensoes[12], width:dimensoes[12]}}
               source = {fotos[12].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(13)} >
               <Image
               style={{height:dimensoes[13], width:dimensoes[13]}}
               source = {fotos[13].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(14)} >
               <Image
               style={{height:dimensoes[14], width:dimensoes[14]}}
               source = {fotos[14].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(15)} >
               <Image
               style={{height:dimensoes[15], width:dimensoes[15]}}
               source = {fotos[15].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(16)} >
               <Image
               style={{height:dimensoes[16], width:dimensoes[16]}}
               source = {fotos[16].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(17)} >
               <Image
               style={{height:dimensoes[17], width:dimensoes[17]}}
               source = {fotos[17].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(18)} >
               <Image
               style={{height:dimensoes[18], width:dimensoes[18]}}
               source = {fotos[18].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(19)} >
               <Image
               style={{height:dimensoes[19], width:dimensoes[19]}}
               source = {fotos[19].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(20)} >
               <Image
               style={{height:dimensoes[20], width:dimensoes[20]}}
               source = {fotos[20].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(21)} >
               <Image
               style={{height:dimensoes[21], width:dimensoes[21]}}
               source = {fotos[21].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(22)} >
               <Image
               style={{height:dimensoes[22], width:dimensoes[22]}}
               source = {fotos[22].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(23)} >
               <Image
               style={{height:dimensoes[23], width:dimensoes[23]}}
               source = {fotos[23].image}
               />
            </TouchableOpacity>
         </View>

         <View style={styles.row}>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(24)} >
               <Image
               style={{height:dimensoes[24], width:dimensoes[24]}}
               source = {fotos[24].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(25)} >
               <Image
               style={{height:dimensoes[25], width:dimensoes[25]}}
               source = {fotos[25].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(26)} >
               <Image
               style={{height:dimensoes[26], width:dimensoes[26]}}
               source = {fotos[26].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(27)} >
               <Image
               style={{height:dimensoes[27], width:dimensoes[27]}}
               source = {fotos[27].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(28)} >
               <Image
               style={{height:dimensoes[28], width:dimensoes[28]}}
               source = {fotos[28].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(29)} >
               <Image
               style={{height:dimensoes[29], width:dimensoes[29]}}
               source = {fotos[29].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(30)} >
               <Image
               style={{height:dimensoes[30], width:dimensoes[30]}}
               source = {fotos[30].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(31)} >
               <Image
               style={{height:dimensoes[31], width:dimensoes[31]}}
               source = {fotos[31].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(32)} >
               <Image
               style={{height:dimensoes[32], width:dimensoes[32]}}
               source = {fotos[32].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(33)} >
               <Image
               style={{height:dimensoes[33], width:dimensoes[33]}}
               source = {fotos[33].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(34)} >
               <Image
               style={{height:dimensoes[34], width:dimensoes[34]}}
               source = {fotos[34].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(35)} >
               <Image
               style={{height:dimensoes[35], width:dimensoes[35]}}
               source = {fotos[35].image}
               />
            </TouchableOpacity>
         </View>

         <View style={styles.row}>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(36)} >
               <Image
               style={{height:dimensoes[36], width:dimensoes[36]}}
               source = {fotos[36].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(37)} >
               <Image
               style={{height:dimensoes[37], width:dimensoes[37]}}
               source = {fotos[37].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(38)} >
               <Image
               style={{height:dimensoes[38], width:dimensoes[38]}}
               source = {fotos[38].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(39)} >
               <Image
               style={{height:dimensoes[39], width:dimensoes[39]}}
               source = {fotos[39].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(40)} >
               <Image
               style={{height:dimensoes[40], width:dimensoes[40]}}
               source = {fotos[40].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(41)} >
               <Image
               style={{height:dimensoes[41], width:dimensoes[41]}}
               source = {fotos[41].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(42)} >
               <Image
               style={{height:dimensoes[42], width:dimensoes[42]}}
               source = {fotos[42].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(43)} >
               <Image
               style={{height:dimensoes[43], width:dimensoes[43]}}
               source = {fotos[43].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(44)} >
               <Image
               style={{height:dimensoes[44], width:dimensoes[44]}}
               source = {fotos[44].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(45)} >
               <Image
               style={{height:dimensoes[45], width:dimensoes[45]}}
               source = {fotos[45].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(46)} >
               <Image
               style={{height:dimensoes[46], width:dimensoes[46]}}
               source = {fotos[46].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(47)} >
               <Image
               style={{height:dimensoes[47], width:dimensoes[47]}}
               source = {fotos[47].image}
               />
            </TouchableOpacity>
         </View>

         <View style={styles.row}>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(48)} >
               <Image
               style={{height:dimensoes[48], width:dimensoes[48]}}
               source = {fotos[48].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(49)} >
               <Image
               style={{height:dimensoes[49], width:dimensoes[49]}}
               source = {fotos[49].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(50)} >
               <Image
               style={{height:dimensoes[50], width:dimensoes[50]}}
               source = {fotos[50].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(51)} >
               <Image
               style={{height:dimensoes[51], width:dimensoes[51]}}
               source = {fotos[51].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(52)} >
               <Image
               style={{height:dimensoes[52], width:dimensoes[52]}}
               source = {fotos[52].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(53)} >
               <Image
               style={{height:dimensoes[53], width:dimensoes[53]}}
               source = {fotos[53].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(54)} >
               <Image
               style={{height:dimensoes[54], width:dimensoes[54]}}
               source = {fotos[54].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(55)} >
               <Image
               style={{height:dimensoes[55], width:dimensoes[55]}}
               source = {fotos[55].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(56)} >
               <Image
               style={{height:dimensoes[56], width:dimensoes[56]}}
               source = {fotos[56].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(57)} >
               <Image
               style={{height:dimensoes[57], width:dimensoes[57]}}
               source = {fotos[57].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(58)} >
               <Image
               style={{height:dimensoes[58], width:dimensoes[58]}}
               source = {fotos[58].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(59)} >
               <Image
               style={{height:dimensoes[59], width:dimensoes[59]}}
               source = {fotos[59].image}
               />
            </TouchableOpacity>
         </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'column',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
  },
  cell: {
    flex: 1,
    borderWidth: 1,
    alignItems:'center',
    justifyContent:'center',
  },
});

export default Row1to5;