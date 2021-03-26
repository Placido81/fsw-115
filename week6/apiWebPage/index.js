async function getMovieData(){
    
  //API 1:
     const response = await axios.get("http://swapi.dev/api/people/1/")
               const films = response.data.films[0]
               const movie = await axios.get(films)
               const title = movie.data.title
               const script = movie.data.director
               const action = movie.data.producer
               const actor = document.createElement("h1")
                 actor.textContent= title
                 document.body.append(actor)

                  const writer = document.createElement("h2")
                        writer.textContent= script
                        document.body.append(writer)
                 const producer= document.createElement("h3")
                        producer.textContent= action
                        document.body.append(producer)

                 console.log('Title:', movie.data.title)   
                 console.log('Director:', movie.data.director)
                 console.log('Producer:', movie.data.producer) 
                 
       //API 2:
        const response1 = await axios.get("http://swapi.dev/api/people/2/")
          const species = response1.data.species[0]
          const char = await axios.get(species)

          const bug = char.data.name
          const bug2= char.data.designation
          const bug3= char.data.classification
         const spider = document.createElement("h2")
                 spider.textContent= bug
             document.body.append(spider)
         const critter = document.createElement("h2")
            critter.textContent = bug2
            document.body.append(critter)
            const art = document.createElement("h3")
            art.textContent = bug3
            document.body.append(art)

        console.log('Designation:', char.data.designation)
        console.log('Name:', char.data.name)

        console.log('Classification:', char.data.classification)


          //API 3:
         const response2 = await axios.get("http://swapi.dev/api/starships/13/")
        const pilots= response2.data.pilots[0]

       const comet = await axios.get(pilots)
         const aliens = comet.data.name
         const space =  comet.data.gender
            const eye = comet.data.eye_color
            const skin = comet.data.skin_color
         
        const stars = document.createElement("h1")
            stars.textContent = aliens
            document.body.append(stars)
      
         const moon = document.createElement("h2")
            moon.textContent = space
            document.body.append(moon)

         const man = document.createElement("h2")
            man.textContent = eye
            document.body.append(man)

            const men = document.createElement("h3")
            men.textContent = skin
            document.body.append(men)
        
         console.log('Name:', comet.data.name)
        console.log('Gender:', comet.data.gender)
        console.log('Eye Color:', comet.data.eye_color)
        console.log('Skin Color:', comet.data.skin_color)      
}
        
    getMovieData();


  