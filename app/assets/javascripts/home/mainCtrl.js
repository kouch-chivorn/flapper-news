angular.module('flapperNews')
  .controller('MainCtrl', [
    '$scope', 'Post',
    function($scope, Post) {
      $scope.posts = Post.posts;
      $scope.addPost = function() {
        if (!$scope.title) {
          return;
        }
        $scope.posts.push({
          title: $scope.title,
          view: 0,
          like: 0,
          link: $scope.link,
          comments: [{
            author: "Rattanak",
            body: "Love, Love, Love!",
            like: 0
          }, {
            author: "Norin",
            body: "I love animation!",
            like: 0
          }]
        });
        $scope.title = '';
        $scope.link = '';
      };
      $scope.incrementLikes = function(post) {
        post.like += 1;
      };
      $scope.orderProp = "title";
    }
  ]);
