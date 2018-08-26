import React from 'react';
import { render } from 'react-dom';
import { hot } from 'react-hot-loader';

import Demo from './Demo';

const HotDemo = hot(module)(Demo);

render(<HotDemo />, document.getElementById('root'));
