import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Audio } from 'expo-av';

 
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

const fotosNos = [
  {image:require('./images/Nos/Nos1.png')},
  {image:require('./images/Nos/Nos2.png')},
  {image:require('./images/Nos/Nos3.png')},
  {image:require('./images/Nos/Nos4.png')},
  {image:require('./images/Nos/Nos5.png')},
  {image:require('./images/Nos/Nos6.png')},
  {image:require('./images/Nos/Nos7.png')},
  {image:require('./images/Nos/Nos8.png')},
  {image:require('./images/Nos/Nos9.png')},
  {image:require('./images/Nos/Nos10.png')},
  {image:require('./images/Nos/Nos11.png')},
];

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
   {image:require('./images/Kuma/Kuma13.png')},
   {image:require('./images/Kuma/Kuma14.png')},
   {image:require('./images/Kuma/Kuma15.png')},
   {image:require('./images/Kuma/Kuma16.png')},
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
   {image:require('./images/Eli/Eli13.png')},
   {image:require('./images/Eli/Eli14.png')},
   {image:require('./images/Eli/Eli15.png')},
   {image:require('./images/Eli/Eli16.png')},
 ];


const ButtonsMatrix = () => {

   const soundObject = new Audio.Sound();
   async function playSound() {
      try {
         await soundObject.loadAsync(require('./sounds/pew.mp3'));
         await soundObject.playAsync();
         // Your sound is playing!
      } catch (error) {
         // An error occurred!
      }
   }
   

   const [numeroSingle, mudarNumeroSingle] = useState(0);
   const [numeroCouple, mudarNumeroCouple] = useState(0);

   function press(identificador) {
      playSound();
    mudarNumeroSingle(Math.floor(Math.random() * 16));
    if(vez == 0) {
      fotos[identificador] = fotosKuma[numeroSingle];
      vez = 1;
      dimensoes[identificador] = 100;
      mudarNumeroSingle(Math.floor(Math.random() * 16));
      return;
    }
    if(vez == 1) {
      fotos[identificador] = fotosElisama[numeroSingle];
      vez = 0;
      dimensoes[identificador] = 100;
      mudarNumeroSingle(Math.floor(Math.random() * 16));
      return;
    }
   }

  function longPress(identificador) {
     playSound();
    mudarNumeroCouple(Math.floor(Math.random() * 11));
    fotos[identificador] = fotosNos[numeroCouple];
    dimensoes[identificador] = 100;
    mudarNumeroCouple(Math.floor(Math.random() * 11));
  }

  function aleatorio() {
    var single = [];
    var couple = [];
    var fazer = 0;
    var quem = 0
    var cont;

    for(cont=0;cont<240;cont++) {
      single.push(Math.floor(Math.random() * 16));
    }
    for(cont=0;cont<240;cont++) {
      couple.push(Math.floor(Math.random() * 6));
    }

    for(cont=0;cont<240;cont++) {
      fazer = Math.floor(Math.random() * 4);

      if(fazer == 1) {
        quem = Math.floor(Math.random() * 2);

        if(quem == 0) {
          mudarNumeroCouple(Math.floor(Math.random() * 11));
          fotos[cont] = fotosNos[couple[cont]];
          dimensoes[cont] = 100;
        }

        if(quem == 1) {
          mudarNumeroSingle(Math.floor(Math.random() * 16));
          if(vez == 0) {
            fotos[cont] = fotosKuma[single[cont]];
          }
          if(vez == 1) {
            fotos[cont] = fotosElisama[single[cont]];
          }
          dimensoes[cont] = 100;
          if(vez == 0) {
            vez = 1;
          } else {
            vez = 0;
          }
        }
      }
    }
  }

  function zerar() {
   for(i=0;i<240;i++) {
      dimensoes[i] = 0;
   }
   for(i=0; i<240; i++) {
      fotos[i] = {image:require('./images/black.png')};
   }
   mudarNumeroSingle(Math.floor(Math.random() * 12));
  }

  function teste() {
    console.log('eu');
  }

  /*var lastTap = null;
  function doubleTap(ident) {
    const now = Date.now();
    const DOUBLE_PRESS_DELAY = 300;
    if (lastTap && (now - lastTap) < DOUBLE_PRESS_DELAY) {
      longPress(ident);
    } else {
      lastTap = now;
    }
  }*/

  return (
    <View style={styles.container}>
      <View style={{flex:12}}>
          <View style={styles.row}>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(0)} onLongPress={()=>(longPress.bind(this))(0)}>
               <Image
               style={{height:dimensoes[0], width:dimensoes[0]}}
               source = {fotos[0].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(1)} onLongPress={()=>(longPress.bind(this))(1)}>
               <Image
               style={{height:dimensoes[1], width:dimensoes[1]}}
               source = {fotos[1].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(2)} onLongPress={()=>(longPress.bind(this))(2)}>
               <Image
               style={{height:dimensoes[2], width:dimensoes[2]}}
               source = {fotos[2].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(3)} onLongPress={()=>(longPress.bind(this))(3)}>
               <Image
               style={{height:dimensoes[3], width:dimensoes[3]}}
               source = {fotos[3].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(4)} onLongPress={()=>(longPress.bind(this))(4)}>
               <Image
               style={{height:dimensoes[4], width:dimensoes[4]}}
               source = {fotos[4].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(5)} onLongPress={()=>(longPress.bind(this))(5)}>
               <Image
               style={{height:dimensoes[5], width:dimensoes[5]}}
               source = {fotos[5].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(6)} onLongPress={()=>(longPress.bind(this))(6)}>
               <Image
               style={{height:dimensoes[6], width:dimensoes[6]}}
               source = {fotos[6].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(7)} onLongPress={()=>(longPress.bind(this))(7)}>
               <Image
               style={{height:dimensoes[7], width:dimensoes[7]}}
               source = {fotos[7].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(8)} onLongPress={()=>(longPress.bind(this))(8)}>
               <Image
               style={{height:dimensoes[8], width:dimensoes[8]}}
               source = {fotos[8].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(9)} onLongPress={()=>(longPress.bind(this))(9)}>
               <Image
               style={{height:dimensoes[9], width:dimensoes[9]}}
               source = {fotos[9].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(10)} onLongPress={()=>(longPress.bind(this))(10)}>
               <Image
               style={{height:dimensoes[10], width:dimensoes[10]}}
               source = {fotos[10].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(11)} onLongPress={()=>(longPress.bind(this))(11)}>
               <Image
               style={{height:dimensoes[11], width:dimensoes[11]}}
               source = {fotos[11].image}
               />
            </TouchableOpacity>
          </View>

          <View style={styles.row}>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(12)} onLongPress={()=>(longPress.bind(this))(12)}>
               <Image
               style={{height:dimensoes[12], width:dimensoes[12]}}
               source = {fotos[12].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(13)} onLongPress={()=>(longPress.bind(this))(13)}>
               <Image
               style={{height:dimensoes[13], width:dimensoes[13]}}
               source = {fotos[13].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(14)} onLongPress={()=>(longPress.bind(this))(14)}>
               <Image
               style={{height:dimensoes[14], width:dimensoes[14]}}
               source = {fotos[14].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(15)} onLongPress={()=>(longPress.bind(this))(15)}>
               <Image
               style={{height:dimensoes[15], width:dimensoes[15]}}
               source = {fotos[15].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(16)} onLongPress={()=>(longPress.bind(this))(16)}>
               <Image
               style={{height:dimensoes[16], width:dimensoes[16]}}
               source = {fotos[16].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(17)} onLongPress={()=>(longPress.bind(this))(17)}>
               <Image
               style={{height:dimensoes[17], width:dimensoes[17]}}
               source = {fotos[17].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(18)} onLongPress={()=>(longPress.bind(this))(18)}>
               <Image
               style={{height:dimensoes[18], width:dimensoes[18]}}
               source = {fotos[18].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(19)} onLongPress={()=>(longPress.bind(this))(19)}>
               <Image
               style={{height:dimensoes[19], width:dimensoes[19]}}
               source = {fotos[19].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(20)} onLongPress={()=>(longPress.bind(this))(20)}>
               <Image
               style={{height:dimensoes[20], width:dimensoes[20]}}
               source = {fotos[20].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(21)} onLongPress={()=>(longPress.bind(this))(21)}>
               <Image
               style={{height:dimensoes[21], width:dimensoes[21]}}
               source = {fotos[21].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(22)} onLongPress={()=>(longPress.bind(this))(22)}>
               <Image
               style={{height:dimensoes[22], width:dimensoes[22]}}
               source = {fotos[22].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(23)} onLongPress={()=>(longPress.bind(this))(23)}>
               <Image
               style={{height:dimensoes[23], width:dimensoes[23]}}
               source = {fotos[23].image}
               />
            </TouchableOpacity>
          </View>

          <View style={styles.row}>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(24)} onLongPress={()=>(longPress.bind(this))(24)}>
               <Image
               style={{height:dimensoes[24], width:dimensoes[24]}}
               source = {fotos[24].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(25)} onLongPress={()=>(longPress.bind(this))(25)}>
               <Image
               style={{height:dimensoes[25], width:dimensoes[25]}}
               source = {fotos[25].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(26)} onLongPress={()=>(longPress.bind(this))(26)}>
               <Image
               style={{height:dimensoes[26], width:dimensoes[26]}}
               source = {fotos[26].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(27)} onLongPress={()=>(longPress.bind(this))(27)}>
               <Image
               style={{height:dimensoes[27], width:dimensoes[27]}}
               source = {fotos[27].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(28)} onLongPress={()=>(longPress.bind(this))(28)}>
               <Image
               style={{height:dimensoes[28], width:dimensoes[28]}}
               source = {fotos[28].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(29)} onLongPress={()=>(longPress.bind(this))(29)}>
               <Image
               style={{height:dimensoes[29], width:dimensoes[29]}}
               source = {fotos[29].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(30)} onLongPress={()=>(longPress.bind(this))(30)}>
               <Image
               style={{height:dimensoes[30], width:dimensoes[30]}}
               source = {fotos[30].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(31)} onLongPress={()=>(longPress.bind(this))(31)}>
               <Image
               style={{height:dimensoes[31], width:dimensoes[31]}}
               source = {fotos[31].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(32)} onLongPress={()=>(longPress.bind(this))(32)}>
               <Image
               style={{height:dimensoes[32], width:dimensoes[32]}}
               source = {fotos[32].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(33)} onLongPress={()=>(longPress.bind(this))(33)}>
               <Image
               style={{height:dimensoes[33], width:dimensoes[33]}}
               source = {fotos[33].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(34)} onLongPress={()=>(longPress.bind(this))(34)}>
               <Image
               style={{height:dimensoes[34], width:dimensoes[34]}}
               source = {fotos[34].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(35)} onLongPress={()=>(longPress.bind(this))(35)}>
               <Image
               style={{height:dimensoes[35], width:dimensoes[35]}}
               source = {fotos[35].image}
               />
            </TouchableOpacity>
          </View>

          <View style={styles.row}>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(36)} onLongPress={()=>(longPress.bind(this))(36)}>
               <Image
               style={{height:dimensoes[36], width:dimensoes[36]}}
               source = {fotos[36].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(37)} onLongPress={()=>(longPress.bind(this))(37)}>
               <Image
               style={{height:dimensoes[37], width:dimensoes[37]}}
               source = {fotos[37].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(38)} onLongPress={()=>(longPress.bind(this))(38)}>
               <Image
               style={{height:dimensoes[38], width:dimensoes[38]}}
               source = {fotos[38].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(39)} onLongPress={()=>(longPress.bind(this))(39)}>
               <Image
               style={{height:dimensoes[39], width:dimensoes[39]}}
               source = {fotos[39].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(40)} onLongPress={()=>(longPress.bind(this))(40)}>
               <Image
               style={{height:dimensoes[40], width:dimensoes[40]}}
               source = {fotos[40].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(41)} onLongPress={()=>(longPress.bind(this))(41)}>
               <Image
               style={{height:dimensoes[41], width:dimensoes[41]}}
               source = {fotos[41].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(42)} onLongPress={()=>(longPress.bind(this))(42)}>
               <Image
               style={{height:dimensoes[42], width:dimensoes[42]}}
               source = {fotos[42].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(43)} onLongPress={()=>(longPress.bind(this))(43)}>
               <Image
               style={{height:dimensoes[43], width:dimensoes[43]}}
               source = {fotos[43].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(44)} onLongPress={()=>(longPress.bind(this))(44)}>
               <Image
               style={{height:dimensoes[44], width:dimensoes[44]}}
               source = {fotos[44].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(45)} onLongPress={()=>(longPress.bind(this))(45)}>
               <Image
               style={{height:dimensoes[45], width:dimensoes[45]}}
               source = {fotos[45].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(46)} onLongPress={()=>(longPress.bind(this))(46)}>
               <Image
               style={{height:dimensoes[46], width:dimensoes[46]}}
               source = {fotos[46].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(47)} onLongPress={()=>(longPress.bind(this))(47)}>
               <Image
               style={{height:dimensoes[47], width:dimensoes[47]}}
               source = {fotos[47].image}
               />
            </TouchableOpacity>
          </View>

          <View style={styles.row}>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(48)} onLongPress={()=>(longPress.bind(this))(48)}>
               <Image
               style={{height:dimensoes[48], width:dimensoes[48]}}
               source = {fotos[48].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(49)} onLongPress={()=>(longPress.bind(this))(49)}>
               <Image
               style={{height:dimensoes[49], width:dimensoes[49]}}
               source = {fotos[49].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(50)} onLongPress={()=>(longPress.bind(this))(50)}>
               <Image
               style={{height:dimensoes[50], width:dimensoes[50]}}
               source = {fotos[50].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(51)} onLongPress={()=>(longPress.bind(this))(51)}>
               <Image
               style={{height:dimensoes[51], width:dimensoes[51]}}
               source = {fotos[51].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(52)} onLongPress={()=>(longPress.bind(this))(52)}>
               <Image
               style={{height:dimensoes[52], width:dimensoes[52]}}
               source = {fotos[52].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(53)} onLongPress={()=>(longPress.bind(this))(53)}>
               <Image
               style={{height:dimensoes[53], width:dimensoes[53]}}
               source = {fotos[53].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(54)} onLongPress={()=>(longPress.bind(this))(54)}>
               <Image
               style={{height:dimensoes[54], width:dimensoes[54]}}
               source = {fotos[54].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(55)} onLongPress={()=>(longPress.bind(this))(55)}>
               <Image
               style={{height:dimensoes[55], width:dimensoes[55]}}
               source = {fotos[55].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(56)} onLongPress={()=>(longPress.bind(this))(56)}>
               <Image
               style={{height:dimensoes[56], width:dimensoes[56]}}
               source = {fotos[56].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(57)} onLongPress={()=>(longPress.bind(this))(57)}>
               <Image
               style={{height:dimensoes[57], width:dimensoes[57]}}
               source = {fotos[57].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(58)} onLongPress={()=>(longPress.bind(this))(58)}>
               <Image
               style={{height:dimensoes[58], width:dimensoes[58]}}
               source = {fotos[58].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(59)} onLongPress={()=>(longPress.bind(this))(59)}>
               <Image
               style={{height:dimensoes[59], width:dimensoes[59]}}
               source = {fotos[59].image}
               />
            </TouchableOpacity>
          </View>
          {/*end of row 1 to 5*/}



          <View style={styles.row}>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(60)} onLongPress={()=>(longPress.bind(this))(60)}>
               <Image
               style={{height:dimensoes[60], width:dimensoes[60]}}
               source = {fotos[60].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(61)} onLongPress={()=>(longPress.bind(this))(61)}>
               <Image
               style={{height:dimensoes[61], width:dimensoes[61]}}
               source = {fotos[61].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(62)} onLongPress={()=>(longPress.bind(this))(62)}>
               <Image
               style={{height:dimensoes[62], width:dimensoes[62]}}
               source = {fotos[62].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(63)} onLongPress={()=>(longPress.bind(this))(63)}>
               <Image
               style={{height:dimensoes[63], width:dimensoes[63]}}
               source = {fotos[63].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(64)} onLongPress={()=>(longPress.bind(this))(64)}>
               <Image
               style={{height:dimensoes[64], width:dimensoes[64]}}
               source = {fotos[64].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(65)} onLongPress={()=>(longPress.bind(this))(65)}>
               <Image
               style={{height:dimensoes[65], width:dimensoes[65]}}
               source = {fotos[65].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(66)} onLongPress={()=>(longPress.bind(this))(66)}>
               <Image
               style={{height:dimensoes[66], width:dimensoes[66]}}
               source = {fotos[66].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(67)} onLongPress={()=>(longPress.bind(this))(67)}>
               <Image
               style={{height:dimensoes[67], width:dimensoes[67]}}
               source = {fotos[67].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(68)} onLongPress={()=>(longPress.bind(this))(68)}>
               <Image
               style={{height:dimensoes[68], width:dimensoes[68]}}
               source = {fotos[68].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(69)} onLongPress={()=>(longPress.bind(this))(69)}>
               <Image
               style={{height:dimensoes[69], width:dimensoes[69]}}
               source = {fotos[69].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(70)} onLongPress={()=>(longPress.bind(this))(70)}>
               <Image
               style={{height:dimensoes[70], width:dimensoes[70]}}
               source = {fotos[70].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(71)} onLongPress={()=>(longPress.bind(this))(71)}>
               <Image
               style={{height:dimensoes[71], width:dimensoes[71]}}
               source = {fotos[71].image}
               />
            </TouchableOpacity>
          </View>

          <View style={styles.row}>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(72)} onLongPress={()=>(longPress.bind(this))(72)}>
               <Image
               style={{height:dimensoes[72], width:dimensoes[72]}}
               source = {fotos[72].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(73)} onLongPress={()=>(longPress.bind(this))(73)}>
               <Image
               style={{height:dimensoes[73], width:dimensoes[73]}}
               source = {fotos[73].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(74)} onLongPress={()=>(longPress.bind(this))(74)}>
               <Image
               style={{height:dimensoes[74], width:dimensoes[74]}}
               source = {fotos[74].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(75)} onLongPress={()=>(longPress.bind(this))(75)}>
               <Image
               style={{height:dimensoes[75], width:dimensoes[75]}}
               source = {fotos[75].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(76)} onLongPress={()=>(longPress.bind(this))(76)}>
               <Image
               style={{height:dimensoes[76], width:dimensoes[76]}}
               source = {fotos[76].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(77)} onLongPress={()=>(longPress.bind(this))(77)}>
               <Image
               style={{height:dimensoes[77], width:dimensoes[77]}}
               source = {fotos[77].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(78)} onLongPress={()=>(longPress.bind(this))(78)}>
               <Image
               style={{height:dimensoes[78], width:dimensoes[78]}}
               source = {fotos[78].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(79)} onLongPress={()=>(longPress.bind(this))(79)}>
               <Image
               style={{height:dimensoes[79], width:dimensoes[79]}}
               source = {fotos[79].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(80)} onLongPress={()=>(longPress.bind(this))(80)}>
               <Image
               style={{height:dimensoes[80], width:dimensoes[80]}}
               source = {fotos[80].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(81)} onLongPress={()=>(longPress.bind(this))(81)}>
               <Image
               style={{height:dimensoes[81], width:dimensoes[81]}}
               source = {fotos[81].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(82)} onLongPress={()=>(longPress.bind(this))(82)}>
               <Image
               style={{height:dimensoes[82], width:dimensoes[82]}}
               source = {fotos[82].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(83)} onLongPress={()=>(longPress.bind(this))(83)}>
               <Image
               style={{height:dimensoes[83], width:dimensoes[83]}}
               source = {fotos[83].image}
               />
            </TouchableOpacity>
          </View>

          <View style={styles.row}>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(84)} onLongPress={()=>(longPress.bind(this))(84)}>
               <Image
               style={{height:dimensoes[84], width:dimensoes[84]}}
               source = {fotos[84].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(85)} onLongPress={()=>(longPress.bind(this))(85)}>
               <Image
               style={{height:dimensoes[85], width:dimensoes[85]}}
               source = {fotos[85].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(86)} onLongPress={()=>(longPress.bind(this))(86)}>
               <Image
               style={{height:dimensoes[86], width:dimensoes[86]}}
               source = {fotos[86].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(87)} onLongPress={()=>(longPress.bind(this))(87)}>
               <Image
               style={{height:dimensoes[87], width:dimensoes[87]}}
               source = {fotos[87].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(88)} onLongPress={()=>(longPress.bind(this))(88)}>
               <Image
               style={{height:dimensoes[88], width:dimensoes[88]}}
               source = {fotos[88].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(89)} onLongPress={()=>(longPress.bind(this))(89)}>
               <Image
               style={{height:dimensoes[89], width:dimensoes[89]}}
               source = {fotos[89].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(90)} onLongPress={()=>(longPress.bind(this))(90)}>
               <Image
               style={{height:dimensoes[90], width:dimensoes[90]}}
               source = {fotos[90].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(91)} onLongPress={()=>(longPress.bind(this))(91)}>
               <Image
               style={{height:dimensoes[91], width:dimensoes[91]}}
               source = {fotos[91].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(92)} onLongPress={()=>(longPress.bind(this))(92)}>
               <Image
               style={{height:dimensoes[92], width:dimensoes[92]}}
               source = {fotos[92].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(93)} onLongPress={()=>(longPress.bind(this))(93)}>
               <Image
               style={{height:dimensoes[93], width:dimensoes[93]}}
               source = {fotos[93].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(94)} onLongPress={()=>(longPress.bind(this))(94)}>
               <Image
               style={{height:dimensoes[94], width:dimensoes[94]}}
               source = {fotos[94].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(95)} onLongPress={()=>(longPress.bind(this))(95)}>
               <Image
               style={{height:dimensoes[95], width:dimensoes[95]}}
               source = {fotos[95].image}
               />
            </TouchableOpacity>
          </View>

          <View style={styles.row}>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(96)} onLongPress={()=>(longPress.bind(this))(96)}>
               <Image
               style={{height:dimensoes[96], width:dimensoes[96]}}
               source = {fotos[96].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(97)} onLongPress={()=>(longPress.bind(this))(97)}>
               <Image
               style={{height:dimensoes[97], width:dimensoes[97]}}
               source = {fotos[97].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(98)} onLongPress={()=>(longPress.bind(this))(98)}>
               <Image
               style={{height:dimensoes[98], width:dimensoes[98]}}
               source = {fotos[98].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(99)} onLongPress={()=>(longPress.bind(this))(99)}>
               <Image
               style={{height:dimensoes[99], width:dimensoes[99]}}
               source = {fotos[99].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(100)} onLongPress={()=>(longPress.bind(this))(100)}>
               <Image
               style={{height:dimensoes[100], width:dimensoes[100]}}
               source = {fotos[100].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(101)} onLongPress={()=>(longPress.bind(this))(101)}>
               <Image
               style={{height:dimensoes[101], width:dimensoes[101]}}
               source = {fotos[101].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(102)} onLongPress={()=>(longPress.bind(this))(102)}>
               <Image
               style={{height:dimensoes[102], width:dimensoes[102]}}
               source = {fotos[102].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(103)} onLongPress={()=>(longPress.bind(this))(103)}>
               <Image
               style={{height:dimensoes[103], width:dimensoes[103]}}
               source = {fotos[103].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(104)} onLongPress={()=>(longPress.bind(this))(104)}>
               <Image
               style={{height:dimensoes[104], width:dimensoes[104]}}
               source = {fotos[104].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(105)} onLongPress={()=>(longPress.bind(this))(105)}>
               <Image
               style={{height:dimensoes[45], width:dimensoes[105]}}
               source = {fotos[105].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(106)} onLongPress={()=>(longPress.bind(this))(106)}>
               <Image
               style={{height:dimensoes[106], width:dimensoes[106]}}
               source = {fotos[106].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(107)} onLongPress={()=>(longPress.bind(this))(107)}>
               <Image
               style={{height:dimensoes[107], width:dimensoes[107]}}
               source = {fotos[107].image}
               />
            </TouchableOpacity>
          </View>

          <View style={styles.row}>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(108)} onLongPress={()=>(longPress.bind(this))(108)}>
               <Image
               style={{height:dimensoes[108], width:dimensoes[108]}}
               source = {fotos[108].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(109)} onLongPress={()=>(longPress.bind(this))(109)}>
               <Image
               style={{height:dimensoes[109], width:dimensoes[109]}}
               source = {fotos[109].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(110)} onLongPress={()=>(longPress.bind(this))(110)}>
               <Image
               style={{height:dimensoes[110], width:dimensoes[110]}}
               source = {fotos[110].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(111)} onLongPress={()=>(longPress.bind(this))(111)}>
               <Image
               style={{height:dimensoes[111], width:dimensoes[111]}}
               source = {fotos[111].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(112)} onLongPress={()=>(longPress.bind(this))(112)}>
               <Image
               style={{height:dimensoes[112], width:dimensoes[112]}}
               source = {fotos[112].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(113)} onLongPress={()=>(longPress.bind(this))(113)}>
               <Image
               style={{height:dimensoes[113], width:dimensoes[113]}}
               source = {fotos[113].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(114)} onLongPress={()=>(longPress.bind(this))(114)}>
               <Image
               style={{height:dimensoes[114], width:dimensoes[114]}}
               source = {fotos[114].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(115)} onLongPress={()=>(longPress.bind(this))(115)}>
               <Image
               style={{height:dimensoes[115], width:dimensoes[115]}}
               source = {fotos[115].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(116)} onLongPress={()=>(longPress.bind(this))(116)}>
               <Image
               style={{height:dimensoes[116], width:dimensoes[116]}}
               source = {fotos[116].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(117)} onLongPress={()=>(longPress.bind(this))(117)}>
               <Image
               style={{height:dimensoes[117], width:dimensoes[117]}}
               source = {fotos[117].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(118)} onLongPress={()=>(longPress.bind(this))(118)}>
               <Image
               style={{height:dimensoes[118], width:dimensoes[118]}}
               source = {fotos[118].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(119)} onLongPress={()=>(longPress.bind(this))(119)}>
               <Image
               style={{height:dimensoes[119], width:dimensoes[119]}}
               source = {fotos[119].image}
               />
            </TouchableOpacity>
          </View>
          {/*end of row 6 to 10*/}


          <View style={styles.row}>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(120)} onLongPress={()=>(longPress.bind(this))(120)}>
               <Image
               style={{height:dimensoes[120], width:dimensoes[120]}}
               source = {fotos[120].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(121)} onLongPress={()=>(longPress.bind(this))(121)}>
               <Image
               style={{height:dimensoes[121], width:dimensoes[121]}}
               source = {fotos[121].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(122)} onLongPress={()=>(longPress.bind(this))(122)}>
               <Image
               style={{height:dimensoes[122], width:dimensoes[122]}}
               source = {fotos[122].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(123)} onLongPress={()=>(longPress.bind(this))(123)}>
               <Image
               style={{height:dimensoes[123], width:dimensoes[123]}}
               source = {fotos[123].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(124)} onLongPress={()=>(longPress.bind(this))(124)}>
               <Image
               style={{height:dimensoes[124], width:dimensoes[124]}}
               source = {fotos[124].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(125)} onLongPress={()=>(longPress.bind(this))(125)}>
               <Image
               style={{height:dimensoes[125], width:dimensoes[125]}}
               source = {fotos[125].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(126)} onLongPress={()=>(longPress.bind(this))(126)}>
               <Image
               style={{height:dimensoes[126], width:dimensoes[126]}}
               source = {fotos[126].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(127)} onLongPress={()=>(longPress.bind(this))(127)}>
               <Image
               style={{height:dimensoes[127], width:dimensoes[127]}}
               source = {fotos[127].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(128)} onLongPress={()=>(longPress.bind(this))(128)}>
               <Image
               style={{height:dimensoes[128], width:dimensoes[128]}}
               source = {fotos[128].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(129)} onLongPress={()=>(longPress.bind(this))(129)}>
               <Image
               style={{height:dimensoes[129], width:dimensoes[129]}}
               source = {fotos[129].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(130)} onLongPress={()=>(longPress.bind(this))(130)}>
               <Image
               style={{height:dimensoes[130], width:dimensoes[130]}}
               source = {fotos[130].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(131)} onLongPress={()=>(longPress.bind(this))(131)}>
               <Image
               style={{height:dimensoes[131], width:dimensoes[131]}}
               source = {fotos[131].image}
               />
            </TouchableOpacity>
          </View>

          <View style={styles.row}>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(132)} onLongPress={()=>(longPress.bind(this))(132)}>
               <Image
               style={{height:dimensoes[132], width:dimensoes[132]}}
               source = {fotos[132].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(133)} onLongPress={()=>(longPress.bind(this))(133)}>
               <Image
               style={{height:dimensoes[133], width:dimensoes[133]}}
               source = {fotos[133].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(134)} onLongPress={()=>(longPress.bind(this))(134)}>
               <Image
               style={{height:dimensoes[134], width:dimensoes[134]}}
               source = {fotos[134].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(135)} onLongPress={()=>(longPress.bind(this))(135)}>
               <Image
               style={{height:dimensoes[135], width:dimensoes[135]}}
               source = {fotos[135].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(136)} onLongPress={()=>(longPress.bind(this))(136)}>
               <Image
               style={{height:dimensoes[136], width:dimensoes[136]}}
               source = {fotos[136].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(137)} onLongPress={()=>(longPress.bind(this))(137)}>
               <Image
               style={{height:dimensoes[137], width:dimensoes[137]}}
               source = {fotos[137].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(138)} onLongPress={()=>(longPress.bind(this))(138)}>
               <Image
               style={{height:dimensoes[138], width:dimensoes[138]}}
               source = {fotos[138].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(139)} onLongPress={()=>(longPress.bind(this))(139)}>
               <Image
               style={{height:dimensoes[139], width:dimensoes[139]}}
               source = {fotos[139].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(140)} onLongPress={()=>(longPress.bind(this))(140)}>
               <Image
               style={{height:dimensoes[140], width:dimensoes[140]}}
               source = {fotos[140].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(141)} onLongPress={()=>(longPress.bind(this))(141)}>
               <Image
               style={{height:dimensoes[141], width:dimensoes[141]}}
               source = {fotos[141].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(142)} onLongPress={()=>(longPress.bind(this))(142)}>
               <Image
               style={{height:dimensoes[142], width:dimensoes[142]}}
               source = {fotos[142].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(143)} onLongPress={()=>(longPress.bind(this))(143)}>
               <Image
               style={{height:dimensoes[143], width:dimensoes[143]}}
               source = {fotos[143].image}
               />
            </TouchableOpacity>
          </View>

          <View style={styles.row}>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(144)} onLongPress={()=>(longPress.bind(this))(144)}>
               <Image
               style={{height:dimensoes[144], width:dimensoes[144]}}
               source = {fotos[144].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(145)} onLongPress={()=>(longPress.bind(this))(145)}>
               <Image
               style={{height:dimensoes[145], width:dimensoes[145]}}
               source = {fotos[145].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(146)} onLongPress={()=>(longPress.bind(this))(146)}>
               <Image
               style={{height:dimensoes[146], width:dimensoes[146]}}
               source = {fotos[146].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(147)} onLongPress={()=>(longPress.bind(this))(147)}>
               <Image
               style={{height:dimensoes[147], width:dimensoes[147]}}
               source = {fotos[147].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(148)} onLongPress={()=>(longPress.bind(this))(148)}>
               <Image
               style={{height:dimensoes[148], width:dimensoes[148]}}
               source = {fotos[148].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(149)} onLongPress={()=>(longPress.bind(this))(149)}>
               <Image
               style={{height:dimensoes[149], width:dimensoes[149]}}
               source = {fotos[149].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(150)} onLongPress={()=>(longPress.bind(this))(150)}>
               <Image
               style={{height:dimensoes[150], width:dimensoes[150]}}
               source = {fotos[150].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(151)} onLongPress={()=>(longPress.bind(this))(151)}>
               <Image
               style={{height:dimensoes[151], width:dimensoes[151]}}
               source = {fotos[151].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(152)} onLongPress={()=>(longPress.bind(this))(152)}>
               <Image
               style={{height:dimensoes[152], width:dimensoes[152]}}
               source = {fotos[152].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(153)} onLongPress={()=>(longPress.bind(this))(153)}>
               <Image
               style={{height:dimensoes[153], width:dimensoes[153]}}
               source = {fotos[153].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(154)} onLongPress={()=>(longPress.bind(this))(154)}>
               <Image
               style={{height:dimensoes[154], width:dimensoes[154]}}
               source = {fotos[154].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(155)} onLongPress={()=>(longPress.bind(this))(155)}>
               <Image
               style={{height:dimensoes[155], width:dimensoes[155]}}
               source = {fotos[155].image}
               />
            </TouchableOpacity>
          </View>

          <View style={styles.row}>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(156)} onLongPress={()=>(longPress.bind(this))(156)}>
               <Image
               style={{height:dimensoes[156], width:dimensoes[156]}}
               source = {fotos[156].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(157)} onLongPress={()=>(longPress.bind(this))(157)}>
               <Image
               style={{height:dimensoes[157], width:dimensoes[157]}}
               source = {fotos[157].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(158)} onLongPress={()=>(longPress.bind(this))(158)}>
               <Image
               style={{height:dimensoes[158], width:dimensoes[158]}}
               source = {fotos[158].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(159)} onLongPress={()=>(longPress.bind(this))(159)}>
               <Image
               style={{height:dimensoes[159], width:dimensoes[159]}}
               source = {fotos[159].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(160)} onLongPress={()=>(longPress.bind(this))(160)}>
               <Image
               style={{height:dimensoes[160], width:dimensoes[160]}}
               source = {fotos[160].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(161)} onLongPress={()=>(longPress.bind(this))(161)}>
               <Image
               style={{height:dimensoes[161], width:dimensoes[161]}}
               source = {fotos[161].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(162)} onLongPress={()=>(longPress.bind(this))(162)}>
               <Image
               style={{height:dimensoes[162], width:dimensoes[162]}}
               source = {fotos[162].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(163)} onLongPress={()=>(longPress.bind(this))(163)}>
               <Image
               style={{height:dimensoes[163], width:dimensoes[163]}}
               source = {fotos[163].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(164)} onLongPress={()=>(longPress.bind(this))(164)}>
               <Image
               style={{height:dimensoes[164], width:dimensoes[164]}}
               source = {fotos[164].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(165)} onLongPress={()=>(longPress.bind(this))(165)}>
               <Image
               style={{height:dimensoes[165], width:dimensoes[165]}}
               source = {fotos[165].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(166)} onLongPress={()=>(longPress.bind(this))(166)}>
               <Image
               style={{height:dimensoes[166], width:dimensoes[166]}}
               source = {fotos[166].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(167)} onLongPress={()=>(longPress.bind(this))(167)}>
               <Image
               style={{height:dimensoes[167], width:dimensoes[167]}}
               source = {fotos[167].image}
               />
            </TouchableOpacity>
          </View>

          <View style={styles.row}>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(168)} onLongPress={()=>(longPress.bind(this))(168)}>
               <Image
               style={{height:dimensoes[168], width:dimensoes[168]}}
               source = {fotos[168].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(169)} onLongPress={()=>(longPress.bind(this))(169)}>
               <Image
               style={{height:dimensoes[169], width:dimensoes[169]}}
               source = {fotos[169].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(170)} onLongPress={()=>(longPress.bind(this))(170)}>
               <Image
               style={{height:dimensoes[170], width:dimensoes[170]}}
               source = {fotos[170].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(171)} onLongPress={()=>(longPress.bind(this))(171)}>
               <Image
               style={{height:dimensoes[171], width:dimensoes[171]}}
               source = {fotos[171].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(172)} onLongPress={()=>(longPress.bind(this))(172)}>
               <Image
               style={{height:dimensoes[172], width:dimensoes[172]}}
               source = {fotos[172].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(173)} onLongPress={()=>(longPress.bind(this))(173)}>
               <Image
               style={{height:dimensoes[173], width:dimensoes[173]}}
               source = {fotos[173].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(174)} onLongPress={()=>(longPress.bind(this))(174)}>
               <Image
               style={{height:dimensoes[174], width:dimensoes[174]}}
               source = {fotos[174].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(175)} onLongPress={()=>(longPress.bind(this))(175)}>
               <Image
               style={{height:dimensoes[175], width:dimensoes[175]}}
               source = {fotos[175].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(176)} onLongPress={()=>(longPress.bind(this))(176)}>
               <Image
               style={{height:dimensoes[176], width:dimensoes[176]}}
               source = {fotos[176].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(177)} onLongPress={()=>(longPress.bind(this))(177)}>
               <Image
               style={{height:dimensoes[177], width:dimensoes[177]}}
               source = {fotos[177].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(178)} onLongPress={()=>(longPress.bind(this))(178)}>
               <Image
               style={{height:dimensoes[178], width:dimensoes[178]}}
               source = {fotos[178].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(179)} onLongPress={()=>(longPress.bind(this))(179)}>
               <Image
               style={{height:dimensoes[179], width:dimensoes[179]}}
               source = {fotos[179].image}
               />
            </TouchableOpacity>
          </View>
          {/*end of row 11 to 15*/}
          
          <View style={styles.row}>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(180)} onLongPress={()=>(longPress.bind(this))(180)}>
               <Image
               style={{height:dimensoes[180], width:dimensoes[180]}}
               source = {fotos[180].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(181)} onLongPress={()=>(longPress.bind(this))(181)}>
               <Image
               style={{height:dimensoes[181], width:dimensoes[181]}}
               source = {fotos[181].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(182)} onLongPress={()=>(longPress.bind(this))(182)}>
               <Image
               style={{height:dimensoes[182], width:dimensoes[182]}}
               source = {fotos[182].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(183)} onLongPress={()=>(longPress.bind(this))(183)}>
               <Image
               style={{height:dimensoes[183], width:dimensoes[183]}}
               source = {fotos[183].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(184)} onLongPress={()=>(longPress.bind(this))(184)}>
               <Image
               style={{height:dimensoes[184], width:dimensoes[184]}}
               source = {fotos[184].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(185)} onLongPress={()=>(longPress.bind(this))(185)}>
               <Image
               style={{height:dimensoes[185], width:dimensoes[185]}}
               source = {fotos[185].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(186)} onLongPress={()=>(longPress.bind(this))(186)}>
               <Image
               style={{height:dimensoes[186], width:dimensoes[186]}}
               source = {fotos[186].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(187)} onLongPress={()=>(longPress.bind(this))(187)}>
               <Image
               style={{height:dimensoes[187], width:dimensoes[187]}}
               source = {fotos[187].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(188)} onLongPress={()=>(longPress.bind(this))(188)}>
               <Image
               style={{height:dimensoes[188], width:dimensoes[188]}}
               source = {fotos[188].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(189)} onLongPress={()=>(longPress.bind(this))(189)}>
               <Image
               style={{height:dimensoes[189], width:dimensoes[189]}}
               source = {fotos[189].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(190)} onLongPress={()=>(longPress.bind(this))(190)}>
               <Image
               style={{height:dimensoes[190], width:dimensoes[190]}}
               source = {fotos[190].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(191)} onLongPress={()=>(longPress.bind(this))(191)}>
               <Image
               style={{height:dimensoes[191], width:dimensoes[191]}}
               source = {fotos[191].image}
               />
            </TouchableOpacity>
          </View>

          <View style={styles.row}>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(192)} onLongPress={()=>(longPress.bind(this))(192)}>
               <Image
               style={{height:dimensoes[192], width:dimensoes[192]}}
               source = {fotos[192].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(193)} onLongPress={()=>(longPress.bind(this))(193)}>
               <Image
               style={{height:dimensoes[193], width:dimensoes[193]}}
               source = {fotos[193].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(194)} onLongPress={()=>(longPress.bind(this))(194)}>
               <Image
               style={{height:dimensoes[194], width:dimensoes[194]}}
               source = {fotos[194].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(195)} onLongPress={()=>(longPress.bind(this))(195)}>
               <Image
               style={{height:dimensoes[195], width:dimensoes[195]}}
               source = {fotos[195].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(196)} onLongPress={()=>(longPress.bind(this))(196)}>
               <Image
               style={{height:dimensoes[196], width:dimensoes[196]}}
               source = {fotos[196].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(197)} onLongPress={()=>(longPress.bind(this))(197)}>
               <Image
               style={{height:dimensoes[197], width:dimensoes[197]}}
               source = {fotos[197].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(198)} onLongPress={()=>(longPress.bind(this))(198)}>
               <Image
               style={{height:dimensoes[198], width:dimensoes[198]}}
               source = {fotos[198].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(199)} onLongPress={()=>(longPress.bind(this))(199)}>
               <Image
               style={{height:dimensoes[199], width:dimensoes[199]}}
               source = {fotos[199].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(200)} onLongPress={()=>(longPress.bind(this))(200)}>
               <Image
               style={{height:dimensoes[200], width:dimensoes[200]}}
               source = {fotos[200].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(201)} onLongPress={()=>(longPress.bind(this))(201)}>
               <Image
               style={{height:dimensoes[201], width:dimensoes[201]}}
               source = {fotos[201].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(202)} onLongPress={()=>(longPress.bind(this))(202)}>
               <Image
               style={{height:dimensoes[202], width:dimensoes[202]}}
               source = {fotos[202].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(203)} onLongPress={()=>(longPress.bind(this))(203)}>
               <Image
               style={{height:dimensoes[203], width:dimensoes[203]}}
               source = {fotos[203].image}
               />
            </TouchableOpacity>
          </View>

          <View style={styles.row}>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(204)} onLongPress={()=>(longPress.bind(this))(204)}>
               <Image
               style={{height:dimensoes[204], width:dimensoes[204]}}
               source = {fotos[204].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(205)} onLongPress={()=>(longPress.bind(this))(205)}>
               <Image
               style={{height:dimensoes[205], width:dimensoes[205]}}
               source = {fotos[205].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(206)} onLongPress={()=>(longPress.bind(this))(206)}>
               <Image
               style={{height:dimensoes[206], width:dimensoes[206]}}
               source = {fotos[206].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(207)} onLongPress={()=>(longPress.bind(this))(207)}>
               <Image
               style={{height:dimensoes[207], width:dimensoes[207]}}
               source = {fotos[207].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(208)} onLongPress={()=>(longPress.bind(this))(208)}>
               <Image
               style={{height:dimensoes[208], width:dimensoes[208]}}
               source = {fotos[208].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(209)} onLongPress={()=>(longPress.bind(this))(209)}>
               <Image
               style={{height:dimensoes[209], width:dimensoes[209]}}
               source = {fotos[209].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(210)} onLongPress={()=>(longPress.bind(this))(210)}>
               <Image
               style={{height:dimensoes[210], width:dimensoes[210]}}
               source = {fotos[210].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(211)} onLongPress={()=>(longPress.bind(this))(211)}>
               <Image
               style={{height:dimensoes[211], width:dimensoes[211]}}
               source = {fotos[211].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(212)} onLongPress={()=>(longPress.bind(this))(212)}>
               <Image
               style={{height:dimensoes[212], width:dimensoes[212]}}
               source = {fotos[212].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(213)} onLongPress={()=>(longPress.bind(this))(213)}>
               <Image
               style={{height:dimensoes[213], width:dimensoes[213]}}
               source = {fotos[213].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(214)} onLongPress={()=>(longPress.bind(this))(214)}>
               <Image
               style={{height:dimensoes[214], width:dimensoes[214]}}
               source = {fotos[214].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(215)} onLongPress={()=>(longPress.bind(this))(215)}>
               <Image
               style={{height:dimensoes[215], width:dimensoes[215]}}
               source = {fotos[215].image}
               />
            </TouchableOpacity>
          </View>

          <View style={styles.row}>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(216)} onLongPress={()=>(longPress.bind(this))(216)}>
               <Image
               style={{height:dimensoes[216], width:dimensoes[216]}}
               source = {fotos[216].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(217)} onLongPress={()=>(longPress.bind(this))(217)}>
               <Image
               style={{height:dimensoes[217], width:dimensoes[217]}}
               source = {fotos[217].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(218)} onLongPress={()=>(longPress.bind(this))(218)}>
               <Image
               style={{height:dimensoes[218], width:dimensoes[218]}}
               source = {fotos[218].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(219)} onLongPress={()=>(longPress.bind(this))(219)}>
               <Image
               style={{height:dimensoes[219], width:dimensoes[219]}}
               source = {fotos[219].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(220)} onLongPress={()=>(longPress.bind(this))(220)}>
               <Image
               style={{height:dimensoes[220], width:dimensoes[220]}}
               source = {fotos[220].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(221)} onLongPress={()=>(longPress.bind(this))(221)}>
               <Image
               style={{height:dimensoes[221], width:dimensoes[221]}}
               source = {fotos[221].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(222)} onLongPress={()=>(longPress.bind(this))(222)}>
               <Image
               style={{height:dimensoes[222], width:dimensoes[222]}}
               source = {fotos[222].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(223)} onLongPress={()=>(longPress.bind(this))(223)}>
               <Image
               style={{height:dimensoes[223], width:dimensoes[223]}}
               source = {fotos[223].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(224)} onLongPress={()=>(longPress.bind(this))(224)}>
               <Image
               style={{height:dimensoes[224], width:dimensoes[224]}}
               source = {fotos[224].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(225)} onLongPress={()=>(longPress.bind(this))(225)}>
               <Image
               style={{height:dimensoes[225], width:dimensoes[225]}}
               source = {fotos[225].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(226)} onLongPress={()=>(longPress.bind(this))(226)}>
               <Image
               style={{height:dimensoes[226], width:dimensoes[226]}}
               source = {fotos[226].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(227)} onLongPress={()=>(longPress.bind(this))(227)}>
               <Image
               style={{height:dimensoes[227], width:dimensoes[227]}}
               source = {fotos[227].image}
               />
            </TouchableOpacity>
          </View>

          <View style={styles.row}>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(228)} onLongPress={()=>(longPress.bind(this))(228)}>
               <Image
               style={{height:dimensoes[228], width:dimensoes[228]}}
               source = {fotos[228].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(229)} onLongPress={()=>(longPress.bind(this))(229)}>
               <Image
               style={{height:dimensoes[229], width:dimensoes[229]}}
               source = {fotos[229].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(230)} onLongPress={()=>(longPress.bind(this))(230)}>
               <Image
               style={{height:dimensoes[230], width:dimensoes[230]}}
               source = {fotos[230].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(231)} onLongPress={()=>(longPress.bind(this))(231)}>
               <Image
               style={{height:dimensoes[231], width:dimensoes[231]}}
               source = {fotos[231].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(232)} onLongPress={()=>(longPress.bind(this))(232)}>
               <Image
               style={{height:dimensoes[232], width:dimensoes[232]}}
               source = {fotos[232].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(233)} onLongPress={()=>(longPress.bind(this))(233)}>
               <Image
               style={{height:dimensoes[233], width:dimensoes[233]}}
               source = {fotos[233].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(234)} onLongPress={()=>(longPress.bind(this))(234)}>
               <Image
               style={{height:dimensoes[234], width:dimensoes[234]}}
               source = {fotos[234].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(235)} onLongPress={()=>(longPress.bind(this))(235)}>
               <Image
               style={{height:dimensoes[235], width:dimensoes[235]}}
               source = {fotos[235].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(236)} onLongPress={()=>(longPress.bind(this))(236)}>
               <Image
               style={{height:dimensoes[236], width:dimensoes[236]}}
               source = {fotos[236].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(237)} onLongPress={()=>(longPress.bind(this))(237)}>
               <Image
               style={{height:dimensoes[237], width:dimensoes[237]}}
               source = {fotos[237].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(238)} onLongPress={()=>(longPress.bind(this))(238)}>
               <Image
               style={{height:dimensoes[238], width:dimensoes[238]}}
               source = {fotos[238].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(239)} onLongPress={()=>(longPress.bind(this))(239)}>
               <Image
               style={{height:dimensoes[239], width:dimensoes[239]}}
               source = {fotos[239].image}
               />
            </TouchableOpacity>
          </View>
          {/*end of row 16 to 20*/}

      </View>

      <View style={{flex:1, justifyContent:'center', alignItems:'center', flexDirection:'row'}}>
        <View style={{flex:1, justifyContent:'center', alignItems:'center', flexDirection:'row'}}>
          <TouchableOpacity onPress={aleatorio} style={{backgroundColor:'purple', borderRadius: 20, paddingLeft: 30, paddingRight:30, paddingTop:7, paddingBottom:7}}>
            <Text style={{color:'white'}}>Random</Text>
          </TouchableOpacity>
        </View>
        <View style={{flex:1, justifyContent:'center', alignItems:'center', flexDirection:'row'}}>
          <TouchableOpacity onPress={zerar} style={{backgroundColor:'green', borderRadius: 20, paddingLeft: 30, paddingRight:30, paddingTop:7, paddingBottom:7}}>
            <Text style={{color:'white'}}>Clean</Text>
          </TouchableOpacity>
        </View>
        {/*<View style={{flex:1, justifyContent:'center', alignItems:'center', flexDirection:'row'}}>
          <TouchableOpacity onPress={()=>(doubleTap.bind(this))(50)} style={{backgroundColor:'green', borderRadius: 20, paddingLeft: 30, paddingRight:30, paddingTop:7, paddingBottom:7}}>
            <Text style={{color:'white'}}>Oie</Text>
          </TouchableOpacity>
        </View>*/}
      </View>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    flexDirection: 'column',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
  },
  cell: {
    flex: 1,
    alignItems:'center',
    justifyContent:'center',
  },
});

export default ButtonsMatrix;