let input  =document.getElementById("taskdata");
let buttom =document.getElementById("addtask");
let div =document.getElementById("notask");
let taskes =document.getElementById('taskes')
let addTask=function(){

  let task = taskdata.value
  if (task.length ==0 ||task.length <2 || task.length >30 ){
    alert ("pleas inter Real Data ");
    
  } else{  notask.classList.add('none') 
    taskes.innerHTML +=` <div  class="alert alert-info" > ${task}
    <button class="btn btn-danger delet  float-right " > Delet </button>
     </div> ;        `
  
  }
  taskdata.value=""
}

 addtask.addEventListener('click',addTask);

let deletadd=(x)=> {
  if(x.target.classList.contains('delet')){
    x.target.parentElement.remove ();

  }
}

document.addEventListener( 'click' ,deletadd);