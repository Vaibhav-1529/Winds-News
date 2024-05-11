const main1=document.getElementById('main_id1');
const main2=document.getElementById('main_id2');
let data1;  
let data2;  

async function getData1(){
    const res1=await fetch("https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=8ea85bfbe82349b9a73206ce27fde029")
    const result1 = await res1.json();
    data1 = result1.articles;
    console.log("first API data\n");
    console.log("\ndata",result1);
    News1();
}
getData1();
function News1(){

    for(let i=0;i<20;i++){
        const article=document.createElement('article');
        article.innerHTML=`
        <div class="arsistimage"><img src="${data1[i].urlToImage}" alt="News Image" width="400px" height="140px"></div>
        <div class="name"><a href="${data1[i].url}" target="_blank">${data1[i].title}</a></div>
        <div class="about"></div>
        ` ;
        main1.appendChild(article);
    }
}
async function getData2(){
    const res2=await fetch("https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=8ea85bfbe82349b9a73206ce27fde029")
    const result2=await res2.json();
    data2=result2.articles;
    console.log("Second API data\n");
    console.log("\ndata",result2);
    News2();
}
getData2();
function News2(){
    for(let j=0;j<10;j++){
        const article2=document.createElement('article');
        article2.innerHTML=`
        <div class="arsistimage"><img src="${data2[j].urlToImage}" alt="News Image" width="400px" height="140px"></div>
        <div class="name"><a href="${data2[j].url}" target="_blank">${data2[j].title}</a></div>
        <div class="about"></div> `;
        main2.appendChild(article2);
    }
}