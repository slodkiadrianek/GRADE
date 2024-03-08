"use strict";
//1 animacja elementy
const leftList = document.querySelector(".left--list");
const rightList = document.querySelector(".right--list");
const section2 = document.querySelector(".section--2");
//2 animacja elementy
const leftElement = document.querySelector(".left--element");
const rightElement = document.querySelector(".right--element");
const downElement = document.querySelector(".down--element");
const section3 = document.querySelector(".section--3");

//1 animacja
const leftKids = leftList.children;
const rightKids = rightList.children;

const section2Height = section2.getBoundingClientRect().height;

const firstAnimation = function (entries) {
  const [entry] = entries;
  if (entry.isIntersecting) {
    for (let el of leftKids) {
      el.classList.add("right--side--animation");
    }
    for (let el of rightKids) {
      el.classList.add("left--side--animation");
    }
  }
};

const headerObserver = new IntersectionObserver(firstAnimation, {
  root: null,
  threshold: 0,
  rootMargin: `140px`,
});

headerObserver.observe(section2);

//2 animacja
const section3Height = section3.getBoundingClientRect().height;

const stickyNav = function (entries) {
  const [entry] = entries;
  console.log(entry);
  if (entry.isIntersecting) {
    downElement.classList.add("down--side--animation");
    leftElement.classList.add("left--side--animation");
    rightElement.classList.add("right--side--animation");
  }
};

const headerObserver2 = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `0px`,
});

headerObserver2.observe(section3);
