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
        const { navigate } = this.props.navigation;
        const renderDirectoryItem = ({ item }) => {
            return (
                <ListItem>
                    <Avatar rounded title={item.name} source={{ uri: require('./images/react-lake.jpg') }} />
                    <ListItem.Content>
                        <ListItem.Title onPress={()=> navigate('CampsiteInfo', {campsiteId : item.id})}>{item.name}</ListItem.Title>
                        <ListItem.Subtitle>{item.subtitle}</ListItem.Subtitle>
                    </ListItem.Content>
                </ListItem>
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