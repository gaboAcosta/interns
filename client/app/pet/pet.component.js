import angular from 'angular';
import uiRouter from 'angular-ui-router';
import routing from './pet.routes';

class PetController {

  /*@ngInject*/
  constructor($http) {
    this.$http = $http;
    this.pets = [];
  }

  $onInit() {
    this.$http.get('/api/pets')
      .then(response => {
        this.pets = response.data;
      });
  }

  destroy(id){
    alert(`Deleting pet ${id}`)
  }
}

export default angular.module('internsApp.pets', [uiRouter])
  .config(routing)
  .component('pets', {
    template: require('./pet.html'),
    controller: PetController
  })
  .name;
