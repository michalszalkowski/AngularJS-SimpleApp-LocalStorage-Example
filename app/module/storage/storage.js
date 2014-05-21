angular.module('storageModule', [])
    .service('storageService', function () {

        this.savePost = function (object) {

            object.id = new Date().getTime();

            var posts = [];
            var postsObj = this.getPosts();
            if (postsObj != null) {
                postsObj.forEach(function (entry) {
                    posts.push(JSON.stringify(entry));
                });
            }
            posts.push(JSON.stringify(object));
            localStorage.setItem("posts", JSON.stringify(posts));
        }

        this.getPosts = function () {
            var arrOfStr = localStorage.getItem("posts");
            var posts = [];
            var postsObj = JSON.parse(arrOfStr);
            if (postsObj != null) {
                postsObj.forEach(function (entry) {
                    posts.push(JSON.parse(entry));
                });
            }
            return posts;
        }

        this.deletePost = function (id) {

        }
    });

