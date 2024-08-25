if ("serviceWorker" in navigator) {
  // console.log("worker is working")
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("../sw.js")
      .then(reg => console.log("service Worker : Registered"))
      .catch(err => console.log(`Service worker : Error:${err}`));
  });
}
