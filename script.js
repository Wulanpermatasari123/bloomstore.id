// ===============================
// FAQ ACCORDION
// ===============================

const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach((question) => {

    question.addEventListener("click", () => {

        const answer = question.nextElementSibling;

        if (answer.style.display === "block") {

            answer.style.display = "none";

        } else {

            document.querySelectorAll(".faq-answer").forEach((item) => {

                item.style.display = "none";

            });

            answer.style.display = "block";

        }

    });

});


// ===============================
// SEARCH PRODUK
// ===============================

const searchInput = document.getElementById("searchInput");

const productCards = document.querySelectorAll(".produk-card");

if (searchInput) {

    searchInput.addEventListener("keyup", function () {

        const keyword = this.value.toLowerCase();

        productCards.forEach((card) => {

            const title = card.querySelector("h3").textContent.toLowerCase();

            if (title.includes(keyword)) {

                card.style.display = "block";

            } else {

                card.style.display = "none";

            }

        });

    });

}


// ===============================
// KERANJANG BELANJA
// ===============================

let cartCount = 0;

const cartButtons = document.querySelectorAll(".cart");

const cartCounter = document.querySelector(".cart-count");

cartButtons.forEach((button) => {

    button.addEventListener("click", () => {

        cartCount++;

        cartCounter.textContent = cartCount;

        alert("Produk berhasil ditambahkan ke keranjang.");

    });

});


// ===============================
// BELI SEKARANG
// ===============================

const buyButtons = document.querySelectorAll(".buy");

buyButtons.forEach((button) => {

    button.addEventListener("click", () => {

        alert("Terima kasih. Fitur checkout dapat dikembangkan lebih lanjut.");

    });

});


// ===============================
// FORM KONTAK
// ===============================

const contactForm = document.querySelector(".form-kontak form");

if (contactForm) {

    contactForm.addEventListener("submit", function (e) {

        e.preventDefault();

        alert("Pesan berhasil dikirim. Terima kasih telah menghubungi Bloomstore UMKM.");

        contactForm.reset();

    });

}


// ===============================
// SCROLL KE ATAS
// ===============================

const backTop = document.createElement("button");

backTop.innerHTML = "↑";

backTop.id = "backTop";

document.body.appendChild(backTop);

backTop.style.position = "fixed";
backTop.style.bottom = "25px";
backTop.style.right = "25px";
backTop.style.width = "50px";
backTop.style.height = "50px";
backTop.style.border = "none";
backTop.style.borderRadius = "50%";
backTop.style.background = "#2E7D32";
backTop.style.color = "white";
backTop.style.cursor = "pointer";
backTop.style.display = "none";
backTop.style.fontSize = "22px";
backTop.style.boxShadow = "0 5px 15px rgba(0,0,0,.2)";

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        backTop.style.display = "block";

    } else {

        backTop.style.display = "none";

    }

});

backTop.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


// ===============================
// ANIMASI SAAT SCROLL
// ===============================

const revealElements = document.querySelectorAll(
    ".produk-card, .kategori-card, .keunggulan-card, .langkah-card, .testimoni-card"
);

function revealOnScroll() {

    revealElements.forEach((element) => {

        const windowHeight = window.innerHeight;

        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {

            element.style.opacity = "1";
            element.style.transform = "translateY(0)";

        }

    });

}

revealElements.forEach((element) => {

    element.style.opacity = "0";
    element.style.transform = "translateY(50px)";
    element.style.transition = "all .6s ease";

});

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();
