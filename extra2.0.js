// for filter purpose for the civil projects filter

  (function(){
    document.addEventListener('DOMContentLoaded', function () {
      // Debug helpers
      if (typeof Isotope === 'undefined') {
        console.error('Isotope not found. Include isotope.pkgd.min.js before this script.');
        return;
      }

      var container = document.querySelector('.portfolio-container');
      if (!container) {
        console.error('No .portfolio-container element found.');
        return;
      }

      // initialize Isotope after images are loaded (safer)
      imagesLoaded(container, function() {
        var iso = new Isotope(container, {
          itemSelector: '.portfolio-item',
          layoutMode: 'fitRows'
        });

        var filters = document.querySelectorAll('#portfolio-flters li');
        if (!filters.length) console.warn('No filter buttons found with #portfolio-flters li');

        filters.forEach(function(btn) {
          btn.addEventListener('click', function(e) {
            e.preventDefault();
            filters.forEach(function(b){ b.classList.remove('filter-active'); });
            this.classList.add('filter-active');

            var filterValue = this.getAttribute('data-filter') || '*';
            try {
              iso.arrange({ filter: filterValue });
            } catch (err) {
              console.error('Isotope arrange error:', err);
            }
          });
        });

        // optional: trigger layout to be safe
        iso.layout();
      });
    });
  })();







// Google Analytics setup
window.dataLayer = window.dataLayer || [];
function gtag() {
	dataLayer.push(arguments);
}
gtag('js', new Date());
gtag('config', 'G-ZVEXHW49ST');
document.addEventListener('DOMContentLoaded', function() {
	const quotes = ["Engineering is the art of directing the great sources of power in nature for the use and convenience of man.", "Perfection is not attainable, but if we chase perfection we can catch excellence.", "Small daily improvements over time lead to stunning results.", "The road to success is always under construction.", "Simplicity is the soul of efficiency."];
	const box = document.getElementById("quote-box");
	const text = document.getElementById("quote-text");
	if(!box || !text) return;
	box.style.transition = 'opacity 0.6s ease';
	box.style.opacity = 1;

	function newQuote() {
		box.style.opacity = 0;
		setTimeout(() => {
			text.textContent = quotes[Math.floor(Math.random() * quotes.length)];
			box.style.opacity = 1;
		}, 600);
	}
	newQuote();
	setInterval(newQuote, 20000);
});
// Visitor counter
async function updateVisitorCount() {
	try {
		const res = await fetch("counter.php");
		const data = await res.json();
		document.getElementById("count").textContent = data.count;
	}
	catch (e) {
		console.error("Visitor counter failed", e);
		document.getElementById("count").textContent = "N/A";
	}
}
updateVisitorCount();
// Facebook chat init
var chatbox = document.getElementById('fb-customer-chat');
if(chatbox) {
	chatbox.setAttribute("page_id", "103446341405220");
	chatbox.setAttribute("attribution", "biz_inbox");
}
window.fbAsyncInit = function() {
	FB.init({
		xfbml: true,
		version: 'v10.0'
	});
};
(function(d, s, id) {
	var js, fjs = d.getElementsByTagName(s)[0];
	if(d.getElementById(id)) return;
	js = d.createElement(s);
	js.id = id;
	js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
	fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
