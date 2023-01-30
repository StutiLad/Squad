
let ele = document.getElementById('text')

const requestUrl = "http://www.boredapi.com/api/activity/";


ele.innerHTML = "Cilck TASK button to get data...!!!"

function getData() {
    fetch(requestUrl)
        .then(response => response.json())
        .then(data => {
            // do something with the data the API has returned
            console.log("Inside data")
            document.getElementById("text").innerHTML = data.activity;
            console.log(data.activity)

        })
}




// function reload(){
//     location.reload();
// }