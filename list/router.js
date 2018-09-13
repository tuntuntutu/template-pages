import React from 'react';
import {Route, IndexRoute} from 'react-router';

import entry from './entry';


export default (
  <Route path="{{pageName}}">
    <Route path="">
      <IndexRoute component={entry}/>
    </Route>
  </Route>
);
