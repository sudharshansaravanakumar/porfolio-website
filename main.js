// window.addEventListener('DOMContentLoaded', (event) => {
//     getVisitCount();
// })

// const fuctionApi = 'https://hv6lihwvyq3viyg32e4euuzppy0zgvmv.lambda-url.ap-south-1.on.aws/';

// const getVisitCount = () => {
//     let count = 30;
//     fetch(fuctionApi).then(response => {
//         return response.json()
//     }).then(response => {
//         console.log("Website called function API.");
//         count = response.count;
//         document.getElementById("counter").n=innerText = count;
//         console.log("count = " + count);
//     }).catch(function(error){
//         console.log(error);
//     });
//     return count;
// }

const c = document.querySelector(".counter");
async function updateCounter() {
    let response = await fetch("https://hv6lihwvyq3viyg32e4euuzppy0zgvmv.lambda-url.ap-south-1.on.aws/");
    let data = await response.json();
    console.log("count = " + data);
    document.getElementById("counter").innerText = data;
}

updateCounter();

