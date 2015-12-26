Tasks = new Mongo.Collection('tasks');

if (Meteor.isClient) {
 
  // This code only runs on the client
  angular.module('simple-todos',['angular-meteor']);
 
  angular.module('simple-todos').controller('TodosListCtrl', ['$scope',
    function ($scope) {
 
      $scope.tasks = $meteor.collection(Tasks);
 
  }]);
}
