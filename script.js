document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('background-audio');
    audio.volume = 0.3;

    const images = document.querySelectorAll('.glitch');
    images.forEach(img => {
        img.addEventListener('mouseover', () => {
            img.style.filter = 'brightness(1.5) contrast(2.2)';
        });
        img.addEventListener('mouseout', () => {
            img.style.filter = 'none';
        });
    });

    setInterval(() => {
        const elements = document.querySelectorAll('h1, h2, p.flicker');
        elements.forEach(el => {
            if (Math.random() < 0.25) {
                el.style.opacity = '0.3';
                setTimeout(() => {
                    el.style.opacity = '1';
                }, 350);
            }
        });
    }, 1200);

    setTimeout(() => {
        if (Math.random() < 0.2) {
            const scare = document.createElement('div');
            scare.style.position = 'fixed';
            scare.style.top = '0';
            scare.style.left = '0';
            scare.style.width = '100%';
            scare.style.height = '100%';
            scare.style.background = 'url("https://i.ytimg.com/vi/1hXZIpSmgd4/maxresdefault.jpg") no-repeat center';
            scare.style.backgroundSize = 'cover';
            scare.style.opacity = '0.95';
            document.body.appendChild(scare);
            setTimeout(() => {
                scare.remove();
            }, 400);
        }
    }, 10000);
});
