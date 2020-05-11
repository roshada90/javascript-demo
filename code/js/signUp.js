"use strict"

function formValidation(){
    var uid = document.registration.userid;
    var passid = document.registration.passid;
    var uemail = document.registration.email;

    if(validateUserID(uid,5,12)){
        if(validatePassword(passid,7,12)){
            if(validateEmail(uemail)){
            }
        }
        return false;
    }

    // validate userID
    function validateUserID(uid,mx,my){
        var uid_len = uid.value.length;
        if (uid_len == 0 || uid_len >= my || uid_len < mx){
            alert("User ID should not be empty / length must be between "+mx+" to "+my);
            uid.focus();
            return false;
        }
        return true;
    }
    // validate password
    function validatePassword(passid,mx,my){
        var passid_len = passid.value.length;
        if (passid_len == 0 ||passid_len >= my || passid_len < mx){
            alert("Password should not be empty / length must be between "+mx+" to "+my);
            passid.focus();
            return false;
        }
        return true;
    }

    // validate email
    function validateEmail(uemail){
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        var x=0;
        
        if(uemail.value.match(mailformat)){
            x=1
        }else{
            alert("You have entered an invalid email address!");
            uemail.focus();
            return false;
        }
        if(x==1){
            alert("Logged In Successfully");
            // window.location.reload();
            window.location.href = '../homepage/index.html';
            return true;
        }
    }
}

