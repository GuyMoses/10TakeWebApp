(function() {

	function HomeCtrl(log, stateParams, auth, items, borrow) {
		var _this = this;
		this.showable = true;
		this.user = auth.user.name;
		this.user = "Guy Moses";
		items.all()
			.success(function(data) {
				log.debug(data);
				_this.items = data.items;
			})

		/*
		borrow.all()
			.success(function(data) {
				log.debug(data);
				_this.userBorrows = data.borrows;
			})*/



		_this.borrowClicked = function(arg1){
			borrow.newBorrow(arg1)
				.success(function(data){
					log.debug(data)
					_this.showable = false;
				})
		};

		_this.borrowDelete = function(arg1){
			borrow.deleteBorrow(arg1)
			.success(function(data){
				log.debug(data)
				_this.showable = true;
			})
		}

		log.debug('home ctrl auth', auth);
		log.debug('home ctrl auth.user', auth.user);
	}
		HomeCtrl.$inject = ['$log', '$stateParams', '$auth','ItemsService','borrowService'];

	angular.module('10take.home')
		.controller('HomeCtrl', HomeCtrl)
}());