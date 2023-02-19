let words = [
  "当年明月在",
  "曾照彩云归",
  "归去来兮",
  "真堪偕隐",
  "画船听雨眠",
  "愿为江水",
  "与君重逢",
  "一日不见兮",
  "柳絮空缱绻",
  "南风知不知",
  "我见青山多妩媚",
  "料青山见我也应如是",
  "取次花丛懒回顾",
  "半缘修道半缘君",
  "三笑徒然当一痴",
  "人生若只如初见",
  ,
  ,
  "今夜何夕",
  "见此良人",
  "愿我如星君如月",
  "夜夜流光相皎洁",
  "情不所起",
  "一往而深",
  "玲珑骰子安红豆",
  "入骨相思知不知",
  "多情只有春庭月",
  "尤为离人照落花",
  "若有知音见采",
  "不辞唱遍阳春",
  "休言半纸无多重",
  "万斛离愁尽耐担",
  "夜月一帘幽梦",
  "和光同尘",
  "杳霭流玉",
  "月落星沉",
  "霞姿月韵",
  "喜上眉梢",
  "醉后不知天在水",
  "满船星梦压星河",
  "落花人独立",
  "微雨燕双飞",
  "掬水月在手",
  "弄花香满衣",
  "夜深忽梦少年事",
  "唯梦闲人不梦君",
  "垆边人似月",
  "皓腕凝霜雪",
  "众里嫣然通一顾",
  "人间颜色如尘土",
  "若非群玉山头见",
  "会向瑶台月下逢",
  "沉鱼落雁鸟惊喧",
  "羞花闭月花愁颤",
  "解释春风无限恨",
  "沉香亭北倚阑干",
  "三载岁月多磨难",
  "祈望新年好运来",
  "生平难得流水意",
  "契阔相逢咏絮才",
  "有缘莫道桑榆晚",
  "久听方知好事开",
  "君最长安福增禄",
  "迎春纳瑞柿登台",
  "好想回到那个夏天",
  "偷偷表白一个叫申琪的女孩",
  "你是我人生中的一道彩虹",
  "岁岁平安",
  "年年有你",
  "未来可期",
  "若把你比做歌",
  "你就是那高山流水",
  "永远爱你",
  "爱你永远"
];

// implementation
const randomNum = (min, max) => {
  let num = (Math.random() * (max - min + 1) + min).toFixed(2);
  return num;
};

// initialization
const init = () => {
  let container = document.querySelector(".container");
  let f = document.createDocumentFragment();
  words.forEach((w) => {
    let word_box = document.createElement("div");
    let word = document.createElement("div");
    word.innerText = w;
    word.classList.add("word");
    word.style.color = "#BAABDA";
    word.style.fontFamily = "楷体";
    word.style.fontSize = "18px";
    word_box.classList.add("word-box");
    word_box.style.setProperty("--margin-top", randomNum(-40, 20) + "vh");
    word_box.style.setProperty("--margin-left", randomNum(6, 35) + "vw");
    word_box.style.setProperty("--animation-duration", randomNum(8, 20) + "s");
    word_box.style.setProperty("--animation-delay", randomNum(-20, 0) + "s");

    word_box.appendChild(word);
    f.appendChild(word_box);
  });
  container.appendChild(f);
};

window.addEventListener("load", init);

let textone = document.querySelector(".text-one").querySelector("h1");
let texttwo = document.querySelector(".text-two").querySelector("h1");
let textthree = document.querySelector(".text-three").querySelector("h1");
let textfour = document.querySelector(".text-four").querySelector("h2");

setTimeout(function () {
  textone.innerHTML = "今晚 整片星空为你一人闪烁✨";
  textone.style.color = "#E8F9FD";
  textone.style.fontFamily = "楷体";
  texttwo.style.color = "#E8F9FD";
  texttwo.style.fontFamily = "楷体";
  textthree.style.color = "#ffffff";
  textthree.style.fontFamily = "楷体";
  textfour.style.color = "#ffffff";
  textfour.style.fontFamily = "STXinwei";
  texttwo.innerHTML = "";
}, 5200);
setTimeout(function () {
  textfour.innerHTML = "-当流星飞过天边 你会许下什么心愿-";
}, 15200);
setTimeout(function () {
  textfour.innerHTML = "-不要太复杂 我怕我不能够帮你实现-";
}, 20200);
setTimeout(function () {
  textfour.innerHTML = "-当流星飞过天边 你会许下什么心愿-";
}, 25200);
setTimeout(function () {
  textfour.innerHTML = "-今夜星星多耀眼 想送你一颗做纪念-";
}, 30200);
setTimeout(function () {
  textfour.innerHTML = "-还是算了吧 这样的傻话不能让你听见-";
}, 35200);
setTimeout(function () {
  textfour.innerHTML = "-你的生日是哪一天 我会当作是每一天-";
}, 40200);
setTimeout(function () {
  textfour.innerHTML = "-梦想每一天 来陪你把星空看遍-";
}, 45200);
setTimeout(function () {
  textfour.innerHTML = "-如果有一颗行星 爱上了另一颗星-";
}, 50200);
setTimeout(function () {
  textfour.innerHTML = "-是不是也会变成流星奔去相见-";
}, 55200);
setTimeout(function () {
  textfour.innerHTML = "-THE END-";
}, 60200);
setTimeout(function () {
  textfour.innerHTML = "-THE END-";
}, 65200);

