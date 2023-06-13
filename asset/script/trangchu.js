/*car-sales-sale*/
/*chon hang xe*/
var searchs = document.querySelectorAll('.car__sales-sale-body-search');
 var salesearchs = document.querySelectorAll('.car__sales-sale-body-search-icon');
 var searchicons = document.querySelectorAll('.car__sales-sale-body-input');
 var salebodyicons = document.querySelectorAll('.car__sales-sale-body-icon');

 var body = document.getElementById('app')

 var car_companys =document.querySelectorAll('.car_company-list');
   
 for(var salebodyicon of salebodyicons){
   salebodyicon.onclick = function(){
       var iscar_company_list = this.nextElementSibling && this.nextElementSibling.classList.contains('car_company-list');
           if(iscar_company_list){
               this.previousElementSibling.previousElementSibling.style.display ='block';
               this.nextElementSibling.style.display ='block';
           }
   }
   
}

for(var searchicon of searchicons){
   searchicon.onclick = function(){
               //nhay 2 lan
               this.previousElementSibling.style.display ='block';
               this.nextElementSibling.nextElementSibling.style.display ='block';
           
   }
   
}


for(var search of searchs){
   search.onclick = function(event){
               
               event.stopPropagation();
           
   }
   
}
        
body.addEventListener('click',function(){
   for(var car_company of car_companys){
       car_company.style.display = 'none';
   }
   for(var salesearch of salesearchs){
      salesearch.style.display = 'none'
   }

}) 


   
   
   
   



/*hoat dong mua xe */

var btn_sale_active = document.querySelector('.active-sale-car-btn')
var btn_buy_active = document.querySelector('.active-buy-car-btn')
var buy_active = document.querySelector('.car__sales-buy-active-buy')
var sale_active = document.querySelector('.car__sales-sale-active-buy')
btn_buy_active.addEventListener('click',function(){
   btn_buy_active.classList.add('active');
   btn_sale_active.classList.remove('active');
   buy_active.style.display = 'block';
   sale_active.style.display ='none';
})
btn_sale_active.addEventListener('click',function(){
   buy_active.style.display = 'none';
   sale_active.style.display ='block';
   btn_buy_active.classList.remove('active');
   btn_sale_active.classList.add('active');
})

