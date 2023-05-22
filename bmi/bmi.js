"use strict";




function bmi(w, h) {
  let r;

  let d;

  r = w / (h**2);

  d = (r * 10) / 10;

  if(d.toFixed(1) <= 18.5) {
    return `bmi ${d.toFixed(1)}:  Underweight`;

  } else if(d.toFixed(1) <= 25.0) {
    return `bmi ${d.toFixed(1)}:  Normal`;

  } else if(d.toFixed(1) <= 30.0) {
    return `bmi ${d.toFixed(1)}:  Overweight`; 

  } else if(d.toFixed(1) > 30.0) {
    return  `bmi ${d.toFixed(1)}:  Obese`;
  };
}


alert(bmi(75, 1.75))
//Enter your weight(1) and your height(2)

