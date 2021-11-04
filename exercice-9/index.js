function checkPalindrome(str){
      const strInput = str.toLowerCase().normalize("NFD").replace(/\s|,|[\u0300-\u036f]/g, "");
      const strReverse = strInput.split("").reverse().join("");
   
      console.log(strInput);
      console.log(strReverse);

      if (strInput === strReverse) {
            console.log(true);
      }else{
            console.log(false);

      }
}

checkPalindrome('Noir, ô hélas, Isis a le horion');