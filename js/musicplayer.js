function playmusic() {
		audio.play();
		document.getElementById('playbutton').innerHTML = '<img onclick="pause()\" id="playbutt" src="pause.jpg">';
		playcontrol();
        zeitanzeige();
	}
function pause() {
		audio.pause();
		document.getElementById('playbutt').src = 'play.jpg';
		document.getElementById('playbutton').innerHTML = '<img onclick="playmusic()" id="playbutt" src="play.jpg">';
}
function playcontrol() {
	var loop = setInterval(function() {
		if (audio.paused === false && audio.currentTime === audio.duration) {
            document.getElementById('playbutt').src = 'play.jpg';
            clearInterval(loop);
		}
	}, 500);

}
function zeitanzeige() {
    var loop = setInterval(function() {
        if (audio.paused == false) {
            var full = prettyTime(audio.duration);
            var curr = prettyTime(audio.currentTime);

            document.getElementById('time').innerHTML = curr + '/' + full;
        } else {
            clearInterval(loop);
        }
    }, 500);

    function prettyTime(timestamp) {
        var min = Math.floor(timestamp / 60);
        var sec = Math.floor(timestamp - (min *60));

        min = prefixZero(min);
        sec = prefixZero(sec);

        return min + ':' + sec;

        function prefixZero(time) {
            return ((time < 10) ? '0' : '') + time;
        }
    }
}
function vol(z) {
    var bars = ['vol1', 'vol2', 'vol3', 'vol4', 'vol5'];
    var volume = parseInt(z);
    bars.forEach(function(id, i) {
        document.getElementById(id).style.background = (i < volume) ? '#c9c3c3' : '#8d8585';
    });
    audio.volume = volume * 0.2;
}