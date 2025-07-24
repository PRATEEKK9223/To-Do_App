

const input=document.getElementById("input");
const btn=document.querySelector(".btn");
const content=document.querySelector(".content");

console.log(input,btn,content);

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
        content.append(div);
        input.value="";
        img2.addEventListener("click",()=>{
            content.removeChild(div);
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