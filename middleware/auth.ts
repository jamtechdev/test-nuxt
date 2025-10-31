export default defineNuxtRouteMiddleware((to, from) => {
  // Check if the user data exists in localStorage
  const user = JSON.parse(localStorage.getItem('user')) || "";

  if (!user || !user.email) {
    // Redirect to login if no user found
    return navigateTo('/login'); 
  }

  // Optionally, check if the user is trying to access their own profile page
  if (to.params.id !== user.email) {
    // Redirect if they try to access another user's profile
    return navigateTo('/login');
  }
});