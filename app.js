const menu = document.querySelector(".menu");
const nav = document.querySelector(".navbar nav");
const profilePhoto = document.querySelector(".chip-photo");
const brand = document.querySelector(".navbar .brand");

// The image is in the repository root. Use a relative path that works on GitHub Pages.
if (profilePhoto) {
  profilePhoto.src = "ambadi-vijayakumar.jpg.png";
  profilePhoto.removeAttribute("srcset");
  profilePhoto.addEventListener("error", () => {
    profilePhoto.src = "https://ambadi002.github.io/PORTFOLIO/ambadi-vijayakumar.jpg.png";
  }, { once: true });
}

// Remove the logo text and </> symbol from the header.
if (brand) brand.remove();

if (menu && nav) {
  menu.addEventListener("click", () => nav.classList.toggle("open"));
  document.querySelectorAll("nav a").forEach((link) => {
    link.addEventListener("click", () => nav.classList.remove("open"));
  });
}

const observer = new IntersectionObserver(
  (entries) => entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  }),
  { threshold: 0.12 }
);

document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));

document.querySelectorAll(".timeline-item").forEach((item) => {
  item.addEventListener("mouseenter", () => {
    document.querySelectorAll(".timeline-item").forEach((other) => other.classList.remove("active"));
    item.classList.add("active");
  });
});
