videojs.registerPlugin('loopVideo', function() {
  var myPlayer = this;
  
  myPlayer.on("ended", function () {
    myPlayer.play();
  });
});
