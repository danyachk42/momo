document.addEventListener('DOMContentLoaded', () => {
    const backgroundAudio = document.getElementById('background-audio');
    const screamAudio = document.getElementById('scream-audio');
    backgroundAudio.volume = 0.3;
    screamAudio.volume = 0.8;

    const images = document.querySelectorAll('.glitch');
    images.forEach(img => {
        img.addEventListener('mouseover', () => {
            img.style.filter = 'brightness(1.7) contrast(2.7)';
        });
        img.addEventListener('mouseout', () => {
            img.style.filter = 'none';
        });
    });

    setInterval(() => {
        const elements = document.querySelectorAll('h1, h2, p.flicker');
        elements.forEach(el => {
            if (Math.random() < 0.3) {
                el.style.opacity = '0.2';
                setTimeout(() => {
                    el.style.opacity = '1';
                }, 500);
            }
        });
    }, 1500);

    const triggerScreamer = (imageUrl) => {
        screamAudio.play();
        const scare = document.createElement('div');
        scare.style.position = 'fixed';
        scare.style.top = '0';
        scare.style.left = '0';
        scare.style.width = '100%';
        scare.style.height = '100%';
        scare.style.background = `url("${imageUrl}") no-repeat center`;
        scare.style.backgroundSize = 'cover';
        scare.style.opacity = '1';
        scare.style.zIndex = '1000';
        document.body.appendChild(scare);
        setTimeout(() => {
            scare.remove();
        }, 500);
    };

    setTimeout(() => {
        if (Math.random() < 0.25) {
            triggerScreamer('https://i.ytimg.com/vi/1hXZIpSmgd4/maxresdefault.jpg');
        }
    }, Math.random() * 7000 + 8000);

    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            if (Math.random() < 0.15) {
                e.preventDefault();
                triggerScreamer('https://img.freepik.com/free-photo/scary-ghostly-creature-dark_23-2150934968.jpg');
                setTimeout(() => {
                    window.location.href = link.href;
                }, 600);
            }
        });
    });
});
