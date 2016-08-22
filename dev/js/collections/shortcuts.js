import { Collection } from 'backbone';
import Shortcut from '../models/shortcut';

class ShortcutCollection extends Collection {
  initialize() {
    this.model = Shortcut;
    this.url = new Shortcut().url;
    this.defaults = new Shortcut().toJSON();
  }
}

export default ShortcutCollection;
