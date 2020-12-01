import Application from 'my-embroider-app/app';
import config from 'my-embroider-app/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();
