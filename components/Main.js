import React, {useState } from 'react';
import { View,Text, StyleSheet, AsyncStorage } from 'react-360';
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
        let currentImage = this.getCurrentImage()
        console.log('currentImage = '+currentImage)
        return (

                <View style={styles.panel}>
                    <Text style={styles.title}>{this.state.currentImage}</Text>
                    <Text style={styles.info}>Drag the menu to the center screen. In VR mode, aim the RayCaster (the white dot) at the menu</Text>

                    <MyGazeButton title="Lapland Forest" asset="lapland_bos.jpg"/>
                    <MyGazeButton title="Arctic Circle Sweden" asset="lapland_tipi.jpg"/>
                    <MyGazeButton title="USA Canyonlands" asset="usa_needles.jpg"/>
                    <MyGazeButton title="ALTA deployment" asset="vr_alta.jpg"/>
                    <MyGazeButton title="MoM Docs" asset="vr_diagrams.jpg"/>
                    <MyGazeButton title="Galaxy" asset="galaxy.jpg"/>
                </View>
        );
    }
}