import React, {Component} from 'react';
import { StyleSheet, Text, View, Image,Button, TouchableHighlight, Linking} from 'react-native';
import {Column as Col, Row} from 'react-native-flexbox-grid';

/**
*ListItem is a custom component for buidling up list view
*/
export default class ListItem extends React.Component{
	constructor(props){
		super(props);
	}
	starRepo(){
		console.log("hey");
	}
	render() {
		return(
			<TouchableHighlight>
				<View style={styles.container}>
				<Row size={12}>
					<Col sm={8} md={8} lg={8}>
						<View style={styles.title}>
							<Text style={styles.titleFont}>{this.props.title}</Text>
							<Text style={styles.smallFont}>{this.props.owner}</Text>
						</View>
					</Col>
					<Col sm={4} md={4} lg={4}>
						<Button onPress={this.starRepo()} title="Star" color="#841584" accessibilityLabel="Learn more about this purple button"/>
					</Col>
				</Row>
					<Text style={styles.textFont}>{this.props.description}</Text>
				</View>
			</TouchableHighlight>
		);
	}
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		height: 100,
		backgroundColor: 'white',
		borderBottomWidth: 1,
		borderColor: '#DDDDDD',
		justifyContent: 'space-between',
	},
	title:{
		paddingLeft: 10,
		paddingRight: 10,
	},
	titleFont: {
		fontSize: 16,
		letterSpacing: 2,
	},
	smallFont: {
		fontSize: 12,
		fontWeight: "200",
		color: '#AAAAAA',
	},
	textFont: {
		fontSize: 14,
		fontWeight: "300",
		paddingLeft: 10,
		paddingRight: 10,
	}
});