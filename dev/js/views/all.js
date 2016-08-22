import $ from 'jquery';
import { View } from 'backbone';
import ShortcutCollection from '../collections/shortcuts.js';
import template from '../templates/all.mu';

var view;

class AllView extends View {

  initialize() {
    view = this;
    view.collection = new ShortcutCollection();
    view.content = $("#content");
  }

  render() {
    view.content.html( template({}) );
    /*view.createShortcutInput = $("#createShortcutInput");
    view.createShortcutBtn = $("#createShortcutBtn");
    view.createShortcutBtn.click(view.createShortcut);*/
  }

  /*createShortcut() {
    view.model.set('url',view.createShortcutInput.val());

    view.model.save([],{ success:function(model,res){

      if(res.success) {
        view.model.set( res.shortcut );
        view.render();
      }

    }});
  }*/

}

export default AllView;
