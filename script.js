window.addEventListener('keydown', function(e) {
    const audio = document.querySelector(`audio[data-key = "${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key = "${e.keyCode}"]`);
    if(!audio) {
        return;
    }; //just stops function if no keycode matched audio
    audio.currentTime = 0; //rewind audio time if key hit again and again
    audio.play();

    key.classList.add('playing');

    function removetransition(e){
        if(e.propertyName !== 'transform') return;
        this.classList.remove('playing');

    }

    const keys = document.querySelectorAll('.key');
    keys.forEach(key => key.addEventListener('transitionend', removetransition));

});