const buttonFlorest1 = document.querySelector('.floresta1');
const buttonFlorest2 = document.querySelector('.floresta2');
const buttonChuva1 = document.querySelector('.chuva1');
const buttonChuva2 = document.querySelector('.chuva2');
const buttonCafeteria1 = document.querySelector('.cafeteria1');
const buttonCafeteria2 = document.querySelector('.cafeteria2');
const buttonLareira1 = document.querySelector('.lareira1');
const buttonLareira2 = document.querySelector('.lareira2');
const Play1 = document.querySelector('.play1')
const Play2 = document.querySelector('.play2')
const Stop = document.querySelector('.stop')
const Soma = document.querySelector('.sum')
const Subtrair = document.querySelector('.sub')
let Minutes = document.querySelector('.minutes')
let Seconds = document.querySelector('.seconds')
let minutes = Number(Minutes.innerHTML)
let seconds = Number(Seconds.innerHTML)
const Claro = document.querySelector('.claro')
const Escuro = document.querySelector('.escuro')
const Body = document.querySelector('body')
const VolumeFloresta = document.querySelector('#volumeFloresta2')
const VolumeChuva = document.querySelector('#volumeChuva2')
const VolumeCafeteria = document.querySelector('#volumeCafeteria2')
const VolumeLareira = document.querySelector('#volumeLareira2')
let musicFlorest;
let musicChuva;
let musicCafeteria;
let musicLareira;

buttonFlorest1.addEventListener('click', function() {
  buttonFlorest1.classList.add('hide')
  buttonFlorest2.classList.remove('hide')
  buttonChuva1.classList.remove('hide')
  buttonChuva2.classList.add('hide')
  buttonCafeteria1.classList.remove('hide')
  buttonCafeteria2.classList.add('hide')
  buttonLareira1.classList.remove('hide');
  buttonLareira2.classList.add('hide')
  VolumeFloresta.classList.add('colorinput1')
  VolumeFloresta.classList.add('colorinput2')
  VolumeLareira.classList.remove('colorinput1')
  VolumeLareira.classList.remove('colorinput2')
  VolumeChuva.classList.remove('colorinput1')
  VolumeChuva.classList.remove('colorinput2')
  VolumeCafeteria.classList.remove('colorinput1')
  VolumeCafeteria.classList.remove('colorinput2')
  musicFlorest = new Audio('./audios/Floresta.wav')
  VolumeFloresta.addEventListener('input', function() {
    musicFlorest.volume = VolumeFloresta.value / 100
  })
  musicFlorest.loop = true;
  musicFlorest.play()
  musicChuva.pause()
  musicCafeteria.pause()
  musicLareira.pause()
})

buttonFlorest2.addEventListener('click', function() {
  buttonFlorest1.classList.remove('hide')
  buttonFlorest2.classList.add('hide')
  VolumeFloresta.classList.remove('colorinput1')
  VolumeFloresta.classList.remove('colorinput2')
  musicFlorest.pause();
})


buttonChuva1.addEventListener('click', function() {
  buttonChuva1.classList.add('hide')
  buttonChuva2.classList.remove('hide')
  buttonFlorest1.classList.remove('hide')
  buttonFlorest2.classList.add('hide')
  buttonCafeteria1.classList.remove('hide')
  buttonCafeteria2.classList.add('hide')
  buttonLareira1.classList.remove('hide');
  buttonLareira2.classList.add('hide')
  VolumeChuva.classList.add('colorinput1')
  VolumeChuva.classList.add('colorinput2')
  VolumeLareira.classList.remove('colorinput1')
  VolumeLareira.classList.remove('colorinput2')
  VolumeFloresta.classList.remove('colorinput1')
  VolumeFloresta.classList.remove('colorinput2')
  VolumeCafeteria.classList.remove('colorinput1')
  VolumeCafeteria.classList.remove('colorinput2')
  musicChuva = new Audio('./audios/Chuva.wav')
  VolumeChuva.addEventListener('input', function() {
    musicChuva.volume = VolumeChuva.value / 100
  })
  musicChuva.loop = true;
  musicChuva.play()
  musicFlorest.pause()
  musicCafeteria.pause()
  musicLareira.pause()
})

buttonChuva2.addEventListener('click', function() {
  buttonChuva1.classList.remove('hide')
  buttonChuva2.classList.add('hide')
  VolumeChuva.classList.remove('colorinput1')
  VolumeChuva.classList.remove('colorinput2')
  musicChuva.pause()
})


buttonCafeteria1.addEventListener('click', function() {
  buttonCafeteria1.classList.add('hide')
  buttonCafeteria2.classList.remove('hide')
  buttonChuva1.classList.remove('hide')
  buttonChuva2.classList.add('hide')
  buttonLareira1.classList.remove('hide');
  buttonLareira2.classList.add('hide');
  buttonFlorest1.classList.remove('hide')
  buttonFlorest2.classList.add('hide')
  VolumeCafeteria.classList.add('colorinput1')
  VolumeCafeteria.classList.add('colorinput2')
  VolumeLareira.classList.remove('colorinput1')
  VolumeLareira.classList.remove('colorinput2')
  VolumeFloresta.classList.remove('colorinput1')
  VolumeFloresta.classList.remove('colorinput2')
  VolumeChuva.classList.remove('colorinput1')
  VolumeChuva.classList.remove('colorinput2')
  musicCafeteria = new Audio('./audios/Cafeteria.wav')
  VolumeCafeteria.addEventListener('input', function() {
    musicCafeteria.volume = VolumeCafeteria.value / 100
  })
  musicCafeteria.loop = true
  musicCafeteria.play()
  musicChuva.pause()
  musicFlorest.pause()
  musicLareira.pause()
})

