import React, { Component } from "react";
import { View, FlatList,StyleSheet} from "react-native";
import { connect } from "react-redux";
import PostCard from "../app/components/PostCard";
class Screen2 extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    title: 'Post Listings',
    headerStyle: {
      backgroundColor: '#0956e6',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: '400',
    },
  };

  renderItem = ({ item }) => {
    return (
      <PostCard
      item={item}
      onClick={(item)=>this.getPostForId(item)}
      />
    );
  };


  render() {
    let list = this.props.navigation.getParam('postsById',[])
    return (
      <View style={styles.container}>
      <View style={styles.subcontainer}> 
                <FlatList
                    style={styles.flatList}
                       
                        data={list}
                        renderItem={this.renderItem}
                        ItemSeparatorComponent={()=> (
                          <View
                          style={{
                            backgroundColor: "#ececec",
                            height: 1,
                            marginTop:-2,
                            opacity: 1
                          }}
                        />
              )}
                      />
              </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {backgroundColor:'#0f60cb',flex:1,padding:16},
  subcontainer:{flex:1,marginTop:40, borderRadius:10,backgroundColor:'#fff'},
  flatList:{ backgroundColor: '#fff',paddingVertical:4,paddingHorizontal:2,borderRadius: 10}

})

function mapStateToProps(state) {
  return {
    error: state.error
  };
}

function mapDispatchToProps(dispatch) {
  return {
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Screen2);
