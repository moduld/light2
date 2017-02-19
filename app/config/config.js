"use strict";

angular.module('app').config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/main');

    $stateProvider.state({
        name: 'main',
        url: '/main',
        component: 'mainView'
    });

    $stateProvider.state({
        name: 'new-notice',
        url: '/new-notice',
        component: 'newNotice'
    });

    $stateProvider.state({
        name: 'details',
        url: '/details/{id}',
        component: 'newNotice'
    })

}]);
