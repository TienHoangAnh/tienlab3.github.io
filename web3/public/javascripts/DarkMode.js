document.addEventListener("DOMContentLoaded", function() {
    const darkModeToggle = document.getElementById("darkModeToggle");
    const body = document.body;
  
    // Kiểm tra trạng thái Dark Mode từ Local Storage (nếu có)
    const isDarkModeEnabled = localStorage.getItem("darkMode") === "true";
  
    // Áp dụng Dark Mode nếu đã được bật
    if (isDarkModeEnabled) {
      enableDarkMode();
    }
  
    // Xử lý sự kiện khi người dùng chọn Dark Mode
    darkModeToggle.addEventListener("click", function() {
      if (isDarkModeEnabled) {
        disableDarkMode();
      } else {
        enableDarkMode();
      }
    });
  
    // Hàm bật Dark Mode
    function enableDarkMode() {
      body.classList.add("dark-mode");
      localStorage.setItem("darkMode", "true");
      isDarkModeEnabled = true;
    }
  
    // Hàm tắt Dark Mode
    function disableDarkMode() {
      body.classList.remove("dark-mode");
      localStorage.setItem("darkMode", "false");
      isDarkModeEnabled = false;
    }
  });
  
  