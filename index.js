const buttons = document.querySelectorAll(".flags");
var backgroundAudio; 
var currentAudio;
playMusicOnLoad();

  // מפעילה את המוזיקה
  function playMusicOnLoad() {
    backgroundAudio = new Audio('./sounds/UEFA Champions League Anthem (Full Version) (mp3cut.net).mp3');
    backgroundAudio.play();
}
// עוצרת את המוזיקה
function stopMusic() {
    if (backgroundAudio) {
        backgroundAudio.currentTime = 10000;
    }
}

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function () {
        const buttonInnerText = this.textContent.trim(); // Use textContent instead of innerHTML
        playAnthem(buttonInnerText);
        buttonAnimation(buttonInnerText);
        stopMusic();
    });
}
document.addEventListener("keypress",function(event){
    playAnthem(event.key);
    buttonAnimation(event.key);
    stopMusic();
})
function playAnthem(key) {
    if (currentAudio) {
        currentAudio.pause();
    }
    switch (key) {//לוקחת את בחירת המשתמש במקלדת ומנגנת את המוזיקה בהתאם להקלדה
        case 'i'://בוחר את ההמנון הישראלי
            currentAudio = new Audio("sounds/Isreal-National-Anthem.mp3");
            break;
        case 'u'://בוחר את ההמנון האמריקאי
            currentAudio = new Audio("./sounds/The-Star-Spangled-Banner.mp3");
            break;
        case 'b'://בוחר את ההמנון הברזילאי
            currentAudio = new Audio("./sounds/Hino-Nacional-Brasileiro-National-Anthem-of-Brazil.mp3");
            break;
        case 'c'://בוחר את ההמנון הקנדי
            currentAudio = new Audio("./sounds/O-Canada-National-Anthem-Song-Lyrics-HQ.mp3");
            break;
        case 'g'://בוחר את ההמנון הבריטי
            currentAudio = new Audio("./sounds/National-Anthem-of-the-United-Kingdom-new-God-Save-the-King.mp3");
            break;
        case 's'://בוחר את ההמנון הסיני
            currentAudio = new Audio("./sounds/China-National-anthem-Chinese-English-lyrics.mp3");
            break;
        case 'f':
            currentAudio = new Audio ("./sounds/France National Anthem (Instrumental) (mp3cut.net).mp3");
            break;
        default://"אם המשתמש בחר כפתור שלא נמצא באף תנאי תקפוץ הודעה של "תלך הביתה אתה שיכור
            alert("Go home you're drunk!");
            return;
    }
    currentAudio.play();//מפעיל את ההמנון שנבחר
}
window.onload = function () {
    setTimeout(function () {
        stopMusic();
    }, 5000);
};

  document.addEventListener('click', function () {
      stopMusic(backgroundAudio);
  });

function buttonAnimation(currentKey){ 
    var activeButton=document.querySelector("."+currentKey); 
    activeButton.classList.add("pressed"); 
    setTimeout(function(){activeButton.classList.remove("pressed");},150);
}
document.addEventListener('DOMContentLoaded', function () {
    // Get all elements with the class "flags"
    const containers = document.querySelectorAll('.flags');
  
    // Loop through each container
    containers.forEach(function (container) {
      const video = container.querySelector('.example');
  
      // עוצר את הסרטון ומתחיל אותו מההתחלה
      video.pause();
      video.currentTime = 0;
  
      // מפעיל את הסרטון שעוברים עליו עם העכבר
      container.addEventListener('mouseenter', function () {
        video.play();
      });
  
      // מפסיק את הסרטון שהעכבר יורד
      container.addEventListener('mouseleave', function () {
        video.pause();
        video.currentTime = 0; //מאתחל את הסרטון
      });
    });
  });
  
