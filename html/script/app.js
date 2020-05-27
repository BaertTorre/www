const lanIP = `${window.location.hostname}:5000`;

const changeUltrasonicSensor = function (ultrasonicSensor, data){
    const ultrasonicSensorData = document.getElementById(`ultrasonicSensor${ultrasonicSensor}`);
    ultrasonicSensorData.innerHTML = data;
};

const listenToSocket = function () {
    socket.on("connected", function () {
        console.log("verbonden met socket webserver");
    });
};

document.addEventListener("DOMContentLoaded", function () {
    console.info("DOM geladen");
    changeUltrasonicSensor(1, 500);
});