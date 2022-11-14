import { View, Text, ScrollView, Button, TouchableOpacity, StyleSheet, Image, } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context';
import Navbar from './components/Navbar';
import HorizontalSlider from './components/HorizontalSlider';
import axios from "axios";
import Body from './components/Body';
import Explore from './components/Explore';
import { s } from 'react-native-wind';

const Homepage = () => {
    const [datacard,setDatacard]=useState([]);
        const fetchData =()=>{
            const baseUrl="https://newsapi.org/v2/everything?q=bitcoin&apiKey=89dd41db95a64f21926cad4954290845"
            axios.get(`${baseUrl}`).then((response)=>{
                setDatacard(response.data.articles)
                response.data.articles.map((res)=>{
                    console.log(res);
                })
                
            })
        }
          useEffect(()=>{
            fetchData();
          },[]);
    const navigation=useNavigation();
         useLayoutEffect(()=>{
            navigation.setOptions({
                headerShown:false,
            })
        })
  return (
    <>
    <SafeAreaView>
           <Button title="Explore" onPress={()=>
                navigation.navigate("Explore",{
                    paramKey:datacard,
                })
            }
            color="#e46585"
            />
    <ScrollView >
        <Navbar />
        <HorizontalSlider datacard={datacard}/>
        <Body datacard={datacard}/>
    </ScrollView>
    </SafeAreaView>
    </>
  )
}
export default Homepage
