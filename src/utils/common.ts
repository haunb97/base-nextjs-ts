export const scrollToTop = () => {
  if (!(typeof window !== "undefined")) return;
  window.scrollTo({ top: 0, behavior: "smooth" });
};
