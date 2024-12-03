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
// Function to display comments
function displayComments() {
    const commentsContainer = document.getElementById('comments-container');
    commentsContainer.innerHTML = ''; // Clear existing comments

    const comments = JSON.parse(localStorage.getItem('comments')) || [];

    // Display all stored comments
    comments.forEach(comment => {
        const commentDiv = document.createElement('div');
        commentDiv.classList.add('comment');
        
        const commentText = `<span>${comment.user}</span><p>${comment.text}</p>`;
        commentDiv.innerHTML = commentText;

        commentsContainer.appendChild(commentDiv);
    });
}

// Function to add a new comment
function addComment() {
    const commentText = document.getElementById('comment-text').value.trim();

    if (commentText === '') {
        alert('Please write a comment before posting!');
        return;
    }

    const newComment = {
        user: 'Anonymous',  // Can be replaced with actual user input if needed
        text: commentText
    };

    // Get the current comments from localStorage
    const comments = JSON.parse(localStorage.getItem('comments')) || [];

    // Add the new comment to the list
    comments.push(newComment);

    // Store the updated comments back in localStorage
    localStorage.setItem('comments', JSON.stringify(comments));

    // Clear the textarea and re-display all comments
    document.getElementById('comment-text').value = '';
    displayComments();
}

// Initialize the comment section
displayComments();

