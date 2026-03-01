// Load shared footer
(function() {
    var footerContainer = document.getElementById('site-footer');
    if (footerContainer) {
        // Use cache-busting technique to ensure fresh footer load
        var timestamp = new Date().getTime();
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'footer.html?v=' + timestamp, true);
        xhr.onload = function() {
            if (xhr.status === 200) {
                footerContainer.innerHTML = xhr.responseText;
                // Re-execute scripts in the loaded footer
                var scripts = footerContainer.querySelectorAll('script');
                scripts.forEach(function(script) {
                    var newScript = document.createElement('script');
                    if (script.src) {
                        newScript.src = script.src;
                    } else {
                        newScript.textContent = script.textContent;
                    }
                    footerContainer.appendChild(newScript);
                });
            }
        };
        xhr.send();
    }
})();
