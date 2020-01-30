import React, { Component } from "react";
import { Text, View, TouchableOpacity,StyleSheet } from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

const TOTAL_WIDTH = wp('100%') -32

const styles = StyleSheet.create({
  container: {
          paddingHorizontal: 16,
          width: TOTAL_WIDTH,
          justifyContent:'center',
          alignItems:'flex-start',
          paddingVertical:16,
          flexDirection: "column"
  },
  textStyle: {
      marginLeft:10,
      marginBottom:4,
  }

})

export default class PostCard extends Component {
  render() {
    const { item,textStyle,style }  = this.props
    return (
      <TouchableOpacity onPress={()=>this.props.onClick(item)} style={[ styles.container ]}>
       <View style={{flexDirection:'row'}}>
       <Text style={styles.textStyle}>{item.id}.</Text>
       <Text style={styles.textStyle}>({item.email})</Text> 
       </View>
       <View style={{flexDirection:'row'}}>
       <Text style={styles.textStyle}>{item.body}</Text>
       </View>
      </TouchableOpacity>
    );
    
  }
}
