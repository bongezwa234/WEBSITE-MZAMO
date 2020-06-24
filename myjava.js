function changeColor1(){
    var color = document.getElementById("navbar");
    color.style.background = "White"}

    function changeColor2(){
        var color = document.getElementById("navbar");
        color.style.background = "Red"}

        function changeColor3(){
            var color = document.getElementById("navbar");
            color.style.background = "Yellow"}




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


