const main1=document.getElementById('main_id1');
const main2=document.getElementById('main_id2');
const main3=document.getElementById('main_id3');
const main4 = document.getElementById('main_id4');
const main5 = document.getElementById('main_id5');
let data1;  
let data2;  
let data3;  
let data4;
let data5;

async function getData1(){
    const res1=await fetch("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=8ea85bfbe82349b9a73206ce27fde029")
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
        <div class="arsistimage"><img src="${data1[i].urlToImage}" alt="News Image" ></div>
        <div class="name"><a href="${data1[i].url}" target="_blank">${data1[i].title}</a></div>
        <div data-modal-target="#modal" class="about"> <i class="fa-solid fa-up-right-and-down-left-from-center"></i></div>
        <div class="modal" id="modal">
            <div class="modal-header">
            <div class="title">Example Modal</div>
            <button data-close-button class="close-button">&times;</button>
            </div>
            <div class="modal-body">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quod alias ut illo doloremque eum ipsum obcaecati distinctio debitis reiciendis quae quia soluta totam doloribus quos nesciunt necessitatibus, consectetur quisquam accusamus ex, dolorum, dicta vel? Nostrum voluptatem totam, molestiae rem at ad autem dolor ex aperiam. Amet assumenda eos architecto, dolor placeat deserunt voluptatibus tenetur sint officiis perferendis atque! Voluptatem maxime eius eum dolorem dolor exercitationem quis iusto totam! Repudiandae nobis nesciunt sequi iure! Eligendi, eius libero. Ex, repellat sapiente!
            </div>
        </div>
        <div id="overlay"></div>
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
        <div class="arsistimage"><img src="${data2[j].urlToImage}" alt="News Image" ></div>
        <div class="name"><a href="${data2[j].url}" target="_blank">${data2[j].title}</a></div>
        <div class="about"></div> `;
        main2.appendChild(article2);
    }
}
async function getData3(){
    const res3=await fetch("https://newsapi.org/v2/everything?domains=wsj.com&apiKey=8ea85bfbe82349b9a73206ce27fde029")
    const result3=await res3.json();
    data3=result3.articles;
    console.log("Third API data\n");
    console.log("\ndata",result3);
    News3();
}
getData3();
function News3() {
    for (let k = 0; k < 10; k++) {
        const article3 = document.createElement('article');
        article3.innerHTML = `
            <div class="arsistimage"><img src="${data3[k].urlToImage}" alt="News Image" ></div>
            <div class="name"><a href="${data3[k].url}" target="_blank">${data3[k].title}</a></div>
            <div class="about"></div>
        `;
        main3.appendChild(article3);
    }
}
async function getData4() {
    const res4 = await fetch("https://newsapi.org/v2/everything?q=apple&from=2024-09-21&to=2024-09-21&sortBy=popularity&apiKey=8ea85bfbe82349b9a73206ce27fde029");
    const result4 = await res4.json();
    data4 = result4.articles;
    console.log("Fourth API data\n", result4);
    News4();
}
getData4();
function News4() {
    for (let l = 0; l < 10; l++) {
        const article4 = document.createElement('article');
        article4.innerHTML = `
            <div class="arsistimage"><img src="${data4[l].urlToImage}" alt="News Image" width="400px" height="140px"></div>
            <div class="name"><a href="${data4[l].url}" target="_blank">${data4[l].title}</a></div>
            <div class="about"></div>
        `;
        main4.appendChild(article4);
    }
}
async function getData5() {
    const res5 = await fetch("https://newsapi.org/v2/everything?q=tesla&from=2024-08-24&sortBy=publishedAt&apiKey=8ea85bfbe82349b9a73206ce27fde029");
    const result5 = await res5.json();
    data5 = result5.articles;
    console.log("Fifth API data (Tesla)\n", result5);
    News5();
}
function News5() {
    for (let m = 0; m < Math.min(10, data5.length); m++) {
        const article5 = document.createElement('article');
        const imageUrl = data5[m].urlToImage ? data5[m].urlToImage : 'placeholder.jpg';  // Add a fallback image
        article5.innerHTML = `
            <div class="arsistimage"><img src="${imageUrl}" alt="Tesla News Image" width="400px" height="140px"></div>
            <div class="name"><a href="${data5[m].url}" target="_blank">${data5[m].title}</a></div>
            <div class="about"></div>
        `;
        main5.appendChild(article5);
    }
}
getData5();
