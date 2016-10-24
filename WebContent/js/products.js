(function(){
	var app = angular.module("store-products", []);
	app.directive('productPanels', function(){
		return {
			restrict: 'E',
			templateUrl: 'product-panels.html',
			controller: function(){

			    this.isSet = function(checkPanel) {
			      return this.panel === checkPanel;
			    };

			    this.setPanel = function(setPanel) {
			      this.panel = setPanel;
			    };
			},
			controllerAs: 'panels'
		};
	});

	app.directive('productTitle', function(){
		return {
			restrict: 'E',
			templateUrl: 'product-title.html'
		};
	});
	
	app.directive('productDescription', function(){
		return {
			restrict: 'A',
			templateUrl: 'product-description.html'
		};
	});

})();