function play() {
  var audio = document.getElementById("bgm");
  if (audio.paused) {
    audio.play();
    document.getElementById("bgm_control").src =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAA2CAYAAACMRWrdAAAAAXNSR0IArs4c6QAAAydJREFUaEPtmoFtFDEQRX8qIFQAVBCoAKgAOoAOAhUAFUAHQAdQQaACoAJCBUAFoIfWkuUbn2d2fazvtJZWiS7ePT//me+xN2c60XZ2olzawI5N2U2xgGLnkp5I4ucvSR8lXQfu79K1t2JPJb2eoPIBfpDEBSSwB289we5KujKgcgigcsiDAfYEY8CPAiMlPLnnvaSvgftcXXuCfZd02/Wtu50Ae9czH3uC/SnG+2pSgryLKNklHw8N9nKCxSEfS3om6cKp6qJ8/F9gOQvhiopct5yQ4XxcAyxnwUlRETVvOCE/SXreMpy1wXIW4Lz5SJg+3Ac3EliC9OYjygFnthHBIvl4p1aujQ6WQxKmbwt5UAzldtoxgT2YSrYcYgNzOq7Zzao80gK95Lnp3k0xZiKaY/clsahiyVQDXJ+nKT06xYC4nCoEfi8bcFTmZdhRBA8bip7NYy1/hgVbAgXskGCEHBtHK/S8DjckGLnxwiBgsKz0XNgvl9VvWMV+Gmrdq1TThOyXyiQMZR7WQtgKK0vh1j3ekO62QLPx42wwbzW19n3pcGDW7HsW8h4LNGbFmQhRQ+P06sf0c3FJ1Usxtu9vnPHGOQgmxNbEagBiWIwtb6HqvleOVb+0GJy1z3LOx78ddGg/xplCebgSccXfzjVwCRTwYbDaOsbnzBCFLwUx6lqW7jEOKzK8SqV+YbBUvXuPxPIBoRY503qrwguMZBLpfu4lj8gpiut0PFc7SQ6D8UU8FHUicAyMwbZeMliLOu7H59aEWIY2KxTTDEbgvFA82wr1ltkwyYT/bFcs45ywZMa4LPUAwta5WuGXnl2+cvKYTWgyPAtvDkqYpR00EGl9iSZ9OfuYUZlv5TMXL9DRQc7pXyrGJN1sPMhSrFrqRRWbA2HdEwqr6QGWi1bHvxaY5YrYOwp4XZEX9bzIMNtaYAzGcjmgMKlv0zpGQZxeM5UAe110TbAllUfTbNYEQ4E5tSJqMil7l5a1waJwLigeOgIY46C2xCn5VyWrUW7xdw5mXW0UsDRYqhwcMy3WOCVFQKv23IEdDcylhqfTBuaZpZH6nKxifwFjfuc3inctrgAAAABJRU5ErkJggg==";
  } else {
    audio.pause();
    audio.currentTime = 0;
    document.getElementById("bgm_control").src =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAA2CAYAAACMRWrdAAAAAXNSR0IArs4c6QAAArZJREFUaEPtmetNHDEURj8qgFQQqACoIEkFpAOgAqACkgqSVJBQAaECoAKgAqACoAKiE40ly5qHr+0de1draX/t+MrH9/XZ3tCKjo0V5dIabNk8W9pjh5K2JV1Juq+5GSXBfko68WAA+9NBPs0NWRLsRdLWAMBfSfzw5OsckCXB3iMWDJQPGTEl7ZO5wfxVEp5AXiwiH2uC+ZDF83GRYN87TxxJOjAEVJF8XDTYtw6IovJV0qmk3UjIrHycC8xnoc/hRX4fIyHN+VgDzGfZ67yINzcjIV0+/hr7vjaYvzbgLPkI4P4QXEtgbo2WfASsV7q1CGbJxy+Sbvq81jqYv2bC9HcAsRJgnyVdr8EiS2zMZ6EIRnm4Bh0zf+qbtcfYoWUqHgv3GH0GvfcQHBqXMhTZLe4zUAfhKZnjP/n0GCRJ0zkGBL0DIOtoFgwo+gZCNWU0CwYUIZg6mgTrky9WwCbBKAQcCHNGc2Dk1F0OUTe3ObASYQhbc2Dou/PKHiMNuA+59daRrTxqgTkBEPZMbqt4F0DpXOYcW/p2JsWBg4fAwBg5jQhI6ZemgyaNmQeG3PEh4gECGPrl0GPG1BpMYBhD/xEaqYP7eIrQ2ACGtpIKhW0zGMkbiloL5I6kqTex3M1LAmNSatk/7jw+thG5G+dsmz3mJnLX/sPgqrOugk1NsdodspcMhkGqJOV27DGBfkOb6L3j61lViTBMDsVwPVQweoyv+AHh2cf6kM68T1Nujfg/y2MR9s2frCxYKXUzeBlV8pbK4jZCOpRHlvl8i8QaVCu1wFgYfS724a8PerSt1ARL7ZNAPk8dhGuCscCUsv/WVebRSlwbDJ1Ij4zVpUCRn5P9sjaYyx3CEsCxd2iENdV0SoP+t9kKmAN0AsBVOw6ZTgREATlDrYFZS/7g92uwYls5k6F/DSG9N6R+pJwAAAAASUVORK5CYII=";
  }
}
