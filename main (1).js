// احضار العناصر
const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const container = document.getElementById("container");

// التبديل بين صفحات التسجيل والدخول
signUpButton.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

signInButton.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});

document.querySelectorAll(".toggle-pass").forEach((icon) => {
  icon.addEventListener("click", () => {
    const input = icon.previousElementSibling;
    if (input.type === "password") {
      input.type = "text";
      icon.textContent = "🙈"; // Change icon when visible
    } else {
      input.type = "password";
      icon.textContent = "👁️";
    }
  });
});
