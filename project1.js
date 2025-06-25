const form =  document.getElementById("myform");
const Name = document.getElementById("name");
const phonenbr = document.getElementById("phone");
const email = document.getElementById("email");
const DateOfBirth = document.getElementById("sol");
const username = document.getElementById("username");
const password = document.getElementById("password");
const confirmpassword = document.getElementById("confirmpassword");

 form.addEventListener('submit',function(e){

     const isValid = checkInputs(); // ✅ check if all validations pass

  if (isValid) {
    alert("Form submitted successfully!");
    form.submit(); // ✅ manually submit if valid
  }
 e.preventDefault();
  });
 function checkInputs()
 {
    let success = true;
    const NameValue = Name.value.trim();
    const phonenbrValue = phonenbr.value.trim();
    const emailValue = email.value.trim();
    const DateOfBirthValue = DateOfBirth.value.trim();
    const usernameValue = username.value.trim();
    const passwordValue = password.value.trim();
    const confirmpasswordValue = confirmpassword.value.trim();

    // Condition for handling empty username value
    if(usernameValue === "")
    {
        setError(username,'Username is invalid');
        success = false;
    }
    else
    {
        setSuccess(username);
    }
    // Condition for handling empty password
    if(passwordValue.trim() === "")
    {
        setError(password,'Please Enter the password');
        success = false;
    }
    //Condition that password must satisfy
    else  if(passwordValue == 'password' || passwordValue === NameValue || passwordValue.length < 8)
    {
      setError(password,'enter the correct email or password is not strong');
      success = false;
    }
    else
    {
      setSuccess(password);
    }
    //Checking whether the password and confirmpassword are same
    if(confirmpasswordValue != passwordValue)
    {
        setError(confirmpassword,'password should be same as the confirmpassword');
        success = false;
    }
    //Condition for handling empty confirm pasword value
    else if(confirmpasswordValue === "")
    {
        setError(confirmpassword,'Please Enter the confirmpassword');
        success = false;
    }
    else
    {
        setSuccess(confirmpassword);
    }
    //Condition that name must satisfy
    if(NameValue.length < 5)
    {
        setError(Name,'name must be of atleast 5 characters');
        success = false;
    }
    else
    {
        setSuccess(Name);
    }
    
    // Condition thst phonenbr must satisfy
    if( phonenbr.value=== "123456789"||phonenbr.value.trim().length != 10)
    {
        setError(phonenbr,'Phone number must be a 10 digit nbr');
        success = false;
    }
    else
    {
        setSuccess(phonenbr);
    }
    return success;
    

 }
 function  setError(input,message)
  {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'form-control error';
    small.innerText = message;
 }
 function setSuccess(input)
 {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
 }

 function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

 