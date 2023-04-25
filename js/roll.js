  // create an initial array
  x = 100;
  
  let y;
  function shuffle(array) {
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }
  function Roll(from, to, x,y) {
    let current = from;
    let timerId = setInterval(function () {
      if (current == to) {
        clearInterval(timerId);
      }
      current++;
    }, 1000);
  
    
    
    // get the elements where the array and its surrounding elements will be displayed
    let lessmDiv = document.getElementById("less-");
    let lessDiv = document.getElementById("less");
    let currentDiv = document.getElementById("current");
    let moreDiv = document.getElementById("more");
    let morepDiv = document.getElementById("more+");
  
    // display the initial values of the array and its surrounding elements
    lessmDiv.innerHTML = myArray[myArray.length - 2];
    lessDiv.innerHTML = myArray[myArray.length - 1];
    currentDiv.innerHTML = myArray[0];
    moreDiv.innerHTML = myArray[1];
    morepDiv.innerHTML = myArray[2];
  
    // initialize the index of the first element to 0
    let index = 0;
  
    // update the array every second
    let intervalId = setInterval(() => {
      // increment the index of the first element by 1
      index++;
  
      // wrap around to the beginning of the array if the index is out of bounds
      if (index >= myArray.length) {
        index = 0;
      }
  
      // update the values of the array and its surrounding elements
      lessmDiv.innerHTML = myArray[index - 2] ?? myArray[myArray.length - 2];
      lessDiv.innerHTML = myArray[index - 1] ?? myArray[myArray.length - 1];
      currentDiv.innerHTML = myArray[index];
      moreDiv.innerHTML = myArray[index + 1] ?? myArray[0];
      morepDiv.innerHTML = myArray[index + 2] ?? myArray[0];
    }, x);
  
    // stop the interval after 5 seconds
    setTimeout(() => {
      clearInterval(intervalId);
    }, y);
  }
  



  function End() {
    
    let currentDiv = document.getElementById("current");
    currentDiv.classList.remove("v2_14");
    currentDiv.classList.add("Winner");
        const songIndex = Math.floor(Math.random() * songs.length);
        const audio = new Audio(songs[songIndex]);
        audio.play();
   
  }



  
  
  function Rolling() {

    let currentDiv = document.getElementById("current");
    currentDiv.classList.remove("Winner");
    currentDiv.classList.add("v2_14");
    shuffle(myArray);
    
    
   
    Roll(0, 10, 10,10000);
    Roll(0, 14, 300,12000);
    Roll(0, 16, 600,14000);
    Roll(0, 20, 800,18000);
    Roll(0, 22, 1000,23000);
    playRandomVideo()
    setTimeout(End, 25000);
  };
  
  let currentVideo = null;
  
  function playRandomVideo() {
    // if a video is already playing, delete it
    if (currentVideo) {
      currentVideo.remove();
    }
  
  
    const videoIndex = Math.floor(Math.random() * videos.length);
    const video = document.createElement("video");
    video.src = videos[videoIndex];
    video.controls = false;
    video.autoplay = true;
    video.classList.add("video")
    document.getElementById("video-container").appendChild(video);
    
  
    // save the current video element
    currentVideo = video;
  }
  
