document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('background-audio');
    audio.volume = 0.3;

    const images = document.querySelectorAll('.glitch');
    images.forEach(img => {
        img.addEventListener('mouseover', () => {
            img.style.filter = 'brightness(1.3) contrast(1.8)';
        });
        img.addEventListener('mouseout', () => {
            img.style.filter = 'none';
        });
    });

    setInterval(() => {
        const elements = document.querySelectorAll('h1, h2, p.flicker');
        elements.forEach(el => {
            if (Math.random() < 0.15) {
                el.style.opacity = '0.4';
                setTimeout(() => {
                    el.style.opacity = '1';
                }, 300);
            }
        });
    }, 2000);

    setTimeout(() => {
        if (Math.random() < 0.1) {
            const scare = document.createElement('div');
            scare.style.position = 'fixed';
            scare.style.top = '0';
            scare.style.left = '0';
            scare.style.width = '100%';
            scare.style.height = '100%';
            scare.style.background = 'url("momo-scare.jpg") no-repeat center';
            scare.style.backgroundSize = 'cover';
            scare.style.opacity = '0.8';
            document.body.appendChild(scare);
            setTimeout(() => {
                scare.remove();
            }, 200);
        }
    }, 10000);
});
