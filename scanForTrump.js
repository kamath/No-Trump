l = document.links;
a = document.getElementsByTagName('img');

document.body.innerHTML = document.body.innerHTML.replace(/Great Again/gi, 'Complete Shit')
												 .replace(/GreatAgain/gi, 'CompleteShit')
												 .replace(/Donald Trump/gi, 'some dumbass')
												 .replace(/Donald John Trump/gi, 'some dumbass')
												 .replace(/Donald J Trump/gi, 'some dumbass')
												 .replace(/Donald J. Trump/gi, 'some dumbass')
												 .replace(/DonaldTrump/gi, 'somedumbass')
												 .replace(/DonaldJTrump/gi, 'somedumbass')
												 .replace(/donaldjtrump/gi, 'somedumbass')
												 .replace(/Trump/gi, 'some dumbass')
												 .replace(/ trump/gi, ' some dumbass')
												 .replace(/trump /gi, 'some dumbass ')
												 .replace(/trump/gi, 'some dumbass')
												 .replace(/the donald/gi, 'some dumbass')
												 .replace(/the Donald/gi, 'some dumbass')
												 .replace(/The Donald/gi, 'some dumbass')
												 .replace(/the donald/gi, 'some dumbass);
												 
for (var i = 0; i < l.length; i++) {
	l[i].href.replace(/realsomedumbass|somedumbass/g, 'berniesanders')
	
	if (l[i].href.toLowerCase().indexOf('hitler') > -1) { 
		l[i].href = "http://feelthebern.org";
		images = l[i].parentNode.getElementsByTagName("img");
		
		if (images[0]) { 
			for (var j = 0; j < images.length; j++) { 
				images[j].src = "http://usedandthenewjimcrow.commons.gc.cuny.edu/files/2013/11/1.jpg";
			}
		}
	}
}

for (var i = 0; i < a.length; i++) {
	if (a[i].getAttribute('alt').toLowerCase().indexOf('hitler') > -1) {
		a[i].src = "http://usedandthenewjimcrow.commons.gc.cuny.edu/files/2013/11/1.jpg"
	}
}
