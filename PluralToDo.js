import React, { Component } from 'react';
import {
} from 'react-native';

import TaskList from './TaskList';

class PluralTodo extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            todos: [
                {
                    task: 'Learn React Native',
                },
                {
                    task: 'Learn Redux',
                },
            ],
        };
    }

    onAddStarted(){
        console.log('on add started');
    }

    render() {
        return (
            <TaskList 
                onAddStarted={this.onAddStarted.bind(this)}
                todos={this.state.todos}
            />
        );
    }
}

export default PluralTodo;

