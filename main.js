const summaryList = document.querySelector('.summary__list');

fetch('./data.json')
  .then((response) => response.json())
  .then((json) => mappedData(json));

const mappedData = (datas) => {
  datas.map((data) => {
    let dynamicStyle = '';

    switch (data.category.toLowerCase()) {
      case 'reaction':
        dynamicStyle = `reaction`;
        break;
      case 'memory':
        dynamicStyle = `memory`;

        break;
      case 'verbal':
        dynamicStyle = `verbal`;

        break;
      case 'visual':
        dynamicStyle = 'visual';
        break;
      default:
        dynamicStyle = '';
    }

    const summaryListItem = `<li class="summary__list-item ${dynamicStyle}">
    <div class="summary__list-item--content">
      <img src=${data.icon} alt=${data.category} />
      <p>${data.category}</p>
    </div>
    
    <p class="summary__score"><strong>${data.score}</strong> / 100</p>
    </li>`;

    summaryList.insertAdjacentHTML('beforeend', summaryListItem);
  });
};
