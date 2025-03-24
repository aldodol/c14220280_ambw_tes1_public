async function fetchPosts() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const posts = await response.json();
        displayPosts(posts);
    } catch (error) {
        console.error('Error fetching posts:', error);
    }
}

function displayPosts(posts) {
    const postsContainer = document.getElementById('posts');
    if (!postsContainer) return;

    postsContainer.innerHTML = posts.map(post => `
        <div class="post-card">
            <h2>${post.title}</h2>
            <p>${post.body}</p>
            <span class="post-id">Post ID: ${post.id}</span>
        </div>
    `).join('');
}

// Initialize posts on home page
if (window.location.pathname === '/' || window.location.pathname === '/index.html') {
    fetchPosts();
}