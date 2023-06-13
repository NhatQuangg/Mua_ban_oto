var control_right = document.querySelector('.control_right')
var control_left = document.querySelector('.control_left')
var proposal_message = document.querySelector('.proposal_message')
var proposal_message_body = document.querySelector('.proposal_message_body')
var proposal_message_body_items = document.querySelectorAll('.proposal_message_body_item')

var sotrangslide = document.querySelector('.proposal_message_header_right_sotrang')
var tongtrangslide = document.querySelector('.proposal_message_header_right_tongtrang')
var slideritemwidth = proposal_message_body_items[0].offsetWidth;
var sliderlength = proposal_message_body_items.length

var dorongtrang = proposal_message_body.offsetWidth


var tong = 0;


var positionX = 0

/*tong so trang */
    var i
    for(i=1;(dorongtrang*i) <= (slideritemwidth*sliderlength);i++);
     tongtrangslide.innerHTML = `${i}`

   
 
/*so trang */
control_right.addEventListener('click',function(){
        var sotrang = Math.abs(positionX - dorongtrang)/dorongtrang
       
    
        if(Math.abs(positionX - dorongtrang) > slideritemwidth*sliderlength)return
        
       
        sotrangslide.innerHTML = `${1+sotrang}/`
       
        positionX = positionX - dorongtrang
       
       proposal_message_body.style = `transform : translateX(${positionX}px) `;
       
})

control_left.addEventListener('click',function(){
         var sotrang = Math.abs(positionX - dorongtrang)/dorongtrang
         if(positionX >=0) return

         sotrangslide.innerHTML = `${sotrang-1}/`
        positionX = positionX + dorongtrang
       
        proposal_message_body.style = `transform : translateX(${positionX}px) `;
       
    
})

