import populateCards from './cards.js';

populateCards();
const hamburger = document.querySelector('.burger');
const modal = document.querySelector('.modal');
const wrapper = document.querySelector('.wrapper1');
const modalX = document.querySelector('.close');
const links = document.querySelectorAll('.modal-link');

function modalHide() {
  modal.style.display = 'none';
  wrapper.style.filter = 'none';
}

function windowClickHandler(event) {
  if ((event.target === modal) || (event.target === links)) {
    modalHide();
  }
}

function modalShow() {
  modal.style.display = 'flex';
  wrapper.style.filter = 'blur(0.4rem)';
  modal.scrollIntoView({ behavior: 'smooth' });
}

hamburger.addEventListener('click', () => {
  modalShow();
  window.addEventListener('click', windowClickHandler);
});

modalX.addEventListener('click', () => {
  modalHide();
  window.removeEventListener('click', windowClickHandler);
});

// script to handle each of the links on the modal
links.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    modalHide();
    const target = event.target.getAttribute('href');
    const section = document.querySelector(target);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// The begining of the scripts to dynamically generate the modal pop-ups
//
// Storing the portfolio items

const portfolio = [
  {
    name: 'Project1',
    title: 'Tonic',
    description: 'CANOPY',
    year: '2015',
    moreDetails: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a gallery of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    featuredImg: './images/works1_img.png',
    technologies: {
      first: 'html',
      second: 'css',
      third: 'javascript',
    },
    linkToLiveVersion: 'https://bestbynature.github.io/portfolio/',
    liveVersionText: 'See live',
    linkToSource: 'https://github.com/Bestbynature/portfolio',
    sourceText: 'See Source',
  },

  {
    name: 'Project5',
    title: 'Tonic',
    description: 'CANOPY',
    year: '2015',
    moreDetails: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a gallery of type and scrambled it 1960s with the releaLorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a gallery of type and scrambled it 1960s with the releaLorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a gallery of type and scrambled it 1960s with the releaLorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a gallery of type and scrambled it 1960s with the relea",
    featuredImg: './images/Snapshot_1.png',
    technologies: {
      first: 'html',
      second: 'css',
      third: 'javascript',
      fourth: 'github',
      fifth: 'ruby',
      sixth: 'Bootstrap',
    },
    linkToLiveVersion: 'https://bestbynature.github.io/portfolio/',
    liveVersionText: 'See live',
    linkToSource: 'https://github.com/Bestbynature/portfolio',
    sourceText: 'See Source',
  },
  {
    name: 'Project2',
    title: 'Multi-Post Stories',
    description: 'CANOPY',
    year: '2015',
    moreDetails: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a gallery of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    featuredImg: './images/works2_img.png',
    technologies: {
      first: 'html',
      second: 'css',
      third: 'javascript',
    },
    linkToLiveVersion: 'https://bestbynature.github.io/portfolio/',
    liveVersionText: 'See live',
    linkToSource: 'https://github.com/Bestbynature/portfolio',
    sourceText: 'See Source',
  },

  {
    name: 'Project6',
    title: 'Multi-Post Stories',
    description: 'CANOPY',
    year: '2015',
    moreDetails: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a gallery of type and scrambled it 1960s with the releaLorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a gallery of type and scrambled it 1960s with the releaLorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a gallery of type and scrambled it 1960s with the releaLorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a gallery of type and scrambled it 1960s with the relea",
    featuredImg: './images/works4_img.png',
    technologies: {
      first: 'html',
      second: 'css',
      third: 'javascript',
      fourth: 'github',
      fifth: 'ruby',
      sixth: 'Bootstrap',
    },
    linkToLiveVersion: 'https://bestbynature.github.io/portfolio/',
    liveVersionText: 'See live',
    linkToSource: 'https://github.com/Bestbynature/portfolio',
    sourceText: 'See Source',
  },
  {
    name: 'Project3',
    title: 'Tonic',
    description: 'CANOPY',
    year: '2015',
    moreDetails: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a gallery of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    featuredImg: './images/works3_img.png',
    technologies: {
      first: 'html',
      second: 'css',
      third: 'javascript',
    },
    linkToLiveVersion: 'https://bestbynature.github.io/portfolio/',
    liveVersionText: 'See live',
    linkToSource: 'https://github.com/Bestbynature/portfolio',
    sourceText: 'See Source',
  },
  {
    name: 'Project 7',
    title: 'FACEBOOK 360',
    description: 'CANOPY',
    year: '2015',
    moreDetails: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a gallery of type and scrambled it 1960s with the releaLorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a gallery of type and scrambled it 1960s with the releaLorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a gallery of type and scrambled it 1960s with the releaLorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a gallery of type and scrambled it 1960s with the relea",
    featuredImg: './images/works1_img.png',
    technologies: {
      first: 'html',
      second: 'css',
      third: 'javascript',
      fourth: 'github',
      fifth: 'ruby',
      sixth: 'Bootstrap',
    },
    linkToLiveVersion: 'https://bestbynature.github.io/portfolio/',
    liveVersionText: 'See live',
    linkToSource: 'https://github.com/Bestbynature/portfolio',
    sourceText: 'See Source',
  },

  {
    name: 'Project4',
    title: 'Multi-Post Stories',
    description: 'CANOPY',
    year: '2015',
    moreDetails: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a gallery of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    featuredImg: './images/works4_img.png',
    technologies: {
      first: 'html',
      second: 'css',
      third: 'javascript',
    },
    linkToLiveVersion: 'https://bestbynature.github.io/portfolio/',
    liveVersionText: 'See live',
    linkToSource: 'https://github.com/Bestbynature/portfolio',
    sourceText: 'See Source',
  },

  {
    name: 'Project8',
    title: 'Uber Navigation 360',
    description: 'CANOPY',
    year: '2015',
    moreDetails: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a gallery of type and scrambled it 1960s with the releaLorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a gallery of type and scrambled it 1960s with the releaLorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a gallery of type and scrambled it 1960s with the releaLorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a gallery of type and scrambled it 1960s with the relea",
    featuredImg: './images/works2_img.png',
    technologies: {
      first: 'html',
      second: 'css',
      third: 'javascript',
      fourth: 'github',
      fifth: 'ruby',
      sixth: 'Bootstrap',
    },
    linkToLiveVersion: 'https://bestbynature.github.io/portfolio/',
    liveVersionText: 'See live',
    linkToSource: 'https://github.com/Bestbynature/portfolio',
    sourceText: 'See Source',
  },
];

