import { View, Text, StyleSheet, Image, FlatList, Dimensions } from 'react-native'
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import Video from 'react-native-video'
import { s } from 'react-native-wind'
import {SwiperFlatList} from 'react-native-swiper-flatlist' ;
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';


const {height,width}=Dimensions.get('window');

const Explore = () => {  
const navigation=useNavigation();

 const [datacard,setDatacard]=useState([]);
    const fetchData =()=>{
        const baseUrl="https://newsapi.org/v2/everything?q=bitcoin&apiKey=89dd41db95a64f21926cad4954290845"
        axios.get(`${baseUrl}`).then((response)=>{
            setDatacard(response.data.articles)
            response.data.articles.map((res)=>{
                // console.log(res);
            })
            
        })
    }
      useEffect(()=>{
        fetchData();
      },[]);
  
 useLayoutEffect(()=>{
  navigation.setOptions({
      headerShown:false,
    })
  })
  const [curIndex,setIndex]=useState();

  const renderItem =({item,index})=>{
    var t= new Date();
    var d = new Date(item.publishedAt);
  // console.log("publish",publish);
    const publish=Math.floor((t.getTime()-d.getTime())/(1000 * 3600 * 24));
    return(
      <View style={s`relative flex-1`}>
        <Image 
        source={{uri:item.urlToImage}}
        style={styles.imageStyle}
        />
      <View 
        style={styles.gradient}
      >
      <View 
      style={styles.background}
      >
          <Text style={s`font-lg text-sm mb-1 text-white`}>{publish} day ago</Text>
          <Text style={s`font-semibold text-base text-white text-xl`} numberOfLines={2}>{item.title}
          </Text>
          <Text style={s`font-light text-lg mt-1 text-white`} numberOfLines={5}>
            {item.content}
          </Text>
          <Text style={s`mt-2 `} numberOfLines={1}>
            <Text style={s`font-normal text-lg mt-1 text-red-500`}>{item.author} </Text>
            <Text style={s`font-extrabold text-white`}>&#183;</Text>
            <Text style={s`font-normal text-lg text-white`}>{item.name}</Text>
          </Text>
       </View>
      </View>
      </View>
      
    )
  }
  const onChangeIndex =({index,preIndex})=>{
    return(
        setIndex(index)
      )
    }
  return (
    <View style={s`flex-1 bg-pink`}>
          <SwiperFlatList 
          vertical={true}
        data={datacard}
        renderItem={renderItem}
        keyExtractor={(item,index)=>index.toString()}
        onChangeIndex={onChangeIndex}
    />
    </View>
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
    marginTop:1,
  },
  gradient:{
    backgroundColor:'rgba(0,0,0,0.3)',
    position:"absolute",
    top:0,
    bottom:0,
    left:0,
    right:0,
  },
  imageStyle:{
    height:height,
    // width:width,
    flex:1,
    resizeMode:'cover',
  }
});

export default Explore
