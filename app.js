"use strict";
var DIALOG_CONTENT = 'gjslkdajfldsjalfjlsajglsjaflj';

var dialog = document.createElement('div');
dialog.setAttribute('style',
    'background-color: wheat;' +
    'width: 300px;' +
    'height: 100px;' +
    'position: absolute;' +
    'z-index: 1000;' +
    'top: 50%;' +
    'left: 50%;' +
    'transform: translate(-50%,-50%);' +
    'padding: 10px;' +
    'border: 2px solid lightgray;' +
    'outline: double 4px blanchedalmond;');

var content = document.createElement('div');
content.innerHTML = DIALOG_CONTENT;

dialog.appendChild(content);

document.body.appendChild(dialog);