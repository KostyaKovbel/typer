const infoArr = [];
const countValue = document.getElementById('count');
countValue.innerHTML = 0;

function dataToStorage() {
  const inf = document.getElementById('value')
      , text = document.getElementById('text');

  if (infoArr.length === 0) {
    inf.innerHTML = 'start'
  }

  text.addEventListener('input', () => {
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