const details = document.querySelectorAll('.details');
const detailsBtn = Array.from(details);
const whiteHide = document.querySelector('.white-hide');
const modal2 = document.querySelector('.modal2');

function generator(num) {
  modal2.style.display = 'flex';

  const head = document.createElement('div');
  head.className = 'modal-header';
  whiteHide.appendChild(head);

  const title = document.createElement('h2');
  title.className = 'title';
  title.textContent = portfolio[num].title;
  head.appendChild(title);

  const icon = document.createElement('i');
  icon.className = 'fas fa-xmark close2';
  head.appendChild(icon);

  const line2 = document.createElement('div');
  line2.className = 'line2';
  whiteHide.appendChild(line2);

  const canopy = document.createElement('h4');
  canopy.textContent = portfolio[num].description;
  canopy.className = 'canopy2';
  line2.appendChild(canopy);

  const dot = document.createElement('i');
  dot.className = 'fa-sharp fa-solid fa-circle span2';
  line2.appendChild(dot);

  const back = document.createElement('h5');
  back.className = 'span3';
  back.textContent = 'Back End Dev';
  line2.appendChild(back);

  const dot2 = document.createElement('i');
  dot2.className = 'fa-sharp fa-solid fa-circle span2';
  line2.appendChild(dot2);

  const year = document.createElement('h5');
  year.className = 'span3';
  year.textContent = portfolio[num].year;
  line2.appendChild(year);

  const img = document.createElement('img');
  img.src = portfolio[num].featuredImg;
  whiteHide.appendChild(img);

  const wholeDiv = document.createElement('div');
  wholeDiv.className = 'wholeDiv';
  whiteHide.appendChild(wholeDiv);

  const leftDiv = document.createElement('div');
  leftDiv.className = 'leftDiv';
  wholeDiv.appendChild(leftDiv);

  const rightDiv = document.createElement('div');
  rightDiv.className = 'rightDiv';
  wholeDiv.appendChild(rightDiv);

  const moreDetails = document.createElement('p');
  moreDetails.textContent = portfolio[num].moreDetails;
  leftDiv.appendChild(moreDetails);

  const line5 = document.createElement('div');
  line5.className = 'line5';
  rightDiv.appendChild(line5);

  // three divs inside line5
  const line51 = document.createElement('div');
  line51.className = 'tech';
  line51.textContent = portfolio[num].technologies.first;

  const line52 = document.createElement('div');
  line52.className = 'tech';
  line52.textContent = portfolio[num].technologies.second;

  const line53 = document.createElement('div');
  line53.className = 'tech';
  line53.textContent = portfolio[num].technologies.third;
  line5.append(line51, line52, line53);

  // second set of three divs if applicable
  const line7 = document.createElement('div');
  line7.className = 'line7';

  // three divs inside line5
  const line71 = document.createElement('div');
  line71.className = 'tech';
  line71.textContent = portfolio[num].technologies.fourth;

  const line72 = document.createElement('div');
  line72.className = 'tech';
  line72.textContent = portfolio[num].technologies.fifth;

  const line73 = document.createElement('div');
  line73.className = 'tech';
  line73.textContent = portfolio[num].technologies.sixth;
  line7.append(line71, line72, line73);

  // appending them to right div
  rightDiv.append(line5, line7);

  const thin = document.createElement('hr');
  thin.className = 'ruler1';
  rightDiv.appendChild(thin);

  // div for the two buttons
  const line6 = document.createElement('div');
  line6.className = 'line6';
  rightDiv.appendChild(line6);

  // anchor tag
  const anchor1 = document.createElement('a');
  anchor1.className = 'anchor1';
  anchor1.setAttribute('href', portfolio[num].linkToLiveVersion);
  anchor1.setAttribute('target', '_blank');
  line6.appendChild(anchor1);

  const button1 = document.createElement('button');
  button1.className = 'see2';
  button1.textContent = 'See live';

  const icon2 = document.createElement('img');
  icon2.className = 'github';
  icon2.src = './images/icon.svg';
  button1.appendChild(icon2);

  anchor1.appendChild(button1);
  // button 2

  const anchor2 = document.createElement('a');
  anchor2.className = 'anchor2';
  anchor2.setAttribute('href', portfolio[num].linkToSource);
  anchor2.setAttribute('target', '_blank');
  line6.appendChild(anchor2);

  const button2 = document.createElement('button');
  button2.className = 'see2';
  button2.textContent = 'See Source';
  anchor2.appendChild(button2);

  const icon3 = document.createElement('img');
  icon3.src = './images/github.png';
  icon3.className = 'github';
  button2.appendChild(icon3);

  // line6.append(button1, button2)

  // Appending white hide
  modal2.appendChild(whiteHide);

  // Horizontal rule
  const dynRule = document.createElement('hr');
  dynRule.className = 'dyn-rule';
  modal2.appendChild(dynRule);
}

detailsBtn.forEach((detail, index) => {
  detail.addEventListener('click', () => {
    while (whiteHide.firstChild) whiteHide.removeChild(whiteHide.firstChild);
    while (modal2.firstChild) modal2.removeChild(modal2.firstChild);
    generator(index);
    modal2.scrollIntoView({ behavior: 'smooth' });
    const closeButton = document.querySelector('.close2');
    window.addEventListener('click', (event) => {
      if (event.target === closeButton) modal2.style.display = 'none';
    });
  });
});
