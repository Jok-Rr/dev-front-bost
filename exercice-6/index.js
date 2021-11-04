function checkPhoneNumber(phoneNumber){
      const regex = new RegExp('^((06)|(07)|(01))[0-9]{8}$');

      result = phoneNumber.match(regex) ? true : false;

      return result
}

console.log(checkPhoneNumber('0644970976'));

