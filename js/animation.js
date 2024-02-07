const ani = ScrollReveal({
  distance: "35px",
  duration: 2200,
  reset: true,
});
ani.reveal(".side-1", { delay: 500, origin: "top" });
ani.reveal(".side-2", { delay: 600, origin: "bottom" });
ani.reveal(".about-img", { delay: 600, origin: "buttom" });
ani.reveal(".about-text", { delay: 500, origin: "buttom" });
ani.reveal(".section-header", { delay: 600, origin: "top" });
ani.reveal(".services-content", { delay: 700, origin: "buttom" });
ani.reveal(".contact-content", { delay: 700, origin: "buttton" });
