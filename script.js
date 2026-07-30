const btn = document.getElementById("enterBtn");
const opening = document.getElementById("opening-screen");
const website = document.getElementById("website");

btn.addEventListener("click", ()=>{

    opening.classList.add("open");

    setTimeout(()=>{
        opening.style.display="none";
        website.style.display="block";
        window.scrollTo({
            top:0,
            behavior:"smooth"
        });
    },2000);

});
