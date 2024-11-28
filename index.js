document.addEventListener('DOMContentLoaded', () => {
    const musicList = [
         { title: 'ABIGAIL COLEMAN - MEKRA (MY SOUL) MP3 DOWNLOAD ', link: 'mekra.html' },
         { title: 'ABIGAIL COLEMAN - MEKRA (MY SOUL) MP3 DOWNLOAD ', link: 'mekra.html' },
         { title: 'ABIGAIL COLEMAN - MEKRA (MY SOUL) MP3 DOWNLOAD ', link: 'mekra.html' },
         { title: 'ADANE BEST - SISI MP3 DOWNLOAD ', link: 'best.html' },
        { title: 'ABIGAIL COLEMAN - MEKRA (MY SOUL) MP3 DOWNLOAD ', link: 'mekra.html' },
         { title: 'ABREWA NANA FT. SAMINI - ESISI MESO MP3 DOWNLOAD ', link: 'meso.html' },
        { title: 'DADIE  ANOMA BY KOJO ANTWI MP3 DOWNLOAD ', link: 'dadieanoma.html' },
        { title: '5FIVE - MOVE BACK (MUJE BAYA) MP3 DOWNLOAD ', link: '5Five_-_Move_Back.html' },
        { title: 'IDER MIRROR MP3 DOWNLOAD', link: 'ider-mirror.html' },
        { title: ' KOJO ANTWI - NFA ME NKO HO MP3 DOWNLOAD', link: 'kojoantwinfa.html' },
        { title: 'ELENA (AFRO HOUSE REMIX) BRK BEATZ MP3 DOWNLOAD', link: 'elena.html' },
        { title: 'GYPTIAN - HOLD YOU (COVER BY NGBYOUNGRICH) MP DOWNLOAD', link: 'gptian.html' },
        { title: 'ABENA SERWAA OPHELIA - M ASEDA DWOM MP3 DOWNLOAD', link: 'Abena_serwaa.html' },
        { title: '24HOUR ECONOMY NDC OFFICIAL CAMPAIGN SONG MP3 DOWNLOAD', link: '24Hour.html' },
        { title: '5FIVE WOMP3 MP3 DOWNLOAD', link:'5Five_-_womp3.html' },
        { title: '4X4 FT BUKBAK-ATONGO MP3 DOWNLOAD', link: '4X4_FT_BUKBAK~ATONGO.html' },
        { title: 'WITH EVERYTHING - CWESI OTENG FT. FLO RIVA INC AND NELLY NETTEY OFFICIAL LIVE MP3 DOWNLOAD', link: '_With_Everything__-__Cwesi_Oteng___Flo_Riva_Inc__ft._Nelly_Nettey.html' },
        { title: '2TOFF FT. CASTRO - YE NA BRA MP3 DOWNLOAD', link: '2toff_ft_Castro-Ye na bra(0).html' },
        { title: 'DAAKYE DAAKYE BY KHAPABLE  FT JAY CYRIL MP3 DOWNLOAD', link: 'Khapable_DaakyeDaakyeftJkayCyril.html' },
        { title: ' FOREVER YOUNG BY ALPHAVILLE MP3 DOWNLOAD', link: 'aphavilleforever.html' },
        { title: 'AZAMAN BY REMA MP3 DOWNLOAD', link: 'azamanbyrema.html' },
        { title: 'DANDELIONS BY RUTH B MP3 DOWNLOAD', link: 'dandelions.html' },
        { title: 'DUSK TILL DAWN BY SIA ZAYN MP3 DOWNLOAD', link: 'dusttilldawn.html' },
        { title: 'FOREVER YOUNG BY JAY Z ft HUDSON MP3 DOWNLOAD', link: 'foreverjayz.html' },
        { title: 'GLASS ANIMALS - HEAT WAVES MP3 DOWNLOAD', link: 'glassanimalheat.html' },
        { title: 'WITHOUT ME BY HALSEY MP3 DOWNLOAD', link: 'halseywithout.html' },
        { title: 'HE LIVES IN YOU BY DIANA ROSE HOLY DRILL MP3 DOWNLOAD', link: 'helivesdiana.html' },
        { title: 'MAKOMA BY KING PALUTA MP3 DOWNLOAD', link: 'kingpaluta.html' },
        { title: 'IM SO LONELY BROKEN ANGEL BY ARASH MP3 DOWNLOAD', link: 'IMSOLONELY.html' },
        { title: 'DEFE DEFE By Team Eternity MP3 Download ', link: 'teameternity.html' },
        { title: 'WHY BY ADINA MP3 DOWNLOAD', link: 'adinawhy.html' },
        { title: 'BREBRE ANOWA BY KOJO ANTWI MP3  DOWNLOAD', link: 'kojoanowa.html' },
        

    ];

    const musicListElement = document.getElementById('music-list');
    const searchBar = document.getElementById('search-bar');

    function renderMusicList(songs) {
        musicListElement.innerHTML = '';
        songs.forEach(song => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `
                <span>${song.title}</span>
                <a href="${song.link}" >Download</a>
            `;
            musicListElement.appendChild(listItem);
        });
    }

    function filterMusicList(query) {
        const filteredSongs = musicList.filter(song => 
            song.title.toLowerCase().includes(query.toLowerCase())
        );
        renderMusicList(filteredSongs);
    }

    // Render initial list
    renderMusicList(musicList);

    // Event listener for the search bar
    searchBar.addEventListener('input', () => {
        const query = searchBar.value;
        filterMusicList(query);
    });

    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Thank you for contacting us!');
        contactForm.reset();
    });
});
// Get the button
const backToTopBtn = document.getElementById('backToTopBtn');

// Show the button when the user scrolls down 20px from the top of the document
window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopBtn.style.display = 'block';
    } else {
        backToTopBtn.style.display = 'none';
    }
};

// When the user clicks on the button, scroll to the top of the document
backToTopBtn.onclick = function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};
const handleSubmit = event => {
    event.preventDefault();
  
    const myForm = event.target;
    const formData = new FormData(myForm);
  
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString()
    })
      .then(() => alert("Thank you for your submission"))
      .catch(error => alert(error));
  };
  
  document.querySelector("form").addEventListener("submit", handleSubmit);
  
