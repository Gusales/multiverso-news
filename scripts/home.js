import { news, handleCreateNewNews } from "./news.js";

const formModalContainer = document.getElementById('create-news-modal')
const formModal = new bootstrap.Modal(formModalContainer)

document.getElementById('open-form-modal').addEventListener('click', () => {
  formModal.show()
})

const form = document.querySelector('form')

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

function validateImageUrl(imageUrl) {
  let url;
  
  try {
    url = new URL(imageUrl);
  } catch {
    return false;  
  }

  return url.protocol === "http:" || url.protocol === "https:";
}

form.addEventListener('submit', (e) => {
  e.preventDefault()

  const newsTitle = document.getElementById('news-title')
  const newsImageUrl = document.getElementById('image-url')
  const newsImageAlt = document.getElementById('image_alt')
  const newsContent = document.getElementById('news-content')

  if (validateImageUrl(newsImageUrl.value) === true) {
    newsImageUrl.classList.remove("is-invalid")
    document.getElementById("error-message").style.display = "none"
    const { id } = handleCreateNewNews({
      content: newsContent.value,
      image_alt: newsImageAlt.value,
      image_url: newsImageUrl.value,
      title: newsTitle.value,
    })
  
    const delay = 800
  
    contentNews.innerHTML += `
    <article class="card" style="width: 18rem;" data-aos="fade-up" data-aos-delay="${delay}">
      <img src="${newsImageUrl.value}" loading="lazy" class="card-img-top" alt="${newsImageAlt.value}">
      <main class="card-body">
        <h3 class="card-title">${newsTitle.value}</h3>
        <a href="./pages/news.html?ref=${id}" class="btn btn-link">Veja mais</a>
      </main>
    </article>
    `

    newsContent.value = "",
    newsImageAlt.value = "",
    newsImageUrl.value = "",
    newsTitle.value = "",
  
    formModal.hide()
  
    const createdNewsToast = document.getElementById('createdNewsToast')
    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(createdNewsToast)
  
    setTimeout(() => {
      toastBootstrap.show()
    }, delay);
  } else {
    console.error("URL inválida!")
    newsImageUrl.classList.add("is-invalid")
    document.getElementById("error-message").style.display = "block"
  }


})