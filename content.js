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
        if (document.readyState === "complete") {
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
            setTimeout(function() {
                callback(context);
            }, 1);
            return;
        } else {
            // add the function and context to the list
            readyList.push({
                fn: callback,
                ctx: context
            });
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

function check() {
    document.body.innerHTML = document.body.innerHTML.replace(/Great Again/gi, 'Complete Shit');
    document.body.innerHTML = document.body.innerHTML.replace(/GreatAgain/gi, 'CompleteShit');
    document.body.innerHTML = document.body.innerHTML.replace(/Donald Trump/gi, 'the KKK');
    document.body.innerHTML = document.body.innerHTML.replace(/Donald J Trump/gi, 'the KKK');
    document.body.innerHTML = document.body.innerHTML.replace(/Donald John Trump/gi, 'the KKK');
    document.body.innerHTML = document.body.innerHTML.replace(/Donald J. Trump/gi, 'the KKK');
    document.body.innerHTML = document.body.innerHTML.replace(/DonaldTrump/gi, 'DonaldDrumpf');
    document.body.innerHTML = document.body.innerHTML.replace(/DonaldJTrump/gi, 'DonaldJDrumpf');
    document.body.innerHTML = document.body.innerHTML.replace(/donaldjtrump/gi, 'donaldjdrumpf');
    document.body.innerHTML = document.body.innerHTML.replace(/Trump/gi, 'the KKK');
    document.body.innerHTML = document.body.innerHTML.replace(/ trump/gi, ' Drumpf');
    document.body.innerHTML = document.body.innerHTML.replace(/trump /gi, 'Drumpf ');
    document.body.innerHTML = document.body.innerHTML.replace(/trump/gi, 'drumpf');
    document.body.innerHTML = document.body.innerHTML.replace(/donald trump/gi, 'the KKK');
    document.body.innerHTML = document.body.innerHTML.replace(/the donald/gi, 'the KKK');
    document.body.innerHTML = document.body.innerHTML.replace(/the Donald/gi, 'the KKK');
    document.body.innerHTML = document.body.innerHTML.replace(/The Donald/gi, 'the KKK');
    document.body.innerHTML = document.body.innerHTML.replace(/the donald/gi, 'the KKK');
    document.body.innerHTML = document.body.innerHTML.replace(/Rafael Edward "Ted" Cruz/gi, 'The Zodiac Killer');
    document.body.innerHTML = document.body.innerHTML.replace(/Ted Cruz/gi, 'The Zodiac Killer');
    document.body.innerHTML = document.body.innerHTML.replace(/TedCruz/gi, 'ZodiacKiller');
    document.body.innerHTML = document.body.innerHTML.replace(/ted cruz/gi, 'the zodiac killer');
    document.body.innerHTML = document.body.innerHTML.replace(/tedcruz/gi, 'zodiackiller');
    document.body.innerHTML = document.body.innerHTML.replace(/Cruz/gi, 'Zodiac Killer');
    document.body.innerHTML = document.body.innerHTML.replace(/ cruz/gi, ' Zodiac Killer');
    document.body.innerHTML = document.body.innerHTML.replace(/cruz /gi, 'Zodiac Killer ');
    document.body.innerHTML = document.body.innerHTML.replace(/cruz/gi, 'Zodiac Killer');
    var arr = [],
        l = document.links;
    for (var i = 0; i < l.length; i++) {
        if (l[i].href.indexOf('kkk') > -1 || l[i].href.indexOf('thekkk') > -1) {
            if (l[i].href.indexOf('realDonaldDrumpf') > -1) {
                l[i].href.replace('realDonaldDrumpf', 'berniesanders')
            }
            if (l[i].href.indexOf('DonaldDrumpf') > -1) {
                l[i].href.replace('DonaldDrumpf', 'berniesanders')
            }
            if (l[i].href.toLowerCase().indexOf('drumpf') > -1) {
                l[i].href = "http://feelthebern.org"
                images = l[i].parentNode.getElementsByTagName("img")
                if (images[0]) {
                    for (var a = 0; a < images.length; a++) {
                        images[a].src = "http://usedandthenewjimcrow.commons.gc.cuny.edu/files/2013/11/1.jpg"
                    }
                }
            }
        }
    }
    var a = document.getElementsByTagName('img')
    for (var i = 0; i < a.length; i++) {
        if (a[i].getAttribute('alt').toLowerCase().indexOf('drumpf') > -1 || a[i].getAttribute('alt').toLowerCase().indexOf('kkk') > -1) {
            a[i].src = "http://usedandthenewjimcrow.commons.gc.cuny.edu/files/2013/11/1.jpg"
        }
    }
}
    docReady(check);
