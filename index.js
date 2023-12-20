document.querySelector(".imgeyeoff").addEventListener('click',function () { 
    var passwordField=document.querySelector(".inputclassPassword");
    if (passwordField.type=== 'password') { 
        passwordField.type='text'
        
    } else { 
        passwordField.type='password'
        
    }
})