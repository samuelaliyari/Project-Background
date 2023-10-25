

const changeColor = () => {
    const userInput = document.body.querySelector("input").value;
    const bodyBackGround = document.body.style;
    bodyBackGround.backgroundColor = userInput
    console.log(userInput)
}

