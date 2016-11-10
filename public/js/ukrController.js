app.controller('blogController',['BlogService', '$scope', function($scope, BlogService){
	// $scope.posts = BlogService.get;
	console.log(BlogService.all);

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

}]);

app.controller('logController',['$scope', '$http', '$rootScope', '$location', '$state', function($scope, $http, $rootScope, $location, $state){

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
}]);

app.controller('accountController',['$scope', function($scope){}]);



