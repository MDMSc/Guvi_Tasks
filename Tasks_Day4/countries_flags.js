// https://restcountries.com/v3.1/all

function httpRequest() {
    if (this.readyState === 4) {
      if (this.status === 200) {
        const data = JSON.parse(this.responseText);
        data.forEach(element => {
            console.log(`${element.name.common} - ${element.flag}`);
        });
      }
    }
  }
const url = new XMLHttpRequest();
url.onreadystatechange = httpRequest;
url.open("GET", "https://restcountries.com/v3.1/all");
url.send();