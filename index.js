
function student(n,c,u,i,b) {
   this.name=n;
   this.course=c;
   this.unit=u;
   this.img=i;
   this.batch = `ft-Web${b}`;
}

function storeData(e) {
event.preventDefault();

let form = document.getElementById("studentData");

let name = form.name.value;
let course = form.course.value;
let unit = form.unit.value;
let img = form.img.value;
let batch = form.batch.value; 

let s1 = new student(name, course,unit, img, batch);

let data = JSON.parse(localStorage.getItem("students")) || [];

data.push(s1);

localStorage.setItem("students",JSON.stringify(data));

console.log(s1);
}

function calculate(){

    let data = JSON.parse(localStorage.getItem("students")) || [];
    let obj = {};

    for(let i = 0; i < data.length; i++)
    {
       if(!obj[data[i].batch]){
           obj[data[i].batch]=1;
       }
    }

    for(let i = 0; i < data.length; i++)
    {
        obj[data[i].batch]++
    }
   console.log(obj);
}
calculate();