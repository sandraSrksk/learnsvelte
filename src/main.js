//import './App.svelte'

// const app = new App ({})
//console.log('hello');
//import hello from './hello.js';
//hello.hello('esmodule');
//let hello2 = require('./hello2.js');

import './style.scss';
import App from './App.svelte';

const app = new App({
  target: document.getElementById('app'),
})

export default app;