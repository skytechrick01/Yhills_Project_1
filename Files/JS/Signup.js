function Checked() {
    document.getElementById('Show_Password').onclick = function () {
        if (this.checked) {
            document.getElementById("Create_Password").type = "text";
            document.getElementById("Confirm_Password").type = "text";
        } else {
            document.getElementById("Create_Password").type = "password";
            document.getElementById("Confirm_Password").type = "password";
        }
    };
}
Checked();
function Name_Check() {
    let Name= document.getElementById('Name');
    let Mobile = document.getElementById('Mobile');
    let Email = document.getElementById('Email');
    let Create_Password = document.getElementById('Create_Password');
    let Confirm_Password = document.getElementById('Confirm_Password');

    let Namee = Name.value;
    let Mobilee = Mobile.value;
    let Emaill = Email.value;
    let Create_Passwordd = Create_Password.value;
    let Confirm_Passwordd = Confirm_Password.value;
    
    let PP = 0
    if (Namee == "" || Namee == null){
        document.getElementById('Name_Div').innerHTML = "Please enter your name";
        document.getElementById('Name_Div').style.color = "red";
        Name.style.border ='1px solid red';

        PP=1
    }
    else if (Namee.length < 3 || Namee[0] == Number || Namee[1] == Number || Namee[2] == Number){
        document.getElementById('Name_Div').innerHTML = "Please enter correct name";
        document.getElementById('Name_Div').style.color = "red";
        Name.style.border ='1px solid red';
    
        PP=1
        
    }
    if (Mobilee == "" || Mobilee == null){
        document.getElementById('Mobile_Number_Div').innerHTML = "Please enter your mobile number";
        document.getElementById('Mobile_Number_Div').style.color = "red";
        Mobile.style.border ='1px solid red';

        PP=1
    }
    else if(Mobilee.length <10){
        document.getElementById('Mobile_Number_Div').innerHTML = "Please enter correct mobile number";
        document.getElementById('Mobile_Number_Div').style.color = "red";
        Mobile.style.border ='1px solid red';
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
        if (p==1){
            document.getElementById('Mobile_Number_Div').innerHTML = "Please enter correct mobile number";
            document.getElementById('Mobile_Number_Div').style.color = "red";
            Mobile.style.border ='1px solid red';
            PP=1
        }
    }
    if (Emaill == "" || Emaill == null){
        document.getElementById('Email_Div').innerHTML = "Please enter your email";
        document.getElementById('Email_Div').style.color = "red";
        Email.style.border ='1px solid red';
        PP = 1;
    }
    else if(Emaill != "" || Emaill != null){
        let TT=0;
        for (let index = 0; index < Emaill.length; index++) {
            const element = Emaill[index];
            if(TT==0){
                if (element==="@"){
                    TT = 1
                }
            }
            if(TT==1){
                if(element==="."){
                    TT = 2
                    break
                }
            }

        }
        if(TT==2){
            document.getElementById('Email_Div').innerHTML = `Email address (example@gmail.com)<span style="color: red;">*</span>`;
            document.getElementById('Email_Div').style.color = "black";
            Email.style.border ='1px solid #ff00a3';
            

        }
        else if(TT!=2){
            document.getElementById('Email_Div').innerHTML = "Please enter correct email";
            document.getElementById('Email_Div').style.color = "red";
            Email.style.border ='1px solid red';
            PP = 1
        }
    }
    if (Create_Passwordd == "" || Create_Passwordd == null){
        document.getElementById('Create_Div').innerHTML = "Please create your password";
        document.getElementById('Create_Div').style.color = "red";
        Create_Password.style.border ='1px solid red';
        PP=1
    }
    else if(Create_Passwordd.length <8){
        document.getElementById('Create_Div').innerHTML = "Password must be minimum 8 characters";
        document.getElementById('Create_Div').style.color = "red";
        Create_Password.style.border ='1px solid red';
        PP=1
    }
    if (Confirm_Passwordd == "" || Create_Passwordd == null){
        document.getElementById('Confirm_Div').innerHTML = "Please re-enter your password";
        document.getElementById('Confirm_Div').style.color = "red";
        Confirm_Password.style.border ='1px solid red';
        PP=1
    }
    else if(Confirm_Passwordd.length <8){
        document.getElementById('Confirm_Div').innerHTML = "Password must be minimum 8 characters";
        document.getElementById('Confirm_Div').style.color = "red";
        Confirm_Password.style.border ='1px solid red';
        PP=1
    }
    else if(Confirm_Passwordd != Create_Passwordd){
        document.getElementById('Confirm_Div').innerHTML = "Password do not match";
        document.getElementById('Confirm_Div').style.color = "red";
        Confirm_Password.style.border ='1px solid red';
        PP =1
    }
    setTimeout(() => {
        if(PP==0){
            document.getElementById("Submit_Submit").type = "submit";
            document.getElementById("Submit_Submit").onclick = "";
            setTimeout(() => {
                document.getElementById('Submit_Submit').click();
            }, 1);
        }
    }, 1);
    

}



