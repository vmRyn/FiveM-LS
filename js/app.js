// <!-- © Ryn#2512 | Need Help Message me on Discord -->

//Element & ID Declaration
document.getElementById('mainlogo').src = config.text.mainlogo;
document.getElementById('discordlink').innerHTML = config.text.discordlink;
document.getElementById('websitelink').innerHTML = config.text.websitelink;
document.getElementById('servertitle').innerHTML = config.text.servertitle;
document.getElementById('songname').innerHTML = config.text.songname;
document.getElementById('loadingtext').innerHTML = config.text.loadingtext;
document.getElementById('rule1').innerHTML = config.text.rule1;
document.getElementById('rule2').innerHTML = config.text.rule2;
document.getElementById('rule3').innerHTML = config.text.rule3;
document.getElementById('rule4').innerHTML = config.text.rule4;
document.getElementById('rule5').innerHTML = config.text.rule5;
document.getElementById('rule6').innerHTML = config.text.rule6;
document.getElementById('rule7').innerHTML = config.text.rule7;
document.getElementById('leftboxtitle').innerHTML = config.text.leftboxtitle;
document.getElementById('rightboxtitle').innerHTML = config.text.rightboxtitle;
document.getElementById('mymiddleimage').innerHTML = config.text.mymiddleimage;

    var audio = `<div data-video=${config.videoID} data-autoplay="1" data-loop="1" id="youtube-audio"> </div>`;
    if (config.music === true) {
        $("body").append(audio);
    }

$(function() {

    var bgImages = images.forEach(appen)

    function appen(i) {
        document.getElementById("bg").innerHTML = document.getElementById("bg").innerHTML + `<img width="100%"height="100%" src=images/${i}>`;
    }

    function random(pp) {
        return Math.floor(Math.random() * pp);
    }
    var img = $('div#bg img');
    var imgLength = img.length;
    var current = random(imgLength);
    img.hide();
    img.eq(current).show();

    var x = setInterval(function() {
        img.eq(current).fadeOut(images.transitionInterval, function() {
            current = random(imgLength);
            img.eq(current).fadeIn(images.transitionInterval);
        });
    }, 2 * images.transitionInterval + images.imgInterval);
})

// Taken/Forked From https://cdn.rawgit.com/labnol/files/master/yt.js
function onYouTubeIframeAPIReady() {
    var e = document.getElementById("youtube-audio"),
        t = document.createElement(null);
    e.appendChild(t);
    var a = document.createElement("div");
    a.setAttribute("id", "youtube-player"), e.appendChild(a);
    var o = function(e) {
        t.setAttribute("src", "https://i.imgur.com/" + a)
    };
    e.onclick = function() { r.getPlayerState() === YT.PlayerState.PLAYING || r.getPlayerState() === YT.PlayerState.BUFFERING ? (r.pauseVideo(), o(!1)) : (r.playVideo(), o(!0)) };
    var r = new YT.Player("youtube-player", {
        height: "0",
        width: "0",
        videoId: e.dataset.video,
        playerVars: { autoplay: e.dataset.autoplay, loop: e.dataset.loop },
        events: {
            onReady: function(e) {
                r.setPlaybackQuality("small"), r.setVolume(config.musicVolume)
                o(r.getPlayerState() !== YT.PlayerState.CUED)
            },
            onStateChange: function(e) { e.data === YT.PlayerState.ENDED && o(!1) }
        }
    })
}

var count = 0;
var thisCount = 0;


const handlers = {
    startInitFunctionOrder(data) {
        count = data.count;
    },

    initFunctionInvoking(data) {
        document.querySelector('.Rynxd').style.left = '0%';
        document.querySelector('.Rynxd').style.width = ((data.idx / count) * 100) + '%';
    },

    startDataFileEntries(data) {
        count = data.count;
    },

    performMapLoadFunction(data) {
        ++thisCount;
        document.querySelector('.Rynxd').style.left = '0%';
        document.querySelector('.Rynxd').style.width = ((thisCount / count) * 100) + '%';
    },
};

window.addEventListener('message', function (e) {
    (handlers[e.data.eventName] || function () { })(e.data);
});