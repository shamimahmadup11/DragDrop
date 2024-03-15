const items=document.getElementsByClassName('item');
const rightBox=document.getElementById('right');
const leftBox=document.getElementById('left');

for(ele of items) {
    ele.addEventListener('dragstart',(e)=>{
        let selected=e.target;
        rightBox.addEventListener("dragover",(e)=>{
            e.preventDefault();
          
        });
        rightBox.addEventListener("drop",(e)=>{
            rightBox.appendChild(selected);
        
            selected=null;
           

    });
  

    leftBox.addEventListener("dragover",(e)=>{
        e.preventDefault();
    });
    leftBox.addEventListener("drop",(e)=>{
        leftBox.appendChild(selected);
        selected=null;
});

});
}
