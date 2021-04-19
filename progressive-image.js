(function(){
    var EVENTS = ['scroll', 'wheel', 'mousewheel', 'resize', 'load']

    for(var i = 0; i<EVENTS.length; i++){
        if (window.addEventListener){
            window.addEventListener(EVENTS[i], loadImages);
        }
        else{
            window.attachEvent("on"+EVENTS[i], loadImages);
        }
    }

    function loadImages(){
        var imgs = document.querySelectorAll('.qs-progressive-image');
        for(var i = 0; i < imgs.length; i++){
            var rect = imgs[i].getBoundingClientRect();
            if (rect.top < window.innerHeight) {
                loadImage(imgs[i]);
            }
        }
    }

    function loadImage(item){
        const img = new Image()
        img.src = item.dataset.src;

        img.onload = function(){
            if(item.tagName == 'IMG'){
                item.src=img.src;
            }
            else{
                item.style.backgroundImage = 'url("' + img.src + '")';
            }
            item.classList.remove('qs-progressive-image');
            item.classList.add('qs-progressive-image-origin');
            item.addEventListener('animationend', function(e){
                item.classList.remove('qs-progressive-image-origin');
            })
        }
    }
}())