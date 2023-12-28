/**
 * This file serves as the entry point for the module, exporting components and utilities.
 */

// Components

/** 
 * `UserAvatar` is a component that displays a user's avatar image.
 * It supports various sizes and can handle fallbacks if the image source fails to load.
 */
export { default as UserAvatar } from './components/UserAvatar';

/** 
 * `LoginForm` is a component that provides a user interface for signing in.
 * It includes fields for the username and password, and a submit button.
 */
export { default as LoginForm } from './components/LoginForm';

/** 
 * `DataGrid` is a component for displaying tabular data.
 * It features sorting, filtering, and pagination to handle large data sets interactively.
 */
export { default as DataGrid } from './components/DataGrid';

// Hooks

/** 
 * `useUser` is a custom hook for managing user state and interactions.
 * It provides an easy interface to log in, log out, and check the current user status.
 */
export { useUser } from './hooks/useUser';

// Utilities

/** 
 * `fetchData` is a utility function for making API calls.
 * It abstracts the fetching logic and error handling to simplify data retrieval operations.
 */
export { fetchData } from './utils/fetchData';
