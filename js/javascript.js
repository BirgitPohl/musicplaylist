var bands = ["Springtide: 01 Distant Thunder Sunday Morning", "Springtide: 03 Route 114 December 1-2012-1527", "Springtide: 04 Passing By The Cliff Extended Mix", "Springtide: 05 Shibuya TwoHours Before The First Bus", "Springtide: 07 No Smoking", "THERE.: Where The Magic Happens", "THERE.: She's Dying Young", "THERE.: Overdose"]; //context
var bandPictures = ["Springtide_01_Distant-thunder-Sunday-morning", "Springtide_03_Route-114-December-1-2012-1527", "Springtide_04_Passing-by-the-cliff-Extended-Mix", "Springtide_05_Shibuya-two-hours-before-the-first-bus", "Springtide_07_No-smoking", "THERE_Where-The-Magic-Happens", "THERE_Shes-Dying-Young", "THERE_Overdose"]; //needed for creating the source
var playlist = []; //To track the position of every track and the size, used for the functions playNextSong, addToPlaylist, deleteFromPlaylist

/*####### Creating a frequency analyser: ######*/
var audio = new Audio(); //create a new instance of an audio object and adjust some of its properties
var canvas, ctx, source, context, analyser, fbc_array, bars, bar_x, bar_width, bar_height; //establish all variables that my Analiser will use
/* ####### Creating a frequency analyser: end ###### */
var nextSongCounter = 0; //song that is currently played +1
var playlistCounter = 0; //size of playlist (not array), to compare with nextSongCounter
//variable is needed for function playNextSong
var playThisSong; //variable for getArrayPosition() and changeMusicFromList()
var change; //variable for getArrayPosition() and changeMusicFromList()
var x = 1;

/*_________________________________________________________________________*/

//first sorts the arrays so that you are able to push anything but gives the result in alphabetic order with function "getAllBands"
<<<<<<< HEAD
bands.sort();
bandPictures.sort();
=======
// bands.sort();
// bandPictures.sort();
>>>>>>> master

/* ######## music box ########### */
/* ####### Creating a frequency analyser: ###### */
audio.src = 'music/Springtide_01_Distant-thunder-Sunday-morning.mp3'; //note: Firefox interprets MP3 from version 21. (Most updated is 25)
<<<<<<< HEAD
audio.controls = true;
=======
audio.controls = false;
>>>>>>> master
audio.loop = false;
audio.autoplay = false;
audio.id = "audioPlayer"
/* ####### Creating a frequency analyser ###### */
/* ######## music box end ########### */

/* ######### onLoad event ############*/
/* Gibt beim Laden alle Bands aus, die sich im Array bands befinden */
function getAllBands(){
	document.getElementById("main").innerHTML = ""; //to clear the content
	var writeIt = "";
	for (var i = 0; i < bands.length; i++) {
		writeIt += "<div class=\"bandDiv\" )\"><img src=\"img/" + bandPictures[i] + ".jpg\" alt=\"" + bands[i] + "\" class=\"bandPicture\" /><p class=\"bandHeadline pink\" >" + bands[i] + "</p><a onclick=\"changeMusic(\'" + bandPictures[i] + "\')\">></a><a class=\"clearfix\" onclick=\"addToPlaylist(\'" + bandPictures[i] + "\')\">+</a></div>";
	} 
	document.getElementById("main").innerHTML = writeIt + "<div class=\"clear\"></div>";
}
/* ######### onLoad event end ############*/

<<<<<<< HEAD
=======
/* ######### get Band Name ###########*/

function getBandName(link) {
	return bands[bandPictures.indexOf(link)];
	//gives the position of bandPictures putting it into bands[bandName] to get the band's name
}

/* ######### get Band Name end ###########*/

>>>>>>> master
/* ############# Search ############### */
/*Searches for a specific artist and gives it back*/
function getSearch() {
	
	var result = document.getElementById("searchField").value;
	var bandResultIndex = bands.indexOf(result);
	var bandResults = bands.indexOf(result.toString());

/*Abfangen von Abfragen, die zu keinem Ergebnis führen*/
	if (bands.indexOf(result) >= 0) {
		document.getElementById("main").innerHTML =
		"<div class=\"bandDiv\" ><img src=\"img/" + bandPictures[bandResultIndex] + ".jpg\" alt=\"" + bands[bandResults] + "\" class=\"bandPicture\" /><p class=\"bandHeadline blue\">" + bands[bandResults] + "</p><a onclick=\"changeMusic(\'" + bandPictures[bandResultIndex] + "\')\">></a><a onclick=\"addToPlaylist(\'" + bandPictures[bandResultIndex] + "\')\">+</a></div><div class=\"clear\"></div>";
	}
}
/* ############# Search end ############### */

