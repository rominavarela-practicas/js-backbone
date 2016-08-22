import { Model } from 'backbone';
import { ServicesUrl } from '../commons/ServicesUrl.js'

class Shortcut extends Model {

  /**
   * @config url - model's base url
  **/
  initialize() {
    this.url = ServicesUrl + "/shortcut";
  }

  defaults() {
    return {
      id: null,
      base: ServicesUrl,
      url:'',
      timestamp: null
    };
  }

}

export default Shortcut;
