//archivo que importa un módulo en CommonJS

const myModule = require('./myModule.js');
myModule.sayHello();

//archivo que importa un módulo en ES6
// type=module en package.json

import {sayHello} from './myModule.js';

sayHello();