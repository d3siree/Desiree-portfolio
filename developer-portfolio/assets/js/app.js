// scroll to top functionalityaddEventListener
setTimeout(() => {
    const scrollUp = document.querySelector("#scroll-up");
    scrollUp.addEventListener("click", () => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth",
        });
      });
}, 100)
console.log(scrollUp);

