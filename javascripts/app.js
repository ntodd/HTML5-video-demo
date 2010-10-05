// VERY rough keyboard support - just for demo purposes

var myKeyboardEvents = new Keyboard({
    defaultEventType: 'keyup', 
    events: { 
        'space': pauseplay,
				'.': registerInsert,
				'/': jumpBack,
				'up': skipForward,
				'right': skipForwardSmall,
				'left': skipBackwardSmall,
				'down': skipBackward
    }
});

insert_point = 0;

function pauseplay () {
  var myVideo = document.getElementsByTagName('video')[0];
  if (myVideo.paused)
    myVideo.play();
  else
    myVideo.pause();
}

function registerInsert () {
  var myVideo = document.getElementsByTagName('video')[0];
	insert_point = myVideo.currentTime;
}

function jumpBack () {
  var myVideo = document.getElementsByTagName('video')[0];
	myVideo.currentTime = insert_point;
}

function skipForward () {
  var myVideo = document.getElementsByTagName('video')[0];
	myVideo.currentTime = myVideo.currentTime + 30;
}

function scanForward () {
  var myVideo = document.getElementsByTagName('video')[0];
	myVideo.playbackRate = myVideo.playbackRate + 1;
}

function scanBack () {
  var myVideo = document.getElementsByTagName('video')[0];
	myVideo.playbackRate = myVideo.playbackRate - 1;
}

function normalSpeed () {
  var myVideo = document.getElementsByTagName('video')[0];
	myVideo.playbackRate = 1;
}

function skipForward () {
  var myVideo = document.getElementsByTagName('video')[0];
	myVideo.currentTime = myVideo.currentTime + 30;
}

function skipForwardSmall () {
  var myVideo = document.getElementsByTagName('video')[0];
	myVideo.currentTime = myVideo.currentTime + 5;
}

function skipBackward () {
  var myVideo = document.getElementsByTagName('video')[0];
	myVideo.currentTime = myVideo.currentTime - 30;
}

function skipBackwardSmall () {
  var myVideo = document.getElementsByTagName('video')[0];
	myVideo.currentTime = myVideo.currentTime - 5;
}