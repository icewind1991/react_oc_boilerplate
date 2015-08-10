'use strict';

import React from 'react/addons';

import {App} from './App.js';

// Enable React devtools
window.React = React;

$(document).ready(() => {
	React.render(<App />, document.getElementById('content'));
});
