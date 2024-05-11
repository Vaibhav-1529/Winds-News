const main=document.getElementById('main_id');
let data;
async function getData(){
    const res=await fetch("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=8ea85bfbe82349b9a73206ce27fde029")
    const result=await res.json();
    data=result.article;
    console.log("\n :data:",data)

    News();
}
function News(){

    for(let i=0;i<10;i++){
        const article=document.createElement('article');
        article.innerHTML=`
        <div class="arsistimage"><img src="${data[i].link}" alt="Singer Name"></div>
        <div class="name">Singer Name</div>
        <div class="about">hello...</div>
        `
        ;
        main.appendChild(article);
    }
}
// News();