 const forms=document.querySelector("form");
 forms.addEventListener("submit", (e)=>{
    e.preventDefault();
  
const errorDisplay = (tag, message, valid) =>{
        const container = document.querySelector("." + tag + "-container");
        const span = document.querySelector("." + tag + "-container > span");
       
        if (!valid) {
            container.classList.add("error");
            span.classList.add("circle")
            span.textContent=message;
         
        } else {
            span.textContent=message;
            container.classList.remove('error');
        }
    }

    const emailChecker = (value) =>{
        if (!value.match(/^[\w_-]+@[\w-]+\.[a-z]{2,4}$/i))  
        {
            errorDisplay("emailAddress", "Looks like this is not an email");
            email=null;
        } 
        else 
        {
            errorDisplay("emailAddress", " ", true);
            email=value;
        }
    };

    const inputs = document.querySelectorAll('input[type="text"], input[type="password"]');
       
        inputs.forEach((input)=>{
            if (!input.value) {
               errorDisplay( input.attributes.id.nodeValue, `${input.attributes.placeholder.nodeValue}  cannot be empty`); 
               input.attributes.placeholder.nodeValue=""
            }
            else if (input) {
                emailChecker(input.value);
            }
            else{
                console.log( input.attributes.placeholder.nodeValue);
                
            }
      });

});
