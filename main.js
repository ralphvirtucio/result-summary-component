const summaryList = document.querySelector('.summary__list');

fetch('./data.json')
  .then((response) => response.json())
  .then((json) => createNodes(json));

const createNodes = (datas) => {
  datas.map((data) => {
    // const summaryListItem = document.createElement('li');
    // const summaryListItemContent = document.createElement('div');
    // const summaryLogo = document.createElement('img');
    // const summaryText = document.createElement('p');
    // const summaryScore = document.createElement('p');
    // const summaryUserScore = document.createElement('strong');
    // summaryLogo.setAttribute('src', nodeData.icon);
    // summaryText.textContent = nodeData.category;
    // summaryListItemContent.append(summaryLogo);
    // summaryListItemContent.appendChild(summaryText);
    // console.log(summaryListItemContent);
  });
};
