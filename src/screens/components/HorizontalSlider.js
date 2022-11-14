import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import HorizontalCards from './HorizontalCards'
import { SafeAreaView } from 'react-native-safe-area-context';
import { s } from 'react-native-wind';
import axios from 'axios';

const HorizontalSlider = ({datacard}) => {
      return (
          <SafeAreaView >
        <ScrollView 
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
                paddingHorizontal:10,
                paddingTop:15
            }}
        >
            {
                datacard.map((element,index)=>{
                    return(
                        <HorizontalCards key={index} author={element.author} img={element.urlToImage} title={element.title} content={element.content} name={element.source.name} publish={element.publishedAt}/>
                    )
                })
                
            }
        </ScrollView>
    </SafeAreaView>
  )
}

export default HorizontalSlider