'use strict';

import angular from 'angular';
import SignupController from './signup.controller';

export default angular.module('internsApp.signup', [])
  .controller('SignupController', SignupController)
  .name;
