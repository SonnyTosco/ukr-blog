app.controller('blogController',function($scope){
	$scope.posts = [{imageUrl:"http://placehold.it/150x150", 
	title:"The Praise Break", 
	author:"Noah",
	description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam atque ut modi distinctio voluptatibus exercitationem recusandae, dolore iure laborum nemo quis. Esse nesciunt dolorem magni fuga aspernatur voluptatum officiis consectetur!",
	voteCount:2,
	display: moment().calendar(),
	comments: [{author:"Aaron", text: "Sweet!"},{author:"Maksim", text: "Great article"}]

},{imageUrl:"http://placehold.it/150x150", 
title:"What's your Pre-Franz", 
author:"Pre-Franz",
description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam atque ut modi distinctio voluptatibus exercitationem recusandae, dolore iure laborum nemo quis. Esse nesciunt dolorem magni fuga aspernatur voluptatum officiis consectetur!",
voteCount:5,
display: moment().calendar(),
comments: [{author:"Sam", text: "Sweet!"},{author:"Matt", text: "Great article"}]
},
{imageUrl:"http://placehold.it/150x150", 
title:"Hola Hola", 
author:"Jazelle Prado",
description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam atque ut modi distinctio voluptatibus exercitationem recusandae, dolore iure laborum nemo quis. Esse nesciunt dolorem magni fuga aspernatur voluptatum officiis consectetur!",
voteCount:3,
display: moment().calendar(),
comments: [{author:"Donte", text: "Sweet!"},{author:"Mark", text: "Great article"}]
}];

$scope.post = {};
$scope.comment = {};




$scope.voteUp = function (post) {
	post.voteCount++;
};

$scope.voteDown = function (post){
	post.voteCount--;
};

$scope.postForm = false;
$scope.toggle = function() {
	$scope.postForm = !$scope.postForm;
};

$scope.postComment = false;
$scope.toggle2 = function() {
	this.postComment = !this.postComment;
	this.showComment = false;
};

$scope.showComment = false;
$scope.toggle3 = function() {
	this.showComment = !this.showComment;
	this.postComment = false;
};

$scope.addComment = function(post, comment){
	post.comments.push(comment);
	this.postComment = false;
	$scope.comment = {};
};

$scope.addPost = function(post){
    // post.date = new Date();
    post.date = moment();
    post.display = moment().calendar();	
    post.comments = [];
    post.voteCount = 0;
    $scope.posts.push(post);
    $scope.post = {};
    $scope.postForm = false;
};


$scope.predicate="date";
$scope.order =
function(predicate){
	$scope.reverse = 
	($scope.predicate === predicate)?
	!$scope.reverse : false;
	$scope.predicate = predicate;
};

});

app.controller('logController',function($scope, $http, $rootScope, $location, $state){

	$scope.account = function(){
		$state.go('form.account');
	};

	$scope.home = function(){
		$state.go('form.blog');
	};
	//Sign Up
	$scope.signup = function(user) {
		if (user.password == user.password2) {
			console.log('Almost there!');
			$http.post('/signup', user)
			.success(function(user) {
				$rootScope.currentUser = user;
				$state.go('form.blog');
			});
		}
	};

	$scope.login = function(user) {
		$http.post('/login', user)
		.success(function(response) {
			$rootScope.currentUser = response;
			$state.go('form.blog');
		});
	};

	$scope.logout = function() {
		$http.post("/logout")
		.success(function() {
			$rootScope.currentUser = null;
			$location.url("/login");
		});
	};
});

app.controller('accountController',function($scope){});



