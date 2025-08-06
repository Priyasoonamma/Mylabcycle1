function addPost() {
  const postInput = document.getElementById("postInput");
  const postsSection = document.getElementById("posts");
  const postText = postInput.value.trim();

  if (postText === "") {
    alert("Please write something before posting!");
    return;
  }

  const postElement = document.createElement("div");
  postElement.classList.add("post");
  postElement.innerText = postText;
  postsSection.prepend(postElement);
  postInput.value = "";
}