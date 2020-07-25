function getSpongebobbed() {
  const input = document.querySelector("input").value;
  const Http = new XMLHttpRequest();
  Http.open("GET", `http://localhost:5000/${input.toString()}`);
  Http.send();

  Http.onreadystatechange = (e) => {
    document.querySelector("#response").style = "";
    document.querySelector("#response").textContent = Http.responseText;
  };
}
