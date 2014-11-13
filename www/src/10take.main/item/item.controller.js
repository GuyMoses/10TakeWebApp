(function() {

	function ItemCtrl(log, stateParams, auth, stateParams,items) {
		var _this = this;
		this.id = stateParams.itemId;
		log.debug(items);
		items.find(stateParams.itemId)
			.success(function(data) {
				log.debug(data);
				_this.oneItem = data.item;
			})
	}

		ItemCtrl.$inject = ['$log', '$stateParams', '$auth','$stateParams','ItemsService'];

	angular.module('10take.item')
		.controller('ItemCtrl', ItemCtrl)
}());