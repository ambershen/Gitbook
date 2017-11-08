import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity , ScrollView} from 'react-native';
import {Container, Header, Content, List,ListItem, Body, Left, Right, Icon, Button, Text, Thumbnail, Item, Input} from 'native-base';


/**
* Profile page view. Profile displays data directly fetched from Github API
* Design mock up at github_app_mockup.sketch
**/
export default class UserScreen extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: null,
      username: null,
      avatar_url: null,
      repositories: null, 
      followers: null,
      following: null,
      bio: null,
      email: null,
      website: null,
      created_at: null,
    };
  }
  componentDidMount() {
    this.fetchData();
  }
  fetchData() {
    var PROFILE_REQUEST_URL = 'https://api.github.com/users/'+this.props.navigation.state.params.login;
    console.log(PROFILE_REQUEST_URL);
    fetch(PROFILE_REQUEST_URL)
      .then((response)=>response.json())
      .then((responseData)=>{
        this.setState({
          name: responseData.name,
          username: responseData.login,
          avatar_url: responseData.avatar_url,
          repositories: responseData.public_repos,
          followers: responseData.followers,
          following: responseData.following,
          bio: responseData.bio,
          email: responseData.email, 
          website: responseData.blog,
          created_at: responseData.created_at
        });
        console.log(this.state.name);
      })
      .catch((err)=>{
        console.error(err);
      });
  }
  render() {
    const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];    
    var created_time = new Date(this.state.created_at);
    var created_year = created_time.getFullYear();
    var created_month = monthNames[created_time.getMonth()];
    var created_date = created_time.getDate();
    return (
      <ScrollView style={{backgroundColor:'white'}}>
      <Container>
        <View style={styles.profileHeader}>
          <View>
            <Text style={{fontSize: 36}}>{this.state.name}</Text>
            <Text note>@{this.state.username}</Text>
          </View>
          <View>
            <Thumbnail large source={{uri: this.state.avatar_url+'.jpg'}} />
          </View>
        </View>
        <View style={styles.profileButtons}>
          <Button transparent black onPress={() => this.props.navigation.navigate("Repo", {login})}>
            <Text>{this.state.repositories+ "\nRepositories"}</Text>
          </Button>
          <Button transparent black onPress={() => this.props.navigation.navigate("Followers", {login})}>
            <Text>{this.state.followers + "\nFollowers"}</Text>
          </Button>
          <Button transparent black onPress={() => this.props.navigation.navigate("Following", {login})}>
            <Text>{this.state.following+"\nFollowing"}</Text>
          </Button>
        </View>
        <View style={styles.profileInfoBox}>
          <List>
            <ListItem itemHeader last>
              <Text style={styles.sectionTitle}>Bio</Text>
            </ListItem>
            <ListItem >
              <Text>{this.state.bio}</Text>
            </ListItem>
            <ListItem itemHeader last>
              <Text style={styles.sectionTitle}>Member Since</Text>
            </ListItem>
            <ListItem>
              <Text>{created_month} {created_date},{created_year}</Text>
            </ListItem>
            <ListItem itemHeader last>
              <Text style={styles.sectionTitle}>Email</Text>
            </ListItem>
            <ListItem>
              <Text>{this.state.email}</Text>
            </ListItem>
            <ListItem itemHeader last>
              <Text style={styles.sectionTitle}>Website</Text>
            </ListItem>
            <ListItem>
              <Text>{this.state.website}</Text>
            </ListItem>
          </List>
        </View>
      </Container>
      </ScrollView>
      /*
        <View style={styles.container}>
            <Text>Profile</Text>
            <Button onPress={() => this.props.navigation.navigate("Repo")} title="Go to Repo" />
        </View>
      */
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  profileHeader: {
    flex: 0.2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  profileButtons: {
    flex:0.1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  profileInfoBox: {
    flex: 0.7,
    flexDirection: 'column',
    justifyContent: 'space-around',

  },
  sectionTitle: {
    fontSize: 20,
    lineHeight: 30,
    letterSpacing: 2,
    
  },
  sectionText: {
    fontSize:18,
  }
});
