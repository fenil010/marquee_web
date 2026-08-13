const main = document.querySelector("main");
const video = document.querySelector(".video");
const modechange = document.getElementById("mode");
const overlayitems= document.querySelectorAll(".overlay-items");

modechange.addEventListener('click',
    function() {
        document.body.classList.toggle('dark-mode');
        if (document.body.classList.contains('dark-mode')) {
            modechange.textContent = 'LIGHT MODE';
            const body = document.querySelector('body');
            body.style.backgroundColor = '#000';
            body.style.color = '#fff';
            document.head.appendChild(style);
        }
        else {
            modechange.textContent = 'DARK MODE';
            const body = document.querySelector('body');
            body.style.backgroundColor = '#fff';
            body.style.color = '#000';
            
            document.head.appendChild(style);
        }
    }

)

main.addEventListener("mousemove", (e) => {
    document.getElementById("main-video").style.visibility = "visible"
    video.style.left = (e.clientX ) + "px";
    video.style.top = (e.clientY ) + "px";
    video.style.opacity = "1";


   

});

main.addEventListener("mouseleave", (e) => {
    video.style.opacity = "0";

}
)

// const main2 = document.querySelector("main");
// const video1 = document.getElementById("intro-video");

// if (main2 && video1) {
//     video1.style.visibility = "visible";
//     video1.addEventListener("ended", () => {
//     video1.classList.add("hide"); 
//         setTimeout(() => {
//             video1.remove();
//         }, 800);

//     });
// }

overlayitems.forEach(item=>{
    item.addEventListener("mouseenter",()=>
    {
        item.firstElementChild.style.width='180px'
    })

        item.addEventListener("mouseleave",()=>
    {
        item.firstElementChild.style.width='0px'
    })
})