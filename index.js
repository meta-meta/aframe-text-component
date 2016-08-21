/**
 * Text component for A-Frame.
 */
require('./lib/FontUtils');
require('./lib/TextGeometry');
require('./lib/helvetiker_regular.typeface');
var hash = require('object-hash');

module.exports.component = {
  schema: {
    bevelEnabled: { default: false },
    bevelSize: { default: 8, min: 0 },
    bevelThickness: { default: 12, min: 0 },
    curveSegments: { default: 12, min: 0 },
    font: { default: 'helvetiker' },
    height: { default: 0.05, min: 0 },
    size: { default: 0.5, min: 0 },
    style: { default: 'normal', oneOf: [ 'normal', 'italics' ] },
    text: { default: '' },
    weight: { default: 'normal', oneOf: [ 'normal', 'bold' ] }
  },

  init: function () {
    window.aframeTextGeometryCache = {};
  },

  /**
   * Called when component is attached and when component data changes.
   * Generally modifies the entity based on the data.
   */
  update: function (oldData) {
    var dataKey = hash(this.data);
    var geometry = aframeTextGeometryCache[dataKey] || getTextGeometry(this.data);
    aframeTextGeometryCache[dataKey] = geometry;
    this.el.object3D.geometry = geometry;
  }
};

function getTextGeometry (data) {
  return new THREE.TextGeometry(data.text, data);
}
