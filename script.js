function calculateGrade(gradeInput) {
    let parsedInt = Number.parseInt(gradeInput);

    let final = parsedInt;

    var grade1 = parseInt(document.getElementById("grade1").value);
    var grade2 = parseInt(document.getElementById("grade2").value);
    var grade3 = parseInt(document.getElementById("grade3").value);
    
    
    
    var numberArray = [];
    numberArray.push(grade1, grade2, grade3);
    
    
    var grades = [];
    let score;
    for (i=0; i < numberArray.length; i++) {
      if (numberArray[i] >= 101){
        return alert("Too high");
      } 

    else if (numberArray[i] >= 90)
        grades.push("A");

   else if (numberArray[i] >= 80)
    grades.push("B");

   else if (numberArray[i] >= 70)
    grades.push("C");

   else if (numberArray[i] >= 60)
    grades.push("D");

    else
    grades.push("F");

    }


    
    


    var avg = ((grade1 + grade2 + grade3) / 3);
    document.getElementById("displayGrade1").innerHTML =  grades[0];
    document.getElementById("displayGrade2").innerHTML =  grades[1];
    document.getElementById("displayGrade3").innerHTML =  grades[2];

    
document.getElementById("average").innerHTML = avg;

    }

