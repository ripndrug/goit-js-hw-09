import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */const t={email:"",message:""},o=document.querySelector(".feedback-form"),m=o.elements.email,s=o.elements.message,l="feedback-form-state";let a;try{a=JSON.parse(localStorage.getItem(l))||{}}catch{a={}}console.log(a);m.value=a.email||"";s.value=a.message||"";o.addEventListener("input",n);o.addEventListener("submit",r);function n(e){e.target.nodeName!=="INPUT"&&e.target.nodeName!=="TEXTAREA"||(e.target.nodeName==="INPUT"&&(t.email=e.target.value),e.target.nodeName==="TEXTAREA"&&(t.message=e.target.value),localStorage.setItem(l,JSON.stringify(t)),console.log(t))}function r(e){e.preventDefault(),(m.value===""||s.value==="")&&alert("Fill please all fields"),console.log(t),localStorage.removeItem(l),t.email="",t.message="",o.reset()}
//# sourceMappingURL=2-form.js.map