/* ########### Playlist #############*/
<<<<<<< HEAD
function addToPlaylist(track) {
	var bandName = bands[bandPictures.indexOf(track)]; //gives the position of bandPictures putting it into bands[bandName] to get the band's name
=======
function addToPlaylist(link) {
	//var bandName = bands[bandPictures.indexOf(link)]; //gives the position of bandPictures putting it into bands[bandName] to get the band's name
	var bandName = getBandName(link);
>>>>>>> master
	//cutting strings that are to long
	if(bandName.length > 17) {
		bandName = bandName.slice(0, 17);
		bandName = bandName.concat("...");
	}

	var newPosition = playlist.length;
	//creates the next list Object
<<<<<<< HEAD
	var playlistObject = "<p onmouseover=\"makeDeleteVisible(" + newPosition + ")\" onmouseout=\"makeDeleteHidden(" + newPosition + ")\" id=\"" + newPosition + "deletePosition\"><a class=\"hiddenDelete\" onclick=\"deleteFromPlaylist(" + newPosition + ")\" id=\"" + newPosition + "delete\">x</a><a data-songSource=\"" + track + "\"onclick=\"changeMusicFromList(" + newPosition + ", \'" + track + "\')\" id=\"" + newPosition + "playlistPosition\">" + bandName + "</a></p>";
=======
	var playlistObject = "<p onmouseover=\"makeDeleteVisible(" + newPosition + ")\" onmouseout=\"makeDeleteHidden(" + newPosition + ")\" id=\"" + newPosition + "deletePosition\"><a class=\"hiddenDelete\" onclick=\"deleteFromPlaylist(" + newPosition + ")\" id=\"" + newPosition + "delete\">x</a><a data-songSource=\"" + link + "\"onclick=\"changeMusicFromList(" + newPosition + ", \'" + link + "\')\" id=\"" + newPosition + "playlistPosition\">" + bandName + "</a></p>";
>>>>>>> master

	playlist.push(newPosition); //stores the number which represents the length of the playlist array
	document.getElementById('musicList').innerHTML += playlistObject;
	playlistCounter ++; //increases number of playlist size (not array)
}

function makeDeleteVisible(playPosition) {
	document.getElementById(playPosition + 'delete').className = document.getElementById(playPosition + 'delete').className.replace('hiddenDelete', 'visibleDelete');
	document.getElementById(playPosition + 'delete').innerHTML = "x";
}

function makeDeleteHidden(playPosition) {
	if(document.getElementById(playPosition + 'playlistPosition').className == 'pink'){
		document.getElementById(playPosition + 'delete').innerHTML = ">";
		//document.getElementById(playPosition + 'delete').className = document.getElementById(playPosition + 'delete').cl
	}	else {
		document.getElementById(playPosition + 'delete').className = document.getElementById(playPosition + 'delete').className.replace('visibleDelete' , 'hiddenDelete');
	}
	
}

//delets a song of the list
function deleteFromPlaylist(playlistPosition) {
	//gets the element
	var del = document.getElementById(playlistPosition + 'deletePosition');
	//goes to the elements parent, deletes the child with the id
	del.parentNode.removeChild(del);
	playlist[playlistPosition] = "dlt";
}
/* ########### Playlist end ############# */

/* ############# Putting music into the music player ########## */
//changes music, puts music into the player over variable audio
function changeMusic(link) {
	audio.src = 'music/' + link + '.mp3';
<<<<<<< HEAD
	audio.autoplay = true;
=======
	document.getElementById('infofenster').innerHTML = "<marquee behavior=\"alternate\" scrolldelay=\"300\">" + getBandName(link) + "</marquee>"
	audio.autoplay = true;
	// play_control = 0;
	playmusic();
	makeAllDefault();
>>>>>>> master
}
//If you click on a specitic position in the Playlist
function changeMusicFromList(playlistPosition, track) {
	//playThisSong = document.getElementById(playlistPosition + 'playlistPosition').innerHTML;
	//change = bands.indexOf(playThisSong);//values the innerHTML which comes originally from array bands and looks up the position in bands. Puts the playlistPosition into a variable
 	//audio.src = 'music/' + bandPictures[change] + '.mp3';
 	audio.src = 'music/' + track + '.mp3';
	audio.autoplay = true;
<<<<<<< HEAD
	
=======
	// play_control = 0;
	playmusic();

>>>>>>> master
	//Visual Feedback for currently played song
	
	makeAllDefault();
	/*var i = 0;
	for (i = 0; i < playlistCounter; i++){
		while (playlist[i] == "dlt" && playlist[playlistCounter-1] != "dlt") {
			i++
		} 
		if (playlist[i] != "dlt") {
			document.getElementById(i + 'playlistPosition').className = document.getElementById(i + 'playlistPosition').className.replace( /(?:^|\s)pink(?!\S)/g , '' );
			makeDeleteHidden(i);
		}
	}*/
	document.getElementById(playlistPosition + 'playlistPosition').className = 'pink';
	makeDeleteVisible(playlistPosition);
	playlistPosition ++; //preparing to give value of playlistPosition to nextSongCounter, which is important for automatic playlist playing
	nextSongCounter = playlistPosition; //sets nextSongCounter to playlistPosition
}
/* ############# Putting music into the music player end ########## */


function makeAllDefault() {
	vari = 0;
	for (i = 0; i < playlistCounter; i++){
		while (playlist[i] == "dlt" && playlist[playlistCounter-1] != "dlt") {
			i++
		} 
		if (playlist[i] != "dlt") {
			document.getElementById(i + 'playlistPosition').className = document.getElementById(i + 'playlistPosition').className.replace( /(?:^|\s)pink(?!\S)/g , '' );
			makeDeleteHidden(i);
		}
	}
}


/* ########### plays the next song in the Playlist ############# */
function countX() {	
			x=1;
			nextSongCounter ++;
			x ++; //initialize the minus
}

function playNextSong() {
	makeAllDefault();
	while (playlist[nextSongCounter] == "dlt") {
		countX();
	}
	//matches the amount of songs in playlist with the counter that stands for a song that is played
	//shortly said: asks if the end of the playlist is reached
	if(nextSongCounter < playlistCounter) {
		getArrayPosition(); 
		changeMusic(bandPictures[change]); //triggers function //gives parameter of bandpictures position to function changeMusic
		
		// visual feedback of the currently played song
		x = x - nextSongCounter;
		if(x >= 0) {
			document.getElementById(x + 'playlistPosition').className = document.getElementById(x + 'playlistPosition').className.replace( /(?:^|\s)pink(?!\S)/g , '' );
			makeDeleteHidden(x);
		}
		document.getElementById(nextSongCounter + 'playlistPosition').className = 'pink'; 
		makeDeleteVisible(nextSongCounter);
		nextSongCounter ++; //counts +1 to play the next song after eventListener ended triggers again
	} else {
		makeAllDefault(); //make all blue if nothing else than the last song ended.
	}
}
function getArrayPosition() {
	playThisSong = document.getElementById(nextSongCounter + 'playlistPosition').getAttribute("data-songSource");
	change = bandPictures.indexOf(playThisSong);//values the innerHTML which comes originally from array bands and looks up the position in bands. Puts the number into a variable
}
/* ########### plays the next song in the Playlist  end############# */

/* ############ frequence analizer ################ */
// checking Browser because they use different prefixes for AudioContext
function checkBrowser(BrowserName) {
	var agent = navigator.userAgent.toLowerCase();
	if (agent.indexOf( BrowserName ) > -1) {
		return true;
	}
	return false;
}

/* ############ Creating a frequence analizer ######### */
//Initialize the Music Player after the page loads all of its HTML into the window
window.addEventListener("load", initMp3Player, false);

function initMp3Player() {
<<<<<<< HEAD
	document.getElementById('musicBox').appendChild(audio); //add an Audio tag to musicBox
=======
	//document.getElementById('musicBox').appendChild(audio); //add an Audio tag to musicBox
	document.getElementById('musicBox').innerHTML += "<div id=\"player\"><div id=\"playbutton\"><img onclick=\"playmusic()\" id=\"playbutt\" src=\"play.jpg\"></div><div id=\"infofenster\"><marquee behavior=\"alternate\" scrolldelay=\"300\">Orchester Power No.1 - fricke music</marquee></div><div id=\"time\">00:00/00:00</div><div id=\"ton\"><div onclick=\"vol(\'1\')\" id=\"vol1\"></div><div onclick=\"vol(\'2\')\" id=\"vol2\"></div><div onclick=\"vol(\'3\')\" id=\"vol3\"></div><div onclick=\"vol(\'4\')\" id=\"vol4\"></div><div onclick=\"vol(\'5\')\" id=\"vol5\"></div></div></div>";
	audio.volume = 0.6;

>>>>>>> master
	if (checkBrowser("chrome")) {
		context = new webkitAudioContext(); //AudioContext object instance | webkit is the prefix so that it works in Chrome
		analyser = context.createAnalyser(); //AnalyserNode method
		canvas = document.getElementById('analiserRender');
		ctx = canvas.getContext('2d');
		//Re-route audio playback into the processing graph of the AudioContext
		source = context.createMediaElementSource(audio); //!!!! does not work in FF
		source.connect(analyser);//undefined in FF
		analyser.connect(context.destination); //undefined in FF

		frameLooper();
		checkEndSong(); //triggers function
	}
	//Alternative for Browser who can not deal properly with AudioContext methods like "createMediaElementSource" or "connect"
	if (checkBrowser("firefox")) {
		context = new AudioContext(); //AudioContext object instance | Firefox uses basic support
		document.getElementById('analiserRender').outerHTML = "<div id=\"analiserRender\"><span>You are using Firefox. For full experience please use <a target=\"_blank\" href=\"http://chrome.google.com\">Chrome</a>.</span></div>";
		checkEndSong(); //triggers function
	}
}
/* ############ Creating a frequence analizer end ######### */

function checkEndSong() {
		//EventListener is used for playing the next song in the playlist
		//It is understand to put it directly after the audio object is created
		audio.addEventListener('ended', playNextSong, false);
}

/* ############ Creating a frequence analizer ######### */
//frameLooper() animates any style of graphics you wish to the audio frequency
// Looping at the default frame rate that the browser provides (appox. 60 FPS)
function frameLooper() {

	if (checkBrowser("chrome")) {
		setTimeout(frameLooper, 1000 / 60); //1000/60 approx. the speed of a browser
		//alert('Chrome');
	}
	if (checkBrowser("firefox")) {
		window.mozRequestAnimationFrame(frameLooper); //Function runs many times per second because of requestAnimationFrame, this is a looping function, similiar to setTimeOut and setIntervall
	}
	if (checkBrowser("msie")) {
		window.msRequestAnimationFrame(frameLooper); //Function runs many times per second because of requestAnimationFrame, this is a looping function, similiar to setTimeOut and setIntervall
	}
	/* ##### alternatives for looping a function ###### */
	//window.webkitRequestAnimationFrame(frameLooper); 
	//window.mozRequestAnimationFrame(frameLooper);
	//window.msRequestAnimationFrame(frameLooper);
	//setTimeout(frameLooper, 1000 / 60);
	//window.setInterval(frameLooper);
	/* ##### alternatives for looping a function end ###### */

	fbc_array = new Uint8Array(analyser.frequencyBinCount); //This array represents the data's sound frequency
	analyser.getByteFrequencyData(fbc_array);
	ctx.clearRect(0, 0, canvas.width, canvas.height); //Clears the canvas every time this function loops
	ctx.fillStyle = '#e40152'; //Color the Bars - I like #00CCFF
	bars = 100; //amount of bars

	//for function sets bars in different height, this makes the dancing effect
	for (var i = 0; i < bars; i++) {
		bar_x = i * 3; //sets the x-position
		bar_width = 2; //sets the width
		bar_height = -(fbc_array[i] / 2); //this makes the bars dance up and down | the frequence will be devided to two, this is negated
		ctx.fillRect(bar_x, canvas.height, bar_width, bar_height);//fillRect(x, y, width, height) 
		//fillRect draws all my bars
	}
}
/* ############ Creating a frequence analizer end ######### */
/* ############ frequence analizer end ################ */