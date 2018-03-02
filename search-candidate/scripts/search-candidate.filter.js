myApp.filter('searchCandidates', function(){
	return function(lists, searchInfo) {
		if(!searchInfo) {
			return lists;
		}
		var searchResults = []
		searchInfo = searchInfo.toLowerCase();
		lists.forEach((item) => {
			if(item.firstName.toLowerCase().indexOf(searchInfo) !== -1 
			|| item.lastName.toLowerCase().indexOf(searchInfo) !== -1 
			|| item.title.toLowerCase().indexOf(searchInfo) !== -1) {
				searchResults.push(item);
			}
		})
		return searchResults;
	}
})