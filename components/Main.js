import React, {useState } from 'react';
import { asset, View,Text, StyleSheet, AsyncStorage, Environment } from 'react-360';

import NordicViews from './NordicViews'
import AstronViews from './AstronViews'
import SingleView from './SingleView'

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

        // first check the 'scene=' parameter
        if (this.props.scene=='astron') {
            this.setBackgroundImage(asset("galaxy.jpg"))
            return(<AstronViews />)
        }

        if (this.props.scene=='nordic') {
            this.setBackgroundImage(asset("nordic.jpg"))
            return(<NordicViews />)
        }

        if (this.props.url) {
            //this.setBackgroundImage(this.props.url)
            return(<SingleView url={this.props.url} title={this.props.title}/>)
        } else {
            return(<NordicViews/>)
        }
    }
}