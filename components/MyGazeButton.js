import React from "react";
import { Environment, asset, StyleSheet, Text, View, AsyncStorage} from "react-360";
import GazeButton from "react-360-gaze-button";

export default class MyGazeButton extends React.Component {

    state = {
        gazed: false
    };

    async setCurrentImage(value) {
        // Persisting data
        try {
            await
                console.log('setCurrentImage: '+value)
                AsyncStorage.setItem('current-image', value);
        } catch (error) {
            // Error saving data
        }
    }

    setGazed = () => {
        this.setState({ gazed: true });
        console.log('gazed = true')
        Environment.setBackgroundImage(asset(this.props.asset))
        this.setCurrentImage(this.props.asset)

    };

    render() {
        const { gazed } = this.state;

        return (
            <GazeButton duration={1000} onClick={this.setGazed} render={(remainingTime, isGazed) => (
                    <View style={styles.button}>
                        <Text style={styles.greeting}>
                        {gazed ? this.props.title : isGazed ? this.props.title : this.props.title}
                        </Text>
                    </View>
                       )}
            />
        );
    }
}

