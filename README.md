# img-to-svg-replace

> Replace image tags containing SVG source urls with the SVG content.

Gets around the problem where links in SVGs don't work when used as image tag. This replaces the image tag with the SVG content. Came out of necessity when working with a platform that didn't allow direct SVG elements. Be aware it's still restricted to [CORS](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing).

# Demo

[https://lab.miguelmota.com/img-to-svg-replace](https://lab.miguelmota.com/img-to-svg-replace)

# Usage

```javascript
const imgToSvgReplace = require('img-to-svg-replace');

imgToSvgReplace(document.querySelectorAll('img'));
```

Turns

```html
<img src="js.svg">
```

To

```html
<svg>...</svg>
```

# License

MIT
