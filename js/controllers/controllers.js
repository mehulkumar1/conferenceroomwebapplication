'use strict';

angular.module('conferenceroom.controllers', [])
.controller('MainCtrl', function($scope) {





		$scope.locationchecklist = [

				{ id:  1, name: "Cybage Towers" },
				{ id:  2, name: "Gandhinagar"  },
				{ id:  3,name: "Hydarabad" },
				{ id:  4,name: "West Avenue"},

		];





		$scope.checkAll = function () {
		        if ($scope.selectedAll) {
		            $scope.selectedAll = true;
		        } else {
		            $scope.selectedAll = false;
		        }
		        angular.forEach($scope.locationchecklist, function (location) {
		            location.isChecked = $scope.selectedAll;
		        });


		};







	$scope.facilitychecklist = [
			{ id: 1,name: "Multiple Computers"},
			{ id: 2, name: "Network Point"},
			{ id: 3,name: "Projector"},
			{ id: 4,name: "Video Conferensing" },
			{ id: 5, name: "White Board"},

	];

















})
