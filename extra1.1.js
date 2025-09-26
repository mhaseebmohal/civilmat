<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-ZVEXHW49ST"></script>

  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-######');






		const quotes = ["Engineering is the art of directing the great sources of power in nature for the use and convenience of man.", "Perfection is not attainable, but if we chase perfection we can catch excellence.", "Small daily improvements over time lead to stunning results.", "The road to success is always under construction.", "Simplicity is the soul of efficiency."];

		function newQuote() {
			const box = document.getElementById("quote-box");
			const text = document.getElementById("quote-text");
			box.style.opacity = 0;
			setTimeout(() => {
				text.innerText = quotes[Math.floor(Math.random() * quotes.length)];
				box.style.opacity = 1;
			}, 600);
		}
		// first load
		newQuote();
		// update rarely, to stay subtle
		setInterval(newQuote, 20000);

		
		
		
		
		
		

async function updateVisitorCount() {
  try {
    const res = await fetch("counter.php");
    const data = await res.json();
    document.getElementById("count").textContent = data.count;
  } catch (e) {
    console.error("Visitor counter failed", e);
    document.getElementById("count").textContent = "N/A";
  }
}
updateVisitorCount();




	<!-- Messenger Chat Plugin Code -->
	<div id="fb-root"></div>
	<!-- Your Chat Plugin code -->
	<div id="fb-customer-chat" class="fb-customerchat"> </div>
	<script>
	var chatbox = document.getElementById('fb-customer-chat');
	chatbox.setAttribute("page_id", "103446341405220");
	chatbox.setAttribute("attribution", "biz_inbox");
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
	</script>
	
	
	
	
