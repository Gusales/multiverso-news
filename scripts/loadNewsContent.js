import { news } from "./news.js";

const newsQuery = new URLSearchParams(window.location.search)
const newsRef = Object.fromEntries(newsQuery.entries())

const [newsContent] = news.filter(item => item.id == newsRef.ref)
console.log(newsContent)

const newsTitleInDocument = document.getElementById('news-title')
newsTitleInDocument.innerHTML = newsContent.title

const newsCoverInDocument = document.getElementById('news-cover')
newsCoverInDocument.src = '.' + newsContent.image_url.uri

const newsContentInDocument = document.getElementById('news-content')
newsContentInDocument.innerHTML = newsContent.content