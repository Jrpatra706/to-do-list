const arr=[];

function showListOnHtml(){
    let todoListHTML='';
    arr.forEach((todo,i) =>{
        // const todo = arr[i];
        const name = todo.name;
        const dueDate =todo.dueDate;
        const html = `
            <p class="todo-txt">
                ${name}
            </p>
            <p class="todo-txt" >
                ${dueDate}
            </p> 
            <button onclick="
                arr.splice(${i}, 1);
                showListOnHtml();" class="delete-btn btn-delete">
                Delete
            </button>`;
        todoListHTML += html;
    });
    document.querySelector('.todo').innerHTML = todoListHTML;
}
function addToList(){
    const val = document.querySelector('.todo-name');
    const dueDate = document.querySelector('.todo-date');
    arr.push({
        name :val.value,
        dueDate:dueDate.value});
    val.value='';
    showListOnHtml();
}