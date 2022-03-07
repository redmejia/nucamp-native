import React from "react";
import { ScrollView, Text } from "react-native";
import { Card } from "react-native-elements";

import * as Animatable from 'react-native-animatable';

class Contact extends React.Component {

	static navigationOptions = {
		title: 'Contact Us'
	}

	render() {
		return (
			<ScrollView>
				<Animatable.View animation='fadeInDown' duration={2000} delay={1000}>
					<Card
						wrapperStyle={{ margin: 20 }}
						title={"Contact Information"}
					>
						<Text>1 Nucamp Way</Text>
						<Text>Seattle, WA 98001</Text>
						<Text style={{ marginTop: 10 }}>Phone : 1-206-555-1234</Text>
						<Text>Email : campsites@nucamp.co</Text>
					</Card>
				</Animatable.View>
			</ScrollView>
		)
	}
}

export default Contact;