'use strict';

export default function routes($stateProvider) {
  'ngInject';

  $stateProvider.state('pets', {
    url: '/pets',
    template: '<pets></pets>'
  });
}
