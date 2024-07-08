let advice = {};

function renderAdvice() {
  durum.innerHTML = `
   <p>ADVİCE #${advice.slip.id}</p>
      <h4>${advice.slip.advice}”</h4>
      <div class="icon"><img src="assets/img/midIcon.svg" alt="icon"></div>
      <div class="btn"><button id="btnClick"><img src="assets/img/btn-zar.svg" alt=""></button></div>
  `;
  let btnClick = document.querySelector("#btnClick");
  btnClick.addEventListener("click", refresh);
}

function refresh() {
  window.location.reload();
}

function init() {
  fetch("https://api.adviceslip.com/advice")
    .then((res) => res.json())
    .then((x) => {
      advice = x;
      renderAdvice();
    });
}

init();
