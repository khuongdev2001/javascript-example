const search = document.querySelector("#search");
const outputNormal = document.querySelector("#output_normal");
const outputDebouce = document.querySelector("#output_debouce");
const outputThrottle = document.querySelector("#output_throttle");
search.addEventListener("input", function(e) {
    outputNormal.textContent = `Normal: ${e.target.value}`;
});
search.addEventListener("input", debouce(function(e) {
    outputDebouce.textContent = `Debouce ${e.target.value}`;
}, 1000))

search.addEventListener("input", throttle(function(e) {
    outputThrottle.textContent = `Throttle ${e.target.value}`;
}, 500));

function debouce(callback, time) {
    let timer = null;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            callback(...args)
        }, time)
    }
}


function throttle(callback, timer) {
    let timeFlag = null;
    return (...arg) => {
        if (timeFlag) return false;
        timeFlag = setTimeout(() => {
            callback(...arg);
            timeFlag = null;
        }, timer);
    }
}