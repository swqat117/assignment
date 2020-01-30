import React, { Component } from "react";

import { Text, View, AsyncStorage, Button as RNButton ,Dimensions} from "react-native";
import { connect } from "react-redux";
import * as loginActions from "../app/actions/loginActions";
class Screen3 extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };

  }

  static navigationOptions = {
    header: null
  };

  onPressForgotPassword = () => {
  };
  async storeItem(key, item) {
    try {
      //we want to wait for the Promise returned by AsyncStorage.setItem()
      //to be resolved to the actual value before returning the value
      var jsonOfItem = await AsyncStorage.setItem(key, JSON.stringify(item));
      return jsonOfItem;
    } catch (error) {
    }
  }


//   componentWillMount() {
//     BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
// }
// componentWillUnmount() {
//   BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
// }

// handleBackButtonClick(e) {
//   return true
// }

  render() {
    return (
      <View style={{backgroundColor:'#0956e6',}}>
        
       
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    mobile: state.mobile,
    user: state.user,
    token: state.token,
    isLoading: state.isLoading,
    error: state.error
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchEmptyUser: () => dispatch(loginActions.fetchEmptyUser())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Screen3);
