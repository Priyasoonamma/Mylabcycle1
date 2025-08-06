const newuser = document.getElementById('name');
const newpass = document.getElementById('passwd');
const confpasswd = document.getElementById('confpasswd');
const error = document.getElementById('newerror');
document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('.tablinks');
    const contents = document.querySelectorAll('.tabcontent');
    tabs[0].classList.add('active');
    contents[0].classList.add('active');
    tabs.forEach((tab, index) => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            contents.forEach(c => c.classList.remove('active'));
            tab.classList.add('active');
            contents[index].classList.add('active');
        });
    });
    if(passwd && confpasswd){
        //passwd.addEventListener('input', checkPasswords);
        confpasswd.addEventListener('input', checkPasswords);
    }
    function checkPasswords() {
        if (newpass.value !== confpasswd.value) {
            newerror.innerText = "Passwords do not match!";
            newerror.style.color = "red";
        } else {
            newerror.innerText = "Password matches!";
            newerror.style.color = "green";
        }
    }
});
function validation(){
    const loginuser = document.getElementById('username');
    const loginpass = document.getElementById('userpasswd');
    const error = document.getElementById('error');
    if (!loginuser.value.trim() && !loginpass.value.trim()){
        error.innerText="Please enter username and password";
        return false;
    }else if (!loginuser.value.trim()){
        error.innerText="Please enter username";
        return false;
    }else if(!loginpass.value.trim()){
        error.innerText="Please enter password";
        return false
    }else{
        alert("Login Successful!");
        return;
    }
}
function newuservalidation(){
    const error = document.getElementById('newerror');
    if(!newuser.value.trim() && !newpass.value.trim() && !confpasswd.value.trim()){
        error.innerText="Please signup first!";
        return false;
    }else if(!newuser.value.trim()){
        error.innerText="Please enter username";
        return false;
    }else if(!newpass.value.trim()){
        error.innerText="Please enter password";
        return false;
    }else if(!confpasswd.value.trim()){
        error.innerText="Please confirm password";
        return false;
    }else if(newpass.value.trim()!==confpasswd.value.trim()){
        error.innerText="Password doesn't match!"
        return false;
    }
    else{
        alert("Registration successful");
        return;
    }
}