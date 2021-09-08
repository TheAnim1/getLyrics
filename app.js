const form =document.getElementById('form')
const input = document.getElementById('src-btn');
const result = document.getElementById('result');
const apiUrl = 'https://api.lyrics.ovh'; 
const showLyrics = document.getElementById('showLyrics');
const lyricResult = document.getElementById('lyrics');

const main = document.getElementById('main');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const  inputValue= input.value;
    // checking if the input is empty 
    if(!input.value) {
        alert('please enter artist name or song name to get the lyrics');
    }else{
        
        searchSong(inputValue);
    }
   main.innerHTML= ""
})

// Searching song 
function searchSong(inputValue){
    fetch(`${apiUrl}/suggest/${inputValue}`)
    .then(res=> res.json())
    .then(data => 
        data.data.forEach(song => {
         console.log(song);
       const title=  song.title ;
        const artist = song.artist.name;
        const result = document.createElement('tbody');
        result.innerHTML=`
        
        <thead>
        <tr>
          <th scope="col" class="th">Song Name</th>
          <th scope="col" class="th">Artist</th>
          <th scope="col" class="th">Lyrics</th>
        </tr>
      </thead>

              <tr>
                <td> ${title}</td>
                <td>${artist}</td>
                <td>
                <a class="btn btn-danger" target="_blank" href="${song.link}">Play with Lyrics</a> 
                  
                </td>
              </tr>
         
        
        `
      main.appendChild(result);
      
        
    })
    )
}
