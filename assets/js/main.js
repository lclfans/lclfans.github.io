const header = document.querySelector("[data-header]");
const menuButton = document.querySelector("[data-menu-button]");
const mobileNav = document.querySelector("[data-mobile-nav]");
const copyButton = document.querySelector("[data-copy-email]");
const copyLabel = document.querySelector("[data-copy-label]");
const videos = [...document.querySelectorAll("video")];

const setHeaderState = () => {
  header?.classList.toggle("is-scrolled", window.scrollY > 18);
};

const closeMenu = () => {
  if (!menuButton || !mobileNav) return;
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.setAttribute("aria-label", "打开导航菜单");
  mobileNav.classList.remove("is-open");
  document.body.classList.remove("menu-open");
};

const toggleMenu = () => {
  if (!menuButton || !mobileNav) return;
  const willOpen = menuButton.getAttribute("aria-expanded") !== "true";
  menuButton.setAttribute("aria-expanded", String(willOpen));
  menuButton.setAttribute("aria-label", willOpen ? "关闭导航菜单" : "打开导航菜单");
  mobileNav.classList.toggle("is-open", willOpen);
  document.body.classList.toggle("menu-open", willOpen);
};

menuButton?.addEventListener("click", toggleMenu);
mobileNav?.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeMenu();
});

window.addEventListener("scroll", setHeaderState, { passive: true });
setHeaderState();

videos.forEach((video) => {
  video.addEventListener("play", () => {
    videos.forEach((otherVideo) => {
      if (otherVideo !== video && !otherVideo.paused) otherVideo.pause();
    });
  });
});

copyButton?.addEventListener("click", async () => {
  const email = copyButton.dataset.email;
  if (!email) return;

  try {
    await navigator.clipboard.writeText(email);
    copyButton.classList.add("is-copied");
    if (copyLabel) copyLabel.textContent = "已复制";

    window.setTimeout(() => {
      copyButton.classList.remove("is-copied");
      if (copyLabel) copyLabel.textContent = "复制邮箱";
    }, 1800);
  } catch {
    window.location.href = `mailto:${email}`;
  }
});

document.querySelectorAll("[data-year]").forEach((node) => {
  node.textContent = String(new Date().getFullYear());
});
