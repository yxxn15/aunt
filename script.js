// 닫힌 봉투 요소를 id로 찾아 저장  
const closed   = document.getElementById("closedEnvelope");  

// 열린 컨테이너(봉투 열렸을 때 보여줄 영역) 요소 저장  
const opened   = document.getElementById("openedContainer");  

// 열린 봉투 이미지 요소 저장 (openletter.png → open.png 전환)  
const openImg  = document.getElementById("openEnvelopeImg");  

// 첫 번째 종이 요소 저장 (하트 지점에서 슬라이드될 종이)  
const first    = document.getElementById("firstPaper");  

// 두 번째 종이 요소 저장 (“🎉 축하합니다!” 메시지 페이퍼)  
const second   = document.getElementById("secondPaper");  

// “다음” 버튼 요소 저장 (초대장으로 넘어갈 버튼)  
const nextBtn  = document.getElementById("nextButton");  



// 닫힌 봉투를 클릭했을 때 실행될 코드  
closed.addEventListener("click", () => {
  closed.style.display = "none";   // 1) 닫힌 봉투 숨김
  opened.style.display = "block";  // 2) 열린 컨테이너 표시
  
  // 3초 뒤: 열린 봉투 이미지를 open.png로 바꾸고 첫 번째 종이 애니메이션 시작
  setTimeout(() => {
    openImg.src = "open.png";      // 3-1) 봉투 속지(봉투 안쪽) 이미지로 교체
    first.classList.add("show");   // 3-2) firstPaper에 .show 붙여 슬라이드·확대·페이드아웃
  }, 2000);

  // 7초 뒤: 두 번째 종이(.show) 클래스 추가로 바로 표시
  setTimeout(() => {
    second.classList.add("show");  // 4) “🎉 축하합니다!” 페이퍼 한 번만 나타냄
  }, 5300);
});



// “다음” 버튼을 클릭했을 때 실행될 코드  
nextBtn.addEventListener("click", () => {
  opened.style.display = "none";    // 1) 열린 컨테이너(종이들) 숨김
  const invitation = document.getElementById("invitation");  
  invitation.style.display = "block"; // 2) 최종 초대장 컨테이너 표시
  setTimeout(() => invitation.classList.add("show"), 100);  
  // 3) 0.1초 뒤 .show 붙여 초대장 페이드인
});
