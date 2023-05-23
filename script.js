const apiKey = '387b7263eb634422a96c04c482b13e6b';
const url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=${apiKey}`;

fetch(url)
  .then(response => response.json())
  .then(data => {
    // Parse the data and display the articles
    const newsContainer = document.getElementById('news-container');
    data.articles.forEach(article => {
      const articleDiv = document.createElement('div');
      articleDiv.className = 'news-article';
      articleDiv.innerHTML = `
        <h2 class="news-title">${article.title}</h2>
        <p class="news-author">${article.author}</p>
        <p class="news-description">${article.description}</p>
      `;
      newsContainer.appendChild(articleDiv);
    });
  })
  .catch(error => {
    console.error('Error retrieving news:', error);
  });


