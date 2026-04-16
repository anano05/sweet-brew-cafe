const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav-links");

burger.addEventListener("click", () => {
  nav.classList.toggle("active");
});

// ===== FORM VALIDATION =====
const form = document.getElementById("contactForm");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !password || !message) {
      alert("Please fill all fields!");
      return;
    }

    if (!email.includes("@")) {
      alert("Enter valid email!");
      return;
    }

    alert("Form submitted successfully!");
    form.reset();
  });
}

// ===== SHOW / HIDE PASSWORD =====
const toggleBtn = document.getElementById("togglePassword");
const passwordInput = document.getElementById("password");

if (toggleBtn) {
  toggleBtn.addEventListener("click", () => {
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      toggleBtn.textContent = "Hide";
    } else {
      passwordInput.type = "password";
      toggleBtn.textContent = "Show";
    }
  });
}

// ===== FETCH API (TESTIMONIALS) =====
const reviewsContainer = document.getElementById("reviews");

if (reviewsContainer) {
  fetch("https://jsonplaceholder.typicode.com/comments?_limit=3")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((item) => {
        const div = document.createElement("div");
        div.classList.add("review");

        div.innerHTML = `
          <h4>${item.name}</h4>
          <p>${item.body}</p>
        `;

        reviewsContainer.appendChild(div);
      });
    })
    .catch((error) => console.log(error));
}

// ===== COOKIES (LOCAL STORAGE) =====
const cookieBox = document.getElementById("cookieBox");
const acceptBtn = document.getElementById("acceptCookies");

if (cookieBox) {
  if (localStorage.getItem("cookiesAccepted")) {
    cookieBox.style.display = "none";
  }

  acceptBtn.addEventListener("click", () => {
    localStorage.setItem("cookiesAccepted", "true");
    cookieBox.style.display = "none";
  });
}
