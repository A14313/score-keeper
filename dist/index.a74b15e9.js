const e=document.querySelector("#playerOneButton"),t=document.querySelector("#playerTwoButton"),s=document.querySelector("#player-one-score"),r=document.querySelector("#player-two-score"),i=document.querySelector("#resetButton"),n=document.querySelector("#maxScore"),l=document.querySelector("#desc"),a=document.querySelector("#selection-container");let o=0;e.addEventListener("click",(()=>{o++,s.innerText=o,n.setAttribute("disabled",""),a.classList.add("disabled"),o===parseInt(n.value)&&(l.innerText="Player one wins",e.setAttribute("disabled",""),t.setAttribute("disabled",""),s.classList.add("winner"),r.classList.add("loser"))}));let d=0;t.addEventListener("click",(()=>{d++,r.innerText=d,n.setAttribute("disabled",""),a.classList.add("disabled"),d===parseInt(n.value)&&(l.innerText="Player Two wins",t.setAttribute("disabled",""),e.setAttribute("disabled",""),r.classList.add("winner"),s.classList.add("loser"))})),i.addEventListener("click",(()=>{o=0,d=0,s.innerText=0,r.innerText=0,e.removeAttribute("disabled"),t.removeAttribute("disabled"),n.removeAttribute("disabled"),a.classList.remove("disabled"),s.classList.contains("winner")&&s.classList.remove("winner"),s.classList.contains("loser")&&s.classList.remove("loser"),r.classList.contains("winner")&&r.classList.remove("winner"),r.classList.contains("loser")&&r.classList.remove("loser"),l.innerText="Use the buttons below to keep score."}));
//# sourceMappingURL=index.a74b15e9.js.map
