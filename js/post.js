   document.getElementById("saveBtn").style.display="none";

var para = document.getElementById("blogBody");
function edit(){
    para.contentEditable="true";
    
    document.getElementById("editBtn").style.display="none";
    document.getElementById("saveBtn").style.display="block";
}
function save(){
    para.contentEditable="false";
    document.getElementById("editBtn").style.display="block";
    document.getElementById("saveBtn").style.display="none";
    
}
var like = document.getElementById("likeBtn");
    document.getElementById("liked").style.display="none";
like.onclick =function(){
    document.getElementById("first").style.display="none";
    document.getElementById("liked").style.display="block";
    document.getElementById("likeBtn").innerHTML="<i class='fa fa-thumbs-up'></i>"+" Liked!";
}
var comment = document.getElementById("commentBtn");
comment.onclick = function(){
    var commentdiv = document.getElementById("cmmtDiv");
    var commentText = document.getElementById("comment").value;
    var p = document.createElement("p");
    p.setAttribute("class","cmmtPara");
    var pa = document.createTextNode(commentText);
    p.appendChild(pa);
    commentdiv.appendChild(p);
}