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

//Валидация и отправка формы

const faq_form = document.querySelector(".faq-form");
const faq_form_inputs = faq_form.querySelectorAll("input")
const faq_form_textarea = document.querySelector(".faq-form__ta");
const faq_submit = document.querySelector(".faq-submit");
const valid = [];
let status_form = false;


faq_submit.addEventListener("click", (event) => {
    event.preventDefault();

    faq_form_inputs.forEach((elem) => {
        if (elem.value != "") {
            status_form = true;
            valid.push(status_form)
        } else {
            status_form = false;
            valid.push(status_form)
        }
    });

    valid.forEach((elem) => {
        if (elem === false) {
            status_form = false;
        }
    });

    if (status_form === true) {
        const form_data = new FormData(faq_form);
        fetch("/pups", {
            method: "POST",
            body: form_data
        });

        faq_form_inputs.forEach((elem) => {
            elem.value = "";
        })

        faq_form_textarea.value = "";
    }

})