// Simulate follower and following count updates (replace with actual logic)
function updateCounts() {
    const followerCount = document.getElementById('follower-count');
    const followingCount = document.getElementById('following-count');
    
    followerCount.textContent = parseInt(followerCount.textContent) + 1;
    followingCount.textContent = parseInt(followingCount.textContent) - 1;
  }
  
  setInterval(updateCounts, 2000); // Update counts every 2 seconds (for demo)
  
  // Add event listener for edit profile button (replace with actual functionality)
  const editButton = document.getElementById('edit-profile-button');
  
  editButton.addEventListener('click', () => {
    alert('Edit Profile functionality not yet implemented!');
  });
  