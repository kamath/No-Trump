(function(funcName, baseObj) {
    // The public function name defaults to window.docReady
    // but you can pass in your own object and own function name and those will be used
    // if you want to put them in a different namespace
    funcName = funcName || "docReady";
    baseObj = baseObj || window;
    var readyList = [];
    var readyFired = false;
    var readyEventHandlersInstalled = false;

    // call this when the document is ready
    // this function protects itself against being called more than once
    function ready() {
        if (!readyFired) {
            // this must be set to true before we start calling callbacks
            readyFired = true;
            for (var i = 0; i < readyList.length; i++) {
                // if a callback here happens to add new ready handlers,
                // the docReady() function will see that it already fired
                // and will schedule the callback to run right after
                // this event loop finishes so all handlers will still execute
                // in order and no new ones will be added to the readyList
                // while we are processing the list
                readyList[i].fn.call(window, readyList[i].ctx);
            }
            // allow any closures held by these functions to free
            readyList = [];
        }
    }

    function readyStateChange() {
        if ( document.readyState === "complete" ) {
            ready();
        }
    }

    // This is the one public interface
    // docReady(fn, context);
    // the context argument is optional - if present, it will be passed
    // as an argument to the callback
    baseObj[funcName] = function(callback, context) {
        // if ready has already fired, then just schedule the callback
        // to fire asynchronously, but right away
        if (readyFired) {
            setTimeout(function() {callback(context);}, 1);
            return;
        } else {
            // add the function and context to the list
            readyList.push({fn: callback, ctx: context});
        }
        // if document already ready to go, schedule the ready function to run
        if (document.readyState === "complete") {
            setTimeout(ready, 1);
        } else if (!readyEventHandlersInstalled) {
            // otherwise if we don't have event handlers installed, install them
            if (document.addEventListener) {
                // first choice is DOMContentLoaded event
                document.addEventListener("DOMContentLoaded", ready, false);
                // backup is window load event
                window.addEventListener("load", ready, false);
            } else {
                // must be IE
                document.attachEvent("onreadystatechange", readyStateChange);
                window.attachEvent("onload", ready);
            }
            readyEventHandlersInstalled = true;
        }
    }
})("docReady", window);

function check()
{
	document.body.innerHTML = document.body.innerHTML.replace(/Great Again/gi, 'Complete Shit');
	document.body.innerHTML = document.body.innerHTML.replace(/GreatAgain/gi, 'CompleteShit');
document.body.innerHTML = document.body.innerHTML.replace(/Donald Trump/gi, 'Adolf Hitler');
document.body.innerHTML = document.body.innerHTML.replace(/Donald John Trump/gi, 'Adolf Hitler');
document.body.innerHTML = document.body.innerHTML.replace(/Donald J Trump/gi, 'Adolf Hitler');
document.body.innerHTML = document.body.innerHTML.replace(/Donald J. Trump/gi, 'Adolf Hitler');
document.body.innerHTML = document.body.innerHTML.replace(/DonaldTrump/gi, 'AdolfHitler');
document.body.innerHTML = document.body.innerHTML.replace(/DonaldJTrump/gi, 'AdolfHitler');
document.body.innerHTML = document.body.innerHTML.replace(/donaldjtrump/gi, 'adolfhitler');
document.body.innerHTML = document.body.innerHTML.replace(/Trump/gi, 'Hitler');
document.body.innerHTML = document.body.innerHTML.replace(/ trump/gi, ' Hitler');
document.body.innerHTML = document.body.innerHTML.replace(/trump /gi, 'Hitler ');
document.body.innerHTML = document.body.innerHTML.replace(/trump/gi, 'hitler');
document.body.innerHTML = document.body.innerHTML.replace(/the donald/gi, 'Adolf Hitler');
document.body.innerHTML = document.body.innerHTML.replace(/the Donald/gi, 'Adolf Hitler');
document.body.innerHTML = document.body.innerHTML.replace(/The Donald/gi, 'Adolf Hitler');
document.body.innerHTML = document.body.innerHTML.replace(/the donald/gi, 'Adolf Hitler');
	var arr = [], l = document.links;
for(var i=0; i<l.length; i++) {
	if(l[i].href.indexOf('hitler') > -1 || l[i].href.indexOf('Hitler') > -1)
	{
		if(l[i].href.indexOf('realAdolfHitler') > -1)
		{
			l[i].href.replace('realAdolfHitler', 'berniesanders')
		}
		if(l[i].href.indexOf('AdolfHitler') > -1)
		{
			l[i].href.replace('AdolfHitler', 'berniesanders')
		}
		if(l[i].href.toLowerCase().indexOf('hitler') > -1)
		{
			l[i].href = "http://feelthebern.org"
			images = l[i].parentNode.getElementsByTagName("img")
			if(images[0])
			{
				for(var a = 0; a<images.length; a++)
				{
					images[a].src="http://media-2.web.britannica.com/eb-media/58/129958-004-C9B8B89D.jpg"
				}
			}
		}
	}
}
var a = document.getElementsByTagName('img')
for(var i = 0; i<a.length; i++)
{
	if(a[i].getAttribute('alt').toLowerCase().indexOf('hitler') > -1)
	{
		a[i].src="http://media-2.web.britannica.com/eb-media/58/129958-004-C9B8B89D.jpg"
	}
}
}

docReady(check);
