const commentForm = document.querySelector("#commentForm");
const videoContainer = document.querySelector("#videoContainer");
const commentArea = commentForm.querySelector("textarea");
const commentBtn = commentForm.querySelector("button");

const handlePostComment = (event) => {
  const text = commentArea.value;
  event.preventDefault();
  const id = videoContainer.dataset.id;
  if (!text) {
    return;
  }
  fetch(`/api/videos/${id}/comment`, {
    method: "POST",
    body: JSON.stringify({ text }),
    headers: { "Content-Type": "application/json" },
  });
  commentArea.value = "";
};
commentForm.addEventListener("submit", handlePostComment);
