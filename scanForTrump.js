l = document.links;
a = document.getElementsByTagName('img');

document.body.innerHTML = document.body.innerHTML.replace(/Great Again/gi, 'Complete Shit')
												 .replace(/GreatAgain/gi, 'CompleteShit')
												 .replace(/Donald Trump/gi, 'Adolf Hitler')
												 .replace(/Donald John Trump/gi, 'Adolf Hitler')
												 .replace(/Donald J Trump/gi, 'Adolf Hitler')
												 .replace(/Donald J. Trump/gi, 'Adolf Hitler')
												 .replace(/DonaldTrump/gi, 'AdolfHitler')
												 .replace(/DonaldJTrump/gi, 'AdolfHitler')
												 .replace(/donaldjtrump/gi, 'adolfhitler')
												 .replace(/Trump/gi, 'Hitler')
												 .replace(/ trump/gi, ' Hitler')
												 .replace(/trump /gi, 'Hitler ')
												 .replace(/trump/gi, 'hitler')
												 .replace(/the donald/gi, 'Adolf Hitler')
												 .replace(/the Donald/gi, 'Adolf Hitler')
												 .replace(/The Donald/gi, 'Adolf Hitler')
												 .replace(/the donald/gi, 'Adolf Hitler');
												 
for (var i = 0; i < l.length; i++) {
	l[i].href.replace(/realAdolfHitler|AdolfHitler/g, 'berniesanders')
	
	if (l[i].href.toLowerCase().indexOf('hitler') > -1) { 
		l[i].href = "http://feelthebern.org";
		images = l[i].parentNode.getElementsByTagName("img");
		
		if (images[0]) { 
			for (var j = 0; j < images.length; j++) { 
				images[j].src = "http://media-2.web.britannica.com/eb-media/58/129958-004-C9B8B89D.jpg";
			}
		}
	}
}

for (var i = 0; i < a.length; i++) {
	if (a[i].getAttribute('alt').toLowerCase().indexOf('hitler') > -1) {
		a[i].src = "http://media-2.web.britannica.com/eb-media/58/129958-004-C9B8B89D.jpg"
	}
}