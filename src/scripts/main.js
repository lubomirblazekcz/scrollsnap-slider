import "./Utils/Functions/dataValue.js"
import cssLoaded from "./Utils/Functions/cssLoaded.js";
import LibNativeSlider from "./Libraries/NativeSlider.js";

cssLoaded().then(() => {
    document.querySelectorAll(`[data-controller="lib-ns"]`).forEach(element => {
        LibNativeSlider(element.querySelector("[data-lib-ns]"), element)
    });
})
