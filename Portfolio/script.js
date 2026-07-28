document.addEventListener('DOMContentLoaded', () => {

    // ================= 1. TYPING TEXT EFFECT =================
    const text = document.querySelector(".typing-text span");

    if (text) {
        const words = [
            "Student",
            "Web Developer",
            "Programmer",
            "AI Developer"
        ];

        let i = 0;

        setInterval(() => {
            text.textContent = words[i];
            i = (i + 1) % words.length;
        }, 2000);
    }

    // ================= 2. IMAGE MODAL (LIGHTBOX) =================
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImg');
    const closeModal = document.querySelector('.close-modal');
    const cardImages = document.querySelectorAll('.card-image img');

    // ทำงานเฉพาะเมื่อมี Modal อยู่ในหน้านั้นๆ
    if (modal && modalImg && closeModal) {
        
        // คลิกที่รูปภาพใน Card เพื่อเปิด Modal
        cardImages.forEach(img => {
            img.style.cursor = 'pointer';
            img.addEventListener('click', () => {
                modal.classList.add('active');
                modalImg.src = img.src;
            });
        });

        // กดปุ่ม X เพื่อปิด
        closeModal.addEventListener('click', () => {
            modal.classList.remove('active');
        });

        // กดพื้นที่ว่างด้านนอกรูปเพื่อปิด
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
            }
        });

        // กดปุ่ม Esc บนคีย์บอร์ดเพื่อปิด
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal.classList.contains('active')) {
                modal.classList.remove('active');
            }
        });
    }

});