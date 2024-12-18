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



// ข้อมูลไพ่ทั้งหมด
const tarotCards = [
    {
      "id": 0,
      "name": "The Fool",
      "description": "ความรักยังไม่มีแววจริงจัง ถ้าถามถึงคู่ของคุณ แสดงว่าเขาหรือเธอยังรักอิสระมากเกินกว่าจะผูกมัดกับใคร คนโสดยังไม่เจอใครในช่วงนี้ เพราะตัวคุณเองก็ยังไม่แน่ใจว่า ตกลงอยากมีแฟนจริงหรือเปล่า",
      "image": "../images/fool.png"
    },
    {
      "id": 1,
      "name": "The Magician",
      "description": "คนโสดเตรียมปิ๊งแวบกับใครบางคนในสถานการณ์ที่ไม่คาดคิดหรือเหตุการณ์ที่ไม่ธรรมดาความสัมพันธ์จะพัฒนาขึ้นจนกลายเป็นความรัก คนมีคู่ความสัมพันธ์กำลังเติบโตงอกงาม เติมเต็มความฝันกันและกัน",
      "image": "../images/magician.png"
    },
    {
      "id": 2,
      "name": "The High Priestess",
      "description": "หนุ่มโสดระวังไปหลงเสน่ห์ใครบางคนจนหน้ามืดตามัว สาวโสดยังอารมณ์แปรปรวน เดี๋ยวอยากมีแฟน เดี๋ยวไม่อยากมี คนมีคู่ให้ระวังมีความลับต่อกันถ้าคนรักของคุณเป็นผู้ชาย เขาอาจกำลังมีใครอีกคนซ่อนอยู่ หรือตัวคุณเองอาจมีความลับบางอย่างที่ไม่กล้าบอกคนรัก",
      "image": "../images/high_priestess.png"
    },
    {
      "id": 3,
      "name": "The Empress",
      "description": "ใครมีแฟนกำลังสวิตหวาน จนโลกนี้กลายเป็นสีชมพู เป็นช่วงเวลาเติมเต็มซึ่งกันและกัน คนโสดมีโอกาสเจอคนที่บุคลิกอบอุ่นอ่อนหวานเข้ามาใกล้ชิด",
      "image": "../images/empress.png"
    },
    {
      "id": 4,
      "name": "The Emperor",
      "description": "คนโสดมีโอกาสพบรักกับคนต่างชาติ ต่างศาสนา หรือต่างฐานะคนมีคู่ความสัมพันธ์ก้าวไปข้างหน้าด้วยดี ถ้าคุณเป็นผู้หญิง คู่ครองของคุณจะเป็นผู้นำที่ดี ถ้าเป็นผู้ชาย คุณจะมีความสุขที่ได้ดูแลปกป้องคนรัก",
      "image": "../images/emperor.png"
    },
    {
      "id": 5,
      "name": "The Hierophant",
      "description": "คนโสดยังต้องรอไปก่อน ใครมีแฟนแล้ว ถ้าอยากแต่งงาน ต้องเข้าตามตรอกออกทางประตูตามจารีตประเพณีเพื่อให้ครอบครัวยอมรับ ใครแต่งงานแล้ว ช่วงนี้เรื่องบนเตียงอาจห่างหายกันไปเพราะต่างคนต่างอยู่ในภาวะจำศีล ไร้ความโรแมนติก",
      "image": "../images/hierophant.png"
    },
    {
      "id": 6,
      "name": "The Lovers",
      "description": "คนโสดกำลังจะปิ้งใครบางคนที่เกิดขึ้นรวดเร็วแบบไม่คาดคิดคนมีคู่จะได้สัมผัสทุกข์และสุขจากความรัก",
      "image": "../images/lovers.png"
    },
    {
      "id": 7,
      "name": "The Chariot",
      "description": "คนมีแฟนกำลังสนใจเรื่องงานมากกว่าคนรัก จนอีกฝ่ายน้อยใจหรือชวนทะเลาะกันจนเป็นเรื่องราวใหญ่โต คนโสดยังวิ่งไล่ตามหาความรักต่อไปเพราะดูเหมือนจะยังไม่เจอใครที่เคมีเข้ากัน",
      "image": "../images/chariot.png"
    },
    {
      "id": 8,
      "name": "Strength",
      "description": "คนโสดอาจได้ปิ้งใครบางคนจนหน้าร้อนผ่าว หัวใจเต้นตุ๊บ ๆ จนเหมือนจะหลุดออกมานอกอก มีโอกาสพัฒนาไปสู่ความสัมพันธ์ลึกซึ้งมากขึ้น คนมีคู่ช่วงนี้เรื่องบนเตียงเร่าร้อนราวกับข้าวใหม่ปลามัน รักกันมั่นคงจนน่าอิจฉา",
      "image": "../images/strength.png"
    },
    {
      "id": 9,
      "name": "The Hermit",
      "description": "ความโรแมนติกเริ่มจางหาย คนมีคู่อาจต้องการเวลาพักฟื้นเพื่อทบทวนความสัมพันธ์ คนโสดกำลังจะได้พบใครบางคนในอนาคตอันใกล้ที่คุณรู้สึกอบอุ่นทางใจ หรือเป็นผู้นำทางชีวิตให้คุณ",
      "image": "../images/hermit.png"
    },
    {
      "id": 10,
      "name": "Wheel of Fortune",
      "description": "ถ้าคุณคบกับใครอยู่ คุณกำลังติดหล่มความสัมพันธ์หยุดชะงักลงชั่วคราว คุณกำลังใช้เวลาทบทวนความต้องการของกันและกัน ก่อนจะให้วงล้อหมุนต่อไป คนโสดอย่าเพิ่งถามว่าจะเจอคู่เมื่อไหร่ เพราะไพ่บอกว่าเมื่อไหร่ก็เมื่อนั้น",
      "image": "../images/wheel_of_fortune.png"
    },
    {
      "id": 11,
      "name": "Justice",
      "description": "คนที่อยู่ด้วยกันมานานมีโอกาสหย่าร้างสูง หรือแยกกันอยู่ คำมั่นสัญญาที่เคยมีให้กัน เมื่อเวลาผ่านไปต่างจืดจาง การแยกทางอาจสบายใจกว่า คนโลดยังไม่พบใครที่รู้สึกว่าใช่ คุณกำลังชั่งน้ำหนักระหว่างความรักและเรื่องอื่น ๆ เพื่อหาจุดสมดุล",
      "image": "../images/justice.png"
    },
    {
      "id": 12,
      "name": "The Hanged Man",
      "description": "คนมีคู่เจอปัญหายืดเยื้อมานานจนบั่นทอนความสัมพันธ์ ต่างคนต่างเงียบไม่ยอมเปิดใจคุยกัน ถ้าลองมองจากมุมคนรักของคุณดูบ้าง คุณจะพบทางออกปัญหา คนโสดต้องกล้าเปลี่ยนแปลงตนเองไปสู่กิจกรรมใหม่ ๆ แล้วคุณจะมีเสน่ห์ดึงดูดใจมากขึ้นกว่าเดิม",
      "image": "../images/hanged_man.png"
    },
    {
      "id": 13,
      "name": "Death",
      "description": "ถึงเวลาต้องเริ่มต้นใหม่ ใครมีแฟนที่คบมานานจนไร้ความโรแมนติก หรือคบกันไปทั้ง ๆ ที่รู้ว่ามีปัญหาเดิมๆ ถึงเวลาที่ต้องยุติความสัมพันธ์เพื่อเป็นอิสระต่อกันสักที การเลิกไม่ได้หมายความว่าสูญเสีย แต่หมายถึงโอกาสเริ่มต้นใหม่กับคนที่ดีกว่า หรือได้อิสรภาพทางใจคืนมา คนโสด ถ้าลองเปลี่ยนแปลงตนเองหรือกิจกรรมที่เคยทำดูบ้าง อาจได้พบคนใหม่ๆ เข้ามาในชีวิต",
      "image": "../images/death.png"
    },
    {
      "id": 14,
      "name": "Temperance",
      "description": "ความรักและการให้อภัยเป็นของคู่กัน ถ้าคุณกำลังมีปัญหาเรื่องความรัก คุณต้องรับฟังกันและกันเพื่อหาจุดสมดุล คนโสดอาจได้เจอคนไกลหรือชาวต่างชาติต่างภาษาแบบไม่ทันตั้งตัวจนคุณอาจเสียศูนย์ ใจเย็น ๆ ไว้ก่อน ใช้เวลาศึกษากันและกัน อย่าเพิ่งชิงสุกก่อนห่าม",
      "image": "../images/temperance.png"
    },
    {
      "id": 15,
      "name": "The Devil",
      "description": "คนโสดอาจกำลังหลงใครหัวปักหัวป้าอยู่ คนมีคู่ต้องระวังกิเลสตัณหากามารมณ์จะครอบงำจนเสียการเสียงาน",
      "image": "../images/devil.png"
    },
    {
      "id": 16,
      "name": "The Tower",
      "description": "ความสัมพันธ์อันน่าอึดอัดกำลังสิ้นสุดลง อย่ากลัวการเลิกราเพราะดีกว่าคุณเสียเวลาคบกันไปโดยไม่ได้รักกัน คนโสดลองทบทวนตนเองดูว่าคุณไม่กล้ารักใครเพราะกลัวความผิดพลาดเหมือนในอดีตที่ผ่านมาหรือเปล่า",
      "image": "../images/tower.png"
    },
    {
      "id": 17,
      "name": "The Star",
      "description": "คนโสดมีโอกาสพบรักชาวต่างชาติ หรือถูกสเปกใครบางคนอย่างจังจนหัวแทบคะมำ ใครมีแฟนอยู่แล้วช่วงนี้จี๋จำจนน้ำตาลเรียกพี่ โลกกลายเป็นสีชมพูเชียวแหละ",
      "image": "../images/star.png"
    },
    {
      "id": 18,
      "name": "The Moon",
      "description": "คุณรู้สึกหวาดระแวงในตัวคนรัก หรือผิดหวังที่เขาไม่ได้ดังใจคุณบางทีคุณอาจคิดมากไป ลองเปิดใจพูดความรู้สึกที่แท้จริงดูบ้างก็ดีนะ คนโสดอย่าหมกมุ่นตามหาความรักจนเป็นโรคซึมเศร้า หรืออาจกำลังเผชิญภาวะอกหักจากคนที่หมายปอง อย่าเศร้านานเกินไปนัก คิดชะว่ายังไม่เจอคนที่ใช่",
      "image": "../images/moon.png"
    },
    {
      "id": 19,
      "name": "The Sun",
      "description": "คนโสดกำลังปิ้งใครบางคนที่รอคอยมานาน มีโอกาสพบรักที่ริมทะเล คนมีคู่ครอง ความสัมพันธ์กำลังราบรื่น สดชื่น ทั้งเรื่องหัวใจและเรื่องบนเตียงจนเหมือนรักกันใหม่ ๆ เลยทีเดียว เป็นช่วงเวลาความสุขจนน่าอิจฉา",
      "image": "../images/sun.png"
    },
    {
      "id": 20,
      "name": "Judgement",
      "description": "คนมีคู่กำลังมาถึงจุดเปลี่ยนแปลงไปสู่สิ่งใหม่ อาจดีขึ้นหรือแย่ลงขึ้นอยู่กับความสัมพันธ์ของคุณที่ผ่านมา ถ้าคุณอยากไปต่อ คุณต้องเริ่มเปลี่ยนแปลงตนเอง ปัญหาในอดีตเก็บไว้เป็นบทเรียน คนโสดได้ปิ้งคนที่ทำให้รู้สึกเหมือนเคยเจอกันแต่ชาติปางก่อน คุยกันถูกคอจนสนิทกันอย่างรวดเร็ว",
      "image": "../images/judgement.png"
    },
    {
      "id": 21,
      "name": "The World",
      "description": "คนโสดมีโอกาสเจอเนื้อคู่ชาวต่างชาติจนต้องย้ายตามไปอยู่ต่างประเทศ คนมีคู่ครอง เป็นช่วงเวลาเฉลิมฉลองความรัก ความเข้าใจ คุณผ่านการร่วมทุกข์ร่วมสุขด้วยกันมายาวนานกว่าจะมาถึงวันนี้",
      "image": "../images/world.png"
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
document.querySelectorAll('.card3').forEach(card => {
    card.addEventListener('click', function () {
        const randomCard = getRandomCard(); // สุ่มการ์ดใหม่ทุกครั้งที่คลิก
        localStorage.setItem('selectedCard', JSON.stringify(randomCard)); // เก็บข้อมูลไพ่ใน localStorage
        navigateWithFadeOut("loveyouresult.html"); // เปลี่ยนหน้าไปยังผลลัพธ์
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