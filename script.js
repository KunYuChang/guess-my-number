'use strict';

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
  
  STEP6 : 
*/

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No number!';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number!';
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }
});
