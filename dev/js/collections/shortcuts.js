import { Collection } from 'backbone';
import Shortcut from 'models/shortcut';

class ShortcutsCollection extends Collection {
  constructor(models,options) {
    this.model = Shortcut;
    super(models, options);
  }
}

export default new ShortcutsCollection();
