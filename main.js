var SpeechRecognition = window.webkitSpeechRecognition;
var Recognition = new SpeechRecognition();

function start()
{
    document.getElementById("textbox").innerHTML = "";
    Recognition.start();

}

Recognition.onresult = function run(event){
    console.log(event);

var Content = event.results[0][0].transcript;
console.log(Content);
document.getElementById("textbox").innerHTML =  Content;

if(Content == "Take my selfie")
{
    console.log("Taking selfie ---");
    speak();
}
}

function speak()
{
    var synth = window.speechSynthesis;
    speak_data = document.getElementById("textbox").value;
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    Webcam.attach(camera);
}
Webcam.set({
    width:360,
    height:250,
    image_format: "png",
    png_quality: 90

});
camera = document.getElementById("camera");
