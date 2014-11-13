(function() {

	function HomeCtrl(log, stateParams, auth, items) {
		var _this = this;
		this.user = auth.user.name;
		this.user = "Guy Moses";
		items.all()
			.success(function(data) {
				log.debug(data);
				_this.items = data.items;
			})

		_this.borrowClicked = function(arg1){
			alert("Borrowed Item " + arg1);
		};

		log.debug('home ctrl auth', auth);
		log.debug('home ctrl auth.user', auth.user);
	}
		HomeCtrl.$inject = ['$log', '$stateParams', '$auth','ItemsService'];

	angular.module('10take.home')
		.controller('HomeCtrl', HomeCtrl)
}());