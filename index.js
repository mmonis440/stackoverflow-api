const url = 'https://api.stackexchange.com/2.3/answers?page=5&pagesize=5&order=desc&sort=activity&site=stackoverflow'
fetch(url)
    .then(response => {
        for(const pair of response.headers){
            console.log(`${pair[0]}: ${pair[1]}`); 
          }
        return response.text();
    }).then(data => {
        console.log(data);
    });