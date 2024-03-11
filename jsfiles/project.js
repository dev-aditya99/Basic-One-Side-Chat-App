
const getChat = document.querySelector("#id_textarea");
const sendButton = document.querySelector("#id_send_btn");
const chattArea = document.querySelector("#id_chatt_area");
const body = document.getElementsByTagName("body");

const bgImgaeArr = ["https://images.pexels.com/photos/983200/pexels-photo-983200.jpeg?auto=compress&cs=tinysrgb&w=600", "https://images.pexels.com/photos/1261728/pexels-photo-1261728.jpeg?auto=compress&cs=tinysrgb&w=600", "https://images.pexels.com/photos/1054218/pexels-photo-1054218.jpeg?auto=compress&cs=tinysrgb&w=600", "https://images.pexels.com/photos/1037992/pexels-photo-1037992.jpeg?auto=compress&cs=tinysrgb&w=600", "https://images.pexels.com/photos/1429567/pexels-photo-1429567.jpeg?auto=compress&cs=tinysrgb&w=600", "https://images.pexels.com/photos/354939/pexels-photo-354939.jpeg?auto=compress&cs=tinysrgb&w=600", "https://images.pexels.com/photos/772803/pexels-photo-772803.jpeg?auto=compress&cs=tinysrgb&w=600", "https://images.pexels.com/photos/776656/pexels-photo-776656.jpeg?auto=compress&cs=tinysrgb&w=600", "https://images.pexels.com/photos/956999/milky-way-starry-sky-night-sky-star-956999.jpeg?auto=compress&cs=tinysrgb&w=600", "https://images.pexels.com/photos/1227497/pexels-photo-1227497.jpeg?auto=compress&cs=tinysrgb&w=600", "https://images.pexels.com/photos/924824/pexels-photo-924824.jpeg?auto=compress&cs=tinysrgb&w=600"];


const setBodyBg = () => {
    let rNumber = Math.floor(Math.random() * bgImgaeArr.length);
    body[0].style.background = `url("${bgImgaeArr[rNumber]}") no-repeat center`;
    body[0].style.backgroundSize = "cover";
}
setBodyBg();
setInterval(setBodyBg, 25000);


getChat.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
        sendBtn();
    }
})


sendButton.addEventListener("click",
    function () {
        sendBtn();
        getChat.focus();
    }
)
const sendBtn = () => {
    if (getChat.value.length == 0) {

    } else {
        const onSend = document.createElement("div");
        onSend.classList.add("sended_msg");
        onSend.innerHTML = `
    <span class="span_sended_msg" id="id_span_sended_msg">${getChat.value}</span>
    `;
        sendAudio();
        chattArea.appendChild(onSend);
        getChat.value = "";
    }
}

const sendAudio = () => {
    const audio = new Audio();
    audio.src = "../Music/mixkit-hard-pop-click-2364.wav";
    audio.play();
}


let dpLabel = document.getElementsByClassName("dp-label");
let ProfilePic = document.getElementById("id_span_logo");
let inputFile = document.getElementById("id_file_logo");

inputFile.onchange = function () {
    dpLabel[0].innerHTML = `<img src="${URL.createObjectURL(inputFile.files[0])}" alt="404" class="dp-image">`;
}