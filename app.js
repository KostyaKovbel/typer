const infoArr = [];
const countValue = document.getElementById('count');
const timeLeft = document.getElementById('time');
countValue.innerHTML = 0;
let flag = false;
timeLeft.innerHTML = 60;


const timeValue = setInterval(() => {
  timeLeft.innerHTML--
  if (timeLeft.innerHTML < 0) {
    alert(`your speed is ${(infoArr.length / 60).toFixed(2)} words per minute`)
    clearInterval(timeValue);
  }
}, 1000);





function dataToStorage() {

  
  const inf = document.getElementById('value')
      , text = document.getElementById('text');

  if (infoArr.length === 0) {
    inf.innerHTML = 'start type'
  }
  text.addEventListener('input', () => {
    flag = true;

    value.setAttribute('data-text', text.value)


    // real time stroke
    // value.innerHTML = value.getAttribute('data-text')
    if (text.value.includes(' ')) {
        infoArr.push(text.value)
        
      
        // display what we type :)
        value.innerHTML = infoArr.join(' ')
        text.value = ''
        countValue.innerHTML++;

    }
  })
  
};
dataToStorage()
