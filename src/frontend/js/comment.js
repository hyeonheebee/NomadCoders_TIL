const commentForm = document.querySelector("#commentForm");
const videoContainer = document.querySelector("#videoContainer");
const commentArea = commentForm.querySelector("textarea");
const commentSection = document.querySelector(".video__comments");
const handlePostComment = async (event) => {
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
    const { id: commentId } = await response.json();
    postRealtimeComment(text, commentId);
  }
};
if (commentForm) {
  commentForm.addEventListener("submit", handlePostComment);
}

const postRealtimeComment = (text, commentId) => {
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
};

const handleDeleteComment = async (event) => {
  const commentBubble = event.target.parentElement;
  const commentId = commentBubble.dataset.id;
  await fetch(`/api/comments/${commentId}`, {
    method: "DELETE",
  });

  commentBubble.remove();
};
//내가 클릭한 요소가 뭔지 찾지못하는 문제
////부모요소 안에서 찾아야한다..
commentSection.addEventListener("click", handleDeleteComment);
