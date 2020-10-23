const nav = select('nav');
const upBtn = select('#upBtn');
const downBtn = select('#downBtn');
const current = select('.current');
const moon = select('#moon');
const sun = select('#sun');
const body = select('body');
const li = selectAll('.li');
const icon = selectAll("i");
const h2 = selectAll('h2');
const h1 = selectAll('h1');
const a = selectAll('a');
const span = selectAll('span');

function select(selector) {
  return document.querySelector(selector);
}

function selectAll(selector) {
  return document.querySelectorAll(selector);
}



const switchPage = e => {
  const t = e.target.parentNode;
  switch (t.className) {
    case "li current":
      break;
    case "li li-hover":
      console.log(t);
      select(".current").className = "li li-hover";
      t.className = "li current";
      if (t.lastElementChild.innerText === "프로필") {
        select('#project').style.display = "none";
        select('#profile').style.display = "grid";
      } else if (t.lastElementChild.innerText === "프로젝트") {
        select('#profile').style.display = "none";
        select('#project').style.display = "grid";
      }
      if (select(".current").style.backgroundColor!=="") {
        select(".current").style.backgroundColor = body.style.backgroundColor;
        select(".current").firstElementChild.style.color = body.style.color;
        select(".current").firstElementChild.nextElementSibling.style.color = body.style.color;
      }
      break;
  }

};
let ticking = false;
let current_scroll_position = 0;

function onCondition(cb) {
  if (!cb) {
    throw Error('Invalid required arguments');
  }
  if (ticking) {
    return;
  }

  if (!ticking) {
    ticking = true;
    return () => {
      const maxHeight = document.body.offsetHeight - window.innerHeight || document.body.offsetHeight;
      const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

      const condition = scrollPosition > 10 && scrollPosition < maxHeight - 300;

      return requestAnimationFrame(() => {
        if (condition === false) {
          
          downBtn.style.visibility = "hidden";
          upBtn.style.visibility = "hidden";
          console.log("condition is", condition);
          return;
        } else {
          return cb();
        }
      });
    };
  }
}

function onScroll() {
  console.log('scrolling', window.scrollY);

  let direction = true; // down
  if (window.scrollY < window.oldScroll) {
    direction = false; //up
  }
  window.oldScroll = window.scrollY;

  if (!direction) {
    if (upBtn.style.visibility === "visible") {
      ticking = false;
      return;
    }
    nav.className = nav.className.split(' ')[0];
    downBtn.style.visibility = "hidden";
    upBtn.style.visibility = "visible";
    console.log('Dom Manipulating while scroll Up');
    return;
  } else {
    if (downBtn.style.visibility === "visible") {
      ticking = false;
      return;
    }
    nav.className = "nav nav-up";
    upBtn.style.visibility = "hidden";
    downBtn.style.visibility = "visible";
    console.log('Dom Manipulating while scroll Down');
    return;
  }

}

function nightModeChange(e) {
  switch (e.target) {
    case moon:
      for (let i = 0; i < li.length; i++) {
        li[i].style.backgroundColor = "#222831";
        li[i].firstElementChild.style.color = "#eeeeee";
      }
      for (let i = 0; i < icon.length; i++) {
        icon[i].style.color = "#eeeeee";
      }
      for (let i = 0; i < a.length; i++) {
        a[i].style.color = "#eeeeee";
      }
      for (let i = 0; i < span.length; i++) {
        span[i].style.color = "#eeeeee";
      }
      for (let i = 0; i < h1.length; i++) {
        h1[i].style.backgroundColor = "#eeeeee";
        h1[i].style.color = "#222831";
      }
      for (let i = 0; i < h2.length; i++) {
        h2[i].style.color = "#eeeeee";
      }

      current.style.backgroundColor = "#222831";
      current.style.color = "#eeeeee";

      if (current.nextElementSibling === null) {
        return;
      } else if (current.nextElementSibling) {
        current.nextElementSibling.style.backgroundColor = "#eeeeee";
        current.nextElementSibling.firstElementChild.style.color = "#222831";
        current.nextElementSibling.firstElementChild.nextElementSibling.style.color = "#222831";
      } else if (current.previousElementSibling === null) {
        return;
      } else if (current.previousElementSibling) {
        current.previousElementSibling.style.backgroundColor = "#eeeeee";
        current.previousElementSibling.firstElementChild.style.color = "#222831";
        current.previousElementSibling.firstElementChild.nextElementSibling.style.color = "#222831";
      }

      body.style.backgroundColor = "#222831";
      body.style.color = "#eeeeee";

      sun.style.visibility = "visible";
      moon.style.visibility = "hidden";

      break;

    case sun:
      for (let i = 0; i < li.length; i++) {
        li[i].style.backgroundColor = "#eeeeee";
        li[i].firstElementChild.style.color = "#222831";
      }
      for (let i = 0; i < icon.length; i++) {
        icon[i].style.color = "#222831";
      }
      for (let i = 0; i < a.length; i++) {
        a[i].style.color = "#222831";
      }
      for (let i = 0; i < span.length; i++) {
        span[i].style.color = "#222831";
      }
      for (let i = 0; i < h1.length; i++) {
        h1[i].style.backgroundColor = "#222831";
        h1[i].style.color = "#eeeeee";
      }
      for (let i = 0; i < h2.length; i++) {
        h2[i].style.color = "#222831";
      }

      current.style.backgroundColor = "#eeeeee";
      current.style.color = "#222831";
      
      if (current.nextElementSibling === null) {
        return;
      } else if (current.nextElementSibling) {
        current.nextElementSibling.style.backgroundColor = "#222831";
        current.nextElementSibling.firstElementChild.style.color = "#eeeeee";
        current.nextElementSibling.firstElementChild.nextElementSibling.style.color = "#eeeeee";
      } else if (current.previousElementSibling === null) {
        return;
      } else if (current.previousElementSibling) {
        current.previousElementSibling.style.backgroundColor = "#222831";
        current.previousElementSibling.firstElementChild.style.color = "#eeeeee";
        current.previousElementSibling.firstElementChild.nextElementSibling.style.color = "#eeeeee";
      }


      body.style.backgroundColor = "#eeeeee";
      body.style.color = "#222831";

      moon.style.visibility = "visible";
      sun.style.visibility = "hidden";

      break;
  }

}

function toTop() {
  window.scroll({
    top: 0,
  });
}

function toBottom() {
  window.scroll({
    top: document.body.scrollHeight,
  });
}

selectAll('.li')[0].addEventListener('click', event => switchPage(event));
selectAll('.li')[1].addEventListener('click', event => switchPage(event));
selectAll('.v-mode')[0].addEventListener('click', event => nightModeChange(event));
selectAll('.v-mode')[1].addEventListener('click', event => nightModeChange(event));
select('#upBtn').addEventListener("mousedown", toTop);
select('#downBtn').addEventListener("mousedown", toBottom);
select('#upBtn').addEventListener("touchstart", toTop);
select('#downBtn').addEventListener("touchstart", toBottom);
window.addEventListener('scroll', onCondition(onScroll), {
  passive: true
});