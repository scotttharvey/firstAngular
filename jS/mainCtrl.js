angular.module('friendsList').controller('mainCtrl', function($scope){

$scope.name = "Scott";

$scope.friends = [
  "scott",
  "brieden",
  "brett"
];
$scope.addFriend = function(){
$scope.friends.push($scope.newFriend)
$scope.newFriend = "";
  });

});
