import React, {useState } from 'react';
import { View,Text, StyleSheet } from 'react-360';

import MyGazeButton from './MyGazeButton'

export default function MyApp(props) {

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
    });

    return (
      <View style={styles.panel}>
            <Text style={styles.info}>Drag the menu to the center screen. In VR mode, aim the RayCaster (the white dot) at the menu</Text>

            <MyGazeButton title="Lapland Forest" asset="lapland_bos.jpg"/>
            <MyGazeButton title="Arctic Circle Sweden" asset="lapland_tipi.jpg"/>
            <MyGazeButton title="USA Canyonlands" asset="usa_needles.jpg"/>
            <MyGazeButton title="Arctic Norway" asset="norway_saltfjallet.jpg"/>
            <MyGazeButton title="MoM Docs" asset="vr_diagrams.jpg"/>
            <MyGazeButton title="Galaxy" asset="galaxy.jpg"/>
      </View>

    );
}

