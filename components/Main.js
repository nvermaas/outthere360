import React, {useState } from 'react';
import { View,Text, StyleSheet, AsyncStorage, Environment } from 'react-360';

import NordicViews from './NordicViews'
import MyGazeButton from './MyGazeButton'

const styles = StyleSheet.create({
    panel: {
        // Fill the entire surface
        width: 600,
        height: 500,
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    info: {
        fontSize: 20,
    },
    title: {
        fontSize: 30,
        padding: 10,
        backgroundColor: '#A17A3A',
        borderColor: '#639dda',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default class Main extends React.Component {
    state = {
        currentImage: "lapland_tipi.jpg",
    };

    setBackgroundImage(url) {
        Environment.setBackgroundImage(url)
    }

    async getCurrentImage() {
    // Fetching data
        try {
            const value = await AsyncStorage.getItem('current-image');
            if (value !== null) {
                // We have data!
                this.setState({currentImage: value});
                return value
            }
        } catch (error) {
            // Error retrieving data
        }
    }


    render() {
        //let currentImage = this.getCurrentImage()
        console.log('currentImage = '+this.state.currentImage)

        let renderScene

        if (this.props.url) {
            this.setBackgroundImage(this.props.url)
            return(<View style={styles.panel}>
                <Text style={styles.title}>{this.props.title}</Text>
            </View>)
        } else {
            this.setBackgroundImage("http://localhost:8081/static_assets/galaxy.jpg")
            return(<NordicViews/>)
            console.log('renderScene: '+renderScene)
        }

        return (

            <NordicViews/>

        );
    }
}