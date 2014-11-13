(function() {

	function UserCtrl(log, stateParams, auth, stateParams, users) {
		var _this = this;
		this.id = stateParams.userId;
		this.user = auth.user.name;
		this.user = "Guy Moses";
		users.find(stateParams.userId)
			.success(function(data) {
				log.debug(data);
				_this.oneUser = data.user;
			})
	}

		UserCtrl.$inject = ['$log', '$stateParams', '$auth','$stateParams','UsersService'];

	angular.module('10take.user')
		.controller('UserCtrl', UserCtrl)
}());