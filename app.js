const menu = document.querySelector(".menu");
const nav = document.querySelector(".navbar nav");
const brand = document.querySelector(".navbar .brand");
const profilePhoto = document.querySelector(".chip-photo");

// The profile image is stored at the repository root, not in an assets folder.
if (profilePhoto) {
  profilePhoto.src = "./ambadi-vijayakumar.jpg.png";
}

// Hide the header brand so neither the name nor the </> mark is displayed.
if (brand) {
  brand.setAttribute("aria-hidden", "true");
  brand.remove();
}

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
