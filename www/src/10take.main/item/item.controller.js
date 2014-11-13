(function() {

	function ItemCtrl(log, stateParams, auth, stateParams) {
		this.id = stateParams.itemId;
	}

		ItemCtrl.$inject = ['$log', '$stateParams', '$auth','$stateParams'];

	angular.module('10take.item')
		.controller('ItemCtrl', ItemCtrl)
}());