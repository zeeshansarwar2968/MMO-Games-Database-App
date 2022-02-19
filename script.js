//////////Logic Design for MMO games database data fetch///////////////////////////////////////////

const result = document.getElementsByClassName("result")[0];


//get data from MMO API

async function getData() {

    url = "https://mmo-games.p.rapidapi.com/games"
    try {
        const result1 = await fetch(url, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "mmo-games.p.rapidapi.com",
                "x-rapidapi-key": "6c7ea5cb76mshac8daf34ab98c84p159205jsndbea4a51d3f8"
            }
        })
        const jsonResult = await result1.json();
        
        //pushing the fetched data to the page
        jsonResult.forEach((data) => {
            displayData(data);
        });
    } catch (error) {
        result.innerHTML = "Error in loading data...";
    }
};


// function to display the data in a card format which is directly appended to the result container
const displayData = (obj) => {
    result.innerHTML += `
    <div class="card cardChild" style="width: 18rem;">
        <img src="${obj.thumbnail}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${obj.title}</h5>
          <p class="card-text text-muted">${obj.short_description}</a>
          <a href="${obj.game_url}" class="btn btn-primary">More Information</a>
        </div>
      </div>
    `;
  };

  getData();

