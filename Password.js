


function verifyPassword(input){
    var accepted =  /^(?=.*\d)(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,15}$/;

    // if(input.value.match(accepted)){
    //     alert('Strong Password')
    // }

   if (input.value.length < 8){
        alert(" Password is too short")
    }
    else if (input.value.search(/[A-Z]/) < 0 ){
        alert(" Password must contain at least one capital letter")
    }
   else if (input.value.search(/[0-9]/) < 0 ){
       alert(" Password must contain at least one number")
   }
    else {
        alert(" Strong Password ")
    }
}