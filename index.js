function add(){
    let a = parseInt(document.getElementById("val1").value);
    let b = parseInt(document.getElementById("val2").value);
    let c = a+b;
    document.getElementById("answer1").innerHTML="Addition is "+c;
}
function sub(){
    let a = parseInt(document.getElementById("val1").value);
    let b = parseInt(document.getElementById("val2").value);
    if(a<b)
    {
        let temp=a;
        a=b;
        b=temp;
    }
    let c = a-b;3
    document.getElementById("answer1").innerHTML="Subtraction is "+c;
}
function mul(){
    let a = parseInt(document.getElementById("val1").value);
    let b = parseInt(document.getElementById("val2").value);
    let c = a*b;
    document.getElementById("answer1").innerHTML="Multiplication is "+c;
}
function div(){
    let a = parseInt(document.getElementById("val1").value);
    let b = parseInt(document.getElementById("val2").value);
    let c = a/b;
    document.getElementById("answer1").innerHTML="Division is "+c;
}