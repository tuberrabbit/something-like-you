"use strict";
var DIALOG_CONTENT = 'DIALOG_CONTENT';
var APPROVE_VALUE = '是的';
var APPROVE_CONTENT = 'APPROVE_CONTENT';
var REJECT_VALUE = '不是';
var CLOSE_VALUE = '&#10007';
var CLOSE_CONTENT = 'CLOSE_CONTENT';
var currentTranslateTimes = 4;

var showApproval = function (flag) {
    if (flag) {
        alert(APPROVE_CONTENT);
        document.body.removeChild(dialog);
        document.body.removeChild(screen);
    }
};

var switchValue = function (flag) {
    if (flag) {
        var btnValue = approveBtn.textContent;
        approveBtn.textContent = rejectBtn.textContent;
        rejectBtn.textContent = btnValue;
    }
};

var onSwitchValue = function (evt) {
    switchValue(evt.target.textContent === REJECT_VALUE);
};

var onShowApproval = function (evt) {
    showApproval(evt.target.textContent === APPROVE_VALUE);
};

var onTranslate = function (evt) {
    var ele = evt.target;
    ele.style.position = 'absolute';
    ele.style.transform = 'translateX(-100%)';
    var pos = -20;
    var target = 0;
    if (ele.style.top != '-20px') {
        pos = 0;
        target = -20;
    }
    var id = setInterval(frame, 0);

    function frame() {
        if (pos === target) {
            clearInterval(id);
            if (!--currentTranslateTimes) {
                rejectBtn.setAttribute('style',
                    'cursor: pointer;');
                rejectBtn.removeEventListener('mouseenter', onTranslate);
                rejectBtn.addEventListener('mouseenter', onSwitchValue);
                approveBtn.addEventListener('mouseenter', onSwitchValue);
            }
        } else {
            if (pos < target) {
                pos++;
            } else {
                pos--;
            }
            ele.style.top = pos + 'px';
        }
    }
};


var screen = document.createElement('div');
screen.setAttribute('style',
    'width: 100%;' +
    'height: 100%;' +
    'position: absolute;' +
    'z-index: 1000;' +
    'background-color: lightgray;' +
    'top: 0;' +
    'left: 0;' +
    'opacity: 0.3;');


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


var contentText = document.createElement('div');
contentText.innerHTML = DIALOG_CONTENT;
contentText.setAttribute('style',
    'margin-bottom: 20px;');


var approveBtn = document.createElement('button');
approveBtn.textContent = APPROVE_VALUE;
approveBtn.setAttribute('style',
    'margin-left: 30px;' +
    'cursor: pointer;');
approveBtn.addEventListener('click', onShowApproval);


var rejectBtn = document.createElement('button');
rejectBtn.textContent = REJECT_VALUE;
rejectBtn.setAttribute('style',
    'cursor: pointer;');
rejectBtn.addEventListener('click', onShowApproval);
rejectBtn.addEventListener('mouseenter', onTranslate);

var closeBtn = document.createElement('span');
closeBtn.innerHTML = CLOSE_VALUE;
closeBtn.setAttribute('style',
    'position: absolute;' +
    'top: 0;' +
    'right: 0;' +
    'cursor: pointer;');
closeBtn.addEventListener('click', function () {
    alert(CLOSE_CONTENT);
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
dialog.appendChild(closeBtn);

document.body.appendChild(screen);
document.body.appendChild(dialog);