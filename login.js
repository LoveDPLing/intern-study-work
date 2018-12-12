window.onload=function(){
    var img=document.getElementById("img");
    var next=document.getElementById("next");
    var prev=document.getElementById("prev");

    var imgArry=["img/main1.jpg","img/main2.png","img/main3.png"];
    var index=0;
    next.onclick=function(){
        index++;
        if(index==imgArry.length){
            index=0;
        }
        img.src=imgArry[index];
    }

    prev.onclick=function(){
        index--;
        if(index<0){
            index=imgArry.length-1;
        }
        img.src=imgArry[index];
    }

    // var inputemail=document.getElementById("inputemail");
    // var inputpassword=document.getElementById("inputpassword");

    // var btn1=document.getElementById("btn1");
    // var btn2=document.getElementById("btn2");

    // btn1.onclick=function(){
    //     if()

    // }

}
