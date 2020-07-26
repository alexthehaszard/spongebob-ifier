function getSpongebobbed() {
    var input = document.querySelector("input").value;
    var Http = new XMLHttpRequest();
    Http.open("GET", "http://localhost:5000/" + input);
    Http.send();
    Http.onreadystatechange = function (e) {
        document.querySelector("#response").classList.value = "";
        document.querySelector("#response").textContent = Http.responseText;
    };
}
