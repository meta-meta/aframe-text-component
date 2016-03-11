## aframe-text-component

> Currently working with [release candidate builds of A-Frame](https://github.com/aframevr/aframe/tree/master/dist). Use https://github.com/ngokevin/aframe-text-component/commit/4e0ce354cb688b27a93eee05180a95ca3763b63e for A-Frame 0.1.2.

A text geometry component for [A-Frame](https://aframe.io) VR. The text geometry
component (shape) can be paired with the [material component](https://aframe.io/docs/components/material.html) (appearance).

![screenshot](https://cloud.githubusercontent.com/assets/674727/11915616/59342aca-a663-11e5-9b6b-8a0b243fe5da.png)

### Usage

#### Browser Installation

Install and use by directly including the [browser files](dist):

```html
<head>
  <title>My A-Frame Scene</title>
  <script src="https://aframe.io/releases/latest/aframe.min.js"></script>
  <script src="https://rawgit.com/ngokevin/aframe-text-component/master/dist/aframe-text-component.min.js"></script>
</head>

<body>
  <a-scene>
    <a-entity text="text: What's up"></a-entity>
  </a-scene>
</body>
```

#### NPM Installation

Install via NPM:

```bash
npm install aframe-text-component
```

Then register and use.

```js
require('aframe');
require('aframe-text-component');
```

## Usage

Install.

```bash
npm install aframe-text-component
```

Register.

```js
require('aframe');
require('aframe-text-component');
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
require('aframe');
require('aframe-text-component');
require('./fonts/myfont.typeface');
```

## Properties

| Property       | Description | Default Value |
| --------       | ----------- | ------------- |
| bevelEnabled   |             | false         |
| bevelSize      |             | 8             |
| bevelThickness |             | 12            |
| curveSegments  |             | 12            |
| font           |             | helvetiker    |
| height         |             | 0.05          |
| size           |             | 0.5           |
| style          |             | normal        |
| text           |             | None          |
