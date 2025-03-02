// blog page open
document.getElementById('blog')
    .addEventListener('click', function(){
        window.location.href="blog.html"
    });

// date
window.addEventListener('load', function(){
    let date = Date();
    let newDate = date.split(" ")
    document.getElementById('date').innerHTML=`
    <p>${newDate[0]} ,</p>
    <p class="text-xl font-bold text-color">${newDate[1]} ${newDate[2]} ${newDate[3]} </p>
    `
})

// Task management operation
const taskButtons = document.querySelectorAll('.completed-btn');
let allClickBtn = [];
let taskAssigned = getIdConvatTaxt('task-assigned');
let taskNumber = getIdConvatTaxt("task-number");
for(const taskBtn of taskButtons){
    let Button = taskBtn;
    Button.addEventListener('click', function(event){
        alert("Board update Successfully")

        taskNumber = taskNumber + 1;
        taskAssigned = taskAssigned - 1;
        document.getElementById('task-number').innerText = taskNumber;
        document.getElementById('task-assigned').innerText = taskAssigned;

        let historyContainer = document.getElementById("history");
        let title = event.target.parentNode.parentNode.parentNode.querySelector("h1").innerText;
        let now = new Date();
        const hours = now.getHours();
        const minutes = now.getMinutes();
        const seconds = now.getSeconds(); 
        let hour = hours % 12 || 12;
        const ampm = hours >= 12 ? 'PM' : 'AM';

        let div  = document.createElement('div');
        div.innerHTML = `
        <p class="p-3 bg-secondary-color rounded-lg mb-3 j">You have Complete The Task ${title} at ${hour}:${minutes}:${seconds} ${ampm}</p>
        `;
        historyContainer.append(div);

        const clickBtn = event.target.setAttribute("disabled", false);
        allClickBtn.push(clickBtn);
        if(allClickBtn.length == 6){
            alert("Congrats!!! You have completed all current task");
        }
    })
}

// clear history
for(let i = 0; i<=6; i++){
    document.getElementById('history-btn')
    .addEventListener('click', function(){
        let history = document.getElementById('history');
        history.querySelector('p').remove()
    })
}

// random color
document.getElementById("theme")
    .addEventListener('click', function(){
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    })