buttonCafeteria2.addEventListener('click', function() {
  buttonCafeteria1.classList.remove('hide')
  buttonCafeteria2.classList.add('hide')
  VolumeCafeteria.classList.remove('colorinput1')
  VolumeCafeteria.classList.remove('colorinput2')
  musicCafeteria.pause()
})


buttonLareira1.addEventListener('click', function() {
  buttonLareira1.classList.add('hide');
  buttonLareira2.classList.remove('hide')
  buttonFlorest1.classList.remove('hide')
  buttonFlorest2.classList.add('hide')
  buttonCafeteria1.classList.remove('hide')
  buttonCafeteria2.classList.add('hide')
  buttonChuva1.classList.remove('hide')
  buttonChuva2.classList.add('hide')
  VolumeLareira.classList.add('colorinput1')
  VolumeLareira.classList.add('colorinput2')
  VolumeFloresta.classList.remove('colorinput1')
  VolumeFloresta.classList.remove('colorinput2')
  VolumeChuva.classList.remove('colorinput1')
  VolumeChuva.classList.remove('colorinput2')
  VolumeCafeteria.classList.remove('colorinput1')
  VolumeCafeteria.classList.remove('colorinput2')
  musicLareira = new Audio('./audios/Lareira.wav')
  VolumeLareira.addEventListener('input', function() {
    musicLareira.volume = VolumeLareira.value / 100
  })
  musicLareira.loop = true
  musicLareira.play()
  musicChuva.pause()
  musicFlorest.pause()
  musicCafeteria.pause()
})

buttonLareira2.addEventListener('click', function() {
  buttonLareira1.classList.remove('hide');
  buttonLareira2.classList.add('hide')
  VolumeLareira.classList.remove('colorinput1')
  VolumeLareira.classList.remove('colorinput2')
  musicLareira.pause()
})

Soma.addEventListener('click', function() {
  updateTimer(Number(Minutes.innerHTML) + 5, Seconds.innerHTML)
})

Subtrair.addEventListener ('click', function() {
  if (Number(Minutes.innerHTML) <= 5) {
    alert('Opa... não tem mais como diminuir os minutos, chegou no limite! :) ')
  } else {
    updateTimer(Number(Minutes.innerHTML) - 5, Seconds.innerHTML)
}})

function resetTimer() {
  Minutes.innerHTML = String(minutes).padStart(2, "0");
  Seconds.innerHTML = String(seconds).padStart(2, "0");
}

function updateTimer(minutes, seconds) {
Minutes.innerHTML = String(minutes).padStart(2, "0");
Seconds.innerHTML = String(seconds).padStart(2, "0");
}

function countdown () {
  pauseTime = setTimeout(function() {
    let minutes = Number(Minutes.innerHTML)
    let seconds = Number(Seconds.innerHTML)
    if ((minutes <= 0) && (seconds <=0 )) {
      resetTimer()
      return
    }
    if (seconds <= 0) {
      seconds = 60
      minutes--
    }

  updateTimer(minutes, seconds - 1)
  countdown()
  }, 1000)
}

Play1.addEventListener('click', function() {
  countdown()
  Play1.classList.add('hide')
  Play2.classList.remove('hide')
})

Stop.addEventListener('click', function() {
  clearTimeout(pauseTime)
  Play1.classList.remove('hide')
  Play2.classList.add('hide')
})

Claro.addEventListener('click', function() {
  Claro.classList.add('hide')
  Escuro.classList.remove('hide')
  Body.classList.add('backgrounddark')
  Play1.classList.add('colordark')
  Stop.classList.add('colordark')
  Soma.classList.add('colordark')
  Subtrair.classList.add('colordark')
  buttonFlorest1.classList.add('colordark2')
  buttonChuva1.classList.add('colordark2')
  buttonCafeteria1.classList.add('colordark2')
  buttonLareira1.classList.add('colordark2')
  buttonFlorest1.classList.add('backdark')
  buttonChuva1.classList.add('backdark')
  buttonCafeteria1.classList.add('backdark')
  buttonLareira1.classList.add('backdark')
  VolumeChuva.classList.add('colorinput1')
  VolumeChuva.classList.add('colorinput2')
  VolumeLareira.classList.add('colorinput1')
  VolumeLareira.classList.add('colorinput2')
  VolumeFloresta.classList.add('colorinput1')
  VolumeFloresta.classList.add('colorinput2')
  VolumeCafeteria.classList.add('colorinput1')
  VolumeCafeteria.classList.add('colorinput2')
})

Escuro.addEventListener('click', function() {
  Claro.classList.remove('hide')
  Escuro.classList.add('hide')
  Body.classList.remove('backgrounddark')
  Play1.classList.remove('colordark')
  Stop.classList.remove('colordark')
  Soma.classList.remove('colordark')
  Subtrair.classList.remove('colordark')
  buttonFlorest1.classList.remove('colordark2')
  buttonChuva1.classList.remove('colordark2')
  buttonCafeteria1.classList.remove('colordark2')
  buttonLareira1.classList.remove('colordark2')
  buttonFlorest1.classList.remove('backdark')
  buttonChuva1.classList.remove('backdark')
  buttonCafeteria1.classList.remove('backdark')
  buttonLareira1.classList.remove('backdark')
  VolumeChuva.classList.remove('colorinput1')
  VolumeChuva.classList.remove('colorinput2')
  VolumeLareira.classList.remove('colorinput1')
  VolumeLareira.classList.remove('colorinput2')
  VolumeFloresta.classList.remove('colorinput1')
  VolumeFloresta.classList.remove('colorinput2')
  VolumeCafeteria.classList.remove('colorinput1')
  VolumeCafeteria.classList.remove('colorinput2')
})






