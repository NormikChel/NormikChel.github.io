// redirect.js
document.addEventListener('DOMContentLoaded', () => {
    const isCaptchaPassed = localStorage.getItem('captcha_passed') === 'true';
    
    if(isCaptchaPassed) {
        const sessionDuration = 24 * 60 * 60 * 1000;
        const passTime = parseInt(localStorage.getItem('captcha_timestamp'));
        
        if(Date.now() - passTime >= sessionDuration) {
            localStorage.removeItem('captcha_passed');
            localStorage.removeItem('captcha_timestamp');
            window.location.href = "captcha-wall.html";
        }
    } else {
        window.location.href = "captcha-wall.html";
    }
});
