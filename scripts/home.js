import { news } from "./news.js";

let delay = 0
const contentNews = document.getElementById('content-news')
news.map(item => {
  delay += 200
  contentNews.innerHTML += `
  <article class="card" style="width: 18rem;" data-aos="fade-up" data-aos-delay="${delay}">
    <img src="${item.image_url.uri}" class="card-img-top" alt="${item.image_url.description}">
    <div class="card-body">
      <h3 class="card-title">${item.title}</h3>
      <a href="#" class="btn btn-link">Veja mais</a>
    </div>
  </article>
  `
})