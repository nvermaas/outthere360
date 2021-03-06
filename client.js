// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"

import {ReactInstance, Location} from 'react-360-web';
import SimpleRaycaster from 'simple-raycaster';
import WebVRPolyfill from 'webvr-polyfill';
const polyfill = new WebVRPolyfill();

function init(bundle, parent, options = {}) {

  const r360 = new ReactInstance(bundle, parent, {
    // Add custom options here
    fullScreen: true,
    ...options,
  });

  // Create a location two meters in front of the user, and one meter down
  const location = new Location([0, -1, -2]);

  // Render your app content to the default cylinder surface

  r360.renderToSurface(
    r360.createRoot('outthere360', { /* initial props */ }),
    r360.getDefaultSurface()
  );

//    // Render to this location
//    r360.renderToLocation(
//        r360.createRoot('outthere360'),
//        location,
//    );

  // Load the initial environment
  r360.compositor.setBackground(r360.getAssetURL('outthere360.jpg','2D'));

  // raycaster for VR
  //r360.controls.clearRaycasters();
  //r360.controls.addRaycaster(SimpleRaycaster);
}

window.React360 = {init};
