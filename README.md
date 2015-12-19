## aframe-text-component

A text component for [A-Frame](https://aframe.io) VR.

## Usage

Install.

```bash
npm install aframe-text-component
```

Register.

```js
AFrame = require('aframe-core');
AFrame.registerComponent('text', require('aframe-text-component'));
```

Use.

```html
<a-scene>
  <a-entity text="text: Hello, World!"></a-entity>
</a-scene>
```

| Property | Description | Default Value |
| -------- | ----------- | ------------- |
| bevelEnabled |             | false              |
| bevelSize |             | 8              |
| bevelThickness |             | 12              |
| curveSegments |             | 12              |
| font |             | helvetiker              |
| height |             | 0.05              |
| size |             | 0.5              |
| style |             | normal              |
| text |             | None              |
| weight |             | normal              |
