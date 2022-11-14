import { View, Text, Image,TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { s } from 'react-native-wind'

const VerticalCard = ({author,img,title,content,name,publish}) => {
  var t= new Date();
  var d = new Date(publish);
  // console.log("publish",publish);
  publish=Math.floor((t.getTime()-d.getTime())/(1000 * 3600 * 24));
  return (
    <TouchableOpacity>

    <SafeAreaView style={s`relative flex-row mr-4 pl-3 pr-2 rounded-lg`}>
      
       <View style={s`w-1/2 mt-1 ml-2  bg-white pl-2 pt-2 pb-2 `}>
          <Text style={s`font-light text-sm mb-1`}>{publish} day ago</Text>
          <Text style={s`font-bold text-base`} numberOfLines={2}>
            {title}
          </Text>
          <Text style={s`font-normal text-sm mt-1`} numberOfLines={3}>
            {content}
          </Text>
          <Text style={s`mt-2 `} numberOfLines={1}>
            <Text style={s`font-normal text-sm mt-1 text-red-500`}>{author}</Text>
            <Text style={s`font-extrabold`}>&#183;</Text>
            <Text style={s`font-normal text-sm `}> {name}</Text>
          </Text>
       </View>
       <View style={s`w-1/2 mt-2  bg-white `}>
          
          <Image source={{uri:img}}
            style={{height:140,borderRadius:10}}
            />
       </View>
    </SafeAreaView>
    </TouchableOpacity>
  )
}

export default VerticalCard