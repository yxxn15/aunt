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

const invitation = document.getElementById("invitation");


// 닫힌 봉투를 클릭했을 때 실행될 코드  
closed.addEventListener("click", () => {
  closed.style.display = "none";   // 1) 닫힌 봉투 숨김
  opened.style.display = "block";  // 2) 열린 컨테이너 표시
  
  // 3초 뒤: 열린 봉투 이미지를 open.png로 바꾸고 첫 번째 종이 애니메이션 시작
  setTimeout(() => {
    openImg.src = "open.png";      // 3-1) 봉투 속지(봉투 안쪽) 이미지로 교체
    first.classList.add("show");   // 3-2) firstPaper에 .show 붙여 슬라이드·확대·페이드아웃
  }, 2000);

  // 5.3초 후 두 번째 종이 표시 + 폭죽&풍선 연출
  setTimeout(() => {
    second.classList.add("show");
    launchCelebration(); // 🎆 폭죽 + 🎈 풍선
  }, 5300);
});

function launchCelebration() {
  startFireworks();
}
// 폭죽 파티클 생성
const colors = ['color1', 'color2', 'color3'];
let fireworksInterval;
const particleCount = 10;  // 한번에 터지는 파티클 개수
const fireworksPerInterval = 5; // 한 번에 터뜨릴 폭죽 수

function createParticle(i, x0, y0) {
  const particle = document.createElement('div');
  particle.classList.add('firework-particle');

  // 랜덤 색상 부여
  const colorClass = colors[Math.floor(Math.random() * colors.length)];
  particle.classList.add(colorClass);

  // 폭죽 시작 위치
  particle.style.left = `${x0}px`;
  particle.style.top = `${y0}px`;

  // 각 파티클의 퍼져나가는 방향 각도 (0~360도)
    const angle = (360 / particleCount) * i;
    const radius = 60; // 최대 이동 거리(px)

    const rad = angle * (Math.PI / 180);
  const moveX = Math.cos(rad) * radius + 'px';
  const moveY = Math.sin(rad) * radius + 'px';

  particle.style.setProperty('--x', moveX);
  particle.style.setProperty('--y', moveY);

  particle.style.animationDelay = `${Math.random() * 0.3}s`;

  document.body.appendChild(particle);

  particle.addEventListener('animationend', () => {
    particle.remove();
  });
}

function startFireworks() {
  fireworksInterval = setInterval(() => {
    for (let f = 0; f < fireworksPerInterval; f++) {
      const randomDelay = Math.random() * 1000; // 0 ~ 1000ms 랜덤 딜레이

      setTimeout(() => {
        const x0 = Math.random() * window.innerWidth;
        const y0 = Math.random() * (window.innerHeight / 2);

        for (let i = 0; i < particleCount; i++) {
          createParticle(i, x0, y0);
        }
      }, randomDelay);
    }
  }, 1000); // 2초마다 여러번 반복
}



function stopFireworks() {
  clearInterval(fireworksInterval);
}


// “다음” 버튼을 클릭했을 때 실행될 코드  
nextBtn.addEventListener("click", () => {
  // 열린 컨테이너와 종이들 숨김
  stopFireworks();
  opened.classList.remove("show");
  first.classList.remove("show");
  second.classList.remove("show");

  // 초대장 노출
  invitation.classList.add("show");
});