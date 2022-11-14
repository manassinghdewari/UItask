import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { s } from 'react-native-wind'

const Navbar = () => {
  return (
    <TouchableOpacity>
    <View style={s`flex-row justify-center relative`}>
      
      <Image 
        source={{uri:"https://img.icons8.com/external-global-made-by-made/50/null/external-Menu-ui-and-ux-global-made-by-made-6.png"}}
        style={s`w-10 h-10 mt-2 left-0 absolute`}
        />
        
        
        <Text style={s`font-extrabold	text-xl`}>Zindtlr News</Text>
        <Image 
        source={{uri:"https://img.icons8.com/ios-filled/50/null/search--v1.png"}}
        style={s`w-10 h-10 mt-2 right-0 absolute`}
        />
    </View>
    </TouchableOpacity>
        
  )
}

export default Navbar