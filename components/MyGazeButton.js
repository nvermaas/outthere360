import React from "react";
import { Environment, asset, StyleSheet, Text, View } from "react-360";
import GazeButton from "react-360-gaze-button";

export default class MyGazeButton extends React.Component {
    state = {
        gazed: false
    };

    setGazed = () => {
        this.setState({ gazed: true });
        console.log('gazed = true')
        Environment.setBackgroundImage(asset(this.props.asset))
    };

    render() {
        const { gazed } = this.state;

        return (
            <GazeButton duration={1000} onClick={this.setGazed} render={(remainingTime, isGazed) => (
                    <View style={styles.button}>
                        <Text style={styles.greeting}>
                        {gazed ? this.props.title : isGazed ? remainingTime : this.props.title}
                        </Text>
                    </View>
                       )}
            />
        );
    }
}

const styles = StyleSheet.create({
    panel: {
        // Fill the entire surface
        width: 500,
        height: 300,
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        width: 250,
        padding: 10,
        backgroundColor: '#A17A3A',
        borderColor: '#639dda',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    greeting: {
        fontSize: 30,
    },
});

