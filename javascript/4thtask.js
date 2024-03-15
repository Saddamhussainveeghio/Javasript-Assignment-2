let word = "pizza";
let message = "";
for (let i = word.length; i > 0; i--) {
    message += word.slice(0, i) + "\n";
}
alert(message);