const ai = async () => {
    const hub = await fetch(`https://openapi.programming-hero.com/api/ai/tools`);
    const res = await hub.json();
    const all = res.data.tools;
    aiHub(all)

}

const aiHub = (data) => {
    // console.log(data)
    const container = document.getElementById('ai-container');
   
    data.forEach(element => {
        // const feat = element.features
        // feat.forEach(el => el)
        // console.log(element)
        const feat = element.features.map((el)=>`<li>${el}</li>`).join("");
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="card bg-base-100 shadow-xl">
        <figure><img src="${element.image}" alt="Shoes" /></figure>
        <div class="card-body">
          <h2 class="card-title">
            Features
            
          </h2>
        
           <li>${feat}</li>
           <hr>
           <b><p>${element.name}</p></b>
           <p>${element.published_in}</p>
          
        </div>
      </div>
        `
        container.appendChild(div)
    });
}

ai()