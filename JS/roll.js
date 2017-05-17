var no_of_dice = 1;

function dice_number() {

    var current_number = document.getElementById("dice_btn").innerHTML;
    no_of_dice = current_number.replace("No. of dice: ","");
    
    if (document.getElementById("dice_btn").innerHTML == "No. of dice: 1") {
        
        document.getElementById("dice_btn").innerHTML = "No. of dice: 2";
        current_number = document.getElementById("dice_btn").innerHTML;
        no_of_dice = current_number.replace("No. of dice: ",""); 

    }
    
    else {
        
        document.getElementById("dice_btn").innerHTML = "No. of dice: 1";
        current_number = document.getElementById("dice_btn").innerHTML;
        no_of_dice = current_number.replace("No. of dice: ","");
        
    }
    
}

function roll() {

    // Math.floor((Math.random() * 10) + 1);
    var randoms = [];
    var rolls_value;
    
    if (no_of_dice == 1) {
        randoms[0] = (Math.floor((Math.random() * 6) + 1)).toString();
        rolls_value = randoms[0];
    }
    else {
        for (i = 0;i<2;i++)
            randoms[i] = (Math.floor((Math.random() * 6) + 1)).toString();
        
        rolls_value = randoms[0] + ',' + randoms[1];
    }
    
   document.getElementById("roll").innerHTML = rolls_value; 
      
}
