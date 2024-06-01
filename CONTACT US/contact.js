var fullname = document.getElementById('fullname')
var email = document.getElementById('email')
var phonenumber = document.getElementById('number')
var preference = document.getElementById('ramenType')
var agree = document.getElementById('agreement')


function checkNumber(phonenumber){
    for(var i=0;i<phonenumber.length;i++){
        var value = phonenumber.charCodeAt(i)
        if(value<48 || value>57){
            return false
        }
    }
    return true
}


function checkInput(){
    if(fullname.value === ''){
        alert('Name input is incorrect!')
    }else if(!email.value.endsWith('@gmail.com')){
        alert('Email must end with "@gmail.com!"')
    }else if(!checkNumber(phonenumber.value) || phonenumber.value.length > 13 || phonenumber.value.length<1){
        alert('Phone number must only contain digits and the length must be under 13!')
    }else if(!agree.checked){
        alert('Please check the agreement box to continue!')
    }else{
        confirm('You have successfully submitted your registration!')
        window.location.href = "../HOME PAGE/home.html";
    }
}