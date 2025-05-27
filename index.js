function MostraFrase() {
    fetch('https://api.adviceslip.com/advice')
    .then(res =>  res.json())
    .then(data => {
       document.getElementById('frase').innerHTML = data.slip.advice;
    })
}