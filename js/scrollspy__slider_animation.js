const scrollspy_progress = document.getElementById("hero-scrollspy-progress-element");
const scrollspy_links = document.querySelectorAll(".scrollspy__link");
const sections = [
    // document.getElementById("header"),
    document.getElementById("hero"),
    document.getElementById("get-started"),
    document.getElementById("hiking-essentials"),
    document.getElementById("where-you-go-is-the-key"),
];
function update_scrollspy_progress_top_value(new_top) {
    if (scrollspy_progress) {
        scrollspy_progress.style.top = new_top.toString() + "px";
    }
}
scrollspy_links.forEach((link) => {
    link.addEventListener("click", (e) => {
        // e.preventDefault();
        const scrollspy_progress_top_value = parseInt(link.dataset.topValueForProgressEl || "0", 10);
        // console.log(scrollspy_progress_top_value);
        update_scrollspy_progress_top_value(scrollspy_progress_top_value);
        // const href = link.getAttribute("href");
        // if (href) {
        //   const target = document.querySelector(href);
        //   if (target) {
        //     target.scrollIntoView({ behavior: "smooth" });
        //   }
        // }
    });
});
window.addEventListener("scroll", function () {
    const current_scroll_position = this.window.scrollY + this.window.innerHeight / 2;
    sections.forEach((current_section, current_section_index) => {
        if (
            current_section &&
            current_scroll_position >= current_section.offsetTop &&
            current_scroll_position < current_section.offsetTop + current_section.offsetHeight
        ) {
            const scrollspy_progress_top_value = parseInt(scrollspy_links[current_section_index].dataset.topValueForProgressEl || "0", 10);
            update_scrollspy_progress_top_value(scrollspy_progress_top_value);
        }
    });
});
//# sourceMappingURL=scrollspy__slider_animation.js.map
