const handleCategory = async()=>{
     const response = await fetch('https://openapi.programming-hero.com/api/news/categories')
     const data = await response.json();
     //console.log(data.data.news_category)
   
     const tabContainer = document.getElementById('tab-container');
      data.data.news_category.slice(0,3).forEach((category) =>{
        //console.log(category)
            const div = document.createElement('div');
            div.innerHTML = `
            <div class="tabs">
            <a onClick="displayNews(${category.category_id})" class="tab">${category.category_name}</a> 
          
          </div>
              
            
            `;
            tabContainer.appendChild(div);

      })

}


const displayNews = async(categoryId) =>{

    const response = await fetch(`https://openapi.programming-hero.com/api/news/category/${categoryId}`)
    const data = await response.json();
  console.log(data.data)

 const cardContainer = document.getElementById('card-container');
  

 data.data.forEach((news) =>{
    //console.log(news)
         const div = document.createElement('div');
         div.innerHTML = `

         <div class="card w-96 bg-gray-400 shadow-xl">
         <figure><img src="${news.image_url}" alt="Shoes" /></figure>
         <div class="card-body">
           <h2 class="card-title"></h2>
           <p>If a dog chews shoes whose shoes does he choose?</p>
           <div class="card-actions justify-end">
             <button class="btn btn-primary">Buy Now</button>
           </div>
         </div>
       </div>
         
         
         
         `
 })


}



displayNews();





handleCategory();