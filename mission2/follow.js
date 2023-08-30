const followButton = document.getElementById("follow-button");
const unfollowButton = document.getElementById("unfollow-button");






document.addEventListener("DOMContentLoaded", function (){
    const followButton = document.getElementById("follow-button");
    const unfollowButton = document.getElementById("unfollow-button");

    let isFollowing = false;

    followButton.addEventListener("click", function (){
        if (!isFollowing){
            followUser();
        }
    });

    unfollowButton.addEventListener("click", function (){
        if (!isFollowing){
            unfollowUser();
        }
    });

    function followUser() {
        console.log("Following user");
        isFollowing = true;
        updateButtonState();
    }

    function unfollowUser() {
        console.log("Unfollowing user");
        isFollowing = false;
        updateButtonState();
    }

    function updateButtonState() {
        if (isFollowing) {
            followButton.style.display = "none";
            unfollowButton.style.display = "block";
        } else {
            followButton.style.display = "block";
            unfollowButton.style.display = "none";
        }
    }
});