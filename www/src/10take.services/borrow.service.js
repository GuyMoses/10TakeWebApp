(function(){

	function Borrow(http, URL, log){
		this.newBorrow = function(item_id){
			return http.post(URL+"/borrows",{item_id: item_id});
		}

		this.deleteBorrow = function(item_id){
			return http.delete(URL+"/borrows/"+item_id)
		}

		this.all = function(){
			return http.get(URL + '/borrows')
		}
	}

	Borrow.$inject = ['$http', 'URL', '$log'];

	angular.module('10take.services')
		.service('borrowService',Borrow)
}());