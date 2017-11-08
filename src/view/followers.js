import React, { Component } from 'react';
import { ActivityIndicator, StyleSheet, View, FlatList} from 'react-native';
import {Container, Header, Content, List,ListItem, Body, Left, Right, Icon, Button, Text, Item, Input, Thumbnail} from 'native-base';
import SearchBar from 'react-native-searchbar';

export default class FollowersScreen extends Component {
    constructor(props){
        super(props);
        this.state = {
            isLoading: true,
            results: [],
        };
        this._handleResults=this._handleResults.bind(this);
    }
    _handleResults(results){
        this.setState({results});
    }
    componentDidMount() {
        this.fetchData();
    }
    fetchData() {
        fetch('https://api.github.com/users/ambershen/followers')
        .then((response)=>response.json())
        .then((responseJson)=>{
            this.setState({
                isLoading: false,
                data: responseJson,
                refreshing: false,
                results: responseJson,
            });
        })
        .catch((err)=>{
            console.error(err);
        });
    }
    _keyExtractor = (item,index)=>item.id;
    render(){
        if(this.state.isLoading){
            return(
                <View style={{flex: 1, paddingTop: 20}}>
                    <ActivityIndicator/>
                </View>
            );
        }
        return(
            <Container style={{backgroundColor: 'white'}}>
                <Header>
                <SearchBar
                    ref={(ref)=>this.searchBar=ref}
                    data={this.state.data}
                    handleResults={this._handleResults}
                    hideBack={true}
                    autoCapitalize='none'
                    showOnLoad
                    iOSHideShadow
                    allDataOnEmptySearch
                    clearOnShow
                />
                </Header>
                <Content>
                
                <View style={styles.container}>
                    <List scrollEnabled={false} style={styles.container}>
                    <FlatList
                        data={this.state.results}
                        renderItem={({ item: { id, login, avatar_url, organizations_url} }) => (
                          <ListItem avatar onPress={() => this.props.navigation.navigate("User", {login})}>
                            <Left>
                                <Thumbnail small source={{uri: avatar_url+'.jpg'}} />
                            </Left>
                            <Body>
                              <Text>{login}</Text>
                            </Body>
                            <Right>
                                <Icon name='ios-more-outline'/>
                            </Right>
                          </ListItem>
                        )}
                        keyExtractor={this._keyExtractor}
                    />
                    </List>
                </View>
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});