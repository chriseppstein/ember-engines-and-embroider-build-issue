import EmberRouter from '@embroider/router';
import config from 'my-embroider-app/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.mount('my-lazy-engine', { as: "lazy" });
});
