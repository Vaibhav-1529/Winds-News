const main=document.getElementById('main_id');
let data;  
async function getData(){
    const res=await fetch("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=8ea85bfbe82349b9a73206ce27fde029")
    const result = await res.json();
    data = result.articles;
    console.log("\ndata",data);
    News();
}
getData();
function News(){

    for(let i=0;i<10;i++){
        const article=document.createElement('article');
        article.innerHTML=`
        <div class="arsistimage"><img src="${data[i].urlToImage}" alt="Singer Name" size="80%"></div>
        <div class="name">Singer Name</div>
        <div class="about">hello...</div>
        `
        ;
        main.appendChild(article);
    }
}