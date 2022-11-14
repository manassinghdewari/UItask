import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React from 'react'
import { s } from 'react-native-wind'

const HorizontalCards = ({author,img,title,content,name,publish}) => {
  var t= new Date();
  var d = new Date(publish);
  // console.log("publish",publish);
  publish=Math.floor((t.getTime()-d.getTime())/(1000 * 3600 * 24))
  return (
   <TouchableOpacity style={s`relative mr-4`}>
        <Image
            source={{uri:img}}
            // style={s`w-80 h-70 rounded-lg`}
            style={{height:390,width:240,borderRadius:10}}
        />
 
 <View 
        style={styles.gradient}
      >
      <View 
      style={styles.background}
      >
          <Text style={s`font-lg text-sm mb-1 text-white`}>${publish} day ago</Text>
          <Text style={s`font-semibold text-base text-white text-lg`} numberOfLines={3}>
            {title}
          </Text>
          <Text style={s`font-light text-lg mt-1 text-gray-100`} numberOfLines={1}>
            {content}
          </Text>
          <Text style={s`mt-2 mb-2`} numberOfLines={1}>
            <Text style={s`font-normal text-lg mt-1 text-red-500`}>{author} </Text>
            <Text style={s`font-extrabold text-white`}>&#183;</Text>
            <Text style={s`font-normal text-lg text-gray-100`}>{name}</Text>
          </Text>
       </View>
      </View>
   </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  background:{
    position:"absolute",
    bottom:0,
    right:0,
    left:0,
    paddingLeft:20,
    paddingRight:10,
    paddingTop:10,
    // paddingBottom:10,
    marginTop:1,
  },
  gradient:{
    backgroundColor:'rgba(0,0,0,0.7)',
    position:"absolute",
    top:0,
    bottom:0,
    left:0,
    right:0,
    height:390,width:240,borderRadius:10,
  },
});
export default HorizontalCards