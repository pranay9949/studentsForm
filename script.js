import { data } from './students.js';

let tbody=document.getElementById("insert");

for(let i=0;i<data.length;i++){
    let row=document.createElement("tr");
    let img=document.createElement("img");
    img.src=data[i].img_src;

    if(data[i].passing==true){
        data[i].passing="Pass";
    }
    else{
        data[i].passing="Failed"
    }
    let innerData=`<td>${data[i].id}</td> 
   
    <td >${data[i].first_name+" "+data[i].last_name}</td>
    <td>${data[i].gender}</td>
    <td>${data[i].class}</td>
    <td>${data[i].marks}</td>
    <td>${data[i].passing}</td>
    <td>${data[i].email}</td>
    `;
    
    row.innerHTML=innerData;
    tbody.append(row);

    
}
for(let i=0;i<data.length;i++){
    let cell=document.getElementsByTagName("td")[1+(i*7)];
    let img=document.createElement("img");
    img.src=data[i].img_src;
    img.width=30;
    img.className="img-cont"
    cell.append(img);
    cell.className="cell"
}


let input=document.getElementById("aToZ");

input.addEventListener("click",()=>{
   
    while (tbody.firstChild) {
        tbody.removeChild(tbody.firstChild);
    }

 
data.sort((a,b)=>(a.first_name+a.last_name).localeCompare(b.first_name+b.last_name));
 
 for(let i=0;i<data.length;i++){
    let c=document.createElement("tr");
 let x=`<td>${data[i].id}</td> 
 
 <td >${data[i].first_name+" "+data[i].last_name}</td>
 <td>${data[i].gender}</td>
 <td>${data[i].class}</td>
 <td>${data[i].marks}</td>
 <td>${data[i].passing}</td>
 <td>${data[i].email}</td>
 `;

   c.innerHTML=x;
   tbody.append(c);
 }
 for(let i=0;i<data.length;i++){
    let cell=document.getElementsByTagName("td")[1+(i*7)];
    let img=document.createElement("img");
    img.src=data[i].img_src;
    img.width=30;
    img.className="img-cont"
    cell.append(img);
    cell.className="cell"
}
}
);
let ztoA=document.getElementById("zToA");

ztoA.addEventListener("click",()=>{
   
    while (tbody.firstChild) {
        tbody.removeChild(tbody.firstChild);
    }

 
data.sort((a,b)=>b.first_name.localeCompare(a.first_name));
 
 for(let i=0;i<data.length;i++){
    let c=document.createElement("tr");
 let x=`<td>${data[i].id}</td> 
 
 <td >${data[i].first_name+" "+data[0].last_name}</td>
 <td>${data[i].gender}</td>
 <td>${data[i].class}</td>
 <td>${data[i].marks}</td>
 <td>${data[i].passing}</td>
 <td>${data[i].email}</td>
 `;

   c.innerHTML=x;
   tbody.append(c);
 }
 for(let i=0;i<data.length;i++){
    let cell=document.getElementsByTagName("td")[1+(i*7)];
    let img=document.createElement("img");
    img.src=data[i].img_src;
    img.width=30;
    img.className="img-cont"
    cell.append(img);
    cell.className="cell"
}
}
);
let marksort=document.getElementById("Marks");

marksort.addEventListener("click",()=>{
   
    while (tbody.firstChild) {
        tbody.removeChild(tbody.firstChild);
    }

 
data.sort((a,b)=>a.marks-(b.marks));
 
 for(let i=0;i<data.length;i++){
    let c=document.createElement("tr");
 let x=`<td>${data[i].id}</td> 
 
 <td >${data[i].first_name+" "+data[i].last_name}</td>
 <td>${data[i].gender}</td>
 <td>${data[i].class}</td>
 <td>${data[i].marks}</td>
 <td>${data[i].passing}</td>
 <td>${data[i].email}</td>
 `;

   c.innerHTML=x;
   tbody.append(c);
 }
 for(let i=0;i<data.length;i++){
    let cell=document.getElementsByTagName("td")[1+(i*7)];
    let img=document.createElement("img");
    img.src=data[i].img_src;
    img.width=30;
    img.className="img-cont"
    cell.append(img);
    cell.className="cell"
}
}
);

let passSort=document.getElementById("pass");

