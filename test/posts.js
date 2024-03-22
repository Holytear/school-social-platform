async function fetchPosts() {
    const response = await fetch('/api/posts'); // Replace with your API endpoint
    const data = await response.json();
    return data;
  }

  fetchPosts()
  .then(posts => {
    const postsContainer = document.querySelector('.posts-container');
    posts.forEach(post => {
      const postElement = document.createElement('div');
      postElement.classList.add('post');

      // Add elements for profile picture, author name, post content, etc.
      // based on the data you receive from the API

      postsContainer.appendChild(postElement);
    });
  });


