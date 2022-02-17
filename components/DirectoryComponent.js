import React, { Component } from 'react';
import { FlatList} from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';
import { CAMPSITES } from '../shared/campsites';

class Directory extends Component {

    constructor(props) {
        super(props);
        this.state = {
            campsites: CAMPSITES
        };
    }

    static navigationOptions = {
        title: 'Directory'
    }

    render() {
        const renderDirectoryItem = ({ item }) => {
            return (
                <ListItem 
                    title={item.name}
                    subtitle={item.description}
                    leftAvatar={{source : require('./images/react-lake.jpg')}}
                />
            );
        };

        return (
            <FlatList
                data={this.state.campsites}
                renderItem={renderDirectoryItem}
                keyExtractor={item => item.id.toString()}
            />
        );
    }
}

export default Directory;