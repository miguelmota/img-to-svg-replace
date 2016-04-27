(function(root) {
  'use strict';

  function imgToSvgReplace(elements) {
    const images = [];

    if (typeof elements === 'object' && elements.length) {
      [].slice.call(elements).forEach(images.push.bind(images));
    } else {
      images.push(elements);
    }

    images.filter(function(img) {
      if (!/Element/gi.test(Object.prototype.toString.call(img))) {
        return false;
      }

      return /\.svg($|\?)/gi.test(img.src);
    })
    .forEach(function(img) {
      const xhr = new XMLHttpRequest();

      xhr.addEventListener('load', function(event) {
        const target = event.currentTarget;

        if (target.status === 200 && target.response) {
          imgToSvgReplace._replaceNodeWithMarkup(img, target.response);
        }
      });

      xhr.open('GET', img.src);
      xhr.send();
    });
  }

  imgToSvgReplace._replaceNodeWithMarkup = function(node, markup) {
    const newNode = document.createElement('div');
    newNode.innerHTML = markup;

    node.parentNode.replaceChild(newNode.children[0], node);
  };

  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = imgToSvgReplace;
    }
    exports.imgToSvgReplace = imgToSvgReplace;
  } else if (typeof define === 'function' && define.amd) {
    define([], function() {
      return imgToSvgReplace;
    });
  } else {
    root.imgToSvgReplace = imgToSvgReplace;
  }

})(this);
