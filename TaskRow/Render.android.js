import React from 'react';
import {
    Image,
    StyleSheet,
    Text,
    TouchableHighlight,
    View,
} from 'react-native';

const imageUrl = require('../assets/img/done.png');

const localStyle = StyleSheet.create({
    doneButton: {
        borderRadius: 5,
        padding: 5,
    },
    doneImage: {
        width: 20,
        height: 20,
    }
});

export default function render(styles) {
    return (
        <View style={styles.container}>
            <Text
                style={styles.label}
            >and: {this.props.todo.task}</Text>

            <TouchableHighlight
                onPress={this.onDonePressed.bind(this)}
                style={localStyle.doneButton}
                underlayColor="#ddd"
            >
                <Image
                    source={imageUrl}
                    style={localStyle.doneImage}
                />
            </TouchableHighlight>
        </View>
    );
}       
