import React, { Component } from "react";
import { Text, View, TouchableOpacity,StyleSheet } from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

const TOTAL_WIDTH = wp('100%') -32


const styles = StyleSheet.create({
  container: {
          paddingHorizontal: 4,
          width: TOTAL_WIDTH,
          justifyContent:'center',
          alignItems:'center',
          paddingVertical:16,
          flexDirection: "column"
  },

})

export default class Card extends Component {


  render() {
    const { item,textStyle,style }  = this.props
    return (
      <TouchableOpacity onPress={()=>this.props.onClick(item)} style={[ styles.container,style ]}>
       <Text style={textStyle}>{item}</Text>   
      </TouchableOpacity>
    );
    
  }
}
