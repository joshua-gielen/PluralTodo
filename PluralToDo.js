import React, { Component } from 'react';
import {
    Navigator,
} from 'react-native';

import TaskList from './TaskList';
import TaskForm from './TaskForm';
import store from './todoStore';

class PluralTodo extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = store.getState();

        store.subscribe(() => {
            this.setState(store.getState());
        });
    }

    onAddStarted() {
        this.nav.push({
            name: 'taskForm',
        });
    }

    onAdd(task) {
        console.log('A task was added: ', task);
        //this.state.todos.push({ task, });
        //this.setState({ todos: this.state.todos });
        store.dispatch({
            type: 'ADD_TODO',
            task,
        });
        this.nav.pop();
    }

    onCancel() {
        console.log('cancelled');
        //hide current view and revert to previous view
        this.nav.pop();
    }

    onDone(todo) {
        console.log('todo was completed: ', todo.task);

        //filter out the todo from the todos in container before calling setState
        //const filteredTodos = this.state.todos.filter((filterTodo) => filterTodo !== todo);
        //this.setState({ todos: filteredTodos });
        store.dispatch({
            type: 'DELETE_TODO',
            todo,
        });
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
                        onDone={this.onDone.bind(this)}
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

