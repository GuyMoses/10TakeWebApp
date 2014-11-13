(function() {

	function ItemCtrl(log, stateParams, auth, stateParams,items) {
		this.id = stateParams.itemId;
		log.debug(items);
		this.all = items.all;

		var doc = items.all;

		var result = getById(doc, 1);

		this.oneItem = result;

		function getById(arr, id) {
		    for (var d = 0, len = arr.length; d < len; d += 1) {
		        if (arr[d].id === id) {
		            return arr[d];
		        }
		    }
		}
	}

		ItemCtrl.$inject = ['$log', '$stateParams', '$auth','$stateParams','ItemsService'];

	angular.module('10take.item')
		.controller('ItemCtrl', ItemCtrl)
}());