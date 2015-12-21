// Browser distrubution of the A-Frame component.
(function () {
  if (!AFRAME) {
    console.error('Component attempted to register before AFRAME was available.');
    return;
  }
  // Register all components here.
  if (AFRAME.aframeCore) {
    AFRAME.aframeCore.registerComponent(require('./index').component);
  } else {
    AFRAME.registerComponent(require('./index').component);
  }
})();
