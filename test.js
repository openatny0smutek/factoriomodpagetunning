
function dynamicallyLoadScript(url, callback) {
    var script = document.createElement("script"); // Make a script DOM node
    script.src = url; // Set it's src to the provided URL
    script.onload = function(){
        callback();
    };
    document.head.appendChild(script); // Add it to the end of the head section of the page (could change 'head' to 'body' to add it to the end of the body section instead)
}
dynamicallyLoadScript("https://cdnjs.cloudflare.com/ajax/libs/linq.js/2.2.0.2/linq.min.js", Run);

function Run() {
    
}