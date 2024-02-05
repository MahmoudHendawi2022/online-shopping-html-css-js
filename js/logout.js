// logout code
function logout() {
    let logoutBtn = document.querySelector(".logout");
    logoutBtn.addEventListener("click", () => {
      console.log(logoutBtn);
      localStorage.clear();
      console.log("clear");
      setTimeout(() => {
        window.location = "../index.html";
      }, 1500);
    });
  }
  logout();