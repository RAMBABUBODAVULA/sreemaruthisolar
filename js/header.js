// Load shared header and mark active link
(function() {
    function applyHeaderOffset() {
        var container = document.getElementById('site-header');
        if (container) {
            var safeGap = 12;
            document.body.style.paddingTop = (container.offsetHeight + safeGap) + 'px';
        }
    }

    function setActiveLink() {
        var path = window.location.pathname.split('/').pop();
        if (!path) path = 'index.html';
        var links = document.querySelectorAll('#site-header a');
        links.forEach(function(link) {
            var href = link.getAttribute('href');
            if (href === path) {
                link.classList.add('active');
            }
        });
    }

    fetch('header.html?v=20260228-2', { cache: 'no-store' })
        .then(function(resp) { return resp.text(); })
        .then(function(html) {
            var container = document.getElementById('site-header');
            if (container) {
                container.innerHTML = html;
                setActiveLink();
                applyHeaderOffset();
                window.addEventListener('resize', applyHeaderOffset);
                window.addEventListener('orientationchange', applyHeaderOffset);
                window.addEventListener('load', applyHeaderOffset);
                setTimeout(applyHeaderOffset, 100);
            }
        })
        .catch(function(err) {
            console.error('Failed to load header:', err);
        });
})();