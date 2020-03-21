var firstScript = document.getElementsByTagName("script")[0],
    js = document.createElement("script");
js.src =
    "https://cdnjs.cloudflare.com/ajax/libs/Snowstorm/20131208/snowstorm-min.js";
js.onload = function() {
    // do stuff with your dynamically loaded script
    snowStorm.snowColor = "#99ccff";
};
firstScript.parentNode.insertBefore(js, firstScript);