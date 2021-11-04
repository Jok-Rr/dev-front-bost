function computeNotes(){
      let notes = [10, 13, 13, 12, 15, 12, 11, 16, 14];
      let sum = 0;
      let lengthNotes = notes.length;

      for (let loop = 0; loop < notes.length; loop++) {
            sum += notes[loop];
      }

      let mean = sum/lengthNotes;

      return mean;
}

console.log(computeNotes());