passSort.addEventListener("click",()=>{
   
    while (tbody.firstChild) {
        tbody.removeChild(tbody.firstChild);
    }

    

    data.sort((a,b)=>(a.first_name+a.last_name).localeCompare(b.first_name+b.last_name));
 for(let i=0;i<data.length;i++){
    if(data[i].passing==="Pass"){
    let c=document.createElement("tr");
 let x=`<td>${data[i].id}</td> 
 
 <td >${data[i].first_name+" "+data[i].last_name}</td>
 <td>${data[i].gender}</td>
 <td>${data[i].class}</td>
 <td>${data[i].marks}</td>
 <td>${data[i].passing}</td>
 <td>${data[i].email}</td>
 `;
    
   c.innerHTML=x;
   tbody.append(c);

 }
}
 for(let i=0;i<data.length;i++){
    let cell=document.getElementsByTagName("td")[1+(i*7)];
    let img=document.createElement("img");
    img.src=data[i].img_src;
    img.width=30;
    img.className="img-cont"
    cell.append(img);
    cell.className="cell"
}
}
);

let classcheck=document.getElementById("classSort");

classcheck.addEventListener("click",()=>{
   
    while (tbody.firstChild) {
        tbody.removeChild(tbody.firstChild);
    }


data.sort((a,b)=>a.class-b.class);
 
 for(let i=0;i<data.length;i++){
    let c=document.createElement("tr");
 let x=`<td>${data[i].id}</td> 
 
 <td >${data[i].first_name+" "+data[i].last_name}</td>
 <td>${data[i].gender}</td>
 <td>${data[i].class}</td>
 <td>${data[i].marks}</td>
 <td>${data[i].passing}</td>
 <td>${data[i].email}</td>
 `;

   c.innerHTML=x;
   tbody.append(c);
 }
 for(let i=0;i<data.length;i++){
    let cell=document.getElementsByTagName("td")[1+(i*7)];
    let img=document.createElement("img");
    img.src=data[i].img_src;
    img.width=30;
    img.className="img-cont"
    cell.append(img);
    cell.className="cell"
}
}
);
let gendercheck=document.getElementById("gender");

gendercheck.addEventListener("click",()=>{
   
    while (tbody.firstChild) {
        tbody.removeChild(tbody.firstChild);
    }


data.sort((a,b)=>a.gender.localeCompare(b.gender));
 
 for(let i=0;i<data.length;i++){
    let c=document.createElement("tr");
 let x=`<td>${data[i].id}</td> 
 
 <td >${data[i].first_name+" "+data[i].last_name}</td>
 <td>${data[i].gender}</td>
 <td>${data[i].class}</td>
 <td>${data[i].marks}</td>
 <td>${data[i].passing}</td>
 <td>${data[i].email}</td>
 `;

   c.innerHTML=x;
   tbody.append(c);
 }
 for(let i=0;i<data.length;i++){
    let cell=document.getElementsByTagName("td")[1+(i*7)];
    let img=document.createElement("img");
    img.src=data[i].img_src;
    img.width=30;
    img.className="img-cont"
    cell.append(img);
    cell.className="cell"
}
}
);







let myvalue=document.getElementById("myInput");
let usercheck=document.getElementById("removeElements")
usercheck.addEventListener("click",()=>{
   
    while (tbody.firstChild) {
        tbody.removeChild(tbody.firstChild);
    }

   let user=myvalue.value.toLowerCase();

   
 for(let i=0;i<data.length;i++){
    let first_value=data[i].first_name.toLowerCase();
    let second_value=data[i].last_name.toLowerCase();
    let full_name=data[i].first_name.toLowerCase()+data[i].last_name.toLowerCase();
    let email_value=data[i].email.toLowerCase()

    if(user==first_value || user==second_value || user==full_name || user==email_value){
    let c=document.createElement("tr");
 let x=`<td>${data[i].id}</td> 
 
 <td >${data[i].first_name+" "+data[i].last_name}</td>
 <td>${data[i].gender}</td>
 <td>${data[i].class}</td>
 <td>${data[i].marks}</td>
 <td>${data[i].passing}</td>
 <td>${data[i].email}</td>
 `;

   c.innerHTML=x;
   tbody.append(c);
    }
    
 }
 for(let i=0;i<data.length;i++){
    let cell=document.getElementsByTagName("td")[1+(i*7)];
    let img=document.createElement("img");
    img.src=data[i].img_src;
    img.width=30;
    img.className="img-cont"
    cell.append(img);
    cell.className="cell"
}
}
);