import React, { Component } from "react";

import { View,FlatList,StyleSheet,ActivityIndicator} from "react-native";
import { connect } from "react-redux";
import * as actions from "../app/actions/loginActions";
import SlotCard from "../app/components/Card";
class Screen1 extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    title: 'Posts Grouped by Post Id',
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
      <SlotCard
      item={item}
      onClick={(item)=>this.getPostForId(item)}
      />
    );
  };

  getPostForId = (id) => {
    let filteredPostsForId = this.props.posts.filter((post)=>post.postId === id)
    this.props.navigation.navigate('Screen2',{postsById:filteredPostsForId})
  }

 

  componentDidMount(){
    this.props.getPosts()
  }

  // componentDidUpdate(nextProps){
  //   console.log(nextProps)
  // }


  render() {
    const { posts } = this.props
    let filteredArray = Array.from(new Set(posts.map((post) => post.postId )))
    return (
      <View style={styles.container}>
          <View style={styles.subcontainer}> 
          {this.props.isLoading ? <ActivityIndicator size="large" color="#0956e6" />:
                    <FlatList
                        style={styles.flatList}
                        data={filteredArray}
                        renderItem={this.renderItem}
                        ItemSeparatorComponent={()=> (
                          <View
                          style={{
                            backgroundColor: "#ececec",
                            height: 1,
                            opacity: 1
                          }}
                        />
              )}
                        //getItemLayout={this.getItemLayout}
                        //ListHeaderComponent={this.renderHeader}
                      />
                    }
                          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {backgroundColor:'#0f60cb',flex:1,padding:16},
  subcontainer:{flex:1,marginTop:40, borderRadius:10,backgroundColor:'#fff',justifyContent:'center',alignItems:'center'},
  flatList:{ backgroundColor: '#fff',paddingVertical:4,paddingHorizontal:2,borderRadius: 10}

})

function mapStateToProps(state) {
  return {
    posts: state.posts,
    isLoading: state.isEventLoading,
    error: state.error
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getPosts: () => dispatch(actions.getPosts())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Screen1);
