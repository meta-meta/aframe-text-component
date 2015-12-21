// Browser distrubution of the A-Frame component.
(function () {
  if (!AFRAME) {
    console.error('Component attempted to register before AFRAME was available.');
    return;
  }
  // Register all components here.
  if (AFRAME.aframeCore) {
    AFRAME.aframeCore.registerComponent('text', require('./index').component);
  } else {
    AFRAME.registerComponent('text', require('./index').component);
  }
})();
