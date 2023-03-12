// const { container } = require("webpack");

const commentForm = document.querySelector("#commentForm");
const videoContainer = document.querySelector("#videoContainer");
const commentSection = document.querySelector(".video__comments");

const handlePostComment = async (event) => {
  const commentArea = commentForm.querySelector("textarea");
  const text = commentArea.value;
  event.preventDefault();
  const id = videoContainer.dataset.id;
  if (!text) {
    return;
  }
  const response = await fetch(`/api/videos/${id}/comment`, {
    method: "POST",
    body: JSON.stringify({ text }),
    headers: { "Content-Type": "application/json" },
  });
  commentArea.value = "";
  if (response.status === 201) {
    const { id: commentId, owner } = await response.json();
    postRealtimeComment(text, commentId, owner);
  }
};
if (commentForm) {
  commentForm.addEventListener("submit", handlePostComment);
}

const postRealtimeComment = (text, commentId, owner) => {
  const commentsContainer = document.querySelector(".video__comments");
  const commentBubble = document.createElement("li");
  const commentBubbleIcon = document.createElement("i");
  const commentBubbleSpan = document.createElement("span");
  const commentBubbleDelete = document.createElement("button");
  commentBubble.className = "video__comment";
  commentBubbleIcon.className = "fas fa-comment";
  commentBubbleDelete.className = "comment__delete";
  commentBubbleSpan.innerText = ` ${text}`;
  commentBubbleDelete.innerText = " ❌";
  commentBubble.appendChild(commentBubbleIcon);
  commentBubble.appendChild(commentBubbleSpan);
  commentBubble.appendChild(commentBubbleDelete);
  commentsContainer.prepend(commentBubble);
  commentBubble.dataset.id = commentId;
  commentBubbleIcon.dataset.id = owner;
};

const handleDeleteComment = async (event) => {
  if (event.target.localName === "button") {
    const commentBubble = event.target.parentElement;
    const commentBubbleIcon = commentBubble.querySelector("i");
    const commentId = commentBubble.dataset.id;
    await fetch(`/api/comments/${commentId}`, {
      method: "DELETE",
    });
    const commentOwner = commentBubbleIcon.dataset.id;
    const commentUser = commentForm.dataset.user;
    if (commentUser === commentOwner) {
      commentBubble.remove();
    }
  }
};
commentSection.addEventListener("click", handleDeleteComment);
