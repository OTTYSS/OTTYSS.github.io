// remove .html
document.addEventListener("DOMContentLoaded", () => {
    const isLocal = location.hostname === "localhost" ||
        location.hostname === "127.0.0.1" ||
        location.protocol === "file:";

    if (isLocal) return;

    document.querySelectorAll('a[href$=".html"]').forEach(link => {
        try {
            const href = link.getAttribute('href');
            // Ignora enlaces absolutos a otros dominios
            const url = new URL(href, location.origin);
            if (url.hostname !== location.hostname) return;

            const newHref = href.replace(/\.html(\?|#|$)/, '$1');
            link.setAttribute('href', newHref);
        } catch (e) {
        }
    });
});
window.addEventListener('load', function() {
    const video = document.querySelector('.background-video');
    const content = document.querySelector('.content');

    // Дождемся окончания видео, прежде чем показывать контент
    video.oncanplaythrough = () => {
        content.classList.remove('hidden');
        content.classList.add('show');
    };
});
