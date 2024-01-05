# This.GUI

`this.gui` is a comprehensive UI toolkit for web development, providing both pre-styled components and customizable themes for building responsive and modern user interfaces for [all.this](neurons.me/this).

## Installation

Install `this.gui` via npm:

```shell
npm install this.gui
```

Or using Yarn:

```shell
yarn add this.gui
```

## Usage

Include `this.gui` styles and scripts in your project to utilize the library.

### Including Styles

Link the `this.gui.css` in your HTML or import it in your JavaScript entry file:

In HTML:

```html
<link rel="stylesheet" href="/node_modules/this.gui/dist/this.gui.css">
```

In JavaScript:

```javascript
import 'this.gui/dist/this.gui.css';
```

### Including Scripts

Reference the `this.gui.js` in your HTML or import it if you're using a module bundler:

In HTML:

```html
<script src="/node_modules/this.gui/dist/this.gui.js"></script>
```

In JavaScript:

```javascript
import 'this.gui';
```

## Themes

`this.gui` offers light and dark themes that can be toggled using the `data-theme` attribute:

```html
<body data-theme="dark">
  <!-- Content styled with the dark theme -->
</body>
```

## Components

To use `this.gui` components, add the respective classes to your HTML elements:

```html
<button class="this-gui-button">Click Me</button>
<div class="this-gui-card">
  <h3 class="this-gui-card-title">Card Title</h3>
  <p class="this-gui-card-content">Card content...</p>
</div>
```

Refer to the official [documentation](https://suign.github.io/GUI) for detailed usage instructions and component references.

## Contribution

Contributions are welcome! To contribute to `this.gui`, please visit our [GitHub repository](https://github.com/suiGn/GUI).

## License

`this.gui` is available under the MIT license. See the LICENSE file for more info.