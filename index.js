// sort seat based on cgpa
// 50 seats each subject
//Assign electives to each student
//Create an excel sheet of those electives

let parser = require('simple-excel-to-json');
let doc = parser.parseXls2Json('./Assignment.xlsx')[0]; 
const json2xls=require("json2xls");
const fs= require("fs");

doc.sort(function(a,b){
    return  b.CGPA - a.CGPA;
})
let fwt=0;
let uiux=0;
let its=0;
let erp=0;
console.log(doc)



const ElectiveDocument=doc.map((student) => {
    if(student.OPTION_1 =="Fundamentals of Web Technologies" && fwt<50){
            student.ELECTIVES="Fundamentals of Web Technologies";
            fwt+=1;
    }
    else if(student.OPTION_1 =="User Interface/User Experience (UI/UX) Design" && uiux<50){
        student.ELECTIVES=  "User Interface/User Experience (UI/UX) Design";
        uiux+=1;
    }
    else if(student.OPTION_1 =="Internet, Technology and Society" && its<50){
        student.ELECTIVES=  "Internet, Technology and Society";
        its+=1;
    }
    else if(student.OPTION_1 =="Enterprise Resource Planning" && erp<50){
        student.ELECTIVES=  "Enterprise Resource Planning";
        erp+=1;
    }
    else if(student.OPTION_2 =="Fundamentals of Web Technologies" && fwt<50){
        student.ELECTIVES="Fundamentals of Web Technologies";
        fwt+=1;
    }
    else if(student.OPTION_2 =="User Interface/User Experience (UI/UX) Design" && uiux<50){
        student.ELECTIVES=  "User Interface/User Experience (UI/UX) Design";
        uiux+=1;
    }
    else if(student.OPTION_2 =="Internet, Technology and Society" && its<50){
        student.ELECTIVES=  "Internet, Technology and Society";
        its+=1;
    }
    else if(student.OPTION_2 =="Enterprise Resource Planning" && erp<50){
        student.ELECTIVES=  "Enterprise Resource Planning";
        erp+=1;
    }
    else if(student.OPTION_3 =="Fundamentals of Web Technologies" && fwt<50){
        student.ELECTIVES="Fundamentals of Web Technologies";
        fwt+=1;
    }
    else if(student.OPTION_3 =="User Interface/User Experience (UI/UX) Design" && uiux<50){
        student.ELECTIVES=  "User Interface/User Experience (UI/UX) Design";
        uiux+=1;
    }
    else if(student.OPTION_3 =="Internet, Technology and Society" && its<50){
        student.ELECTIVES=  "Internet, Technology and Society";
        its+=1;
    }
    else if(student.OPTION_3 =="Enterprise Resource Planning" && erp<50){
        student.ELECTIVES=  "Enterprise Resource Planning";
        erp+=1;
    }
    else if(student.OPTION_4 =="Fundamentals of Web Technologies" && fwt<50){
        student.ELECTIVES="Fundamentals of Web Technologies";
        fwt+=1;
    }
    else if(student.OPTION_4 =="User Interface/User Experience (UI/UX) Design" && uiux<50){
        student.ELECTIVES=  "User Interface/User Experience (UI/UX) Design";
        uiux+=1;
    }
    else if(student.OPTION_4 =="Internet, Technology and Society" && its<50){
        student.ELECTIVES=  "Internet, Technology and Society";
        its+=1;
    }
    else if(student.OPTION_4 =="Enterprise Resource Planning" && erp<50){
        student.ELECTIVES=  "Enterprise Resource Planning";
        erp+=1;
    }
    else{
        student.ELECTIVE="Unavailable"
    }
    return student;
})
console.log(ElectiveDocument)
let excelDocument = json2xls(ElectiveDocument);
fs.writeFileSync("Electives.xlsx", excelDocument, "binary")

