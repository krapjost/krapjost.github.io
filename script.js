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

// rmClass(select('.current'), 'current');
//       rmClass(e.target.parentNode, 'li');
//       addClass(e.target.parentNode, 'current');


selectAll('.li')[0].addEventListener('click', event => switchPage(event));
selectAll('.li')[1].addEventListener('click', event => switchPage(event));
selectAll('.li')[2].addEventListener('click', event => switchPage(event));