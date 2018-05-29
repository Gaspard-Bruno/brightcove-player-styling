videojs.registerPlugin('listenForParent', function() {
  var myPlayer = this;
  console.log('gogo2');
  myPlayer.on("ended", function () {
    myPlayer.play();
     console.log('end of video');
      $carouselHome.flickity('next');
  });
  // This method called when postMessage sends data into the iframe
  function controlVideo(evt){
    if(evt.data === "playVideo") {
      myPlayer.play();
    } else if (evt.data === 'pauseVideo') {
      myPlayer.pause();
    }
  };
  // Listen for the message, then call controlVideo() method when received
  window.addEventListener("message",controlVideo);
});
