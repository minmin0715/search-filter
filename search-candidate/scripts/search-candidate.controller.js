myApp.controller('myCtrl', function($scope, $http, $state) {
    $scope.navigateToCandidate = (candidate) => {
		$state.go('people-details'); 
		$scope.candidateDetail = candidate;
    }
	$scope.navigateToCandidateLists = () => {
		$state.go('people-list'); 
	}
    $http({
        method: 'GET',
        url: './stubdata.json',
        dataType: 'json'
    }).then((response)=> {
		$scope.candidates = response.data
    })
})