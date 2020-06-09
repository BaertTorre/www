"use strict";


const lanIP = `${window.location.hostname}:5000`;
const socket = io(`http://${lanIP}`);

const init = function () {
    //listenToSocket()
    //setInterval(leesUltrasonicSensors, 500)
};

const leesUltrasonicSensors = function () {
    socket.emit('F2B_ultrasonic');
}

const changeUltrasonicSensor = function (ultrasonicSensor, data){
    const ultrasonicSensorData = document.getElementById(`ultrasonicSensor${ultrasonicSensor}`);
    ultrasonicSensorData.innerHTML = data;
};

const listenToSocket = function () {
    socket.on("connect", function () {                  //connect ontvangt hij standaard bij connectie
        console.log("verbonden met socket webserver");
    });

    socket.on("B2F_ultrasonic_data", function (ultrasonicData) {
        for (let i = 0; i < ultrasonicData.length; i++){
            changeUltrasonicSensor(i, ultrasonicData[i])
        }
    });
};

document.addEventListener("DOMContentLoaded", init);