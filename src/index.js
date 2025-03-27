const timerEl = document.querySelector('.countdown-timer')
const timerHoursEl = document.querySelector('.countdown-timer-hours')
const timerMinutesEl = document.querySelector('.countdown-timer-minutes')
const timerSecondsEl = document.querySelector('.countdown-timer-seconds')

let countdownTimer = 3600
const countdownInterval = setInterval(() => {
    countdownTimer--

    let hour = Math.floor(countdownTimer / 3600)
    let mins = Math.floor((countdownTimer - 3600 * hour) / 60)
    let seconds = countdownTimer % 60

    timerHoursEl.textContent = hour.toString().padStart(2, '0')
    timerMinutesEl.textContent = mins.toString().padStart(2, '0')
    timerSecondsEl.textContent = seconds

    timerHoursEl.textContent = hour.toString().padStart(2, '0')
    timerMinutesEl.textContent = mins.toString().padStart(2, '0')
    timerSecondsEl.textContent = seconds.toString().padStart(2, '0')

    if (countdownTimer === 1799) {
        alert('Залишилось менше половини часу :)')
    }

    if (countdownTimer <= 0) {
        clearInterval(countdownInterval)
    }
}, 10)










const timer2 = document.querySelector('.countdown-timer2')
const btnTimerStart = document.querySelector('.btn-start')

let timer = 30
btnTimerStart.addEventListener('click', () => {
    btnTimerStart.disabled = true; 
    const interval = setInterval(() => {
        timer--
        timer2.textContent = timer

        if (timer === 10) {
            document.querySelector('.box').classList.add('box-animation')
        }

        if (timer <= 0) {
            clearInterval(interval)
            btnTimerStart.disabled = false; 
            document.querySelector('.box').classList.remove('box-animation')
            timer = 30
        }
    }, 100)
})