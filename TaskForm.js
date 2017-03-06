import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    TextInput,
    View,
    TouchableHighlight,
} from 'react-native';

const styles = StyleSheet.create({
    container: {
        paddingTop: 150,
        backgroundColor: '#F7F7F7',
        flex: 1,
        justifyContent: 'flex-start',
        

    },
    input: {
        borderWidth: 1,
        borderColor: '#D7D7D7',
        height: 50,
        marginLeft: 10,
        marginRight: 10,
        padding: 15,
        borderRadius: 3,
    },
    buttonText: {
        color: '#FAFAFA',
        fontSize: 18,
        fontWeight: '600',        
    },
    button: {
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        alignSelf: 'stretch',
        height: 45,
        backgroundColor: '#05A5D1',
        justifyContent: 'center',
        alignItems: 'center',
    },
    cancelButton: {
        backgroundColor: '#666',

    },
});

class TaskForm extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            task: '',
        };
    }

    onChange(text) {
        this.task = text;
    }

    onAddPressed() {
        this.props.onAdd(this.task);
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput 
                    onChangeText={this.onChange.bind(this)}
                    style={styles.input} 
                />

                <TouchableHighlight 
                    onPress={this.onAddPressed.bind(this)} 
                    style={styles.button}
                >
                    <Text style={styles.buttonText}>Add</Text>
                </TouchableHighlight>

                <TouchableHighlight 
                    onPress={this.props.onCancel} 
                    style={[styles.button, styles.cancelButton]}
                >
                    <Text style={styles.buttonText}>Cancel</Text>
                </TouchableHighlight>

            </View>
        );
    }
}

TaskForm.propTypes = {
    onCancel: React.PropTypes.func.isRequired,
    onAdd: React.PropTypes.func.isRequired,
};

export default TaskForm;
