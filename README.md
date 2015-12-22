## aframe-text-component

A text geometry component for [A-Frame](https://aframe.io) VR. The text geometry
component (shape) can be paired with the [material component](https://aframe.io/docs/components/material.html) (appearance).

![screenshot](https://cloud.githubusercontent.com/assets/674727/11915616/59342aca-a663-11e5-9b6b-8a0b243fe5da.png)

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
  <a-entity text="text: Hello, World!" material="color: blue"></a-entity>
</a-scene>
```

## Using Different Fonts

The text component uses `typeface.js`, fonts defined in JS files for three.js.
typeface fonts can be generated from regular fonts using this [typeface
font generator](http://gero3.github.io/facetype.js/). You can also find some
sample generated fonts, currently in the `examples/fonts` directory in the [three.js
repository](https://github.com/mrdoob/three.js).

By default, the text component only comes with one typeface font, Helvetiker
(Regular). Each font is fairly large, from at least 60KB to hundreds of KBs.

To include a font for use with the text component, append or require the
typeface font *after* this component. This component uses `FontUtils` which
should be initialized before adding fonts.

For example in HTML:

```html
<html>
  <head>
    <script src="aframe-core.js"></script>
    <script src="aframe-text-component.js"></script>
    <script src="myfont.typeface.js"></script>
  </head>
  <body>
    <a-assets>
      <a-mixin id="font" text="font: myfont"></a-mixin>
    </a-assets>
    <a-entity mixin="font" text="text: Hello"></a-entity>
    <a-entity mixin="font" text="text: World"></a-entity>
  </body>
</html>
```

Or in JS:

```js
var AFrame = require('aframe-core');
var textComponent = require('aframe-text-component');
AFrame.registerComponent('text', textComponent);
require('./fonts/myfont.typeface');
```

## Properties

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
