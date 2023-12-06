const search = document.querySelector("#search");
const outputNormal = document.querySelector("#output_normal");
const outputDebouce = document.querySelector("#output_debouce");
search.addEventListener("input", function (e) {
    outputNormal.textContent = e.target.value;
});
search.addEventListener("input", debouce(function (e) {
    outputDebouce.textContent = e.target.value;
}, 500))


function debouce(callback, time) {
    let timer = null;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            callback(...args)
        }, time)
    }
}