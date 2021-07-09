import React, {Component} from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  BackHandler,
} from 'react-native';
import {TextInput} from 'react-native-paper';
import {Button} from 'react-native-paper';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      loading: false,
      goBack: false,
    };
  }
  render() {
    return (
      <ScrollView style={{backgroundColor: '#fff'}}>
        <Text></Text>
        <Text></Text>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{fontSize: 30, marginTop: 20, textAlign: 'center'}}>
            Search
          </Text>
          <TextInput
            value={this.state.email}
            placeholder="Search For Books"
            autoCapitalize="none"
            selectionColor="black"
            underlineColor="black"
            underlineColorAndroid="black"
            style={{
              marginTop: 50,
              fontSize: 20,
              width: '75%',
              marginBottom: 25,
            }}
            onChangeText={e => {
              this.setState({search: e});
            }}></TextInput>
          <Button
            //icon="login"
            mode="outlined"
            loading={this.state.loading}
            color="black"
            onPress={() => {
              this.props.navigation.navigate('Home');
            }}
            contentStyle={{
              width: 175,
              height: 50,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            Login
          </Button>
        </View>
      </ScrollView>
    );
  }
}

export default Search;
