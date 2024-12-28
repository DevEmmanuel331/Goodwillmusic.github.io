document.addEventListener('DOMContentLoaded', () => {
    const musicList = [
        { title:'MUZIC - AWAY FT YSMANRASTA MP3 DOWNLOAD ', link: 'away1.html' },
         { title:'SAIDA BOJ - GOLD DIGGER MP3 DOWNLOAD ', link: 'gold1.html' },
         { title:'MAVIS ASANTE - ASEDA NNWOM MP3 DOWNLOAD ', link: 'aseda1.html' },
         { title:'TOO LATE BY WENDY SHAY MP3 DOWNLOAD ', link: 'toolate.html' },
        { title:'AFROBEAT INSTRUMENTAL-DARLING MP3 DOWNLOAD ', link: 'darling.html' },
         { title:'HEDUCATER (KWESI ARTHUR - FEFE NE FE) MP3 DOWNLOAD ', link: 'headu.html' },
        { title:'SZA - DRIVE MP3 DOWNLOAD ', link: 'drive.html' },
         { title:'SZA - GET BEHIND ME (INTERLUDE) MP3 DOWNLOAD ', link: 'Behind.html' },
         { title:'PIESIE ESTHER - ATƐƐNE (OVERTURNED) MP3 DOWNLOAD ', link: 'over.html' },
         { title:'MR DREW - SUMƆ MI FT MEDIKAL MP3 DOWNLOAD ', link: 'sumi.html' },
         { title:'MOLIY & SILENT ADDY - SHAKE IT TO THE MAX (FLY) MP3 DOWNLOAD ', link: 'shake.html' },
        { title:'KUAMI EUGENE - SHOW DOWN MP3 DOWNLOAD ', link: 'showdown.html' },
        { title:'ENAM - LIBATION MP3 DOWNLOAD ', link: 'libation.html' },
        { title:'LUDDY DAVE - FIRE AND DESIRE MP3 DOWNLOAD ', link: 'fired.html' },
        { title:'FAMA KWAME - KYERE ME ODO MP3 DOWNLOAD ', link: 'kyereo.html' },
        { title:'FAD LAN - MISA MISA MP3 DOWNLOAD ', link: 'misa.html' },
        { title:'LUDDY DAVE - DELILAH MP3 DOWNLOAD ', link: 'delia.html' },
        { title:'DEI BIE - ANKONAM REMIX FEAT. BOSOMA MP3 DOWNLOAD ', link: 'nam1.html' },
        { title:'SHATTA WALE - WASH MP3 DOWNLOAD ', link: 'wash.html' },
        { title:'SHATTA WALE - BLESSINGS FEAT. AMERADO MP3 DOWNLOAD ', link: 'bless.html' },
        { title:'SHATTA WALE - CLAP MP3 DOWNLOAD ', link: 'clap.html' },
        { title:'RUGER - TOMA TOMA FEAT. TIWA SAVAGE MP3 DOWNLOAD ', link: 'toma.html' },
        { title:'PA SALIEU - BIG SMILE POSE FOR ME FEAT. ODUMODUBLVCK MP3 DOWNLOAD ', link: 'bigsmile.html' },
        { title:'FAMEYE - ONLY YOU MP3 DOWNLOAD ', link: 'only1.html' },
        { title:'BRUCE MELODIE - NIKI MINAJI FEAT. BLAQ DIAMOND MP3 DOWNLOAD ', link: 'niki.html' },
        { title:'AMERADO - KWAKU ANANSE REMIX FEAT. FAMEYE MP3 DOWNLOAD ', link: 'ananser.html' },
        { title:'AMERADO - KWAKU ANANSE MP3 DOWNLOAD ', link: 'ananse.html' },
        { title:'AMERADO - JUJU FT. CLEMENTO SUAREZ MP3 DOWNLOAD ', link: 'juju.html' },
        { title:'AMERADO - I AM AWARE MP3 DOWNLOAD ', link: 'aware.html' },
        { title:'DAVIDO - FUNDS FT ODUMODUBLVCK, CHIKE MP3 DOWNLOAD ', link: 'funds.html' },
        { title:'PRINCESS - JOEY B MP3 DOWNLOAD ', link: 'princess.html' },
        { title:'LIL BABA- NAZEL 3LA FO2   MP3 DOWNLOAD ', link: '3la.html' },
        { title:'KWEN KWEN NDC SOROKU CAMPAIGN SONG FROM NACEE MP3 DOWNLOAD ', link: 'kwen.html' },
        { title:'FOLA - TONIGHT MP3 DOWNLOAD ', link: 'tonight.html' },
        { title:'GEN Z - KREPTISMENACE ,JOEY B , KWESI ARTHUR MP3 DOWNLOAD ', link: 'gen.html' },
        { title:'AMERADO - GRACE FT LASMID MP3 DOWNLOAD ', link: 'grace.html' },
        { title:'AMAARAE - WASTED EYES MP3 DOWNLOAD ', link: 'wasted.html' },        
        { title:'AMAARAE - SWEEEET MP3 DOWNLOAD ', link: 'swe.html' },
        { title:'AMERADO FT SAMINI - ANKONAM REMIX MP3 DOWNLOAD ', link: 'anka.html' },
        { title:'AMERADO - DATE RUSH MP3 DOWNLOAD ', link: 'rush.html' },
        { title:'AMANZEBA NAT BREW - DEDE MP3 DOWNLOAD ', link: 'nat.html' },
        { title:'AMAARAE - PRINCESS GOING MP3 DOWNLOAD ', link: 'go.html' },
         { title:'ALHAJI K FRIMPONG - KYENKYEN BI ADI MAWU MP3 DOWNLOAD ', link: 'kye.html' },
           { title:'AKWANKWAA HIANIA BY ADU KWASI MP3 DOWNLOAD ', link: 'hia.html' },
          { title:'AKWABOAH FT STRONGMAN - FOREVER MP3 DOWNLOAD ', link: 'stro.html' },
         { title:'AKWABOAH - WO PƐ WADIƐ MP3 DOWNLOAD ', link: 'wo.html' },
        { title:'AKWABOAH - I DO LOVE YOU REMIX FT. ICE PRINCE MP3 DOWNLOAD ', link: ' ice.html' },
         { title:'BONNIE TYLER - TOTAL ECLIPSE OF THE HEART TURN AROUND MP3 DOWNLOAD ', link: 'bonnie.html' },
        { title: 'AYELE BY DOMAE MAGIC MP3 DOWNLOAD ', link: 'ayele.html' },
        { title: 'JINGLE BELLS DRILL REMIX BY ISHOLABEATZ MP3 DOWNLOAD ', link: 'jingle.html' },
          { title: 'VERY SOON BY FAMEYE  MP3 DOWNLOAD ', link: 'soon.html' },
         { title: ' EMPRESS GIFTY - WATCH ME  MP3 DOWNLOAD ', link: 'watch.html' },
         { title: ' ROSÉ FT BRUNO MARS -APT MP3 DOWNLOAD ', link: 'apt.html' },
         { title: ' KUAMI EUGENE - PROBLEM MP3 DOWNLOAD ', link: 'prom.html' },
         { title: ' AKWABOAH - HELLO FT. SARKODIE MP3 DOWNLOAD ', link: 'hello.html' },
        { title: 'AKPE BY BETHEL REVIVAL CHOIR MP3 DOWNLOAD ', link: 'bet.html' },
         { title: 'AKOSUA  AGYAPONG - EKA BI NIE MP3 DOWNLOAD ', link: 'eka.html' },
         { title: ' AKATAKYIE - SIN IMA  MPS3 DOWNLOAD', link: 'sin.html' },
        { title: '  AGYA BOMOFOUR THUNDER - MEDA HO MAWO MP3 DOWNLOAD', link: 'meda.html' },
         { title: '  BAWUMIA B3BA BY ENO BARONY MP3 DOWNLOAD', link: 'bawumia.html' },
        { title: '  KING PALUTA -FOR THE POPPING /APICKI MP3 DOWNLOAD', link: 'apicki.html' },
        { title: ' DJ VYRUSKY FT KIDI KING PALUTA - SIKA MP3 DOWNLOAD', link: 'sika.html' },
        { title: ' AGATHA BY AFRICAN BROTHERS BAND INTERNATIONAL MP3 DOWNLOAD', link: 'aga.html' },
        { title: ' AFRICAN BROTHERS BAND - MA ME NSU MA WO MP3 DOWNLOAD ', link: 'ma.html' },
         { title: ' AFRICA PROSPERITY NETWORK, STONEBWOY - BELIEVE IN AFRICA MP3 DOWNLOAD ', link: 'stone.html' },
        { title: ' AFRICAN BROTHERS DANCE BAND INTERNATIONAL - ENA EYE A MANE ME MP3 DOWNLOAD ', link: 'ena.html' },
         { title: 'DAAVI  BY MZVEE MP3 DOWNLOAD ', link: 'daavi.html' },
         { title: 'PRAISE THE LORD BY TIM GODFREY MP3 DOWNLOAD ', link: 'tim.html' },
         { title: 'ADOMcwesi - YESU NKOAA (JESUS ALONE) FT. BECKY BONNEY MP3 DOWNLOAD ', link: 'yesu.html' },
         { title: 'ADINA - TOO LATE MP3 DOWNLOAD ', link: 'late1.html' },
         { title: 'ADDI SELF - TALK ABOUT ME MP3 DOWNLOAD ', link: 'talk.html' },
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
        { title: '2TOFF FT. CASTRO - YE NA BRA MP3 DOWNLOAD', link: 'toff.html' },
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
  
  





      console.clear();

/* COUNTDOWN */ 
/*
original code from iCodeThis xmas challenge: https://icodethis.com/modes/design-to-code/252/submissions/270252
*/

const today = new Date();
const currentYear = today.getFullYear();

// Check if Christmas has passed for the current year
const christmasThisYear = new Date(`${currentYear}-12-25T00:00:00`);
const EXP_DATE = today <= christmasThisYear ? christmasThisYear : new Date(`${currentYear + 1}-12-25T00:00:00`);
const SPEED = 150;


/***************** COUNTDOWN ********************/
const panelCountdown = document.querySelector("#panel-countdown");

// Select elements and spans dynamically
const countdownElements = ["months", "days", "hours", "minutes", "seconds"];
const elements = {};
const currentValues = {};

countdownElements.forEach((id) => {
  elements[id] = document.querySelectorAll(`#${id} span`);
  currentValues[id] = [];
});


function getCurrentDate() {
  const currentDate = new Date();
  const timeDifference = EXP_DATE - currentDate;

  return {
    months: Math.floor((timeDifference % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24 * 30.44)),
    days: Math.floor((timeDifference % (1000 * 60 * 60 * 24 * 30.44)) / (1000 * 60 * 60 * 24)),
    hours: Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((timeDifference % (1000 * 60)) / 1000),
  };
}

function updateCountdown() {
  const currentDate = getCurrentDate();

  countdownElements.forEach((unit, index) => {
    const paddedValue = padTo2(currentDate[unit]);

    paddedValue.split("").forEach((digit, i) => {
      if (digit !== currentValues[unit][i]) {
        changeNum(elements[unit][i], digit, SPEED * (countdownElements.length - index));
      }
    });

    currentValues[unit] = paddedValue.split("");
  });
}

function initialLoad() {
  const currentDate = getCurrentDate();

  countdownElements.forEach((unit) => {
    const paddedValue = padTo2(currentDate[unit]);
    currentValues[unit] = paddedValue.split("");

    elements[unit][0].innerText = currentValues[unit][0];
    elements[unit][1].innerText = currentValues[unit][1];
  });
}

// Initialize the countdown display
initialLoad();

// Interval to update the countdown every second
let EXP_DATEInterval;

function startCountdownInterval() {
  clearInterval(EXP_DATEInterval);
  EXP_DATEInterval = setInterval(updateCountdown, 1000);
}
startCountdownInterval();

// change the numbers
function changeNum(el, newVal, timing) {
  el.style.scale = 0;
  setTimeout(() => {
    el.innerText = "";
    el.style.translate = '0 -5rem';
    setTimeout(() => {
        el.style.scale = 1;
        el.innerText = newVal;
        setTimeout(() => {
            el.style.translate = '0';
        }, timing);
    }, timing);
  }, timing);
}


