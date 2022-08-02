import photo from "../imges/img.jpg";
import styles from "../css/User.css";

export default function user({name}){
    const li = document.createElement("li");
    li.classList.add('user');
    li.addEventListener("click",()=>{
        alert(name);
    })
    li.innerHTML =`
        ${name}
    `;
    return li;
}