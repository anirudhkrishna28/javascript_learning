const inp = document.getElementById("input-box")
const output = document.getElementById("output")
const verified = document.getElementById("verified")

const map = new Set(["ani","anirudh","anirudh krishna","anirudhkrishna28"])


function debounce(callback, delay=2000){
    let id;
    return (...args) => {

        if (id) clearTimeout(id);
               
        id = setTimeout(()=>{
        callback(...args)
    },delay)
}
}

inp.addEventListener('input',(e) =>{
    console.log(e.target.value);
    
    const fun = debounce(() => changeText(e))
    fun()
})

function changeText(event){
    const val =  event.target.value
    output.innerText = val
    if (map.has(val)) {

        verified.innerText = '❌'
    }
    else{
        verified.innerText = '✅'
    }
}
