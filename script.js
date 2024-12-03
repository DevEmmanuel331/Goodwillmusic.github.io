// Like and Dislike counts for each post
let likeCounts = [0, 0]; // Post 0 and Post 1
let dislikeCounts = [0, 0]; // Post 0 and Post 1

// Function to update like/dislike counts
function changeLikeDislike(type, postId) {
    if (type === 'like') {
        likeCounts[postId]++;
        document.getElementById(`like-count-${postId}`).textContent = likeCounts[postId];
    } else if (type === 'dislike') {
        dislikeCounts[postId]++;
        document.getElementById(`dislike-count-${postId}`).textContent = dislikeCounts[postId];
    }
}

// Search Functionality
function filterPosts() {
    const searchQuery = document.getElementById('search-bar').value.toLowerCase();
    const posts = document.querySelectorAll('.blog-post');

    posts.forEach(post => {
        const postTitle = post.getAttribute('data-title').toLowerCase();
        if (postTitle.includes(searchQuery)) {
            post.style.display = 'block'; // Show the post if it matches the search
        } else {
            post.style.display = 'none'; // Hide if it doesn't match
        }
    });
}

// Function to submit a comment
function submitComment(postId) {
    const commentInput = document.getElementById(`comment-input-${postId}`);
    const commentText = commentInput.value.trim();
    const commentList = document.getElementById(`comment-list-${postId}`);

    if (commentText !== "") {
        const newComment = document.createElement('div');
        newComment.classList.add('comment');
        newComment.innerHTML = `<p><strong>You:</strong> ${commentText}</p>`;
        commentList.appendChild(newComment);
        commentInput.value = ''; // Clear the input
    } else {
        alert("Please enter a comment.");
    }
}
// Function to filter blog posts based on search input
