const panels=document.querySelectorAll('.panel')
//using forEach to loop ove each element
panels.forEach((panel)=>{
    //using addEventListener to code whatever happens when you click on each picture
    panel.addEventListener('click', ()=>{
        removeActiveClasses()
        panel.classList.add('active')
    })
})

function removeActiveClasses(){
    panels.forEach((panel)=>{
        panel.classList.remove('active')
    })
}