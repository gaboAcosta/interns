'use strict';

export default function routes($stateProvider) {
  'ngInject';

  $stateProvider.state('contacts', {
    url: '/contacts',
    template: '<contacts></contacts>'
  });
}
