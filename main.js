// http://api.aladhan.com/v1/timingsByCity?city=Dubai&country=United Arab Emirates

let mainHeader = document.querySelector('.main-header h1');
let mainParagraph = document.querySelector('.main-header p');
let searchInp = document.querySelector('.search input');
let searchbtn = document.querySelector('.search button');
let smallContainer = document.querySelector('.small-container');

let cityName = '';

searchbtn.onclick = getCity;

function getCity(){
 
           cityName = searchInp.value?cityName = searchInp.value:cityName ='cairo';
           fetch(`http://api.aladhan.com/v1/timingsByCity?city=${cityName}&country=United Arab Emirates`).then((res)=>{
            // console.log(res.json());
            return res.json()
           }).then((result)=>{
            mainHeader.innerHTML = cityName;
            //get city date from API
            mainParagraph.innerHTML =  ` ${result.data.date.gregorian.weekday.en}  ${result.data.date.readable}`
              //get date prayer from API
              smallContainer.innerHTML ='';
              for(let i=0 ; i<Object.keys(result.data.timings).length ; i++ ){
                let divTime = `
                <div class="timers-div">
                <span>${Object.keys(result.data.timings)[i]}</span>
                <p>${Object.values(result.data.timings)[i]}</p>
            </div>
                `;
                smallContainer.innerHTML +=divTime;
              }
              
           })
           searchInp.value=''; 
       
    }

    getCity();

