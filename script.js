// Sample data for posts (can be fetched from a server)
const posts = [
    { id: 1, title: 'First Post', content: 'This is the content of the first post.' ,image:'./image/OIP.jpeg ' },
    
    { id: 2, title: 'Second Post', content: 'This is the content of the second post.', image:'./image/img2.jpg'},
    { id: 3, title: 'Third Post', content: 'This is the content of the third post.',  image:'./image/img3.jpg'},
    { id: 4, title: 'Fourth Post', content: 'This is the content of the fourth post.' ,image:'./image/img4.jpeg ' },
    
    { id: 5, title: 'Fifth Post', content: 'This is the content of the fifth post.', image:'./image/img7.jpeg'},
    { id: 6, title: 'Sixth Post', content: 'This is the content of the sixth post.',  image:'./image/img5.webp'}
];


// Function to display posts on the page
function displayPosts(posts) {
    const postList = document.getElementById('postList');
    postList.innerHTML = '';

    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('post');
        postElement.innerHTML = `
            <h2>${post.title}</h2>
            <p>${post.content}</p>
            <img src=${post.image} width="400px" height="300px">

        `;
        postList.appendChild(postElement);
    });
}

// Initial display of posts
displayPosts(posts);

// Search functionality
const searchInput = document.getElementById('searchInput');
searchInput.addEventListener('input', function() {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredPosts = posts.filter(post =>
        post.title.toLowerCase().includes(searchTerm) ||
        post.content.toLowerCase().includes(searchTerm)
    );
    displayPosts(filteredPosts);
});
/* Additional styling for profile page */

