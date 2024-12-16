function navigateWithFadeOut(url) {
    document.body.classList.add('fade-out');
    setTimeout(() => {
        window.location.href = url;
    }, 500);
}

document.addEventListener("DOMContentLoaded", function() {
    const cards = document.querySelectorAll(".card, .card2, .card3");

    cards.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add("show");
        }, index * 150);
    });
});

window.addEventListener('DOMContentLoaded', () => {
    document.body.classList.add('loaded');
});

document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('click', function () {
        navigateWithFadeOut("doctormom.html");
    });
});

document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', function () {
        navigateWithFadeOut("dailyresult.html");
    });
});

document.querySelectorAll('.card3').forEach(card => {
    card.addEventListener('click', function () {
        navigateWithFadeOut("loveyouresult.html");
    });
});

let selectedCards = [];
document.querySelectorAll('.card2').forEach((card, index) => {
    card.addEventListener('click', function () {
        if (window.location.pathname.includes('yesnookthankyou.html')) {
            if (selectedCards.includes(index)) {
                selectedCards = selectedCards.filter(i => i !== index);
                this.classList.remove('selected');
            } else {
                if (selectedCards.length < 2) {
                    selectedCards.push(index);
                    this.classList.add('selected');
                }
            }

            if (selectedCards.length === 2) {
                navigateWithFadeOut(`yesnookthankyouchoose.html?cards=${selectedCards.join(',')}`);
            }
        } else if (window.location.pathname.includes('yesnookthankyouchoose.html')) {
            document.querySelectorAll('.card2').forEach(c => c.classList.remove('selected'));
            selectedCards = [index];
            this.classList.add('selected');

            navigateWithFadeOut(`yesnookthankyouresult.html?chosenCard=${index}`);
        }
    });
});

document.getElementById('loginbutton').addEventListener('click', function () {
    navigateWithFadeOut('login.html');
});

document.getElementById('registerbutton').addEventListener('click', function () {
    navigateWithFadeOut('register.html');
});
