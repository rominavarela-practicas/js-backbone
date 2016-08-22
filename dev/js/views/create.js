import $ from 'jquery';
import { View } from 'backbone';
import Shortcut from '../models/shortcut.js';
import template from '../templates/create.mu';

var view;

class CreateView extends View {

  initialize() {
    view = this;
    view.model = new Shortcut();
    view.content = $("#content");
  }

  render() {
    view.content.html( template({
      shortcut: view.model.toJSON()
    }) );
    view.createShortcutInput = $("#createShortcutInput");
    view.createShortcutBtn = $("#createShortcutBtn");
    view.createShortcutBtn.click(view.createShortcut);
  }

  createShortcut() {
    view.model.set('url',view.createShortcutInput.val());
    view.model.save([],{ success:function(model,res){
      view.render();
    }});
  }

}

export default CreateView;
