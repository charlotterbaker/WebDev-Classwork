//Charlotte Baker CSCE 242
const showBtn = document.getElementById("showBtn");
const hideBtn = document.getElementById("hideBtn");
const displayImage = document.getElementById("displayImage");
const imageContainer = document.getElementById("imageContainer");

showBtn.addEventListener("click", () => {
    displayImage.src = "cute.jpg"; 
    imageContainer.style.display = "block";
});

hideBtn.addEventListener("click", () => {
    displayImage.src = "";
    imageContainer.style.display = "none";
});



const danceBtn = document.getElementById("danceBtn");
const animationBox = document.getElementById("animationBox");

danceBtn.addEventListener("click", () => {
    animationBox.innerHTML = "🤩";
    animationBox.ariaSetSize = 40;
    animationBox.classList.add("animate");
    setTimeout(() => {
        animationBox.classList.remove("animate");
    }, 1000);
});


const productNameInput = document.getElementById("productName");
const commentInput = document.getElementById("comment");
const ratingInput = document.getElementById("rating");
const usernameInput = document.getElementById("username");
const addCommentBtn = document.getElementById("addCommentBtn");
const commentContainer = document.getElementById("commentContainer");

addCommentBtn.addEventListener("click", () => {
    const productName = productNameInput.value;
    const comment = commentInput.value;
    const rating = ratingInput.value;
    const username = usernameInput.value;

    if (productName && comment && rating && username) {
        const commentBox = document.createElement("div");
        commentBox.classList.add("comment-box");
        commentBox.innerHTML = `<strong>${productName}</strong><br>Comment: ${comment}<br>Rating: ${rating}<br>Username: ${username}`;

        commentContainer.appendChild(commentBox);


        productNameInput.value = "";
        commentInput.value = "";
        ratingInput.value = "";
        usernameInput.value = "";
    } else {
        alert("Please fill in all fields.");
    }
});
