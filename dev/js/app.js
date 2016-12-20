(function() {
  'use strict';
  angular.module('devmtnTravel', ['ui.router']).config([
    '$stateProvider',
    '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {

      $urlRouterProvider.otherwise('/');

      var homeState = {
        name: 'home',
        url: '/',
        templateUrl: '/html/views/about.html'
      }
      var packagesState = {
        name: 'packages',
        url: '/packages',
        templateUrl: '/html/views/packages.html'
      }
      var locationsState = {
        name: 'locations',
        url: '/locations',
        templateUrl: '/html/views/locations.html'
      }
      var bookedState = {
        name: 'booked',
        url: '/booked:id',
        templateUrl: '/html/views/booked.html'
      }
      var adventurersState = {
        name: 'adventurers',
        url: '/adventurers',
        parent:'home',
        templateUrl: '/html/views/about-adventurers.html'
      }
      var contactState = {
        name: 'contact',
        url: '/contact',
        parent:'home',
        templateUrl: '/html/views/contact.html'
      }
      var aboutState = {
        name: 'about',
        url: '/about',
        templateUrl: '/html/views/about.html'
      }

      // /packages - For all packages
      // /locations - For all locations
      // /booked/:id - Used to book a specific package.
      // /adventurers/ - This is going to be a sub route of the home page
      // /contact - This is going to be a sub route of the home page
      $stateProvider.state(homeState)
      .state(locationsState)
      .state(bookedState)
      .state(adventurersState)
      .state(contactState)
      .state(packagesState)
      .state(aboutState)
    }
  ]);
})();
