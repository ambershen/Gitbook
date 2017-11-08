import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import { Container,Header,Icon,Button, List, ListItem, Text, Left, Body, Right, Thumbnail, Segment } from 'native-base';
import SearchBar from 'react-native-searchbar';


export default class NotificationScreen extends Component {
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
    _keyExtractor =(item,index)=>item.id;
    render() {
        if(this.state.isloading){
            return(
                <View style={styles.container}>
                    <ActivityIndicator/>
                </View>
            );
        }
        return (
            <ScrollView>
              
              <Header>
                  <Segment>
                    <Button first><Text>Unread</Text></Button>
                    <Button second><Text>Read</Text></Button>
                    <Button last active><Text>All</Text></Button>
                  </Segment>
              </Header>
              <Container>
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
              </Container>

            </ScrollView>
            /*
            <View style={styles.container}>
                <FlatList
                    data={this.state.data}
                    keyExtractor={this._keyExtractor}
                    renderItem={({ item: { id, repository: { full_name }, subject: { title, url }, updated_at } }) => (
                      <ListItem avatar>
                        <Left>
                        </Left>
                        <Body>
                          <Text note>{full_name}</Text>
                          <Text>{title}</Text>
                        </Body>
                        <Right>
                          <Text note>{updated_at}</Text>
                        </Right>
                      </ListItem>
                    )}
                />
            </View>
            */
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});