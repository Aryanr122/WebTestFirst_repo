function bytagnames(){

    let tagnames = document.getElementsByTagName("p");
    document.getElementById("demo").innerHTML = tagnames[0].innerHTML;

}

function change2(){

    document.getElementById("p2").innerHTML = document.getElementById("p1").firstChild.nodeValue;
    
}

function changestyle(p){

    document.getElementById(p).style.fontStyle = "italic";
}


//jquery intro

//$(document).ready(function(){
//alert('Document loaded');
//});

// we can reduce above code as below
$(alert('Document loaded'));


$(document).ready(function(){
// $("#p1").css("color", "brown");
$("[class='size']").css({"color":"red"});

$("#p2").hover(function(){

    //alert("you have hovered");
});

$("#btn2").hide();
$("#cb").change (function(){
    if(this.checked){
 $("#btn2").show(); 
    }
    else{
        $("#btn2").hide();
    }
});
});



// setting Bootstrap...



