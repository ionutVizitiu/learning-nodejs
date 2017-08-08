'use strict';

let buf = new ArrayBuffer(8);
let view = new Int32Array(buf);

view[0] = 5;
view[1] = 15;

console.log(view);