function CheckPassword() {
    let A = document.getElementById("password").value;
    let B = document.getElementById("conpass").value;

    ConfirmPassword(A,B);
}

function ConfirmPassword(A,B){
    if(A==B){
        alert("สมัครสมาชิกสำเร็จ!");
        window.location.href="Dashboard.html";
    }else{
        alert("ไม่สำเร็จ กรุณากรอกรหัสให้ตรงกัน")
    }
}

function RegisterForClass(){
    window.location.href="Class.html";
}