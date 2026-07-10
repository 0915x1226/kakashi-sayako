const members = document.querySelectorAll(".member");
const modals = document.querySelectorAll(".modal");
const closes = document.querySelectorAll(".close");

members.forEach(member => {

    member.addEventListener("click", () => {

        const id = member.dataset.modal;

        document.getElementById(id).classList.add("active");

    });

});

closes.forEach(close => {

    close.addEventListener("click", () => {

        close.closest(".modal").classList.remove("active");

    });

});

modals.forEach(modal => {

    modal.addEventListener("click", e => {

        if(e.target === modal){

            modal.classList.remove("active");

        }

    });

});

document.addEventListener("keydown", e => {

    if(e.key === "Escape"){

        modals.forEach(modal => modal.classList.remove("active"));

    }

});