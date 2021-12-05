Webcam.set({
    height:350, width:350 
});

Webcam.attach("camera");

function snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML="<img id='image' src='"+ data_uri +"'/>";
    });
}
    console.log("ml5 version", ml5.version);
    classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/3VkD_eVJM/model.json", modelloaded);
    function modelloaded(){
        console.log("model loadedd");
    }

    P1 = "";

    function speak(){
        var s = window.speechSynthesis;
        speak1 = "The Prediction is "+ P1;
        var utterthis = new SpeechSynthesisUtterance(speak1);
        s.speak(utterthis);
    }

function check(){
    img = document.getElementById("image");
    classifier.classify(img, gotresult);
}

function gotresult(error,result){
    if(error){console.error(error);}
    else{
        console.log(result);
        document.getElementById("name").innerHTML=result[0].label;
        P1 = result[0].label;
        speak();
        if(result[0].label=="Best"){
            document.getElementById("E1").innerHTML= "&#128076";
        }
        if(result[0].label=="Amazing"){
            document.getElementById("E1").innerHTML= "&#128077";
        }
        if(result[0].label=="Victory"){
            document.getElementById("E1").innerHTML= "&#9996";
        }

    }
}
