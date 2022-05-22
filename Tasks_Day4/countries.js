// https://restcountries.com/v3.1/all

const httpRequest = function() {
    if (this.readyState === 4) {
        if (this.status === 200) {
            const data = JSON.parse(this.responseText);
            data.forEach(element => {
                console.log(`Name: ${element.name.common}, Region: ${element.region}, 
                Sub Region: ${element.subregion}, Population: ${element.population}`);
            });
        }
        
    }
}

const urlCountries = new XMLHttpRequest();
urlCountries.onreadystatechange = httpRequest;
urlCountries.open("GET", "https://restcountries.com/v3.1/all");
urlCountries.send();