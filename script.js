document.getElementById("closedEnvelope").addEventListener("click", () => {
  const closed = document.getElementById("closedEnvelope");
  const openedContainer = document.getElementById("openedContainer");
  const open = document.getElementById("openEnvelopeImg");
  const paper = document.getElementById("birthdayPaper");
  const frontText = document.querySelector(".front-text");
  const nextButton = document.getElementById("nextButton");
  const invitation = document.getElementById("invitation");

  // 닫힌 봉투 숨기기
  closed.style.display = "none";

  // 열린 봉투 보여주기 (letter → openletter)
  openedContainer.style.display = "block";
  open.src = "openletter.png";

  // 0.5초 뒤 open.png로 변경
  setTimeout(() => {
    open.src = "open.png";
  }, 1400);

  // 종이 올라오기 (초기 half-visible 상태)
  setTimeout(() => {
    paper.classList.add("show");
    paper.style.opacity = "100";
  }, 1400);

  // 종이 전체 올라오고 확대
  setTimeout(() => {
    paper.classList.add("expand");
  }, 2700);

  // 확대 끝난 후 텍스트 & 버튼 보이게
  setTimeout(() => {
    frontText.style.display = "block";
    nextButton.style.display = "inline-block";
  }, 3700);
  // 종이 확대 끝난 후 4초 대기 → 이모 사진과 버튼 등장
setTimeout(() => {
  document.querySelector(".initial-text").style.display = "none";
  const paper = document.getElementById("birthdayPaper");
  paper.classList.add("reveal");  // ✅ 반드시 추가
}, 5700);
});

// 다음 버튼 클릭 시 초대장 본문으로 전환
document.getElementById("nextButton").addEventListener("click", () => {
  document.getElementById("openedContainer").style.display = "none";
  document.getElementById("invitation").style.display = "block";
setTimeout(() => {
    invitation.classList.add("show");
  }, 30); // 확대 트리거
});
