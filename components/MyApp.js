import React, {useState } from 'react';
import Main from './Main.js';
import Astron from '../scenes/AstronScene.js'

import { NativeModules } from 'react-360'

export default function MyApp(props) {
    const Location = NativeModules.Location;
    console.log('location = '+Location.search);

    // read parameters from url
    let parameters = Location.search

    // extract url
    // ?url=http://uilennest.net/outthere360/static_assets/norway_saltfjallet.jpg&title=Arctic%20Norway

    const urlParams = new URLSearchParams(Location.search);
    let scene = urlParams.get('scene')  // astron, nordic
    let url = urlParams.get('url')
    let title = urlParams.get('title')

    console.log('url: '+url)
    return (
        <Main scene={scene} url={url} title={title}/>
    );
}

