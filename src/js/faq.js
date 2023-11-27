const faq_list = document.querySelectorAll(".faq-list__item");

faq_list.forEach((item) => {
    item.addEventListener("click", () => {

        if (item.classList.contains("open")) {
            item.classList.remove("open")
        } else {
            clearClassList();
            item.classList.add("open")
        }

    })
})

function clearClassList() {
    faq_list.forEach((item) => {
        item.classList.remove("open");
    })
}