

window.onload = function () {
    function changeBatteryHouse(percent) {
        var percentWidth = (percent * 208) / 100;
        document.getElementById("gauge-house").style.width = percentWidth + "px";
        if (percent < 50) {
            document.getElementById("gauge-house").style.backgroundColor = "orange";
        }
        if (percent < 20) {
            document.getElementById("gauge-house").style.backgroundColor = "red";
        }


        var houseTime = Math.round((percent * 24) / 100);
        document.getElementById("span-time-house").innerText = houseTime + "";

    }

    function changeBatteryCar(percent) {
        var percentWidth = (percent * 208) / 100;
        document.getElementById("gauge-car").style.width = percentWidth + "px";
        if (percent < 50) {
            document.getElementById("gauge-car").style.backgroundColor = "orange";
        }
        if (percent < 20) {
            document.getElementById("gauge-car").style.backgroundColor = "red";
        }


        var houseTime = Math.round((percent * 24) / 100);
        document.getElementById("span-time-car").innerText = houseTime + "";

    }

    changeBatteryHouse(45);
    changeBatteryCar(55);
}
