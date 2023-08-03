# Ralph's Craft - Crafting Courses Website

Welcome to Ralph's Craft, the ultimate destination for crafting courses during summer time! This platform offers a wide range of creative classes taught by expert instructors to enrich your summer with fun and learning. Whether you're an aspiring artisan or a seasoned crafting enthusiast, Ralph's Craft has something exciting for everyone.

## Features

- Three User Roles: Ralph's Craft implements a user role system with three distinct roles - Admin, Instructor, and Student - each with specific privileges and functionalities.

### Admin Features
- Admin email and pass: ralph@gmail.com 12345@Aa

- Class Approval: The Admin has the authority to approve or deny classes added by Instructors. They can ensure that only high-quality and relevant courses are available on the platform.

- Feedback Management: Admins can provide valuable feedback to Instructors regarding their classes, fostering continuous improvement in course offerings.

- User Management: Admins can manage users by promoting them to the Instructor or Admin role, granting them specific permissions accordingly.

### Instructor Features

- Course Creation: Instructors can add new classes to the platform, allowing them to share their crafting expertise with eager students.

- Class Modification: Instructors have the flexibility to update and modify the details of their existing courses to keep them up-to-date.

### Student Features

- Course Enrollment: Students can explore and select from a variety of Admin-approved classes available on the platform.

- Secure Payment: To ensure a seamless payment experience, Ralph's Craft has integrated React Stripe to handle payment transactions securely.

## Technologies Used

### Front-end

- React
- Tailwind CSS
- Swiper JS
- SweetAlert
- Axios
- React Queries
- React Hook Form

### Back-end

- MongoDB
- Express.js
- JSON Web Tokens (JWT)
- Stripe

## Getting Started

Follow these instructions to set up a local development environment and run Ralph's Craft website on your machine.

1. Clone the repository:

```bash
git clone https://github.com/your-username/ralphs-craft.git
cd ralphs-craft
```

2. Install dependencies:

```bash
# Navigate to the client directory and install front-end dependencies
cd client
npm install

# Navigate to the server directory and install back-end dependencies
cd ../server
npm install
```

3. Configuration:

   - Create a `.env` file in the `server` directory and set the necessary environment variables such as MongoDB connection string, JWT secret, Stripe API keys, etc.

4. Run the application:

```bash
# Start the front-end development server
cd client
npm start

# Start the back-end server
cd ../server
npm start
```

5. Access the website:

Visit `https://ralph-crafts-auth.web.app/` in your web browser to access Ralph's Craft website.

## Contributors

- [Soyed Arif](https://github.com/soyedarif)

If you'd like to contribute to Ralph's Craft, feel free to open pull requests or issues in the GitHub repository.

## License

This project is licensed under the [soyedarif]().

## Acknowledgments

- Thanks to all the Instructors for sharing their crafting expertise.
- Special thanks to the Admins for ensuring the quality of courses.
- And, of course, to all the Students for being a part of the crafting community!

---

We hope Ralph's Craft brings joy and inspiration to your crafting journey. Happy crafting during summer time! 🎨✨
