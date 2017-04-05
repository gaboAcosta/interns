import angular from 'angular';
import uiRouter from 'angular-ui-router';
import routing from './contact.routes';

class ContactController {

  /*@ngInject*/
  constructor($http) {
    this.$http = $http;
    this.contacts = [];
  }

  $onInit() {
    this.$http.get('/api/contacts')
      .then(response => {
        this.contacts = response.data;
      });
  }

  destroy(id){
    alert(`Deleting contact ${id}`)
  }
}

export default angular.module('internsApp.contacts', [uiRouter])
  .config(routing)
  .component('contacts', {
    template: require('./contact.html'),
    controller: ContactController
  })
  .name;
