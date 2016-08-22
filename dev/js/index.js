import "../style/style.css"

import Backbone from 'backbone';
import { Router } from 'backbone';
import CreateView from './views/create.js';
import AllView from './views/all.js';

const App = Router.extend({

  views: {
    create: new CreateView(),
    all: new AllView()
  },

  routes: {
    '': function(){this.views.create.render()},
    'all': function(){this.views.all.render()}
  }

});

new App();
Backbone.history.start();
