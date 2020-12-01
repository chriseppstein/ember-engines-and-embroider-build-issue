import Engine from '@ember/engine';

import loadInitializers from 'ember-load-initializers';
import Resolver from 'ember-resolver';

import config from './config/environment';

const { modulePrefix } = config;

export default class MyLazyEngine extends Engine {
  modulePrefix = modulePrefix;
  Resolver = Resolver;
}

loadInitializers(MyLazyEngine, modulePrefix);
