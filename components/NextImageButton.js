import React, {useState } from 'react';
import { View, Text, VrButton , Environment, StyleSheet, asset} from 'react-360';

// show the description as a collapsing text
export default function NextImageButton(props) {

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
            width: 200,
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

    const handleViewClick = () => {

        Environment.setBackgroundImage(asset('lapland_bos.jpg'),{format: '2D'})
    }


    return (
        <View >
            <VrButton style={styles.button} onClick={() => handleViewClick()} >
                <Text>The Forest</Text>
            </VrButton>
        </View>
    );
}
