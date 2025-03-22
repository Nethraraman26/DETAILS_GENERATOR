const button=document.getElementById("button");
const teachers=document.getElementById("teachers");
const details=document.getElementById("details");
let count=0;

button.onclick =() =>{
    axios.get('https://www.freetestapi.com/api/v1/teachers')
    .then(function(response){
        console.log(response);
        button.textContent="Next";
        details.textContent="";
        console.log(response.data[count].name);
        teachers.textContent=response.data[count].name;
        setTimeout(function(){
            details.textContent=response.data[count].subjects;
        },1000);
        count++;
    })
    .catch(function(error){
        console.log(error);
    })
};

