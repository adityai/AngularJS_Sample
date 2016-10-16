(function(){
	var app = angular.module("store", []);
	app.controller("StoreController", function(){
		this.products = gems;
	});

	app.controller("ReviewController", function(){
		this.review = {};
		
		this.addReview = function(product) {
			product.reviews.push(this.review);
			this.review = {};
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
