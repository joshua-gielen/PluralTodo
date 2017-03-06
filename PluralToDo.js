import React, { Component } from 'react';
import {
    Navigator,
} from 'react-native';

import TaskList from './TaskList';
import TaskForm from './TaskForm';

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

    onAddStarted() {
        this.nav.push({
            name: 'taskForm',
        });
    }

    onAdd(task) {
        console.log('A task was added: ', task);
        this.state.todos.push({ task, });
        this.setState({ todos: this.state.todos });
        this.nav.pop();
    }

    onCancel() {
        console.log('cancelled');
        //hide current view and revert to previous view
        this.nav.pop();
    }

    //set how view is rendered
    configureScene() {
        return Navigator.SceneConfigs.FloatFromBottom;
    }

    //Navigator component to switch between views
    renderScene(route, nav) {
        switch (route.name) {
            case 'taskForm':
                return (
                    <TaskForm
                        onAdd={this.onAdd.bind(this)}
                        onCancel={this.onCancel.bind(this)} 
                    />
                );
            default:
                return (
                    <TaskList 
                        onAddStarted={this.onAddStarted.bind(this)}
                        todos={this.state.todos}
                    />
                );
        }
    }

    render() {
        return (
            <Navigator
                configureScene={this.configureScene}
                initialRoute={{ name: 'taskList', index: 0 }}
                ref={((nav) => {  
                    this.nav = nav;
                })}
                renderScene={this.renderScene.bind(this)}
            />
        );
    }
}

export default PluralTodo;

