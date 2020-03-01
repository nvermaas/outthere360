import React, {useState } from 'react';
import { asset, View,Text, StyleSheet, AsyncStorage, Environment } from 'react-360';

import NordicScene from '../scenes/NordicScene'
import AstronScene from '../scenes/AstronScene'
import SingleView from './SingleView'


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
            //this.setBackgroundImage(asset("vr_dwingeloo_telescope2.jpg"))
            return(<AstronScene />)
        }

        if (this.props.scene=='nordic') {
            this.setBackgroundImage(asset("nordic.jpg"))
            return(<NordicScene />)
        }

        if (this.props.url) {
            //this.setBackgroundImage(this.props.url)
            return(<SingleView url={this.props.url} title={this.props.title}/>)
        } else {
            return(<NordicScene/>)
        }
    }
}