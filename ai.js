let sorted = false;
const ai = async () => {
    const hub = await fetch(`https://openapi.programming-hero.com/api/ai/tools`);
    const res = await hub.json();
    const all = res.data.tools;
    aiHub(all)

}

const aiHub = (data) => {
    console.log(data)
    const container = document.getElementById('ai-container');
    container.textContent='';
    if(sorted){
        data.sort((a,b)=>{
            const dateA=new Date(a.published_in)
            const dateB = new Date(b.published_in)
            return dateB-dateA;
        })
    }
    console.log(data)
    data.forEach(element => {
        // const feat = element.features
        // feat.forEach(el => el)
        // console.log(element)
        const feat = element.features.map((el)=>`<li>${el}</li>`).join("");
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="card h-[450px] bg-base-100 shadow-xl">
        <figure><img class="w-42 h-42" src="${element.image}" alt="Shoes" /></figure>
        <div class="card-body">
          <h2 class="card-title">
            Features
            
          </h2>
        
           <ul class="list-decimal">${feat}</ul>
           <hr>
           <b><p>${element.name}</p></b>
           <p>${element.published_in}</p>
          
        </div>
      </div>
        `
        container.appendChild(div)
    });
}

// sort button

const sort = async()=>{
    // console.log('click')
    sorted=true;
    const hub = await fetch(`https://openapi.programming-hero.com/api/ai/tools`);
    const res = await hub.json();
    const all = res.data.tools;
    aiHub(all)
}

ai()