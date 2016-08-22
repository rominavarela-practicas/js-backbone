import { Collection } from 'backbone';
import Shortcut from '../models/shortcut';

class ShortcutCollection extends Collection {
  initialize() {
    this.model = Shortcut;
  }
}

export default ShortcutCollection;
