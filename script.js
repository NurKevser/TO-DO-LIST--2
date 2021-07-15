
document.querySelector("#push").onclick = function () {
  if (document.querySelector("#newtask input").value.length == 0) {
    alert("Please Enter a Task");
  } else {
    document.querySelector("#tasks").innerHTML += 
    `<div class="task">
    <button class = "check">
            <i id="checked" class="far fa-circle"></i>
            </button> 
        <span id = "taskname">
            ${document.querySelector("#newtask input").value}
        </span>
        <button class = "delete">
            <i class="far fa-trash-alt"></i>
        </button>
      </div>`; // add a new task

      const current_tasks = document.querySelectorAll(".delete");
      for(let i=0; i<current_tasks.length; i++){
          current_tasks[i].onclick = function(){
              this.parentNode.remove(); //deleting a task
          }
      }
      const complete = document.getElementsByClassName("far fa-circle");
      console.log(complete);
      
      const tasks = document.querySelectorAll(".task");
      for(let i=0; i<tasks.length; i++){
        tasks[i].onclick = function(){
            this.classList.toggle('completed')  
            // <i class="fas fa-check-circle"></i> dolu check butonu

          }
      }
      document.querySelector('#newtask input').value = "";
  }
};



                