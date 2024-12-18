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
        { "id": 0, "name": "The Fool", "description": "วันนี้คุณพบกับการเริ่มต้นใหม่ในสิ่งที่ไม่เคยทำมาก่อน คุณไม่ต้องกังวลกับความไม่รู้ แต่ขอให้สนุกกับการเรียนรู้ก็พอขอให้เชื่อมั่นในพลังของตัวเอง ไม่มีคำว่าผิดหรือถูก มีแต่บทเรียนให้คุณได้เผชิญกับทุกสิ่งที่เลือกโดยฟังเสียงหัวใจตนเองมองโลกในแง่ดีเข้าไว้ ไม่ต้องสนใจกรอบของสังคม ทุกอย่างมีความเป็นไปได้เสมอ", "image": "../images/fool.png" },
        { "id": 1, "name": "The Magician", "description": "วันนี้คุณสามารถเชื่อมั่นพลังลี้ลับที่ซ่อนอยู่ในตัวเอง หากต้องเผชิญปัญหาคุณจะแก้ไขได้ด้วยตัวเอง บางครั้งคุณไม่สามารถอธิบายด้วยเหตุผลว่า ทำไมจึงตัดสินใจเช่นนั้น เพราะมันมาจากสัญชาตญาณ ในตัวคุณเป็นคนขับเคลื่อนให้ทุกอย่างดำเนินไป จงเชื่อมั่นในสิ่งที่คุณคิด คุณเชื่อ แล้วคุณจะพบคำตอบที่ใช่", "image": "../images/magician.png" },
        { "id": 2, "name": "The High Priestess", "description": "วันนี้คุณเจอสภาวะอารมณ์แปรปรวนเข้าทำนองอารมณ์ศิลปิน ใครมาแชวผิดหูอาจปรี๊ดแตกง่ายกว่าทุกวัน ถ้ามีเรื่องต้องตัดสินใจ คุณจะรู้สึกลังเล เลือกไม่ได้เพราะมีเหตุผลสองด้านที่มาปะทะกันเรียกว่าไม่มีใครเดาใจคุณถูก แม้กระทั่งตัวคุณเอง ถ้าคุณตัดสินใจไม่ได้ ลองหาผู้หญิงที่มีความรู้ทั้งจากตำราและจากประสบการณ์มาให้คำปรึกษาดู", "image": "../images/high_priestess.png" },
        { "id": 3, "name": "The Empress", "description": "วันนี้เป็นวันแห่งความสมบูรณ์ พร้อมเป็นผู้ให้ดุจดังจักรพรรดินี หรือแม่พระของคนรอบข้าง คุณรู้สึกเต็มอิ่มกับสิ่งที่เจอตลอดทั้งวัน ไม่มีความกังวล ไม่มีใครมาทำให้คุณทุกข์ใจ หากมีคนมาขอความช่วยเหลือ คุณก็พร้อมจะช่วยประคับประคองให้มีกำลังใจ ใครอยู่ใกล้คุณก็รู้สึกสบายใจ เพราะคุณรู้ใจคนอื่นไปหมด และพร้อมช่วยเหลือโดยไม่หวังสิ่งตอบแทน", "image": "../images/empress.png" },
        { "id": 4, "name": "The Emperor", "description": "วันนี้คุณรู้สึกมีพลังความเป็นผู้นำ พร้อมพุ่งทะยานไปสู่จุดหมายที่ต้องการ มีคนพร้อมจะเชื่อฟังราวกับคุณเป็นพระราชาคุณต้องใช้ความสามารถในการแก้ปัญหาอย่างชาญฉลาด และใช้สมองซีกซ้ายด้านความเป็นเหตุเป็นผลมากกว่าอารมณ์ระวังอย่าใช้อำนาจมากเกินไป", "image": "../images/emperor.png" },
        { "id": 5, "name": "The Hierophant", "description": "วันนี้คุณจะได้พบครูชี้แนะสิ่งที่ดีให้คุณครูอาจเป็นคนอื่น หรือตัวคุณเองก็เป็นได้ลองสำรวจตัวเองด้วยการเฝ้าดูลมหายใจเข้า-ออก และถามว่า วันนี้ได้เรียนรู้อะไรที่ทำให้คุณดีขึ้นกว่าเมื่อวานบ้าง หรือถึงเวลาที่คุณจะต้องเปลี่ยนวิถีชีวิตประจำวันอันน่าเบื่อด้วยการลมัครเข้าธมรมใหม่ ๆลองทำกิจกรรมที่ยังไม่เคยทำดูบ้าง", "image": "../images/hierophant.png" },
        { "id": 6, "name": "The Lovers", "description": "วันนี้คุณได้รับพลังความรักที่ปราศจากเงื่อนไขจากคนรัก เพื่อน ญาติ ทำให้คุณรู้สึกอบอุ่น ไม่โดดเดี่ยว ถ้ามีคำถามต้องตัดสินใจ ให้ถามหัวใจของคุณว่า รักชอบสิ่งไหนก็เลือกสิ่งนั้น คุณเริ่มมองเห็นความรักแท้ในตัวเองมากขึ้น เพราะก่อนที่จะรักคนอื่นได้ คุณต้องรักตนเองก่อน", "image": "../images/lovers.png" },
        { "id": 7, "name": "The Chariot", "description": "วันนี้คุณต้องเผชิญการตัดสินใจเลือกสองสิ่งที่มีความน่าสนใจมากพอๆ กัน คุณลังเลไม่รู้จะไปทางไหนดี ถามใจคุณดูว่าทางไหนที่จะนำไปสู่ปลายทางที่คุณใฝ่ฝันค่อย ๆ ลองพิจารณาดูให้ถ้วนถี่ เมื่อเลือกแล้วคุณก็พร้อมจะฝ่าฟันอุปสรรคต่าง ๆ ไปข้างหน้าจนถึงเส้นชัย ถ้าคุณกำลังหวาดกลัวกับความท้าทายที่รออยู่ ลองสูดหายใจลึก ๆ แล้วบอกตัวเองว่าคุณทำได้้", "image": "../images/chariot.png" },
        { "id": 8, "name": "Strength", "description": "วันนี้เป็นวันที่คุณมีพลังมากมาย มาจากความมั่นใจในความสามารถของตนเองและเรียนรู้ว่าจักรวาลจัดสรรสิ่งต่าง ๆไปถึงปลายทางเอง พลังของคุณเหมือนกับสิงโตเจ้าป่าเลยทีเดียว ไม่ว่าคุณจะเจออะไร ก็สามารถฝ่าฟันไปได้จนถึงจุดหมายคุณเหมือนเมล็ดพันธุ์ที่อยู่ใต้ดิน รอวันแทงยอดออกจากผืนดินขึ้นมาสูดอากาศบนโลกใบนี้ แต่ถ้าคุณขาดความกล้าหาญคุณก็จะกลายเป็นเมล็ดพันธุ์ที่ไม่มีวันเติบโต", "image": "../images/strength.png" },
        { "id": 9, "name": "The Hermit", "description": "วันนี้คุณอยากแยกตัวออกมาเพื่อหาความสงบ ไม่ใช่เพราะถูกทอดทิ้งให้โดดเดี่ยวคุณอยากพักวางความสัมพันธ์กับผู้คนที่วุ่นวาย มองหาหนทางเยียวยาหรือเรียนรู้เติบโตจากภายใน คุณไม่ต้องเข้าป่า แค่ปิดมือถือ ปิดคอมพิวเตอร์ นั่งเงียบๆ ฟังเสียงเต้นของหัวใจ คุณจะรู้สึกยิ้มได้กับตัวเอง", "image": "../images/hermit.png" },
        { "id": 10, "name": "Wheel of Fortune", "description": "วันนี้ชีวิตคุณเหมือนวงล้อเสี่ยงโชคที่คุณไม่รู้ว่าจะเกิดอะไรขึ้น คุณมีโอกาสได้รับโชคแบบไม่คาดฝัน ไม่ว่าจะเจออะไรขอให้เชื่อว่า จักรวาลจัดสรรสิ่งที่ดีที่สุดมาให้คุณ", "image": "../images/wheel_of_fortune.png" },
        { "id": 11, "name": "Justice", "description": "วันนี้คุณกำลังเผชิญการเรียกร้องความยุติธรรมทั้งเพื่อตัวเอง หรือเพื่อคนอื่นคุณต้องตัดสินปัญหาด้วยเหตุผล ชั่งน้ำหนักให้สมดุลก่อนตัดสินชะตาคนอื่น ระวังอำนาจที่มีอยู่ในมือให้ดีเพราะมันเป็นดาบสองคมที่อาจย้อนกลับมาทำร้ายตัวคุณเช่นกัน", "image": "../images/justice.png" },
        { "id": 12, "name": "The Hanged Man", "description": "วันนี้คุณเจอกับปัญหาที่ยืดเยื้อมานานถ้าลองเปลี่ยนมุมมองใหม่ คุณจะพบทางออกทันที เวลาเดินไปเจอกำแพงขวางหน้า ไม่ได้หมายความว่าจะไปต่อไม่ได้คุณอาจเดินอ้อม ปีนกำแพง หรือขุดดินไปโผล่อีกด้านหนึ่งก็ได้ ปัญหาที่กำลังเผชิญเปรียบเหมือนคุณกำลังถูกล็อคกุญแจมือทั้งสองข้างไว้ด้วยกัน โดยคุณถือลูกกุญแจอยู่ในมือ ถ้าลองเปลี่ยนวิธีการจับลูกกุญแจใหม่ คุณก็สามารถปลดล็อคได้ด้วยตัวเองขอเพียงคุณกล้าเดินออกมาจากโลกคุ้นชิน คุณก็จะพบโลกใบใหม่ที่ต่างไปจากเดิม", "image": "../images/hanged_man.png" },
        { "id": 13, "name": "Death", "description": "วันนี้คุณจะก้าวไปสู่สิ่งใหม่ โละเสื้อผ้าตัวเก่าที่คุณไม่คิดจะใส่ออกจากตู้ เคลียร์ของใช้ในบ้านที่พังจนซ่อมไม่ได้ทิ้งไปจบเรื่องราวต่างๆ ที่เคยยุ่งยากเสียใจเพื่อให้คุณมีที่ว่างสำหรับสิ่งใหม่ กิจกรรมใหม่ หรือคนรักใหม่ คุณอาจรู้สึกเศร้าเสียใจ เป็นเรื่องธรรมดาของการสูญเสียถ้าอยากร้องไห้ร้องชะให้พอ ถ้าร้องจนเหนื่อยแล้วก็ปาดน้ำตา อย่าไปเสียดายเวลาที่ผ่านไป เพราะทุกอย่างคือการเรียนรู้ ลองถามตัวคุณว่าพร้อมหรือยังทั้งการเอาตัวเองเป็นศูนย์กลางและเกิดใหม่ในฐานะผู้มีปัญญากว้างไกลกว่าเดิม", "image": "../images/death.png" },
        { "id": 14, "name": "Temperance", "description": "วันนี้คุณค้นหาสมดุลให้ชีวิต บางสถานการณ์อาจเป็นผู้ให้ บางสถานการณ์อาจเป็นผู้รับลองทำใจเป็นกลาง ทำงานแต่พอดี หาเวลาพักผ่อนบ้าง ยิ้มกับสิ่งเล็กๆ รอบตัวเมื่อคุณเจอจุดสมดุลของตนเองแล้ว มันอาจอยู่กับคุณได้ไม่นานนัก เพราะชีวิตต้องเคลื่อนไปข้างหน้าตลอดเสมอ เวลาเจอเหตุการณ์ที่ผ่านเข้ามา เรามักเสียศูนย์บ่อยครั้ง หากคุณเปิดได้ไพ่ใบนี้ แสดงว่าคุณกำลังเสียสมดุลในชีวิตมากเกินไป ไพ่เตือนให้คุณจัดสมดุลชีวิตใหม่ ลองนึกภาพตัวเองกำลังเล่นโยคะในท่าต้นไม้ (ยืนขาข้างเดียว) คุณต้องหาจุดศูนย์กลางร่างกายเพื่อให้ยืนในท่านี้ได้นานที่สุด แต่คุณไม่สามารถยืนท่านี้ได้ตลอดเวลา การพาตัวเองกลับมาหาจุดสมดุลบ่อย ๆ จึงเป็นเรื่องที่ดี", "image": "../images/temperance.png" },
        { "id": 15, "name": "The Devil", "description": "วันนี้กิเลสในตัวคุณกำลังทำงานหนักและทำให้คุณยากที่จะต้านทานความเย้ายวนใจ คุณอาจพบสถานการณ์ที่ทำให้คุณตกอยู่ในกับดักความรู้สึกเชิงลบ เช่น ความโลภ ความกลัว หรือความผูกพันที่ไม่สร้างสรรค์ จงระวังและหาทางตัดวงจรเหล่านี้ เพราะทุกสิ่งล้วนเป็นเพียงการสะท้อนตัวเองของคุณ ถ้าคุณรู้เท่าทันและยอมรับตัวเอง คุณก็จะปลดปล่อยตัวเองจากพันธนาการเหล่านี้ได้", "image": "../images/devil.png" },
        { "id": 16, "name": "The Tower", "description": "วันนี้คุณอาจเผชิญกับการเปลี่ยนแปลงอย่างฉับพลันหรือเหตุการณ์ที่ไม่คาดฝัน สิ่งที่คุณเคยเชื่อว่ามั่นคงอาจพังทลายลง เพื่อเปิดทางให้คุณสร้างสิ่งใหม่ขึ้นมา แม้จะรู้สึกเหมือนสูญเสีย แต่สิ่งนี้อาจเป็นโอกาสที่ซ่อนอยู่ จงยอมรับการเปลี่ยนแปลงและเรียนรู้จากมัน", "image": "../images/tower.png" },
        { "id": 17, "name": "The Star", "description": "วันนี้คุณได้รับพลังแห่งความหวังและการฟื้นตัวจากสิ่งที่เคยสูญเสีย มันเป็นช่วงเวลาที่คุณควรตั้งเป้าหมายใหม่และมุ่งมั่นในการสร้างอนาคต จงมองไปข้างหน้าด้วยความหวัง และเชื่อมั่นว่าความสุขอยู่ไม่ไกล", "image": "../images/star.png" },
        { "id": 18, "name": "The Moon", "description": "วันนี้อาจเต็มไปด้วยความไม่แน่นอนหรือสถานการณ์ที่คลุมเครือ คุณอาจรู้สึกสับสนหรือไม่แน่ใจในสิ่งที่เกิดขึ้น จงฟังเสียงสัญชาตญาณของคุณให้มากขึ้น และระวังการหลอกลวงจากคนรอบข้างหรือแม้กระทั่งตัวคุณเอง", "image": "../images/moon.png" },
        { "id": 19, "name": "The Sun", "description": "วันนี้คุณได้รับแสงสว่างและความสุขที่เติมเต็มชีวิต จงใช้พลังแห่งความสำเร็จและความชัดเจนที่คุณได้รับนี้สร้างแรงบันดาลใจให้ตัวคุณและผู้อื่น ทุกอย่างจะดำเนินไปด้วยความราบรื่นและเป็นบวก", "image": "../images/sun.png" },
        { "id": 20, "name": "Judgement", "description": "วันนี้คือเวลาสำหรับการตัดสินใจหรือประเมินสิ่งที่ผ่านมาด้วยความชัดเจน คุณอาจต้องเผชิญหน้ากับผลลัพธ์ของการกระทำในอดีต จงยอมรับบทเรียนและใช้โอกาสนี้เพื่อเริ่มต้นใหม่อย่างบริสุทธิ์ใจ", "image": "../images/judgement.png" },
        { "id": 21, "name": "The World", "description": "วันนี้คุณถึงจุดสิ้นสุดของการเดินทางหรือการบรรลุเป้าหมาย คุณจะรู้สึกถึงความสำเร็จ ความสมดุล และการเติมเต็มในชีวิต ทุกสิ่งที่คุณได้ทำมานำไปสู่ช่วงเวลาที่คุณสามารถเฉลิมฉลองและเริ่มต้นบทใหม่ได้อย่างมั่นใจ", "image": "../images/world.png" }
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
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', function () {
        const randomCard = getRandomCard(); // สุ่มการ์ดใหม่ทุกครั้งที่คลิก
        localStorage.setItem('selectedCard', JSON.stringify(randomCard)); // เก็บข้อมูลไพ่ใน localStorage
        navigateWithFadeOut("dailyresult.html"); // เปลี่ยนหน้าไปยังผลลัพธ์
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