// Theme toggle script for switching between light and dark modes
// Uses data-theme attribute on <html> and stores preference in localStorage

document.addEventListener("DOMContentLoaded", function () {
    const toggleBtn = document.getElementById("toggle-theme");
    const html = document.documentElement;
  
    // Load saved theme or default to light
    const currentTheme = localStorage.getItem("theme") || "light";
    html.setAttribute("data-theme", currentTheme);
    toggleBtn.textContent = currentTheme === "dark" ? "Light Mode" : "Dark Mode";
  
    toggleBtn.addEventListener("click", () => {
      const isDark = html.getAttribute("data-theme") === "dark";
      const newTheme = isDark ? "light" : "dark";
      html.setAttribute("data-theme", newTheme);
      localStorage.setItem("theme", newTheme);
      toggleBtn.textContent = newTheme === "dark" ? "Light Mode" : "Dark Mode";
    });
  });