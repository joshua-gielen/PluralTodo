import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

class TaskList extends Component {
    
    render() {
        return (
            <View style={styles.container}>
                <Text>Hi, this is the TaskList</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
  }
});

export default TaskList;

