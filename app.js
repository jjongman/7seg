window.onload = () => {
    const map = [
        126,
        48,
        109,
        121,
        51,
        91,
        95,
        112,
        127,
        123
    ];

    const isSet = function (seg) {
        seg = Math.pow(2, (seg - 6) * -1);
        return parseInt(map[currentdig] & seg) == seg;
    }

    let vertical = function (visible) {
        return visible ? "&nbsp;|" : "&nbsp;&nbsp;"
    }
    let horizontal = function (visible) {
        return visible ? "&nbsp&nbsp;--" : "   "
    }


    let currentdig = 0;

    const display = function () {
        let el = "";
        el += horizontal(isSet(0)) + "<br/>";
        el += vertical(isSet(5)) + " " + vertical(isSet(1)) + "<br/>";
        el += horizontal(isSet(6)) + "<br/>";
        el += vertical(isSet(4)) + " " + vertical(isSet(2)) + "<br/>";
        el += horizontal(isSet(3)) + "<br/>";
        document.getElementById("container").innerHTML = el;
    }

    display();
    setInterval(() => {
        if (currentdig == 9) currentdig = -1;
        currentdig++;
        display();
    }, 1000)
}