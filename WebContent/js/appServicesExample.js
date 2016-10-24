(function(){
	var app = angular.module("store", []);
	app.controller("StoreController", [ '$http', function($http){
		var store = this;
		store.products = [];
		$http.get("json/products.json").success(function(data){
			store.products = data;
		});
	}]);

	app.controller("ReviewController", function(){
		this.review = {};
		
		this.addReview = function(product) {
			product.reviews.push(this.review);
			this.review = {};
		};
	});
	
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
	var gems = [
	{
			name: "Dodecahedron",
			price: 2.95,
			description: "...",
			canPurchase: true,
			soldOut: false,
			reviews: [
			          {
			        	  stars: 5,
			        	  body: "I love this product!",
			        	  author:"joe@thomas.com",
			        	  terms: "checked",
			        	  color: "red",
			          }],
	},
	{
			name: "Pentagonal Gem",
			price: 5.95,
			description: "...",
			canPurchase: false,
			soldOut: false,
			reviews: [
			          {
			        	  stars: 1,
			        	  body: "This product sucks!",
			        	  author:"tim@hater.com",
			        	  terms: "checked",
			        	  color: "green"
			          }],
	}
]
}());
