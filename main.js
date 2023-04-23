const summaryList = document.querySelector('.summary__list');

fetch('./data.json')
  .then((response) => response.json())
  .then((json) => createNodes(json));

const createNodes = (datas) => {
  datas.map((data) => {
    const summaryListItem = document.createElement('li');
    const summaryListItemContent = document.createElement('div');
    const summaryLogo = document.createElement('img');
    const summaryText = document.createElement('p');
    const summaryScore = document.createElement('p');

    summaryLogo.setAttribute('src', data.icon);
    summaryText.textContent = data.category;

    summaryListItemContent.append(summaryLogo);
    summaryListItemContent.appendChild(summaryText);
    summaryListItemContent.classList.add('summary__list-item--content');

    let score = `<strong>${data.score}</strong>  / 100`;

    summaryScore.insertAdjacentHTML('afterbegin', score);
    summaryScore.style.color = 'hsl(224, 30%, 27%)';

    summaryListItem.append(summaryListItemContent);
    summaryListItem.appendChild(summaryScore);

    summaryList.append(summaryListItem);

    summaryListItem.classList.add('summary__list-item');

    switch (data.category.toLowerCase()) {
      case 'reaction':
        summaryListItem.style.backgroundColor = 'hsl(0, 100%, 67%)';
        summaryText.style.color = 'hsl(0, 100%, 67%)';
        break;
      case 'memory':
        summaryListItem.style.backgroundColor = 'hsl(39, 100%, 56%)';
        summaryText.style.color = 'hsl(39, 100%, 56%)';

        break;
      case 'verbal':
        summaryListItem.style.backgroundColor = 'hsl(166, 100%, 37%)';
        summaryText.style.color = 'hsl(166, 100%, 37%)';

        break;
      case 'visual':
        summaryListItem.style.backgroundColor = 'hsl(234, 85%, 45%)';
        summaryText.style.color = 'hsl(234, 85%, 45%)';
        break;
      default:
    }
  });
};
