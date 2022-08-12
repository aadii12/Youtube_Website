let like = document.getElementById("like");
let dislike = document.getElementById("dislike");

var likes = 1000;
var dislikes = 10;

like.innerHTML = likes;
dislike.innerHTML = dislikes;

var statusLike = 0;
var statusDislike = 0;

function changeLike() {
    if(statusLike == 0) {
        likes += 1;
        like.innerHTML = likes;
        statusLike = 1;
    } else {
        likes -= 1;
        like.innerHTML = likes;
        statusLike = 0;
    }
}

function changeDislike() {
    if(statusDislike == 0) {
        dislikes += 1;
        dislike.innerHTML = dislikes;
        statusDislike = 1;
    } else {
        dislikes -= 1;
        dislike.innerHTML = dislikes;
        statusDislike = 0;
    }
}