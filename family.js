/*=========================
 タブ切り替え
=========================*/

const tabs = document.querySelectorAll(".tab-btn");
const contents = document.querySelectorAll(".tab-content");

tabs.forEach(tab => {

    tab.addEventListener("click", () => {

        tabs.forEach(btn => btn.classList.remove("active"));
        contents.forEach(content => content.classList.remove("active"));

        tab.classList.add("active");

        document
            .getElementById(tab.dataset.tab)
            .classList.add("active");

    });

});


/*=========================
 プロフィール開閉
=========================*/

const profileButtons = document.querySelectorAll(".profile-btn");

profileButtons.forEach(button => {

    button.addEventListener("click", () => {

        const card = button.closest(".member-card");

        card.classList.toggle("open");

        if(card.classList.contains("open")){

            button.textContent = "－ プロフィールを閉じる";

        }else{

            button.textContent = "＋ プロフィールを見る";

        }

    });

});