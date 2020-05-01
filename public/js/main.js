document.addEventListener('DOMContentLoaded', () => {
    const query = document.getElementById('query'),
    loc = document.getElementById('location'),
    fcast = document.getElementById('forecast');

    document.querySelector('form').addEventListener('submit', Event => {
        Event.preventDefault();
        
        query.innerHTML = '';
        loc.innerHTML = '';
        fcast.innerHTML = '';

        // Loading icon   
        let loading = document.createElement('img');
        loading.src = './img/loading.gif';
        query.appendChild(loading);

        let location = document.getElementById('search-location').value;
 
        fetch('http://localhost:3000/weather?location=' + location).then(response => response.json())
        .then(data => {
            if (data.error) {
                query.innerHTML = data.error;
                if (!query.classList.contains('error')) {
                    query.classList.add('error');
                }
            } else {
                if (query.classList.contains('error')) {
                    query.classList.remove('error');
                }
                query.innerHTML = data.query;               
                loc.innerHTML = data.location;
                fcast.innerHTML = data.forecast;
            } 
        }).catch(error => console.log(error));
    });
});