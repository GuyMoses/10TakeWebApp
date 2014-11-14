(function(){
	function Items(http, URL, log){

		this.all = function() {
			return http.get(URL + '/items/',{params:{state: "free"}})
		}

		this.find = function(id){
			return http.get(URL + '/items/'+id)
		}
	}

	Items.$inject = ['$http', 'URL', '$log']; 

	angular.module('10take.services')
		.service('ItemsService',Items)
}());