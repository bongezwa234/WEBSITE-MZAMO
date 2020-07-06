function changeColor1(){
    var color = document.getElementById("navbar");
    color.style.background = "White"}

    function changeColor2(){
        var color = document.getElementById("navbar");
        color.style.background = "Red"}

        function changeColor3(){
            var color = document.getElementById("navbar");
            color.style.background = "Yellow"}

            function changeColor4(){
                var color = document.getElementById("navbar");
                color.style.background = "Green"}




function validateTextBox() {
    var nameCheck = document.getElementById('name');
    if (nameCheck.value ==''){
        alert("Please enter your name");
        return false;
    }else if (surname.value =='') {
        alert("Please enter your surname");
        return false;
    }else if (email.value =='') {
        alert("Please enter your email");
        return false;
    }else if (phone.value =='') {
        alert("Please enter your phone number");
        return false;
    }else if (message.value =='') {
        alert("Please enter your message");
        return false;
    }else {
        alert("Form submitted")
    }

}
document.getElementById('button').addEventListener('click',function() {
    document.querySelector('.bg-modal').style.display ='flex';
});

document.querySelector('.close').addEventListener('click',function() {
    document.querySelector('.bg-modal').style.display = 'none';
});

//pop up //
alert("Welcome to Mzamomtsha primary school")

//popup blocked

window.open("https://competent-mcnulty-76db04.netlify.app/");

//popup allowed
button.onclick=()=>{
    window.open("https://competent-mcnulty-76db04.netlify.app/");
}

