const button = document. getElementById('btn')
const colortext = document.querySelector('.color')
const hex = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
]
button.addEventListener('click',() => {
    const hexColor  = generateHexColor();
    document.body.style.backgroundColor = hexColor
    colortext.textContent = hexColor;

})
const generateHexColor = () => {
    let hexColor ='#';
    for (let i = 0; i < 6 ;i++ ){
        hexColor += hex[generateRandomNumber()]

    }
    return hexColor;

}
const generateRandomNumber = () => {
    return Math.floor(Math.random() * hex.length)

}
