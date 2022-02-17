import React, { Component } from 'react';
import { View, Text, ScrollView, Image, StyleSheet } from 'react-native';
import { Card } from 'react-native-elements';
import { CAMPSITES } from '../shared/campsites';
import { PROMOTIONS } from '../shared/promotions';
import { PARTNERS } from '../shared/partners';

{/* <Card
image={require('./images/react-lake.jpg')}
style={style.image}
featuredTitle={item.name}
> */}
function RenderItem({ item }) {
    if (item) {
        return (
            <Card
                image={require('./images/react-lake.jpg')}
                style={style.image}
                featuredTitle={item.name}
            >
                <Text style={{ margin: 10 }}>
                    {item.description}
                </Text>
            </Card>
        );
    }
    return <View />;
}

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            campsites: CAMPSITES,
            promotions: PROMOTIONS,
            partners: PARTNERS
        };
    }

    static navigationOptions = {
        title: 'Home'
    }

    render() {
        return (
            <ScrollView>
                <RenderItem
                    item={this.state.campsites.filter(campsite => campsite.featured)[0]}
                />
                <RenderItem
                    item={this.state.promotions.filter(promotion => promotion.featured)[0]}
                />
                <RenderItem
                    item={this.state.partners.filter(partner => partner.featured)[0]}
                />
            </ScrollView>
        );
    }
}

const style = StyleSheet.create({
    image: {
        width: 100,
        height: 100,
    }
})

export default Home;