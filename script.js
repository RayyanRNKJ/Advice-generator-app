const getAdviceData = async () => {
  const response = await fetch("https://api.adviceslip.com/advice");
  const data = await response.json();
  console.log(data);
  return data;
};

const placeAdviceData = (data) => {
  const adviceTextPlaceholder = document.querySelector(
    ".advice-generator__advice-text"
  );
  const adviceIdPlaceholder = document.querySelector(
    ".advice-generator__advice-id"
  );

  adviceTextPlaceholder.innerHTML = data.slip.advice;
  adviceIdPlaceholder.innerHTML = "Advice #" + data.slip.id;
};

const getAdvice = async () => {
  const data = await getAdviceData();
  console.log(data);
  placeAdviceData(data);
};

const removeBtnDisability = () => {
  const shuffleBtn = document.querySelector(".advice-generator__shuffle-btn");
  const shuffleBtnAbbreviation = document.querySelector(
    ".advice-generator__shuffle-btn-abbreviation"
  );
  shuffleBtnAbbreviation.removeAttribute("title");
  shuffleBtn.removeAttribute("disabled","")
  shuffleBtn.classList.remove("disable");
};

const btnDisability = () => {
  const shuffleBtn = document.querySelector(".advice-generator__shuffle-btn");
  const shuffleBtnAbbreviation = document.querySelector(
    ".advice-generator__shuffle-btn-abbreviation"
  );
  shuffleBtn.classList.add("disable");
  shuffleBtn.setAttribute("disabled","")
  shuffleBtnAbbreviation.setAttribute(
    "title",
    "Sorry Mate 😓, You have to wait 3 seconds to click for the next advice"
  );

  setTimeout(function () {
    removeBtnDisability();
  }, 3000);
};
