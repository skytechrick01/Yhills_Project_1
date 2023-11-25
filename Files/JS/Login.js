


function na() {
    let Mobile = document.getElementById('Mobile');
    let Password = document.getElementById('Password');
    let Passwordd = Password.value;
    let Mobilee = Mobile.value;


    let PP = 0;


    if (Mobilee == "" || Mobilee == null){
        document.getElementById('User_Login_P').innerHTML = "Please enter your Mobile number";
        document.getElementById('User_Login_P').style.color = "red";
        document.getElementById('User_Login').style.borderBottom ='1px solid red';

        PP=1
    }
    else if(Mobilee.length <10){
        document.getElementById('User_Login_P').innerHTML = "Please enter correct mobile number";
        document.getElementById('User_Login_P').style.color = "red";
        document.getElementById('User_Login').style.borderBottom ='1px solid red';
        PP=1
    }
    else if(true){
        let p = 0
        for (let index = 0; index < Mobilee.length; index++) {
            const element = Mobilee[index];
            if (element == 1 || element == 2 || element == 3 || element == 2 || element == 4 || element == 5 || element == 6 || element == 7 || element == 8 || element == 9 || element == 0 ){

            }
            else{
                p = 1;
            }

            
        }
        if (p ==1 ){
            document.getElementById('User_Login_P').innerHTML = "Please enter correct mobile number";
            document.getElementById('User_Login_P').style.color = "red";
            document.getElementById('User_Login').style.borderBottom ='1px solid red';
            PP=1;
        }
    }



    if (Passwordd == "" || Passwordd == null){
        document.getElementById('User_Password_P').innerHTML = "Please create your password";
        document.getElementById('User_Password_P').style.color = "red";
        document.getElementById("User_Password").style.borderBottom ='1px solid red';
        PP=1
    }
    else if(Passwordd.length <8){
        document.getElementById('User_Password_P').innerHTML = "Password must be minimum 8 characters";
        document.getElementById('User_Password_P').style.color = "red";
        document.getElementById('User_Password').style.borderBottom ='1px solid red';
        PP=1
    }
    setTimeout(() => {
        if(PP==0){
            document.getElementById("Submit_Button").type = "submit";
            document.getElementById("Submit_Button").onclick = "";
            setTimeout(() => {
                document.getElementById('Submit_Button').click();
            }, 1);
        }
    }, 1);
    



}




function AG() {
    let Mobile = document.getElementById('Mobile');
    let Password = document.getElementById('Password');

    Mobile.addEventListener('input',()=>{
        document.getElementById('User_Login_P').innerHTML = "Enter your Mobile number";
        document.getElementById('User_Login_P').style.color = "black";
        document.getElementById('User_Login').style.borderBottom ='1px solid black';

    });
    Password.addEventListener('input',()=>{
        document.getElementById('User_Password_P').innerHTML = "Enter your password";
        document.getElementById('User_Password_P').style.color = "black";
        document.getElementById("User_Password").style.borderBottom ='1px solid black';
    })
    
    
    
};






AG();



function Login_Submit(){
    na()
    
}