import React, { Component } from 'react';
import {
  ListView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';

import TaskRow from './TaskRow';

const styles = StyleSheet.create({
    //use FlexBox for styling with flow layout
    container: {
        backgroundColor: '#F7F7F7',
        paddingTop: 40,
        flex: 1,
        justifyContent: 'flex-start',
    },

    button: {
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 20,
        height: 60,
        borderColor: '#05A501',
        borderWidth: 2,
        backgroundColor: '#333',
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    buttonText: {
        color: '#FAFAFA',
        fontSize: 20,
        fontWeight: '600',
    },
    
});

class TaskList extends Component {
    constructor(props, context) {
        super(props, context);

        //create and populate datasource
        //rowHasChanged used to differentiate items from each other
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2,
        });

        //cloneWithRows to populate datasource
        this.state = {
            dataSource: ds.cloneWithRows(props.todos),
        };
    }

    componentWillReceiveProps(nextProps) {
        const dataSource = this
            .state
            .dataSource
            .cloneWithRows(nextProps.todos);

        this.setState({ dataSource });
    }

    //renderRow prop 
    renderRow(todo) {
        return (
            <TaskRow todo={todo} />
        );
    }


    render() {
        return (
            <View style={styles.container}>
                <ListView
                    dataSource={this.state.dataSource}
                    key={this.props.todos}
                    renderRow={this.renderRow.bind(this)}
                />
                <TouchableHighlight 
                    onPress={this.props.onAddStarted}
                    style={styles.button}
                >
                    <Text 
                        style={styles.buttonText}
                    >
                        Add one  
                    </Text>
                </TouchableHighlight>

            </View>
        );
    }
}

//Prop validation for onAddStarted & todos prop in TaskList
TaskList.propTypes = {
    onAddStarted: React.PropTypes.func.isRequired,
    todos: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
};

export default TaskList;
