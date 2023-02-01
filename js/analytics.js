var script = document.createElement('script');
script.onload = function () {
    //do stuff with the script
};
script.src = "https://www.googletagmanager.com/gtag/js?id=G-K2XG4QX6F3";

document.head.appendChild(script); //or something of the likes

window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'G-K2XG4QX6F3');