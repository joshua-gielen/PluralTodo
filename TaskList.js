import React, { Component } from 'react';
import {
  ListView,
  StyleSheet,
  View,
} from 'react-native';

import TaskRow from './TaskRow'

const styles = StyleSheet.create({
    //use FlexBox for styling with flow layout
    container: {
        backgroundColor: '#F7F7F7',
        paddingTop: 40,
        flex: 1,
        justifyContent: 'flex-start',
    }
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
            </View>
        );
    }
}

//Prop validation for todos prop in TaskList
TaskList.propTypes = {
    todos: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
};

export default TaskList;
