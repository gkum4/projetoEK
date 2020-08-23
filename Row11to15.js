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
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(120)} >
               <Image
               style={{height:dimensoes[120], width:dimensoes[120]}}
               source = {fotos[120].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(121)} >
               <Image
               style={{height:dimensoes[121], width:dimensoes[121]}}
               source = {fotos[121].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(122)} >
               <Image
               style={{height:dimensoes[122], width:dimensoes[122]}}
               source = {fotos[122].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(123)} >
               <Image
               style={{height:dimensoes[123], width:dimensoes[123]}}
               source = {fotos[123].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(124)} >
               <Image
               style={{height:dimensoes[124], width:dimensoes[124]}}
               source = {fotos[124].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(125)} >
               <Image
               style={{height:dimensoes[125], width:dimensoes[125]}}
               source = {fotos[125].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(126)} >
               <Image
               style={{height:dimensoes[126], width:dimensoes[126]}}
               source = {fotos[126].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(127)} >
               <Image
               style={{height:dimensoes[127], width:dimensoes[127]}}
               source = {fotos[127].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(128)} >
               <Image
               style={{height:dimensoes[128], width:dimensoes[128]}}
               source = {fotos[128].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(129)} >
               <Image
               style={{height:dimensoes[129], width:dimensoes[129]}}
               source = {fotos[129].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(130)} >
               <Image
               style={{height:dimensoes[130], width:dimensoes[130]}}
               source = {fotos[130].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(131)} >
               <Image
               style={{height:dimensoes[131], width:dimensoes[131]}}
               source = {fotos[131].image}
               />
            </TouchableOpacity>
         </View>

         <View style={styles.row}>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(132)} >
               <Image
               style={{height:dimensoes[132], width:dimensoes[132]}}
               source = {fotos[132].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(133)} >
               <Image
               style={{height:dimensoes[133], width:dimensoes[133]}}
               source = {fotos[133].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(134)} >
               <Image
               style={{height:dimensoes[134], width:dimensoes[134]}}
               source = {fotos[134].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(135)} >
               <Image
               style={{height:dimensoes[135], width:dimensoes[135]}}
               source = {fotos[135].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(136)} >
               <Image
               style={{height:dimensoes[136], width:dimensoes[136]}}
               source = {fotos[136].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(137)} >
               <Image
               style={{height:dimensoes[137], width:dimensoes[137]}}
               source = {fotos[137].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(138)} >
               <Image
               style={{height:dimensoes[138], width:dimensoes[138]}}
               source = {fotos[138].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(139)} >
               <Image
               style={{height:dimensoes[139], width:dimensoes[139]}}
               source = {fotos[139].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(140)} >
               <Image
               style={{height:dimensoes[140], width:dimensoes[140]}}
               source = {fotos[140].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(141)} >
               <Image
               style={{height:dimensoes[141], width:dimensoes[141]}}
               source = {fotos[141].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(142)} >
               <Image
               style={{height:dimensoes[142], width:dimensoes[142]}}
               source = {fotos[142].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(143)} >
               <Image
               style={{height:dimensoes[143], width:dimensoes[143]}}
               source = {fotos[143].image}
               />
            </TouchableOpacity>
         </View>

         <View style={styles.row}>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(144)} >
               <Image
               style={{height:dimensoes[144], width:dimensoes[144]}}
               source = {fotos[144].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(145)} >
               <Image
               style={{height:dimensoes[145], width:dimensoes[145]}}
               source = {fotos[145].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(146)} >
               <Image
               style={{height:dimensoes[146], width:dimensoes[146]}}
               source = {fotos[146].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(147)} >
               <Image
               style={{height:dimensoes[147], width:dimensoes[147]}}
               source = {fotos[147].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(148)} >
               <Image
               style={{height:dimensoes[148], width:dimensoes[148]}}
               source = {fotos[148].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(149)} >
               <Image
               style={{height:dimensoes[149], width:dimensoes[149]}}
               source = {fotos[149].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(150)} >
               <Image
               style={{height:dimensoes[150], width:dimensoes[150]}}
               source = {fotos[150].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(151)} >
               <Image
               style={{height:dimensoes[151], width:dimensoes[151]}}
               source = {fotos[151].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(152)} >
               <Image
               style={{height:dimensoes[152], width:dimensoes[152]}}
               source = {fotos[152].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(153)} >
               <Image
               style={{height:dimensoes[153], width:dimensoes[153]}}
               source = {fotos[153].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(154)} >
               <Image
               style={{height:dimensoes[154], width:dimensoes[154]}}
               source = {fotos[154].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(155)} >
               <Image
               style={{height:dimensoes[155], width:dimensoes[155]}}
               source = {fotos[155].image}
               />
            </TouchableOpacity>
         </View>

         <View style={styles.row}>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(156)} >
               <Image
               style={{height:dimensoes[156], width:dimensoes[156]}}
               source = {fotos[156].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(157)} >
               <Image
               style={{height:dimensoes[157], width:dimensoes[157]}}
               source = {fotos[157].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(158)} >
               <Image
               style={{height:dimensoes[158], width:dimensoes[158]}}
               source = {fotos[158].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(159)} >
               <Image
               style={{height:dimensoes[159], width:dimensoes[159]}}
               source = {fotos[159].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(160)} >
               <Image
               style={{height:dimensoes[160], width:dimensoes[160]}}
               source = {fotos[160].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(161)} >
               <Image
               style={{height:dimensoes[161], width:dimensoes[161]}}
               source = {fotos[161].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(162)} >
               <Image
               style={{height:dimensoes[162], width:dimensoes[162]}}
               source = {fotos[162].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(163)} >
               <Image
               style={{height:dimensoes[163], width:dimensoes[163]}}
               source = {fotos[163].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(164)} >
               <Image
               style={{height:dimensoes[164], width:dimensoes[164]}}
               source = {fotos[164].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(165)} >
               <Image
               style={{height:dimensoes[165], width:dimensoes[165]}}
               source = {fotos[165].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(166)} >
               <Image
               style={{height:dimensoes[166], width:dimensoes[166]}}
               source = {fotos[166].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(167)} >
               <Image
               style={{height:dimensoes[167], width:dimensoes[167]}}
               source = {fotos[167].image}
               />
            </TouchableOpacity>
         </View>

         <View style={styles.row}>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(168)} >
               <Image
               style={{height:dimensoes[168], width:dimensoes[168]}}
               source = {fotos[168].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(169)} >
               <Image
               style={{height:dimensoes[169], width:dimensoes[169]}}
               source = {fotos[169].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(170)} >
               <Image
               style={{height:dimensoes[170], width:dimensoes[170]}}
               source = {fotos[170].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(171)} >
               <Image
               style={{height:dimensoes[171], width:dimensoes[171]}}
               source = {fotos[171].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(172)} >
               <Image
               style={{height:dimensoes[172], width:dimensoes[172]}}
               source = {fotos[172].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(173)} >
               <Image
               style={{height:dimensoes[173], width:dimensoes[173]}}
               source = {fotos[173].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(174)} >
               <Image
               style={{height:dimensoes[174], width:dimensoes[174]}}
               source = {fotos[174].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(175)} >
               <Image
               style={{height:dimensoes[175], width:dimensoes[175]}}
               source = {fotos[175].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(176)} >
               <Image
               style={{height:dimensoes[176], width:dimensoes[176]}}
               source = {fotos[116].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(177)} >
               <Image
               style={{height:dimensoes[177], width:dimensoes[177]}}
               source = {fotos[177].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(178)} >
               <Image
               style={{height:dimensoes[178], width:dimensoes[178]}}
               source = {fotos[178].image}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={()=>(press.bind(this))(179)} >
               <Image
               style={{height:dimensoes[179], width:dimensoes[179]}}
               source = {fotos[179].image}
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