const infoArr = [];
let count = 0;
(() => {
    const inf = document.getElementById('value')
        , text = document.getElementById('text')
  
    if ((text.value).length === 0) {
      inf.innerHTML = 'just for test'
    }
  
    text.addEventListener('input', () => {
      value.setAttribute('data-text', text.value)
  
      value.innerHTML = value.getAttribute('data-text')
      if (text.value.includes(' ')) {
          infoArr.push(text.value)
          text.value = ''
          count++
          console.log(count, infoArr)
      }
      if ((text.value).length === 0) {
        value.innerHTML = 'just for test'
      }
    })
    
  })();