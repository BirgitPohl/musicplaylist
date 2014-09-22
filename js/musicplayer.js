	// var pause = new Image();
	// pause.src = "pause.jpg";

// var play_control = 0;	
// function playmusic() {
// 	if (play_control == 0) {
// 		// document.getElementById('audioPlayer').play();
// 		audio.autoplay = true;
// 		document.getElementById('playbutt').src = 'pause.jpg';
// 		play_control = 1;
// 		window.setTimeout("playcontrol()",0);
// 		window.setTimeout("zeitanzeige()",0);
// 	} else {
// 		document.getElementById('audioPlayer').pause();
// 		document.getElementById('playbutt').src = 'play.jpg';
// 		//document.getElementById('playbutton').innerHTML = "<"img onclick=\"playmusic()\" id=\"playbutt\" src=\"play.jpg\">"

// 		play_control = 0;
// 	}



function playmusic() {
		// document.getElementById('audioPlayer').play();
		audio.play();
		document.getElementById('playbutton').innerHTML = "<img onclick=\"pause()\" id=\"playbutt\" src=\"pause.jpg\">";
		window.setTimeout("playcontrol()",0);
		window.setInterval("zeitanzeige()",0);
		// play_control = 1;
	}
function pause() {
	// if (audio.played == true) {
		audio.pause();
		document.getElementById('playbutt').src = 'play.jpg';
		// play_control = 0;
		document.getElementById('playbutton').innerHTML = "<img onclick=\"playmusic()\" id=\"playbutt\" src=\"play.jpg\">"
	// }

}
function playcontrol() {
	// if(play_control == 1) {
	if (audio.paused == false) {
		if(audio.currentTime == audio.duration) {
		document.getElementById('playbutt').src = 'play.jpg';
		// play_control = 0;
		} else {
		window.setTimeout("playcontrol()",0);
		}
	}
}
function zeitanzeige() {
	if (audio.paused == false) {
	// if(play_control == 1) {
		var full = audio.duration;
		var full_min = Math.floor(full / 60);
		var full_sec = Math.floor(full - (full_min *60));
		
		if(full_min < 10) {
			full_min = '0' + full_min;
		}
		if(full_sec < 10) {
			full_sec = '0' + full_sec;
		}
		
		var curr = audio.currentTime;
		var curr_min = Math.floor(curr / 60);
		var curr_sec = Math.floor(curr - (curr_min *60));
		
		if(curr_min < 10) {
			curr_min = '0' + curr_min;
		}
		if(curr_sec < 10) {
			curr_sec = '0' + curr_sec;
		}
		
		document.getElementById('time').innerHTML = ""+curr_min+":"+curr_sec+"/"+full_min+":"+full_sec+"";
		window.setTimeout("zeitanzeige()",0);
	}
}
function vol(z) {
	switch(z) {
		case "1":
		audio.volume = 0.2;
		document.getElementById('vol1').style.background = '#c9c3c3';
		document.getElementById('vol2').style.background = '#8d8585';
		document.getElementById('vol3').style.background = '#8d8585';
		document.getElementById('vol4').style.background = '#8d8585';
		document.getElementById('vol5').style.background = '#8d8585';
		break;
		case "2":
		audio.volume = 0.4;
		document.getElementById('vol1').style.background = '#c9c3c3';
		document.getElementById('vol2').style.background = '#c9c3c3';
		document.getElementById('vol3').style.background = '#8d8585';
		document.getElementById('vol4').style.background = '#8d8585';
		document.getElementById('vol5').style.background = '#8d8585';		
		break;	
		case "3":
		audio.volume = 0.6;
		document.getElementById('vol1').style.background = '#c9c3c3';
		document.getElementById('vol2').style.background = '#c9c3c3';
		document.getElementById('vol3').style.background = '#c9c3c3';
		document.getElementById('vol4').style.background = '#8d8585';
		document.getElementById('vol5').style.background = '#8d8585';			
		break;			
		case "4":
		audio.volume = 0.8;
		// document.getElementById('audioPlayer').volume = 0.6;
		document.getElementById('vol1').style.background = '#c9c3c3';
		document.getElementById('vol2').style.background = '#c9c3c3';
		document.getElementById('vol3').style.background = '#c9c3c3';
		document.getElementById('vol4').style.background = '#c9c3c3';
		document.getElementById('vol5').style.background = '#8d8585';			
		break;	
		case "5":
		audio.volume = 1.0;
		document.getElementById('vol1').style.background = '#c9c3c3';
		document.getElementById('vol2').style.background = '#c9c3c3';
		document.getElementById('vol3').style.background = '#c9c3c3';
		document.getElementById('vol4').style.background = '#c9c3c3';
		document.getElementById('vol5').style.background = '#c9c3c3';			
		break;			
	}
}