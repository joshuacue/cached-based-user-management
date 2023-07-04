# Users List Management App

## Overview

This Application is a NextJs app that demonstrates displaying and managing list of users.

## Technologies Used and Why
- **Next.js 13**: Chose this to familiarize with the new App API in Next.js 13 and leverage its improved routing capabilities.
- **React.js 18**: Due to being the latest version with more features and enhancements.
- **TypeScript 5.1**: Selected for its static typing to enhance the robustness and reliability of the application.
- **React-Query**: Used it to utilize its feature to handle api calls, including caching revalidation and rerendering optimization.
- **Redux-Toolkit**: Used to share state between pages (User and UserList) without refetching. And to demonstrates the simplicity of the latest Redux implementation.
- **TailwindCSS 3**: Easier to setup use. A utility-first CSS framework used for quickly building designs.
- **Jest/React-Testing-Library**: Required for testing React components.
- **Storybook 7**: This is to showcase the support for UX/UI designers and developers. Only one component is shown being rendered as an independent entity.

## Preview is available and Deployed on Vercel:
### [Vercel App Link](https://user-management-next.vercel.app/) - https://user-management-next.vercel.app/

## Local Development

Your application is developed on Node.js version 18.12.1 and uses Yarn as its package manager. The application can be accessed locally at `localhost:3000`. It includes two pages `/users-list` and `/users-list/{userName}`. 

To run it locally:
1. Clone the repository.
2. Ensure Node.js version 18.12.1 is installed.
3. Run `yarn` to install dependencies.
4. Run `yarn dev` to start the development server.
5. Open `http://localhost:3000` in your browser.

Build the project with `yarn build`. For testing, use `yarn test`. To start Storybook, use `yarn storybook`.

## Features

The application comes with several features including filtering, user card actions, and user profile view.

### Filter Feature

- `All`: Displays all users including favorites and non-deleted ones.
- `Favorites`: Shows only users marked as favorites that are not deleted.
- `Deleted`: Shows all deleted users. The Deleted filter acts like an archive, showing removed data even though it's not present elsewhere.

### User Card Feature

- Heart icon: Add or remove a user from favorites.
- Edit button: Opens a form to edit user details.
- Delete button: Deletes the user.

### User Profile Page

The user profile page has two main features:
- Back button: Returns to the User List.
- Edit button: Opens a form to update user details.

Please note that since there's no backend, all changes are stored only in React-Query's cache. The state resets when the page is reloaded.
