function formValidation(){
    var uid = document.registration.userid;
    var passid = document.registration.passid;
    var uname = document.registration.username;
    var uadd = document.registration.address;
    var ucountry = document.registration.country;
    var uzip = document.registration.zip;
    var uemail = document.registration.email;
    if(validateUserID(uid,5,12)){
        if(validatePassword(passid,7,12)){
            if(validateUsername(uname)){
                if(validateAddress(uadd)){ 
                    if(validateCountry(ucountry)){
                        if(validateZip(uzip)){
                            if(validateEmail(uemail)){
                            }
                        }
                    }
                }
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

    // validate full name
    function validateUsername(uname){ 
        var letters = /^[A-Za-z]+$/;
        if(uname.value.match(letters)){
            return true;
        }else{
            alert('Username must have alphabet characters only');
            uname.focus();
            return false;
        }
    }

    // validate address
    function validateAddress(uadd){ 
        var letters = /^[0-9a-zA-Z]+$/;
        if(uadd.value.match(letters)){
            return true;
        }else{
            alert('User address must have alphanumeric characters only');
            uadd.focus();
            return false;
        }
    }

    // validate country
    function validateCountry(ucountry){
        if(ucountry.value == "Default"){
            alert('Select your country from given list');
            ucountry.focus();
            return false;
        }else{
            return true;
        }
    }

    // validate zip code
    function validateZip(uzip){ 
        var numbers = /^[0-9]+$/;
        if(uzip.value.match(numbers)){
            return true;
        }else{
            alert('ZIP code must have numeric characters only');
            uzip.focus();
            return false;
        }
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
            localStorage.setItem("uid", uid.value);
            localStorage.setItem("password", passid.value);
            localStorage.setItem("uname", uname.value);
            localStorage.setItem("uadd", uadd.value);
            localStorage.setItem("ucountry", ucountry.value);
            localStorage.setItem("uzip", uzip.value);
            localStorage.setItem("uemail", uemail.value);

            alert("Form Submitted Successfully");
            // window.location.reload();
            window.location.href = '../login/log\ in.html';
            return true;
        }
    }
}
