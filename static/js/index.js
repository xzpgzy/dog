let navUl = document.getElementById("nav-ul");
let x = document.getElementsByClassName("x");
let logo = document.getElementById("logo");
// 顶部导航栏点击效果
navUl.onclick = (e) => {
  for (let i = 0; i < x.length; i++) {
    x[i].classList.remove("TopNavActive");
  }
  e.target.getElementsByClassName("x")[0].classList.add("TopNavActive");
};

// logo点击效果
logo.onclick = (e) => {
  for (let i = 0; i < x.length; i++) {
    x[i].classList.remove("TopNavActive");
  }
};

// 音乐播放功能
let m1 = document.getElementById("m1");
let m2 = document.getElementById("m2");
let m3 = document.getElementById("m3");
let m4 = document.getElementById("m4");
let m5 = document.getElementById("m5");
let m6 = document.getElementById("m6");
let m7 = document.getElementById("m7");
let play = document.getElementById("play");
let zt = document.getElementById("zt");
let pre = document.getElementById("pre");
let musicnext = document.getElementById("musicnext");
let musiclist = [m1, m2, m3, m4, m5, m6, m7];
let musictitle = document.getElementsByClassName("musictitle");
let musicid = 0;
function MusicPlay() {
  zt.style["display"] = "block";
  play.style["display"] = "none";
}
function MusicZt() {
  play.style["display"] = "block";
  zt.style["display"] = "none";
}
function MusicNext() {
  let oldid = musicid;
  let newid = musicid + 1;
  if (newid >= musiclist.length) {
    newid = 0;
  }
  return [oldid, newid];
}
function MusicPre() {
  let oldid = musicid;
  let newid = musicid - 1;
  if (newid < 0) {
    newid = musiclist.length - 1;
  }
  return [oldid, newid];
}
play.onclick = function () {
  MusicPlay();
  musiclist[musicid].play();
  musictitle[musicid].getElementsByTagName("img")[0].style["display"] =
    "inline-block";
  musictitle[musicid].getElementsByTagName("img")[1].style["display"] =
    "inline-block";
};
zt.onclick = function () {
  MusicZt();
  musiclist[musicid].pause();
};
musicnext.onclick = function () {
  let data = MusicNext();
  musiclist[data[0]].pause();
  musiclist[data[0]].currentTime = 0;
  musictitle[data[0]].getElementsByTagName("img")[0].style = "";
  musictitle[data[0]].getElementsByTagName("img")[1].style = "";

  musicid = data[1];
  MusicPlay();
  musiclist[musicid].play();
  musictitle[musicid].getElementsByTagName("img")[0].style["display"] =
    "inline-block";
  musictitle[musicid].getElementsByTagName("img")[1].style["display"] =
    "inline-block";
};

pre.onclick = function () {
  let data = MusicPre();
  musiclist[data[0]].pause();
  musiclist[data[0]].currentTime = 0;
  musictitle[data[0]].getElementsByTagName("img")[0].style = "";
  musictitle[data[0]].getElementsByTagName("img")[1].style = "";

  musicid = data[1];
  MusicPlay();
  musiclist[musicid].play();
  musictitle[musicid].getElementsByTagName("img")[0].style["display"] =
    "inline-block";
  musictitle[musicid].getElementsByTagName("img")[1].style["display"] =
    "inline-block";
};
let musictitleli = [];
for (let i = 0; i < musictitle.length; i++) {
  musictitleli.push(musictitle[i].innerText);
}
for (let i = 0; i < musictitle.length; i++) {
  musictitle[i].ondblclick = function (e) {
    let text = e.target.innerText;
    let newid = musictitleli.indexOf(text);
    musiclist[musicid].pause();
    musiclist[musicid].currentTime = 0;
    musictitle[musicid].getElementsByTagName("img")[0].style = "";
    musictitle[musicid].getElementsByTagName("img")[1].style = "";
    musicid = newid;
    MusicPlay();
    musiclist[musicid].play();
    musictitle[musicid].getElementsByTagName("img")[0].style["display"] =
      "inline-block";
    musictitle[musicid].getElementsByTagName("img")[1].style["display"] =
      "inline-block";
  };
}

for (let i = 0; i < musiclist.length; i++) {
  musiclist[i].onended = function () {
    musiclist[i].pause();
    musiclist[i].currentTime = 0;
    musictitle[i].getElementsByTagName("img")[0].style = "";
    musictitle[i].getElementsByTagName("img")[1].style = "";
    let newid = i + 1;
    if (newid >= musiclist.length) {
      newid = 0;
    }
    musicid = newid;
    MusicPlay();
    musiclist[musicid].play();
    musictitle[musicid].getElementsByTagName("img")[0].style["display"] =
      "inline-block";
    musictitle[musicid].getElementsByTagName("img")[1].style["display"] =
      "inline-block";
  };
}
for (let i = 0; i < musiclist.length; i++) {
  let musiclogo = document.getElementsByClassName("musiclogo")[0];
  musiclist[i].onplay = function () {
    musiclogo.style["animation"] = "circlemusic 10s linear infinite";
    musiclogo.style["animation-play-state"] = "running";
  };
  musiclist[i].onpause = function () {
    musiclogo.style["animation-play-state"] = "paused";
  };
}
