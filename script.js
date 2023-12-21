const lightTheme = "light-theme";
const darkTheme = "dark-theme";

const themeSwitcher = document.querySelector(".theme-switcher");
const body = document.querySelector("body");

if (localStorage.getItem("theme") === darkTheme) {
 body.classList.add(darkTheme);
}

themeSwitcher.addEventListener("click", (e) => {
 if (e.target.id === "light") {
    body.classList.remove(darkTheme);
    body.classList.add(lightTheme);
    localStorage.setItem("theme", lightTheme);
 } else if (e.target.id === "dark") {
    body.classList.remove(lightTheme);
    body.classList.add(darkTheme);
    localStorage.setItem("theme", darkTheme);
 }
});

var design = anime({
    targets: '#newyear2020 #happy',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 2000,
    delay: function(el, i) { return i * 250 },
    direction: 'alternate',
    loop: true
  });
  
  var design = anime({
    targets: '#newyear2020 #NEWYEAR',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 2500,
    delay: function(el, i) { return i * 250 },
    direction: 'alternate',
    loop: true
  });
  
  
  
  var design = anime({
    targets: '#newyear2020 #Vector_43,#Vector_210,#Vector_207,#Vector_42,#Vector_45',
    translateY: -10,
    easing: 'easeInOutSine',
    duration: 2500,
    delay: function(el, i) { return i * 250 },
    direction: 'alternate',
    loop: true
  });
  
  