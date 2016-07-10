"use strict";
var DIALOG_CONTENT = 'DIALOG_CONTENT';
var APPROVE_VALUE = 'DIALOG_CONTENT';
var REJECT_VALUE = 'DIALOG_CONTENT';
var APPROVE_CONTENT = 'DIALOG_CONTENT';

var dialog = document.createElement('div');
dialog.setAttribute('style',
    'background-color: wheat;' +
    'width: 300px;' +
    'min-height: 100px;' +
    'position: absolute;' +
    'z-index: 1000;' +
    'top: 50%;' +
    'left: 50%;' +
    'transform: translate(-50%,-50%);' +
    'padding: 10px;' +
    'border: 2px solid lightgray;' +
    'outline: double 4px blanchedalmond;');

var showApprove = function (flag) {
    return flag && alert(APPROVE_CONTENT);
};


var contentText = document.createElement('div');
contentText.innerHTML = DIALOG_CONTENT;
contentText.setAttribute('style',
    'margin-bottom: 20px;');


var approveBtn = document.createElement('button');
approveBtn.textContent = APPROVE_VALUE;
approveBtn.setAttribute('style',
    'margin-left: 30px;');
approveBtn.addEventListener('click', function (evt) {
    showApprove(evt.target.textContent === APPROVE_VALUE);
});


var rejectBtn = document.createElement('button');
rejectBtn.textContent = REJECT_VALUE;
rejectBtn.addEventListener('click', function (evt) {
    showApprove(evt.target.textContent === APPROVE_VALUE);
});


var buttonGroup = document.createElement('div');
buttonGroup.setAttribute('style',
    'position: absolute;' +
    'bottom: 10px;' +
    'right: 10px;');
buttonGroup.appendChild(rejectBtn);
buttonGroup.appendChild(approveBtn);


dialog.appendChild(contentText);
dialog.appendChild(buttonGroup);

document.body.appendChild(dialog);