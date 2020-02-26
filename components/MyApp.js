import React, {useState } from 'react';
import { View,Text, StyleSheet } from 'react-360';
import NextImageButton from './NextImageButton'
import TheForestButton from './TheForestButton'
import TheTipiButton from './TheTipiButton'
import MyGazeButton from './MyGazeButton'

export default function MyApp(props) {

    const styles = StyleSheet.create({
        panel: {
            // Fill the entire surface
            width: 500,
            height: 300,
            backgroundColor: 'rgba(255, 255, 255, 0.4)',
            justifyContent: 'center',
            alignItems: 'center',
        },

    });

    return (
      <View style={styles.panel}>
            <TheForestButton/>
            <TheTipiButton/>
             <MyGazeButton/>
        </View>
    );
}

