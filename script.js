document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('background-audio');
    audio.volume = 0.3;

    const images = document.querySelectorAll('.glitch');
    images.forEach(img => {
        img.addEventListener('mouseover', () => {
            img.style.filter = 'brightness(1.4) contrast(2)';
        });
        img.addEventListener('mouseout', () => {
            img.style.filter = 'none';
        });
    });

    setInterval(() => {
        const elements = document.querySelectorAll('h1, h2, p.flicker');
        elements.forEach(el => {
            if (Math.random() < 0.2) {
                el.style.opacity = '0.3';
                setTimeout(() => {
                    el.style.opacity = '1';
                }, 400);
            }
        });
    }, 1500);

    setTimeout(() => {
        if (Math.random() < 0.15) {
            const scare = document.createElement('div');
            scare.style.position = 'fixed';
            scare.style.top = '0';
            scare.style.left = '0';
            scare.style.width = '100%';
            scare.style.height = '100%';
            scare.style.background = 'url("https://www.soyuz.ru/public/uploads/files/2/7386161/2019071114180609702e0f7f.jpg") no-repeat center';
            scare.style.backgroundSize = 'cover';
            scare.style.opacity = '0.9';
            document.body.appendChild(scare);
            setTimeout(() => {
                scare.remove();
            }, 300);
        }
    }, 12000);
});
