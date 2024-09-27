// Paths to your uploaded images
const images = {
    recentPosts: [
        "/mnt/data/Screenshot 2024-09-27 194509.png",  // Replace with actual paths
        "/mnt/data/Screenshot 2024-09-27 194605.png",
        "/mnt/data/Screenshot 2024-09-27 194744.png"
    ],
    reviews: "/mnt/data/Screenshot 2024-09-27 194509.png", // Example image for reviews
    specialOffers: "/mnt/data/Screenshot 2024-09-27 194928.png",
    whyChooseUs: "/mnt/data/Screenshot 2024-09-27 194744.png"
};

// Data for the dynamic sections
const content = {
    recentPosts: `
        <h2>Recent Posts</h2>
        <div class="post">
            <img src="${images.recentPosts[0]}" alt="Post 1">
            <h3>My Trip to Athens</h3>
            <p>It would seem that in a city...</p>
        </div>
        <div class="post">
            <img src="${images.recentPosts[1]}" alt="Post 2">
            <h3>Vilnius Resorts</h3>
            <p>I haven't seen any resorts...</p>
        </div>
        <div class="post">
            <img src="${images.recentPosts[2]}" alt="Post 3">
            <h3>Tips for Flying on a Plane</h3>
            <p>If you have a fear of flying...</p>
        </div>
    `,
    reviews: `
        <h2>Reviews</h2>
        <div class="review">
            <img src="${images.reviews}" alt="Reviewer 1">
            <p>"Best service ever!" - John</p>
        </div>
    `,
    specialOffers: `
        <h2>Special Offers</h2>
        <div class="offer">
            <img src="${images.specialOffers}" alt="Offer 1">
            <p>Wilderness Club at Big Cedar...</p>
        </div>
    `,
    whyChooseUs: `
        <h2>Why Choose Us</h2>
        <div class="why-us">
            <img src="${images.whyChooseUs}" alt="Why Choose Us">
            <p>We offer the best services at the most competitive prices...</p>
        </div>
    `
};

