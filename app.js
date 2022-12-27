const secondHand =document.querySelector('.second-hand')
const minuteHand = document.querySelector('.min-hand')
const hourHand = document.querySelector('.hour-hand')

function setDate(){
    const now = new Date()

    // for seconds
    const seconds = now.getSeconds()
    // console.log(seconds)
    const secondsDegrees  = ((seconds/60) * 360) + 90
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`

    // for minute
    const minute = now.getMinutes()
    // console.log(minute)
    const minutesDegrees = ((minute/60) * 360) + 90
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`

    // for hour
    let hour = now.getHours()

        const hoursDegrees = ((hour/12) * 360) + 90
        hourHand.style.transform = `rotate(${hoursDegrees}deg)`


}

setInterval(setDate, 1000)