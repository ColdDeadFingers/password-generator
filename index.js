let possibleChars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y","Z",
                    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y","z",
                    0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
                    "`", "~", "!", "@", "#", "$", "%", "^", "&", "(", ")", "_", "-", "+", "," ,">", "/", ":", ";" , "'", "/", "?" 

]

 function fillButtons(){
     document.getElementById("pw1").textContent = generatePassword()
     document.getElementById("pw2").textContent = generatePassword()
     document.getElementById("pw3").textContent = generatePassword()
     document.getElementById("pw4").textContent = generatePassword()
 }

function generatePassword(){
    let passwordlen = document.getElementById("pw-len").value
    let indexArray =[]
    let password = ""

    for(let i = 0; i < passwordlen; i++){
        item =Math.floor(Math.random() * 84) 
        indexArray.push(item)
    }

    for(let i = 0; i < indexArray.length; i++){
        password += possibleChars[indexArray[i]]
    }

    return password
}

function copyPassword1() {
    navigator.clipboard.writeText(document.getElementById("pw1").textContent);
    alert("Copied");
  }
function copyPassword2() {
    navigator.clipboard.writeText(document.getElementById("pw2").textContent);
    alert("Copied");
  }
function copyPassword3() {
    navigator.clipboard.writeText(document.getElementById("pw3").textContent);
    alert("Copied");
  }
function copyPassword4() {
    navigator.clipboard.writeText(document.getElementById("pw4").textContent);
    alert("Copied");
  }