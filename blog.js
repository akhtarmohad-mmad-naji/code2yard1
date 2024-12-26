// Data for the three blog posts
const blogData = {
    blog1: {
        title: "Content Tools & Techniques",
        date: "August 31, 2021",
        author: "John Doe",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
        images: [
            "assets/img/blog/blog_1.png",
            "assets/img/blog/blog_2.png",
            "assets/img/blog/blog_3.png"
        ],
        related: ["blog2", "blog3"]
    },
    blog2: {
        title: "Mobile App Typography",
        date: "May 1, 2021",
        author: "Jane Smith",
        description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.",
        images: [
            "assets/img/blog/blog_4.png",
            "assets/img/blog/blog_5.png",
            "assets/img/blog/blog_6.png"
        ],
        related: ["blog1", "blog3"]
    },
    blog3: {
        title: "Agencies Can Successfully Recover",
        date: "July 31, 2021",
        author: "Alex Brown",
        description: "Strate great experience and analysis the content. Agencies will find ways to innovate and thrive in difficult times.",
        images: [
            "assets/img/blog/blog_7.png",
            "assets/img/blog/blog_8.png",
            "assets/img/blog/blog_9.png"
        ],
        related: ["blog1", "blog2"]
    }
};

// When the page loads, display the appropriate blog content
window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const blogId = urlParams.get('blog'); // Get the selected blog ID from the URL query string
    
    if (blogData[blogId]) {
        const blog = blogData[blogId];
        
        // Set blog title, date, author, and description on the blog detail page
        document.getElementById('blog-title').innerText = blog.title;
        document.getElementById('blog-date').innerText = blog.date;
        document.getElementById('blog-author').innerText = "By " + blog.author;
        document.getElementById('blog-description').innerHTML = `<p>${blog.description}</p>`;
        document.getElementById('main-image').src = blog.images[0];
        
        // Display related posts
        const relatedPostsContainer = document.getElementById('related-posts-list');
        blog.related.forEach((relatedBlogId) => {
            const relatedBlog = blogData[relatedBlogId];
            const postHTML = `
                <div class="related-post">
                    <a href="blog-details.html?blog=${relatedBlogId}">
                        <img src="${relatedBlog.images[0]}" alt="${relatedBlog.title}">
                        <h4>${relatedBlog.title}</h4>
                    </a>
                </div>
            `;
            relatedPostsContainer.innerHTML += postHTML;
        });
    }
};
