
window.addEventListener('DOMContentLoaded', (event)=>{
    getVisitCount();
})
const functionApiUrl = 'https://getresumecounter-tselentis.azurewebsites.net/api/GetResumeCounter?code=76N27rRYb81cx2NhZ3bh7b96vjERC4OCLpOTsQAPuxPIAzFuspbmjQ==';
const localfunctionApi = 'http://localhost:7071/api/GetResumeCounter';

const getVisitCount = () => {
    let count = 30;
    fetch(functionApiUrl)
        .then(response => response.json())
        .then(data =>{
            console.log("Website called function API.");
            console.log(data);
            count = data.count;
            document.getElementById("counter").innerText = count;
            console.log(data.json);
        }).catch(function(error){
            console.log(error);
        })
        return count;
}    