// Name_Check();

function Submit_CLICKED() {
    Name_Check();
}













function A() {
    let Name = document.getElementById('Name');
    let Mobile = document.getElementById('Mobile');
    let Email = document.getElementById('Email');
    let Create_Password = document.getElementById('Create_Password');
    let Confirm_Password = document.getElementById('Confirm_Password');

    Name.addEventListener('input',()=>{
        document.getElementById('Name_Div').innerHTML = `Enter your name<span style="color: red;">*</span>`;
        document.getElementById('Name_Div').style.color = "black";
        Name.style.border ='1px solid #ff00a3';
    });
    Mobile.addEventListener('input',()=>{
        document.getElementById('Mobile_Number_Div').innerHTML = `Enter your mobile number<span style="color: red;">*</span>`;
        document.getElementById('Mobile_Number_Div').style.color = "black";
        Mobile.style.border ='1px solid #ff00a3';
    })
    Email.addEventListener('input',()=>{
        document.getElementById('Email_Div').innerHTML = `Email address (example@gmail.com)<span style="color: red;">*</span>`;
        document.getElementById('Email_Div').style.color = "black";
        Email.style.border ='1px solid #ff00a3';

    })
    Create_Password.addEventListener('input',()=>{
        document.getElementById('Create_Div').innerHTML = "Create password";
        document.getElementById('Create_Div').style.color = "black";
        Create_Password.style.border ='1px solid #ff00a3';
        if (Create_Password.value.length>=8){

            if(Confirm_Password.value === Create_Password.value){
                document.getElementById('Confirm_Div').innerHTML = "Password matched";
                document.getElementById('Confirm_Div').style.color = "rgb(0, 160, 120)";
                document.getElementById('Confirm_Div').style.fontWeight = "bold";
                Confirm_Password.style.border ='1px solid #ff00a3';
            }
            else if(Confirm_Password.value != Create_Password.value && Confirm_Password.value.length>=8){
                document.getElementById('Confirm_Div').innerHTML = "Password do not match";
                document.getElementById('Confirm_Div').style.color = "red";
                document.getElementById('Confirm_Div').style.fontWeight = "100";
                Confirm_Password.style.border ='1px solid red';
            }
        }
    })
    Confirm_Password.addEventListener('input',()=>{
        document.getElementById('Confirm_Div').innerHTML = "Re-enter your password";
        document.getElementById('Confirm_Div').style.color = "black";
        Confirm_Password.style.border ='1px solid #ff00a3';
        if (Confirm_Password.value.length>=8){

            if(Confirm_Password.value === Create_Password.value){
                document.getElementById('Confirm_Div').innerHTML = "Password matched";
                document.getElementById('Confirm_Div').style.color = "rgb(0, 160, 120)";
                document.getElementById('Confirm_Div').style.fontWeight = "bold";
                Confirm_Password.style.border ='1px solid #ff00a3';
            }
            else if(Confirm_Password.value != Create_Password.value && Create_Password.value.length>=8){
                document.getElementById('Confirm_Div').innerHTML = "Password do not match";
                document.getElementById('Confirm_Div').style.color = "red";
                document.getElementById('Confirm_Div').style.fontWeight = "100";
                Confirm_Password.style.border ='1px solid red';
            }
        }
    })
    
    
    
};










A();






function Aaa() {
    if (document.getElementById("KL").innerHTML == "T") {
        document.getElementById("BG_Show").style.display = "flex";
    }
    else {
        document.getElementById("BG_Show").style.display = "none";

    }
    
}

Aaa();
































































