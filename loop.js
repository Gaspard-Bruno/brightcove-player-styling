console.log('ready');
videojs.registerPlugin('loopVideo', function() {
  var myPlayer = this;
  
  console.log('go');
  
  myPlayer.on("ended", function () {
    myPlayer.play();
     console.log('ended');
  });
});
