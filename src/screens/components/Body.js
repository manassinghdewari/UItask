import { View, Text, Button, ScrollView } from 'react-native'
import React from 'react'
import { s } from 'react-native-wind'
import VerticalCard from './VerticalCard'
import { useNavigation } from '@react-navigation/native'

const Body = ({datacard}) => {
  const navigation=useNavigation();
  return (
    <View>
      <Text style={s`font-bold text-xl mt-6 ml-5 text-black-500`}>Top Stories for you</Text>
      <ScrollView style={s`flex-row px-2`}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal:10,
        paddingTop:15
    }}
      >
        <View style={s`w-30 h-30 bg-red-400 mr-5 p-2 rounded-2xl ml-10`}><Text style={s`text-sm`}>Politics</Text></View>
        <View style={s`w-30 h-30 bg-white mr-5 p-2 rounded-2xl`}>< Text style={s`text-sm`}>Android</Text></View>
        <View style={s`w-30 h-30 bg-white mr-5 p-2 rounded-2xl`}><Text style={s`text-sm`} >Cricket</Text></View>
        <View style={s`w-30 h-30 bg-white mr-5 p-2 rounded-2xl`}><Text  style={s`text-sm`}>iPhone</Text></View>
        <View style={s`w-30 h-30 bg-white mr-5 p-2 rounded-2xl`}><Text  style={s`text-sm`}>Google</Text></View>
      </ScrollView>
          {
            datacard.map((element,index)=>{
              return(
                <VerticalCard key={index} author={element.author} img={element.urlToImage} title={element.title} content={element.content} name={element.source.name} publish={element.publishedAt}/>
              )
            })
          }
    </View>
  )
}

export default Body