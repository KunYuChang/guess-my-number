/* 
  STEP1 : 取得使用者的輸入值與偵聽按鈕點擊事件。
  - 需要操作DOM 👉 document.querySelector()
  - 需要監聽事件 👉 addEventListener
  - 需要知道點擊事件使用的語法? 👉 click
  - 使用者所輸入的值要怎麼取得? 👉 value
  - 輸入值是字串如何處理? 👉 Number()

  STEP2 : 判斷使用者是否有輸入值
  - 需要使用條件判斷式 👉 IF

  STEP3 : 產生一個要被猜的數字
  - 使用隨機數字是個好主意 👉 Math.random
  - 隨機數字範圍 1-20 👉 * 20 +1
  - 去除小數 👉 Math.trunc

  STEP4 : 判斷有沒有猜中
  - IF === , IF > , IF < 

  STEP5 : 猜的次數
  - 設置變數score初始值20
  - 猜錯扣一次 👉 score--
  - 畫面也要跟著變 👉 document.querySelector('.message').textContent = score;
  - 要知道遊戲結束的條件(score === 0) 👉 IF
  
  STEP6 : 獲勝的外觀設定 (js 操控 css style)
  - 背景色改成綠色 👉 style.backgroundColor
  - 神奇的框框加大 👉 style.width
  - css的鏈式寫法要改成js的駝峰寫法 ex. background-color -> backgroundColor
  - 指定的值要用''包起來 ex. = '30rem'

  STEP7 : 重玩
  - 玩的次數恢復初始值 score = 20
  - 亂數重跑一次
  - 畫面上的顯示回到初始值 

  STEP8 : 紀錄最速傳說
  - 用變數記錄最快的值
  - 紀錄被打破 👉 獲勝的時候比較一下score，誰慢誰下去。

  STEP9 : 優化程式碼
  - 使用三元運算子來決定輸出的內容 (免去了原本許多重覆的CODE)
  - 使用function dry
*/

'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

// 因為使用頻率高，所以用function進行dry code
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // 當沒有輸入值時
  if (!guess) {
    displayMessage('⛔ No number!');

    // 當玩家獲勝時
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');

    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // 當玩家猜錯時
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('💥 You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', () => {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = score;
  displayMessage('Start guessing...');
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
});
