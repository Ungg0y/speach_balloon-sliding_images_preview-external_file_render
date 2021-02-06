var minMakeSaleIconWidth = 0;
var iconsHolderPosition = 0;
var userIndex = 1;
var animationFinihed = true;
var audio = $("#audio")[0];
var scenario = null;
var selection = null;
var scenarioNumber = '';
var scenarioLevel = 1;
var choice = 'choice1';
var selectLevel  = 1;
var mainScenario = null;
var mainSelection = null;
var scenarioBtn = null;
var scenarioClicked = '';
var availableScenario = ['Scenario #1', 'Scenario #2', 'Scenario #3'];
var production = false;

var playAudio = function (audioPath)
{
    audioStop();
    $('#audio source').eq(0).attr("src",'');
    $('#audio source').eq(0).attr("src",(parent.audioPath + audioPath));
    audio.load();
    var playPromise = audio.play();
    playPromise.then(_ => {
        audio.pause();
        audio.play();
    })
    .catch(error => {
        audio.pause();
        audio.play();
    });
    //audioPlay();
    parent.showPauseBtn();
}