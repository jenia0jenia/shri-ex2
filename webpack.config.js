'use strict';

const path = require('path');
const PUBLIC_PATH = path.join(__dirname, 'public');

const JS_PATH = path.join(PUBLIC_PATH, 'js');
const JS_OUT_PATH = path.join(JS_PATH, 'c');
const JS_INDEX = path.join(JS_PATH, 'index.js');
const JS_OUT_FILE = 'script.js';

module.exports = {
    // mode: 'development',
    entry: JS_INDEX,
    output: {
        path: JS_OUT_PATH,
        filename: JS_OUT_FILE
    }
};