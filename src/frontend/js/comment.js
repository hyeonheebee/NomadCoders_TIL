const commentForm = document.querySelector("#commentForm");
const commentArea = commentForm.querySelector("textarea");
const commentBtn = commentForm.querySelector("button");
const videoContainer = document.querySelector("#videoContainer");

const handlePostComment = (event) => {
  event.preventDefault();
  const text = commentArea.value;
  const id = videoContainer.dataset.id;
  console.log(id);
  fetch(`/videos/${id}/see`, {
    method: "POST",
  });
};

commentForm.addEventListener("submit", handlePostComment);
