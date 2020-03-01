import React, {useState } from 'react';
import { View,Text, StyleSheet, Environment, asset } from 'react-360';
//import styles from 'styles'
import my_styles from '../styles'

import MyGazeButton from '../components/MyGazeButton'

export default function AstronScene(props) {

    const styles = StyleSheet.create(my_styles);

    // set the default background for this scene
    Environment.setBackgroundImage(asset("vr_dwingeloo_telescope2.jpg"))

    return (

            <View style={styles.panel}>
                <Text style={styles.info}>Drag the menu to the center screen. In VR mode, aim the RayCaster (the white dot) at the menu</Text>

                <MyGazeButton title="ALTA deployment" asset="vr_alta.jpg"/>
                <MyGazeButton title="MoM Docs" asset="vr_diagrams.jpg"/>
                <MyGazeButton title="Galaxy" asset="galaxy.jpg"/>
            </View>

    );
}

