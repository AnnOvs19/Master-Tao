const step1 = document.querySelector(".form-step-1");
const step2 = document.querySelector(".form-step-2");

const btn_step1 = step1.querySelector(".base-btn-orange");
const btn_step2 = step2.querySelector(".base-btn-orange");
const back_btn = step2.querySelector(".base-btn-transparent");

const form_end = document.querySelector(".end-form");
const form = document.querySelector(".form");

const form_head_list = document.querySelectorAll(".form__head-item")

btn_step1.addEventListener("click", () => {
    step1.classList.add("hide");
    step2.classList.remove("hide");

    form_head_list.forEach((item, index) => {
        if (index == 1) {
            item.classList.add("active")
        }
    });
});


btn_step2.addEventListener("click", () => {
    step2.classList.add("hide");
    form.classList.add("hide");
    form_end.classList.remove("hide");
});

back_btn.addEventListener("click", () => {
    step2.classList.add("hide");
    step1.classList.remove("hide");

    form_head_list.forEach((item, index) => {
        if (index == 1) {
            item.classList.remove("active")
        }
    });
});