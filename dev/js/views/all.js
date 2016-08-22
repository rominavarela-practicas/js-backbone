import $ from 'jquery';
import { View } from 'backbone';
import ShortcutCollection from '../collections/shortcuts.js';
import template from '../templates/all.mu';

var view;

class AllView extends View {

  initialize() {
    view = this;
    view.content = $("#content");
    view.collection = new ShortcutCollection();
    view.collection.fetch({ success:function(model,res){
      view.render();
    }});
  }

  render() {
    view.content.html( template( {
      base:view.collection.defaults.base,
      shortcuts:view.collection.toJSON()
    } ));
  }

}

export default AllView;
