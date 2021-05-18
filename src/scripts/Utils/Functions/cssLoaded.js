export default function cssLoaded() {
    return new Promise(resolve => {
        let wait = setInterval(() => {
            if (getComputedStyle(document.body)["margin-left"] === "0px") {
                clearInterval(wait);
                resolve();
            }
        }, 1);
    })
}