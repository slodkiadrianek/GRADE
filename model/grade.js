"use strict";

export default function findById(state, id) {
  let gradeRet;
  for (const el of state) {
    // console.log(el);
    for (const x of el.semester[0].grades) {
      x.id == id ? (gradeRet = x) : "";
    }
    for (const x of el.semester[1].grades) {
      x.id == id ? (gradeRet = x) : "";
    }
    for (const x of el.semester[2].grades) {
      x.id == id ? (gradeRet = x) : "";
    }
    for (const x of el.semester[3].grades) {
      x.id == id ? (gradeRet = x) : "";
    }
  }
  return gradeRet;
}
