window.onload = () => {
    const numbers = document.getElementsByTagName('span')
    const temps = 650
    
    setInterval(() => {
        let randomNumber = Math.floor(Math.random() * numbers.length)
        let randomDataNumber = Math.floor(Math.random() * 20)

        console.log(`Element = ${randomNumber} : Valeur = ${randomDataNumber}`)

        numbers[randomNumber].innerText = randomDataNumber
    }, temps)
};