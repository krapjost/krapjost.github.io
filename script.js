
const nav = select('nav');
const upBtn = select('#upBtn');
const downBtn = select('#downBtn');
const moon = select('#moon');
const sun = select('#sun');
const body = select('body');
const li = selectAll('.li');
const icon = selectAll("i");
const h2 = selectAll('h2');
const h1 = selectAll('h1');
const a = selectAll('a');
const span = selectAll('span');
// 의사코드
if(window.scrollY === h2[0].offsetTop) {
  h2[0].style.position = "fixed";
  h2[0].style.width = "100%";
}

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
      select(".current").className = "li li-hover";
      t.className = "li current";
      if (t.lastElementChild.innerText === "프로필") {
        select('#project').style.display = "none";
        select('#studyLog').style.display = "none";
        select('#profile').style.display = "block";
      } else if (t.lastElementChild.innerText === "프로젝트") {
        select('#studyLog').style.display = "none";
        select('#profile').style.display = "none";
        select('#project').style.display = "block";
      } else if (t.lastElementChild.innerText === "공부기록") {
        select('#project').style.display = "none";
        select('#profile').style.display = "none";
        select('#studyLog').style.display = "block";
      }
      break;
  }

};

function onCondition(cb) {
  if (!cb) {
    throw Error('Invalid required arguments');
  }
  let ticking = false;

  if (!ticking) {
    return function () {
      const maxheight = document.body.offsetHeight - window.innerHeight;
      const condition = window.scrollY > 200 && window.scrollY < maxheight - 200;  
      return requestAnimationFrame(() => {
        switch (condition) {
          case false:
            break;
          case true:
            return cb();
        }
      });

    };
  }

}


function onScroll() {
  const direction = (window.scrollY < window.oldScroll) ?
    (() => {
      return false; //scroll up
    })() :
    (() => {
      return true; //scroll down
    })();
  window.oldScroll = window.scrollY;



  switch (direction) {
    case false: //up
      nav.className = nav.className.split(' ')[0];
      downBtn.style.display = "none";
      upBtn.style.display = "block";
      ticking = true;

      break;
    case true: //down
      nav.className = "nav nav-up";
      upBtn.style.display = "none";
      downBtn.style.display = "block";
      ticking = true;

      break;
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
      for (let i = 0; i < h2.length; i++) {
        h2[i].style.backgroundColor = "#eeeeee";
        h2[i].style.color = "#222831";
      }
      for (let i = 0; i < h1.length; i++) {
        h1[i].style.color = "#eeeeee";
      }

      body.style.backgroundColor = "#222831";
      body.style.color = "#eeeeee";

      sun.style.display = "block";
      moon.style.display = "none";

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
      for (let i = 0; i < h2.length; i++) {
        h2[i].style.backgroundColor = "#222831";
        h2[i].style.color = "#eeeeee";
      }
      for (let i = 0; i < h1.length; i++) {
        h1[i].style.color = "#222831";
      }

      body.style.backgroundColor = "#eeeeee";
      body.style.color = "#222831";

      moon.style.display = "block";
      sun.style.display = "none";

      break;
  }

}

function toTop() {
  window.scroll({
    top: 0,
  });
  select('#upBtn').style.display = "none";
}

function toBottom() {
  window.scroll({
    top: document.body.scrollHeight,
  });
  select('#downBtn').style.display = "none";
}

selectAll('.li')[0].addEventListener('click', event => switchPage(event));
selectAll('.li')[1].addEventListener('click', event => switchPage(event));
selectAll('.li')[2].addEventListener('click', event => switchPage(event));
selectAll('.v-mode')[0].addEventListener('click', event => nightModeChange(event));
selectAll('.v-mode')[1].addEventListener('click', event => nightModeChange(event));
select('#upBtn').addEventListener("click", toTop);
select('#downBtn').addEventListener("click", toBottom);
window.addEventListener('scroll', onCondition(onScroll), {
  passive: true
});