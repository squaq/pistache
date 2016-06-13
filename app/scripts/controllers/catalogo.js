'use strict';

/**
 * @ngdoc function
 * @name pistacheApp.controller:CatalogoCtrl
 * @description
 * # CatalogoCtrl
 * Controller of the pistacheApp
 */
angular.module('pistacheApp')
  .controller('CatalogoCtrl', function ($http, $scope) {
     $scope.pecas = null;
    
    $http.get('data/catalogo.json').then(function(success){
        if(success.data.data){
            console.log(success.data.data);
            $scope.pecas = success.data.data;
        }
        
    }, function(error){
        console.log('error', error);    
    });
    
    
    
    
  });
