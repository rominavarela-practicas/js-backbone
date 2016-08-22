import "../style/style.css"

import Backbone from 'backbone';
import { Router } from 'backbone';
import CreateView from './views/create.js';

const App = Router.extend({

  views: {
    create: new CreateView()
  },

  routes: {
    '': function(){this.views.create.render()}
  }

});

new App();
Backbone.history.start();
