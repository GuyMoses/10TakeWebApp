(function(){

	function Config(stateProvider, urlRouterProvider) {
		stateProvider
			.state('app.item', {
					url: '/item/:itemId', // stateParams.userId
					views: {
						'main': {
							templateUrl: 'src/10take.main/item/item.html',
							controller: 'ItemCtrl as item'
						}
					}
				});

		// home page
		urlRouterProvider.otherwise('/app/item/');
	}
		Config.$inject = ['$stateProvider', '$urlRouterProvider'];


	angular.module('10take.item', [])
		// .run(Run)
		.config(Config)
}());