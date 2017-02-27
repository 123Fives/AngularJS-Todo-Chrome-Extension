var app = angular.module("todo", []);

var MainController = function($scope) {
  $scope.todoList = ["one", "two", "three"];
  $scope.addTask = function() {
    console.log("add clicked: " + $scope.addTaskName);
    console.log("Current list: " + $scope.todoList);
    if ($scope.addTaskName) {
      $scope.todoList.push($scope.addTaskName);
      $scope.addTaskName = "";
    }
  };
  $scope.deleteTask = function(taskName) {
    $scope.todoList = $scope.todoList.filter(function(d) {
      return d != taskName;
    });
  };
};

app.controller("MainController", ['$scope', MainController]);
