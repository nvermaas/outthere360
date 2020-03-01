import React  from 'react';
import { StyleSheet } from 'react-360';

export default function SetStyles(props) {
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
            width: 250,
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
}

