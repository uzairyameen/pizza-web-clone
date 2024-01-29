let x = document.querySelector("p");

let btn = document.getElementById("btn");

var check =0;

btn.addEventListener('click',function(){
    if(check==0){
    x.innerHTML = "0301-1070498"

    check = 1;
    }else{
        x.innerHTML = "CONTACT NUMBER <br><br> RANA UZAIR"

        check =0;
    }
});


let y = document.getElementById("text");

let para = document.getElementById("para");

 var find =0;

para.addEventListener('click',function(){
    if(find==0){
    y.innerHTML = "0310-2467691"
    find =1;
    }else{
        y.innerHTML = "CONTACT NUMBER <br><br> WASEEM AKRAM"
        find =0;
    }
});

 let z = document.getElementById("why");

 let call = document.getElementById("call");
 let ok =0;

 call.addEventListener('click',function(){
    if(ok==0){
    z.innerHTML = "0305-1816148"
    ok=1;
    }else{
        z.innerHTML = "CONTACT NUMBER <br><br> ZAFAR IQBAL"
        ok=0; 
    }
 })