var welcome;
var text;
var utterance;
welcome = addEventListener('load',() =>{
    var text = "Welcome Can you please switch on the light... ?";
    var utterance = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(utterance);
})
offfunction = () =>{
    document.getElementById('myImage').src='./images/lf11.svg',
    document.querySelector('#heading').innerHTML="Can you turn On the light ?",
    text = "Light are Off";
    utterance = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(utterance);
}

onfunction = () =>{
    document.getElementById('myImage').src='./images/ln11.svg',
    document.querySelector('#heading').innerHTML="Can you turn Off the light ?",
    text = "Light are On";
    utterance = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(utterance);
}