
document.querySelector("#push").onclick = function () {
  if (document.querySelector("#newtask input").value.length == 0) {
    alert("Please Enter a Task");
  } else {
    document.querySelector("#tasks").innerHTML += 
    `<div class="task">
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


      const checked = document.getElementById("checked")
      const tasks = document.querySelectorAll(".task");
      for(let i=0; i<tasks.length; i++){
        tasks[i].onclick = function(){
            this.classList.toggle('completed')
            // checked.setAttribute("class","fas fa-check-circle")   
            {/* <button class = "check">
            <i id = checked class="far fa-circle"></i>
            </button>  */}              
        }
      }
      document.querySelector('#newtask input').value = "";
  }
};



                