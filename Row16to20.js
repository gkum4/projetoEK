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
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(180)} >
               <Image
               style={{height:dimensoes[180], width:dimensoes[180]}}
               source = {fotos[180].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(181)} >
               <Image
               style={{height:dimensoes[181], width:dimensoes[181]}}
               source = {fotos[181].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(182)} >
               <Image
               style={{height:dimensoes[182], width:dimensoes[182]}}
               source = {fotos[182].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(183)} >
               <Image
               style={{height:dimensoes[183], width:dimensoes[183]}}
               source = {fotos[183].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(184)} >
               <Image
               style={{height:dimensoes[184], width:dimensoes[184]}}
               source = {fotos[184].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(185)} >
               <Image
               style={{height:dimensoes[185], width:dimensoes[185]}}
               source = {fotos[185].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(186)} >
               <Image
               style={{height:dimensoes[186], width:dimensoes[186]}}
               source = {fotos[186].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(187)} >
               <Image
               style={{height:dimensoes[187], width:dimensoes[187]}}
               source = {fotos[187].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(188)} >
               <Image
               style={{height:dimensoes[188], width:dimensoes[188]}}
               source = {fotos[188].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(189)} >
               <Image
               style={{height:dimensoes[189], width:dimensoes[189]}}
               source = {fotos[189].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(190)} >
               <Image
               style={{height:dimensoes[190], width:dimensoes[190]}}
               source = {fotos[190].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(191)} >
               <Image
               style={{height:dimensoes[191], width:dimensoes[191]}}
               source = {fotos[191].image}
               />
            </TouchableOpacity>
         </View>

         <View style={styles.row}>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(192)} >
               <Image
               style={{height:dimensoes[192], width:dimensoes[192]}}
               source = {fotos[192].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(193)} >
               <Image
               style={{height:dimensoes[193], width:dimensoes[193]}}
               source = {fotos[193].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(194)} >
               <Image
               style={{height:dimensoes[194], width:dimensoes[194]}}
               source = {fotos[194].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(195)} >
               <Image
               style={{height:dimensoes[195], width:dimensoes[195]}}
               source = {fotos[195].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(196)} >
               <Image
               style={{height:dimensoes[196], width:dimensoes[196]}}
               source = {fotos[196].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(197)} >
               <Image
               style={{height:dimensoes[197], width:dimensoes[197]}}
               source = {fotos[197].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(198)} >
               <Image
               style={{height:dimensoes[198], width:dimensoes[198]}}
               source = {fotos[198].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(199)} >
               <Image
               style={{height:dimensoes[199], width:dimensoes[199]}}
               source = {fotos[199].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(200)} >
               <Image
               style={{height:dimensoes[200], width:dimensoes[200]}}
               source = {fotos[200].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(201)} >
               <Image
               style={{height:dimensoes[201], width:dimensoes[201]}}
               source = {fotos[201].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(202)} >
               <Image
               style={{height:dimensoes[202], width:dimensoes[202]}}
               source = {fotos[202].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(203)} >
               <Image
               style={{height:dimensoes[203], width:dimensoes[203]}}
               source = {fotos[203].image}
               />
            </TouchableOpacity>
         </View>

         <View style={styles.row}>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(204)} >
               <Image
               style={{height:dimensoes[204], width:dimensoes[204]}}
               source = {fotos[204].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(205)} >
               <Image
               style={{height:dimensoes[205], width:dimensoes[205]}}
               source = {fotos[205].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(206)} >
               <Image
               style={{height:dimensoes[206], width:dimensoes[206]}}
               source = {fotos[206].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(207)} >
               <Image
               style={{height:dimensoes[207], width:dimensoes[207]}}
               source = {fotos[207].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(208)} >
               <Image
               style={{height:dimensoes[208], width:dimensoes[208]}}
               source = {fotos[208].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(209)} >
               <Image
               style={{height:dimensoes[209], width:dimensoes[209]}}
               source = {fotos[209].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(210)} >
               <Image
               style={{height:dimensoes[210], width:dimensoes[210]}}
               source = {fotos[210].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(211)} >
               <Image
               style={{height:dimensoes[211], width:dimensoes[211]}}
               source = {fotos[211].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(212)} >
               <Image
               style={{height:dimensoes[212], width:dimensoes[212]}}
               source = {fotos[212].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(213)} >
               <Image
               style={{height:dimensoes[213], width:dimensoes[213]}}
               source = {fotos[213].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(214)} >
               <Image
               style={{height:dimensoes[214], width:dimensoes[214]}}
               source = {fotos[214].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(215)} >
               <Image
               style={{height:dimensoes[215], width:dimensoes[215]}}
               source = {fotos[215].image}
               />
            </TouchableOpacity>
         </View>

         <View style={styles.row}>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(216)} >
               <Image
               style={{height:dimensoes[216], width:dimensoes[216]}}
               source = {fotos[216].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(217)} >
               <Image
               style={{height:dimensoes[217], width:dimensoes[217]}}
               source = {fotos[217].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(218)} >
               <Image
               style={{height:dimensoes[218], width:dimensoes[218]}}
               source = {fotos[218].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(219)} >
               <Image
               style={{height:dimensoes[219], width:dimensoes[219]}}
               source = {fotos[219].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(220)} >
               <Image
               style={{height:dimensoes[220], width:dimensoes[220]}}
               source = {fotos[220].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(221)} >
               <Image
               style={{height:dimensoes[221], width:dimensoes[221]}}
               source = {fotos[221].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(222)} >
               <Image
               style={{height:dimensoes[222], width:dimensoes[222]}}
               source = {fotos[222].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(223)} >
               <Image
               style={{height:dimensoes[223], width:dimensoes[223]}}
               source = {fotos[223].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(224)} >
               <Image
               style={{height:dimensoes[224], width:dimensoes[224]}}
               source = {fotos[224].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(225)} >
               <Image
               style={{height:dimensoes[225], width:dimensoes[225]}}
               source = {fotos[225].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(226)} >
               <Image
               style={{height:dimensoes[226], width:dimensoes[226]}}
               source = {fotos[226].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(227)} >
               <Image
               style={{height:dimensoes[227], width:dimensoes[227]}}
               source = {fotos[227].image}
               />
            </TouchableOpacity>
         </View>

         <View style={styles.row}>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(228)} >
               <Image
               style={{height:dimensoes[228], width:dimensoes[228]}}
               source = {fotos[228].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(229)} >
               <Image
               style={{height:dimensoes[229], width:dimensoes[229]}}
               source = {fotos[229].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(230)} >
               <Image
               style={{height:dimensoes[230], width:dimensoes[230]}}
               source = {fotos[230].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(231)} >
               <Image
               style={{height:dimensoes[231], width:dimensoes[231]}}
               source = {fotos[231].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(232)} >
               <Image
               style={{height:dimensoes[232], width:dimensoes[232]}}
               source = {fotos[232].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(233)} >
               <Image
               style={{height:dimensoes[233], width:dimensoes[233]}}
               source = {fotos[233].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(234)} >
               <Image
               style={{height:dimensoes[234], width:dimensoes[234]}}
               source = {fotos[234].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(235)} >
               <Image
               style={{height:dimensoes[235], width:dimensoes[235]}}
               source = {fotos[235].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(236)} >
               <Image
               style={{height:dimensoes[236], width:dimensoes[236]}}
               source = {fotos[236].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(237)} >
               <Image
               style={{height:dimensoes[237], width:dimensoes[237]}}
               source = {fotos[237].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(238)} >
               <Image
               style={{height:dimensoes[238], width:dimensoes[238]}}
               source = {fotos[238].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(239)} >
               <Image
               style={{height:dimensoes[239], width:dimensoes[239]}}
               source = {fotos[239].image}
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