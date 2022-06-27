const ol=document.querySelector('ol')
const task=document.getElementById('task')
const description=document.getElementById('description')
const submit=document.getElementById('submit').setAttribute('onClick','postTask()')

function postTask(){

    const d={
        name:task.value,
        description:description.value 

    }
    fetch('/task',{
        method:'POST',
        headers:{
            'Content-Type':'application/json',

        },
        body: JSON.stringify(d),
    }).then(response=>response.json())
    .then((data)=>{
        if(data.Success == true){
            const li=document.createElement('li')
            li.appendChild(document.createTextNode(x.name.toString()))
            const ul=document.createElement('ul')
            const li2=document.createElement('li')
            li2.appendChild(document.createTextNode(d.description.toString()))
            ul.appendChild(li2)
            li.appendChild(ul)
            ol.appendChild(li)
        
        }
    })
}


function getAllTasks(){
    fetch('/tasks').then((res)=>res.json()).then((data)=>{
         data.forEach((x)=>{
            const li=document.createElement('li')
            li.appendChild(document.createTextNode(x.name.toString()))
            const ul=document.createElement('ul')
            const li2=document.createElement('li')
            li2.appendChild(document.createTextNode(x.description.toString()))
            ul.appendChild(li2)
            li.appendChild(ul)
            ol.appendChild(li)
            

            
            
         })
           
    })
}

getAllTasks()