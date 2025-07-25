

const input=document.getElementById("input");
const btn=document.querySelector(".btn");
const content=document.querySelector(".content");

showdata();
const tasksArray=[];
var count=0;
btn.addEventListener("click",()=>{
    console.log("clicked");
    if(input.value==""){
        alert("please add a task");
    }
    else{
       
        const img1=document.createElement("img");
        const img2=document.createElement("img");
        const div=document.createElement("div");
        const div2=document.createElement("div");
        const p=document.createElement("p");
        img1.setAttribute("src","unchecked.png");
        img2.setAttribute("src","delete.png");
        img1.classList.add("imgstyle");
        img2.classList.add("imgstyle");
        p.innerText=input.value;
        div2.append(img1);
        div2.append(p);
        div2.classList.add("divi");
        div.append(div2);
        div.append(img2);
        div.classList.add("task");
        tasksArray.push(input.value);
        localStorage.setItem("tasksArray",JSON.stringify(tasksArray));
        count++;
        content.append(div);
        input.value="";
        img2.addEventListener("click",()=>{
            content.removeChild(div);
            showdata();
            
        });

        img1.addEventListener("click",()=>{
            if(img1.getAttribute("src")=="unchecked.png"){
                p.style.textDecoration="line-through";
                img1.setAttribute("src","checked.png");
            }
            else{
                p.style.textDecoration="none";
                img1.setAttribute("src","unchecked.png");
            }
        });
    }
})

function showdata() {
    const savedTasks = JSON.parse(localStorage.getItem("tasksArray")) || [];
    content.innerHTML = ""; // Clear old content

    savedTasks.forEach((taskText, index) => {
        const img1 = document.createElement("img");
        const img2 = document.createElement("img");
        const div = document.createElement("div");
        const div2 = document.createElement("div");
        const p = document.createElement("p");

        img1.setAttribute("src", "unchecked.png");
        img2.setAttribute("src", "delete.png");
        img1.classList.add("imgstyle");
        img2.classList.add("imgstyle");

        p.innerText = taskText;

        div2.append(img1);
        div2.append(p);
        div2.classList.add("divi");
        div.append(div2);
        div.append(img2);
        div.classList.add("task");

        content.append(div);

        img2.addEventListener("click", () => {
            content.removeChild(div);
            savedTasks.splice(index, 1); // remove from array
            localStorage.setItem("tasksArray", JSON.stringify(savedTasks));
            showdata(); // reload UI after deletion
        });

        img1.addEventListener("click", () => {
            if (img1.getAttribute("src") === "unchecked.png") {
                p.style.textDecoration = "line-through";
                img1.setAttribute("src", "checked.png");
            } else {
                p.style.textDecoration = "none";
                img1.setAttribute("src", "unchecked.png");
            }
        });
    });
}



window.addEventListener("load",showdata);


// function StoreData(){
//     const tasks=document.querySelectorAll(".task");
//     console.log(tasks,"tasks");
//     tasks.forEach((task)=>{
//         tasksArray.push(task.innerText);
//         // s
//     })
// }







// function showdata(){ 
//     for(let i=0;i<=count;i++){
//         const img1=document.createElement("img");
//         const img2=document.createElement("img");
//         const div=document.createElement("div");
//         const div2=document.createElement("div");
//         const p=document.createElement("p");
//         img1.setAttribute("src","unchecked.png");
//         img2.setAttribute("src","delete.png");
//         img1.classList.add("imgstyle");
//         img2.classList.add("imgstyle");
        
//         p.innerText=
//         div2.append(p);
//         div2.classList.add("divi");
//         div.append(div2);
//         div.append(img2);
//         div.classList.add("task");
        
//         content.append(div);
        
//         img2.addEventListener("click",()=>{
//             content.removeChild(div);
//             localStorage.removeItem(`tasksArray[${i}]`);
            
//         });

//         img1.addEventListener("click",()=>{
//             if(img1.getAttribute("src")=="unchecked.png"){
//                 p.style.textDecoration="line-through";
//                 img1.setAttribute("src","checked.png");
//             }
//             else{
//                 p.style.textDecoration="none";
//                 img1.setAttribute("src","unchecked.png");
//             }
//         });
         
//     }
   
// }
// // localStorage.clear();
