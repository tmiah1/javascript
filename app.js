
const statusRef = document.querySelector(".status")




function getVideo(subscriptionStatus) {
return new Promise ((resolve, reject) => {
    if(subscriptionStatus === "VIP"){
        resolve("showVideo")
    }
    else if (subscriptionStatus === "FREE") {
        resolve("show trailer")
    }
    else {
        reject("no video")
    }

    })
}

console.log(getSubscriptionStatus())
