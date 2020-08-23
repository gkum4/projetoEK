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


const Row6to10 = () => {
  const [numero, mudarNumero] = useState(0);
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

  function press(identificador) {
    console.log(fotos[0]);
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

  //function longPress(posi) {}

  return (
      <View style={{flex:1}}>
         <View style={styles.row}>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(60)} >
               <Image
               style={{height:dimensoes[60], width:dimensoes[60]}}
               source = {fotos[60].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(61)} >
               <Image
               style={{height:dimensoes[61], width:dimensoes[61]}}
               source = {fotos[61].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(62)} >
               <Image
               style={{height:dimensoes[62], width:dimensoes[62]}}
               source = {fotos[62].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(63)} >
               <Image
               style={{height:dimensoes[63], width:dimensoes[63]}}
               source = {fotos[63].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(64)} >
               <Image
               style={{height:dimensoes[64], width:dimensoes[64]}}
               source = {fotos[64].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(65)} >
               <Image
               style={{height:dimensoes[65], width:dimensoes[65]}}
               source = {fotos[65].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(66)} >
               <Image
               style={{height:dimensoes[66], width:dimensoes[66]}}
               source = {fotos[66].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(67)} >
               <Image
               style={{height:dimensoes[67], width:dimensoes[67]}}
               source = {fotos[67].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(68)} >
               <Image
               style={{height:dimensoes[68], width:dimensoes[68]}}
               source = {fotos[68].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(69)} >
               <Image
               style={{height:dimensoes[69], width:dimensoes[69]}}
               source = {fotos[69].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(70)} >
               <Image
               style={{height:dimensoes[70], width:dimensoes[70]}}
               source = {fotos[70].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(71)} >
               <Image
               style={{height:dimensoes[71], width:dimensoes[71]}}
               source = {fotos[71].image}
               />
            </TouchableOpacity>
         </View>

         <View style={styles.row}>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(72)} >
               <Image
               style={{height:dimensoes[72], width:dimensoes[72]}}
               source = {fotos[72].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(73)} >
               <Image
               style={{height:dimensoes[73], width:dimensoes[73]}}
               source = {fotos[73].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(74)} >
               <Image
               style={{height:dimensoes[74], width:dimensoes[74]}}
               source = {fotos[74].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(75)} >
               <Image
               style={{height:dimensoes[75], width:dimensoes[75]}}
               source = {fotos[75].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(76)} >
               <Image
               style={{height:dimensoes[76], width:dimensoes[76]}}
               source = {fotos[76].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(77)} >
               <Image
               style={{height:dimensoes[77], width:dimensoes[77]}}
               source = {fotos[77].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(78)} >
               <Image
               style={{height:dimensoes[78], width:dimensoes[78]}}
               source = {fotos[78].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(79)} >
               <Image
               style={{height:dimensoes[79], width:dimensoes[79]}}
               source = {fotos[79].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(80)} >
               <Image
               style={{height:dimensoes[80], width:dimensoes[80]}}
               source = {fotos[80].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(81)} >
               <Image
               style={{height:dimensoes[81], width:dimensoes[81]}}
               source = {fotos[81].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(82)} >
               <Image
               style={{height:dimensoes[82], width:dimensoes[82]}}
               source = {fotos[82].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(83)} >
               <Image
               style={{height:dimensoes[83], width:dimensoes[83]}}
               source = {fotos[83].image}
               />
            </TouchableOpacity>
         </View>

         <View style={styles.row}>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(84)} >
               <Image
               style={{height:dimensoes[84], width:dimensoes[84]}}
               source = {fotos[84].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(85)} >
               <Image
               style={{height:dimensoes[85], width:dimensoes[85]}}
               source = {fotos[85].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(86)} >
               <Image
               style={{height:dimensoes[86], width:dimensoes[86]}}
               source = {fotos[86].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(87)} >
               <Image
               style={{height:dimensoes[87], width:dimensoes[87]}}
               source = {fotos[87].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(88)} >
               <Image
               style={{height:dimensoes[88], width:dimensoes[88]}}
               source = {fotos[88].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(29)} >
               <Image
               style={{height:dimensoes[89], width:dimensoes[89]}}
               source = {fotos[89].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(90)} >
               <Image
               style={{height:dimensoes[90], width:dimensoes[90]}}
               source = {fotos[90].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(91)} >
               <Image
               style={{height:dimensoes[91], width:dimensoes[91]}}
               source = {fotos[91].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(92)} >
               <Image
               style={{height:dimensoes[92], width:dimensoes[92]}}
               source = {fotos[92].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(93)} >
               <Image
               style={{height:dimensoes[93], width:dimensoes[93]}}
               source = {fotos[93].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(94)} >
               <Image
               style={{height:dimensoes[94], width:dimensoes[94]}}
               source = {fotos[94].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(95)} >
               <Image
               style={{height:dimensoes[95], width:dimensoes[95]}}
               source = {fotos[95].image}
               />
            </TouchableOpacity>
         </View>

         <View style={styles.row}>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(36)} >
               <Image
               style={{height:dimensoes[96], width:dimensoes[96]}}
               source = {fotos[96].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(37)} >
               <Image
               style={{height:dimensoes[97], width:dimensoes[97]}}
               source = {fotos[97].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(98)} >
               <Image
               style={{height:dimensoes[98], width:dimensoes[98]}}
               source = {fotos[98].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(39)} >
               <Image
               style={{height:dimensoes[99], width:dimensoes[99]}}
               source = {fotos[99].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(40)} >
               <Image
               style={{height:dimensoes[100], width:dimensoes[100]}}
               source = {fotos[100].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(101)} >
               <Image
               style={{height:dimensoes[101], width:dimensoes[101]}}
               source = {fotos[101].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(102)} >
               <Image
               style={{height:dimensoes[102], width:dimensoes[102]}}
               source = {fotos[102].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(103)} >
               <Image
               style={{height:dimensoes[103], width:dimensoes[103]}}
               source = {fotos[103].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(104)} >
               <Image
               style={{height:dimensoes[104], width:dimensoes[104]}}
               source = {fotos[104].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(105)} >
               <Image
               style={{height:dimensoes[105], width:dimensoes[105]}}
               source = {fotos[105].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(106)} >
               <Image
               style={{height:dimensoes[106], width:dimensoes[106]}}
               source = {fotos[106].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(107)} >
               <Image
               style={{height:dimensoes[107], width:dimensoes[107]}}
               source = {fotos[107].image}
               />
            </TouchableOpacity>
         </View>

         <View style={styles.row}>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(108)} >
               <Image
               style={{height:dimensoes[108], width:dimensoes[108]}}
               source = {fotos[188].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(109)} >
               <Image
               style={{height:dimensoes[109], width:dimensoes[109]}}
               source = {fotos[109].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(110)} >
               <Image
               style={{height:dimensoes[110], width:dimensoes[110]}}
               source = {fotos[110].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(111)} >
               <Image
               style={{height:dimensoes[111], width:dimensoes[111]}}
               source = {fotos[111].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(112)} >
               <Image
               style={{height:dimensoes[112], width:dimensoes[112]}}
               source = {fotos[112].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(113)} >
               <Image
               style={{height:dimensoes[113], width:dimensoes[113]}}
               source = {fotos[113].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(114)} >
               <Image
               style={{height:dimensoes[114], width:dimensoes[114]}}
               source = {fotos[114].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(115)} >
               <Image
               style={{height:dimensoes[115], width:dimensoes[115]}}
               source = {fotos[115].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(116)} >
               <Image
               style={{height:dimensoes[116], width:dimensoes[116]}}
               source = {fotos[116].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(117)} >
               <Image
               style={{height:dimensoes[117], width:dimensoes[117]}}
               source = {fotos[117].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(118)} >
               <Image
               style={{height:dimensoes[118], width:dimensoes[118]}}
               source = {fotos[118].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(119)} >
               <Image
               style={{height:dimensoes[119], width:dimensoes[119]}}
               source = {fotos[119].image}
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

export default Row6to10;