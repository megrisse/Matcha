# Matcha - A Modern Dating Web Application

Matcha is a modern dating web application designed to provide users with a seamless experience in finding and connecting with potential matches. The application offers a range of features from user registration to real-time chat, ensuring a secure and enjoyable user journey.


## Technologies

**Backend:** Node.js, Express.js  
**Frontend:** React, Next.js  
**Database:** PostgreSQL  
**Deployment:** Docker


## Features

- **User Registration and Authentication:** Secure user registration with email verification and password reset functionality.
- **User Profiles:** Detailed user profiles with gender, sexual preferences, biography, interests, and photos.
- **Geolocation and Matching:** Matching profiles based on geographic location, common interests, and fame rating.
- **Advanced Search:** Filter and sort profiles by various criteria like age, location, and interests.
- **Real-time Chat:** Instant messaging between connected users with real-time notifications.
- **Notifications:** Alerts for profile views, likes, messages, and mutual likes.
- **Security:** Strong form validations, encrypted passwords, and protection against SQL injections.


## Setup

### Prerequisites
- Node.js
- npm or yarn
- PostgreSQL


### Installation

1. **Clone the repository:**
    ```bash
    git clone https://github.com/yourusername/matcha.git
    ```
2. **Navigate to the project directory:**
    ```bash
    cd matcha
    ```
3. **Install dependencies:**
    ```bash
    npm install
    ```
4. **Configure the database:**
    - Create a `.env` file in the root directory.
    - Add your PostgreSQL connection details to the `.env` file:
        ```
        DATABASE_URL=postgresql://user:password@localhost:5432/matcha
        ```

### Running the Application

1. **Start the development server:**
    ```bash
    npm run dev
    ```
2. **For production (using Docker):**
    ```bash
    docker-compose up
    ```
## Contributing

We welcome contributions to this project! Please see the CONTRIBUTING.md file for guidelines on how to contribute.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.


## Acknowledgements

Thank you to all the open-source contributors and libraries that made this project possible.

---

Happy coding! If you have any questions or issues, feel free to open an issue or contact the project maintainers.







