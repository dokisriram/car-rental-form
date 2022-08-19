const name=document.getElementById('name');
const email=document.getElementById('email');
const phone=document.getElementById('phone');
let validemail= false;
let validphone= false;
let validuser= false;
$('#failure').hide();
$('#success').hide();

// console.log(name, email, phone);

name.addEventListener('blur', ()=>{
    console.log("name is blurred");
    //validate name here
    let regex =/^[a-zA-Z]([0-9a-zA-Z]){2,10}$/;
    let str=name.value;
    console.log(regex, str);
    if(regex.test(str)){
        console.log('your name is valid');
        name.classList.remove('is-invalid');
        validuser=true;
    }
    else{
        console.log('your name is not validf');
        name.classList.add('is-invalid');
        validuser=false;
    }
})
email.addEventListener('blur', ()=>{
    console.log("email is blurred");
    //validate email here
    let regex =/^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z)]){2,7}$/;
    let str=email.value;
    console.log(regex, str);
    if(regex.test(str)){
        console.log('your email is valid');
        email.classList.remove('is-invalid');
        validemail=true;
    }
    else{
        console.log('your email is not validf');
        email.classList.add('is-invalid');
        validemail=false;
    }
})
phone.addEventListener('blur', ()=>{
    console.log("phone is blurred");
   //validate phone number here
   let regex =/^([0-9]){10}$/;
   let str=phone.value;
   console.log(regex, str);
   if(regex.test(str)){
       console.log('your phone is valid');
       phone.classList.remove('is-invalid');
       validphone=true;
   }
   else{
       console.log('your phone is not validf');
       phone.classList.add('is-invalid');
       validphone=false;
   }
})


let submit=document.getElementById('submit');
submit.addEventListener('click', (e)=>{
    e.preventDefault();
    console.log('you clicked on submit');
    console.log('validemail, validuser, validphone');
    
    
    //submit your form here
    if(validemail && validphone && validuser){
        console.log('phone, email and user are valid, submitting the form');
        let success= document.getElementById('success');
        success.classList.add('show');
        // failure.classList.remove('failure');
        $('#failure').hide();
        $('#success').show();
    }else{
        console.log("one out of phone, email or username are not valid, hence not submitting the form. please correct the errors and try again");
        let failure= document.getElementById('failure');
        failure.classList.add('show');
        // success.classList.remove('show');
        $('#failure').show();
        $('#success').hide();
    }
    


})