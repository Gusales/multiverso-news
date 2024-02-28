import { news } from "./news.js";

let count = 0
const contentNews = document.getElementById('content-news')
news.map(item => {
  count += 1
  contentNews.innerHTML += `
  <article class="card" style="width: 18rem;" data-aos="fade-up" data-aos-delay="${count > 4 ? '300' : '400'}">
    <img src="${item.image_url.uri}" loading="lazy" class="card-img-top" alt="${item.image_url.description}">
    <div class="card-body">
      <h3 class="card-title">${item.title}</h3>
      <a href="./pages/news.html?ref=${item.id}" class="btn btn-link">Veja mais</a>
    </div>
  </article>
  `
})