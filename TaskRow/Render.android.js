import React from 'react';
import {
    Animated,
    Image,
    StyleSheet,
    Text,
    TouchableHighlight,
    View,
} from 'react-native';

const imageUrl = require('../assets/img/done.png');

export default function render(styles) {
    const doneAnimation = new Animated.ValueXY();

    const localStyle = StyleSheet.create({
        doneButton: {
            borderRadius: 5,
            padding: 5,
        },
        doneImage: {
            width: 20,
            height: 20,
        },
        row: {
            transform: doneAnimation.getTranslateTransform(),
        }
    });

    function animatedPress() {
        Animated.spring(doneAnimation, {
            tension: 2, //animation speed
            friction: 3, //control acceleration
            toValue: {
                x: -500, //navigate away to the left
                y: 0,
            }
        }).start();

        setTimeout(() => {
            this.onDonePressed();
        }, 1000);       
    }

    return (
        <Animated.View style={[styles.container, localStyle.row]}>
            <Text
                style={styles.label}
            >{this.props.todo.task}</Text>

            <TouchableHighlight
                onPress={animatedPress.bind(this)}
                style={localStyle.doneButton}
                underlayColor="#ddd"
            >
                <Image
                    source={imageUrl}
                    style={localStyle.doneImage}
                />
            </TouchableHighlight>
        </Animated.View>
    );
}       
