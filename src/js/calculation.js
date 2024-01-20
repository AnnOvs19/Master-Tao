const step1 = document.querySelector(".form-step-1");
const step2 = document.querySelector(".form-step-2");

const btn_step1 = step1.querySelector(".base-btn-orange");
const btn_step2 = step2.querySelector(".base-btn-orange");

const form_end = document.querySelector(".end-form");
const form = document.querySelector(".form");

const form_head_list = document.querySelectorAll(".form__head-item");

const main_form_data = new FormData();

btn_step1.addEventListener("click", (event) => {
    event.preventDefault();
    const form_data = new FormData(step1);

    //Если функция = true
    if (validationForm(form_data)) {
        form_data.forEach((value, key) => {
            main_form_data.append(key, value)
        });

        step1.classList.add("hide");
        step2.classList.remove("hide");

        form_head_list.forEach((item, index) => {
            if (index == 1) {
                item.classList.add("active")
            }
        });
    } else {
        alert("Заполните все поля в первой форме!")
    };


});


btn_step2.addEventListener("click", (event) => {
    event.preventDefault();

    const form_data = new FormData(step2);

    if (validationForm(form_data)) {
        form_data.forEach((value, key) => {
            main_form_data.append(key, value)
        });

        fetch("/pups", {
            method: "POST",
            body: main_form_data
        });

        step2.classList.add("hide");
        form.classList.add("hide");
        form_end.classList.remove("hide");
    } else {
        alert("Заполните все поля во второй форме!")
    };


});



//Валидация

function validationForm(form_data) {
    const valid = [];
    let status_form = false;

    form_data.forEach((value) => {
        if (value != "") {
            status_form = true;
            valid.push(status_form);
        } else {
            status_form = false;
            valid.push(status_form)
        }
    })

    valid.forEach((elem) => {
        if (elem === false) {
            status_form = false;
        }
    });

    return status_form;
}

