import React from 'react'
import { View, Text, StyleSheet, FlatList, Image,Dimensions } from "react-native";
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height
import { MaterialCommunityIcons,AntDesign } from '@expo/vector-icons';



export default function BarCards({title,subTitle,image})
{
  

  return (
    <View style={styles.mainWrapper}>
     
     <View style={styles.barContainer}>
     <View style={styles.nameBar}>
      <Text style={styles.text}>{title}</Text>
      <Text style={{...styles.text,fontSize:15}}>{subTitle}</Text>

     </View>

      <View style={styles.iconContainers}>
     <MaterialCommunityIcons name="delete-sweep" size={24} color="#B79200" />
     <AntDesign name="hearto" size={20} color="#fff" />
     </View>
     </View>
      
      <Image source={image} style={styles.image}/>
     

      
    </View>
  );
};

const styles = StyleSheet.create({
mainWrapper:
{
 marginTop:-10,
},

text:
{
    color:"#fff",
    fontSize:20,
},

iconContainers:
{
    flexDirection:'row',
    alignItems:'center',
    width:WIDTH/7,
    justifyContent:'space-between',
},
barContainer:
{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    paddingHorizontal:15,
    borderTopWidth:1,
    borderTopColor:"#fff",
    marginTop:25,
},
image:
{
    width:WIDTH,
    height:HEIGHT/3.8,
    marginTop:10,
    

}
 
});