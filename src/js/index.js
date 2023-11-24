const slider_cost = document.querySelector(".slider-line");
const arrow_back = document.querySelector(".base-arrow_back");
const arrow_next = document.querySelector(".base-arrow_next");

const slider_delivery = document.querySelector(".delivery-line")
const arrow_back_del = document.querySelector(".delivery-arrow_back");
const arrow_next_del = document.querySelector(".delivery-arrow_next");

const slider_services = document.querySelector(".services-box-line")
const arrow_back_serv = document.querySelector(".services-arrow_back");
const arrow_next_serv = document.querySelector(".services-arrow_next");

createSlider(slider_cost, arrow_next, arrow_back, 1820, 5460);
createSlider(slider_delivery, arrow_next_del, arrow_back_del, 390, 1170);
createSlider(slider_services, arrow_next_serv, arrow_back_serv, 390, 390);

function createSlider(slider, next, back, step, max) {

    let offset = 0;
    back.style.display = "none"

    next.addEventListener("click", () => {
        offset += step;

        if (offset >= max) {
            next.style.display = "none";
        }

        back.style.display = "block";

        slider.style.left = -offset + "px";
    });

    back.addEventListener("click", () => {
        offset -= step;

        if (offset <= 0) {
            back.style.display = "none";
        }

        if (offset < max) {
            next.style.display = "block";
        }

        slider.style.left = -offset + "px";
    });

}












