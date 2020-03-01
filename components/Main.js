import React, {useState } from 'react';
import { asset, View,Text, StyleSheet, AsyncStorage, Environment } from 'react-360';

import NordicScene from '../scenes/NordicScene'
import AstronScene from '../scenes/AstronScene'
import DefaultScene from '../scenes/DefaultScene'
import SingleView from './SingleView'

import my_styles from '../styles'
//const styles = StyleSheet.create(my_styles);

export default class Main extends React.Component {
    state = {
        currentImage: "lapland_tipi.jpg",
    };

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
        console.log('currentImage = '+this.state.currentImage)

        // first check the 'scene=' parameter
        if (this.props.scene=='default') {
            return(<DefaultScene />)
        }

        if (this.props.scene=='astron') {
            return(<AstronScene />)
        }

        if (this.props.scene=='nordic') {
            return(<NordicScene />)
        }

        // no 'scene=' parameter, check the 'url=' parameter for a single view with title.
        if (this.props.url) {
            return(<SingleView url={this.props.url} title={this.props.title}/>)
        } else {
            return(<DefaultScene/>)
        }
    }
}