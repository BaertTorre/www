"use strict";


const lanIP = `${window.location.hostname}:5000`;
const socket = io(`http://${lanIP}`);

const init = function () {
    listenToSocket()
};

const changeUltrasonicSensor = function (ultrasonicSensor, data){
    const ultrasonicSensorData = document.getElementById(`ultrasonicSensor${ultrasonicSensor}`);
    ultrasonicSensorData.innerHTML = data;
};

const listenToSocket = function () {
    socket.on("connected", function () {
        console.log("verbonden met socket webserver");
    });
};

document.addEventListener("DOMContentLoaded", init);