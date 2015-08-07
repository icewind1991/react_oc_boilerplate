'use strict';

import React from 'react/addons';

import {Page} from './Page.js';

if (process.env.NODE_ENV !== 'production') {
	// Enable React devtools
	window.React = React;
}

$(document).ready(() => {
	React.render(<Page />, document.getElementById('content'));
});
