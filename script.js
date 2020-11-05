const nav = select('nav');
const upBtn = select('#upBtn');
const downBtn = select('#downBtn');
const current = select('.current');
const liHover = select('.li-hover');

const moon = select('#moon');
const sun = select('#sun');
const body = select('body');
const li = selectAll('.li');
const icon = selectAll("i");
const h4 = selectAll('h4');
const h1 = selectAll('h1');
const a = selectAll('a');
const span = selectAll('span');
const articleItem = selectAll('article.item');

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
      console.log(t);
      break;
    case "li li-hover":
      console.log(t);
      select(".current").className = "li li-hover";
      t.className = "li current";
      if (t.lastElementChild.innerText === "프로필") {
        select('#project').style.display = "none";
        select('#profile').style.display = "grid";
        t.style.backgroundColor = body.style.backgroundColor;
        t.firstElementChild.style.color = body.style.color;
        // t.parentNode.style.backgroundColor = body.style.color;

        t.nextElementSibling.style.backgroundColor = body.style.color;
        t.nextElementSibling.firstElementChild.style.color = body.style.backgroundColor;
        t.nextElementSibling.lastElementChild.style.color = body.style.backgroundColor;

      } else if (t.lastElementChild.innerText === "프로젝트") {
        select('#profile').style.display = "none";
        select('#project').style.display = "grid";
        t.style.backgroundColor = body.style.backgroundColor;
        t.firstElementChild.style.color = body.style.color;
        // t.parentNode.style.backgroundColor = body.style.color;

        t.previousElementSibling.style.backgroundColor = body.style.color;
        t.previousElementSibling.firstElementChild.style.color = body.style.backgroundColor;
        t.previousElementSibling.lastElementChild.style.color = body.style.backgroundColor;

      }
      // if (select(".current").style.backgroundColor!=="") {
      //   current.style.backgroundColor = 
      //   current.firstElementChild.style.color = body.style.color;
      //   current.firstElementChild.nextElementSibling.style.color = body.style.color;
      // }
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

      const condition = scrollPosition > 100 && scrollPosition < maxHeight - 100;

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

function moveBtnEventAdder() {



  let direction = true; // down
  if (window.scrollY < window.oldScroll) {
    direction = false; //up
  }
  window.oldScroll = window.scrollY;

  if (!direction) {
    if (!upBtn.classList.contains('v-hidden')) {
      return;
    }
    setTimeout(function() {
      downBtn.classList.add('v-hidden');
      upBtn.classList.remove('v-hidden');
    }, 250);

    return;
  } else {
    if (!downBtn.classList.contains('v-hidden')) {
      return;
    }
    setTimeout(function() {
      upBtn.classList.add('v-hidden');
      downBtn.classList.remove('v-hidden');
    }, 250);
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
      for (let i = 0; i < h4.length; i++) {
        h4[i].style.color = "#eeeeee";
      }
      

      select('.current').style.color = "#eeeeee";
      select('.li-hover').style.backgroundColor = "#eeeeee";
      select('.current').parentNode.style.backgroundColor = "#ffffff00";
      select('.current').style.backgroundColor = "#222831";
      select('.li-hover').lastElementChild.style.color = "#222831";
      select('.li-hover').firstElementChild.style.color = "#222831";

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
      for (let i = 0; i < h4.length; i++) {
        h4[i].style.color = "#222831";
      }
      

      select('.current').parentNode.style.backgroundColor = "#ffffff00";
      select('.li-hover').style.backgroundColor = "#222831";
      select('.current').style.color = "#222831";
      select('.current').style.backgroundColor = "#eeeeee";
      select('.li-hover').firstElementChild.style.color = "#eeeeee";
      select('.li-hover').lastElementChild.style.color = "#eeeeee";

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
    left: 0,
    behavior: "smooth"
  });
}

function toBottom() {
  window.scroll({
    top: document.body.scrollHeight,
    left: 0,
    behavior: "smooth"
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

body.addEventListener('touchmove', e=>onMove(e), false);


function getMoveType(x, y) {
  let htTouchInfo = {
    nStartX : -1,
    nStartY : -1,
    nStartTime : 0
  };

  let nHSlope = ((window.innerHeight / 2) / window.innerWidth).toFixed(2) * 1;
  
  let nMoveType = -1;
  let nX = Math.abs(htTouchInfo.nStartX - x);
  let nY = Math.abs(htTouchInfo.nStartY - y);
  let nDis = nX + nY;
  console.log("nX",nX);
  console.log("nY",nY);
  console.log("nDis",nDis);


  if(nDis < 25) { return nMoveType;}

  let nSlope = parseFloat((nY / nX).toFixed(2), 10);

  console.log("nSlope", nSlope);
  console.log("nHSlope", nHSlope);

  if (nSlope > nHSlope) {
    nMoveType = 1;
  } else {
    nMoveType = 0;
  }

  return nMoveType;

}

function onMove(e) {
  console.log(e);
  console.log('start');
  let nX = e.changedTouches[0].pageX;
  let nY = e.changedTouches[0].pageY;
  console.log(nX);
  console.log(nY);
 nMoveType = getMoveType(nX, nY);
 console.log(nMoveType);

}

// window.addEventListener('scroll', moveBtnEventAdder, {
//   passive: true
// });