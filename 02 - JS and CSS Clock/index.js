const secondHand = document.querySelector('.sec-hand') // selects the secondhand
const minuteHand = document.querySelector('.min-hand') // selects the secondhand
const hourHand = document.querySelector('.hour-hand') // selects the secondhand
function setDate() {
  const now = new Date()
  const seconds = now.getSeconds()
  const secondsDegrees = (seconds / 60) * 360 + 90
  secondHand.style.transform = `rotate(${secondsDegrees}deg)` // make the second hand rotate
  console.log(seconds, 'seconds')

  const minutes = now.getMinutes()
  const minutesDegrees = (minutes / 60) * 360 + 90
  minuteHand.style.transform = `rotate(${minutesDegrees}deg)` // make the minutes hand rotate
  console.log(minutes, 'minutes')

  const hours = now.getHours() // get hour in real time
  const hoursDegrees = (hours / 12) * 360 + 90
  hourHand.style.transform = `rotate(${hoursDegrees}deg)` // make the hour hand rotate
  console.log(hours, 'hours')
}
setInterval(setDate, 1000)
