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


const tarotCards = [
    {
      "id": 0,
      "name": "The Fool",
      "description": "Yes",
      "image": "../images/fool.png"
    },
    {
      "id": 1,
      "name": "The Magician",
      "description": "Yes",
      "image": "../images/magician.png"
    },
    {
      "id": 2,
      "name": "Judgement",
      "description": "Maybe",
      "image": "../images/judgement.png"
    },
    {
      "id": 3,
      "name": "The Empress",
      "description": "Yes",
      "image": "../images/empress.png"
    },
    {
      "id": 4,
      "name": "The Emperor",
      "description": "Yes",
      "image": "../images/emperor.png"
    },
    {
      "id": 5,
      "name": "The Chariot",
      "description": "Yes",
      "image": "../images/chariot.png"
    },
    {
      "id": 6,
      "name": "Justice",
      "description": "Yes",
      "image": "../images/justice.png"
    },
    {
      "id": 7,
      "name": "The Star",
      "description": "Yes",
      "image": "../images/star.png"
    },
    {
      "id": 8,
      "name": "The Sun",
      "description": "Yes",
      "image": "../images/sun.png"
    },
    {
      "id": 9,
      "name": "The World",
      "description": "Yes",
      "image": "../images/world.png"
    },
    {
      "id": 10,
      "name": "The Tower",
      "description": "No",
      "image": "../images/tower.png"
    },
    {
      "id": 11,
      "name": "Strength",
      "description": "No",
      "image": "../images/strength.png"
    },
    {
      "id": 12,
      "name": "Temperance",
      "description": "No",
      "image": "../images/temperance.png"
    },
    {
      "id": 13,
      "name": "The Hermit",
      "description": "No",
      "image": "../images/hermit.png"
    },
    {
      "id": 14,
      "name": "The Hanged Man",
      "description": "No",
      "image": "../images/hanged_man.png"
    },
    {
      "id": 15,
      "name": "Death",
      "description": "No",
      "image": "../images/death.png"
    },
    {
      "id": 16,
      "name": "The Devil",
      "description": "No",
      "image": "../images/devil.png"
    },
    {
      "id": 17,
      "name": "The High Priestess",
      "description": "Maybe",
      "image": "../images/high_priestess.png"
    },
    {
      "id": 18,
      "name": "Wheel of Fortune",
      "description": "Maybe",
      "image": "../images/wheel_of_fortune.png"
    },
    {
      "id": 19,
      "name": "The Lovers",
      "description": "Maybe",
      "image": "../images/lovers.png"
    },
    {
      "id": 20,
      "name": "The Hierophant",
      "description": "Maybe",
      "image": "../images/hierophant.png"
    },
    {
      "id": 21,
      "name": "The Moon",
      "description": "Maybe",
      "image": "../images/moon.png"
    }
  ]
  

// ฟังก์ชันสำหรับสุ่มการ์ด
function getRandomCard() {
    const randomIndex = Math.floor(Math.random() * tarotCards.length); // สุ่มดัชนี
    return tarotCards[randomIndex]; // คืนค่าการ์ดที่สุ่มได้
}

// ฟังก์ชันสำหรับการเฟดเอาต์และเปลี่ยนหน้า
function navigateWithFadeOut(targetUrl) {
    document.body.classList.add('fade-out'); // เพิ่มคลาสสำหรับเอฟเฟกต์
    setTimeout(() => {
        window.location.href = targetUrl; // เปลี่ยนหน้าเมื่อเอฟเฟกต์จบ
    }, 500); // ระยะเวลาต้องตรงกับใน CSS
}

// เพิ่ม Event Listener ให้กับการ์ด
document.querySelectorAll('.card2').forEach(card => {
    card.addEventListener('click', function () {
        const randomCard = getRandomCard(); // สุ่มการ์ดใหม่ทุกครั้งที่คลิก
        localStorage.setItem('selectedCard', JSON.stringify(randomCard)); // เก็บข้อมูลไพ่ใน localStorage
        navigateWithFadeOut("yesnookthankyouresult.html"); // เปลี่ยนหน้าไปยังผลลัพธ์
    });
});


const selectedCard = JSON.parse(localStorage.getItem('selectedCard'));

// อัปเดตข้อมูลในหน้า
if (selectedCard) {
    document.querySelector('.card-image img').src = selectedCard.image; // แสดงรูปภาพไพ่
    document.querySelector('.card-description h2').textContent = selectedCard.name; // แสดงชื่อไพ่
    document.querySelector('.card-description p').textContent = selectedCard.description; // แสดงคำอธิบายไพ่
} else {
    // หากไม่มีข้อมูล ให้แสดงข้อความแจ้งเตือน
    document.querySelector('.card-description p').textContent = "ไม่พบข้อมูลการ์ดที่เลือก";
}



document.getElementById('loginbutton').addEventListener('click', function () {
    navigateWithFadeOut('login.html');
});

document.getElementById('registerbutton').addEventListener('click', function () {
    navigateWithFadeOut('register.html');
});

document.getElementById('registration-form').addEventListener('submit', function(event) {
    // Prevent the form from submitting normally
    event.preventDefault();

    // Get the value of the selected role
    const selectedRole = document.querySelector('input[name="role"]:checked');

    if (selectedRole && selectedRole.value === 'fortuneteller') {
        // Redirect to 'registerdoctormom.html' if the fortuneteller role is selected
        navigateWithFadeOut('registerdoctormom.html');
    } else if (selectedRole && selectedRole.value === 'customer') {
        // Handle customer role or redirect elsewhere
        navigateWithFadeOut('login.html');
    } else {
        alert('กรุณาเลือกบทบาท');
    }
});

function goToJongPage() {
    window.location.href = 'jong.html';
}