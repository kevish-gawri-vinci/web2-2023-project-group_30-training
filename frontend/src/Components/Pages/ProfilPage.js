const ProfilePage = async () => {
    try {
        const response = await fetch('/api/user/profile'); // Replace with your API endpoint
        const userData = await response.json();

        const main = document.querySelector('main');
        main.innerHTML = `
            <div class="container">
                <h1>User Profile</h1>
                <div class="profile-details">
                    <p><strong>Name:</strong> ${userData.name}</p>
                    <p><strong>Email:</strong> ${userData.email}</p>
                    <p><strong>Age:</strong> ${userData.age}</p>
                    <p><strong>Location:</strong> ${userData.location}</p>
                    <!-- Add more user details here -->
                </div>
            </div>
        `;
    } catch (error) {
        console.error('Error fetching user data:', error);
    }
};

export default ProfilePage;