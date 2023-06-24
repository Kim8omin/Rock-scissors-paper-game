const $computer = document.querySelector('#computer');
const $score = document.querySelector('#score');
const $rock = document.querySelector('#rock');
const $scissors = document.querySelector('#scissors');
const $paper = document.querySelector('#paper');
const IMG_URL = './rsp.png';

// 컴퓨터의 이미지와 스타일 설정
$computer.style.background = `url(${IMG_URL}) 0 0`;
$computer.style.backgroundSize = 'auto 200px';

const rspX = {
  scissors: '0',
  rock: '-220px',
  paper: '-440px',
};

// 컴퓨터의 가위바위보 손 모양 변경 함수
let computerChoice = 'scissors';
const changeComputerHand = () => {
  if (computerChoice === 'rock') {
    computerChoice = 'scissors';
  } else if (computerChoice === 'scissors') {
    computerChoice = 'paper';
  } else if (computerChoice === 'paper') {
    computerChoice = 'rock';
  }

  $computer.style.background = `url(${IMG_URL}) ${rspX[computerChoice]} 0`;
  $computer.style.backgroundSize = 'auto 200px';
};

// 컴퓨터 손 모양 변경을 일정 간격으로 반복
let timerId = setInterval(changeComputerHand, 50);
let clickable = true;

// 가위바위보 버튼 클릭 이벤트 핸들러
const clickButton = (event) => {
  if (clickable) {
    clearInterval(timerId);
    clickable = false;

    // 사용자의 선택
    const myChoice =
      event.target.textContent === 'rock'
        ? 'rock'
        : event.target.textContent=== 'scissors'
        ? 'scissors'
        : 'paper';

    // 가위바위보 결과 계산 및 출력
    if (myChoice === computerChoice) {
      console.log('무승부');
    } else if (
      myChoice === 'rock' && computerChoice === 'scissors'||
      myChoice === 'paper' && computerChoice === 'rock'||
      myChoice === 'scissors' && computerChoice === 'paper'
    ) {
      console.log('승리');
    } else {
      console.log('패배');
    }

    // 일정 시간 후에 다시 컴퓨터 손 모양 변경 가능하도록 설정
    setTimeout(() => {
      clickable = true;
      timerId = setInterval(changeComputerHand, 50);
    }, 1000);
  }
};

// 가위바위보 버튼에 클릭 이벤트 리스너 등록
$rock.addEventListener('click', clickButton);
$scissors.addEventListener('click', clickButton);
$paper.addEventListener('click', clickButton);
