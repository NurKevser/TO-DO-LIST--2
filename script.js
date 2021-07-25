document.querySelector("#push").onclick = function () {
  if (document.querySelector("#newtask input").value.length == 0) {
    alert("Please Enter a Task");
  } else {
    document.querySelector("#tasks").innerHTML += `<div class="task">
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
    for (let i = 0; i < current_tasks.length; i++) {
      current_tasks[i].onclick = function () {
        this.parentNode.remove(); //deleting a task
      };
    }
    // const complete = document.getElementsByClassName("far fa-circle");
    // console.log(complete);

    const tasks = document.querySelectorAll(".task");
    for (let i = 0; i < tasks.length; i++) {
      tasks[i].onclick = function () {
        this.classList.toggle("completed");
        // console.log('TASK ELEMENT: ', tasks[i]);
        // <i class="fas fa-check-circle"></i> dolu check butonu
        const checkButtonClassList = this.childNodes[1].childNodes[1].classList; // burada check ilgili task altındaki check butonunu yakalıyoruz
        if (this.classList.contains('completed')) {  // ilgili task elementinde completed class'ını kontrol edip ona göre
          checkButtonClassList.remove('far');        // altındaki check butonunun class larını değiştiyoruz
          checkButtonClassList.remove('fa-circle');  // class ları değiştirirken tek tek yapmak gerekiyor
          checkButtonClassList.add('fas');           // bu nedenle ayrı ayrı satırlarda yapıyoruz
          checkButtonClassList.add('fa-check-circle');
        } else {
          checkButtonClassList.remove('fas');
          checkButtonClassList.remove('fa-check-circle');
          checkButtonClassList.add('far');
          checkButtonClassList.add('fa-circle');
        }
        // console.log('TASK CIRCLE ELEMENT: ', tasks[i].childNodes[1].childNodes[1]);
      };
    }
    document.querySelector("#newtask input").value = "";
  }
};