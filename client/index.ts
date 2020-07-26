function getSpongebobbed(): void {
  const input: string = document.querySelector("input").value;
  const Http = new XMLHttpRequest();
  Http.open("GET", `http://localhost:5000/${input}`);
  Http.send();

  Http.onreadystatechange = (e) => {
    document.querySelector("#response").classList.value = "";
    document.querySelector("#response").textContent = Http.responseText;
  };
}
