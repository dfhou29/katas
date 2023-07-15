/* In this challenge, we'll need to implement four functions.

The first three will calculate the volume of the individual shapes:

sphereVolume()will calculate the volume of a sphere given a radius
coneVolume() will calculate the volume of a cone given a radius and a height
prismVolume() will calculate the volume of a prism given a height, a width, and a depth */

const PI = 3.14159 ;

//V = 4/3πr³
const sphereVolume = function (radius) {
  return (4 / 3) * PI * radius * radius * radius;
}

console.log(4186 < sphereVolume(10) && sphereVolume(10) < 4189);

//V = (1/3)πr2h
const coneVolume = function (radius, height) {
  return (1 / 3) * PI * radius * radius * height;
}

console.log(45 < coneVolume(3, 5) && coneVolume(3, 5) < 49);

//V = Bh
const prismVolume = function (height, width, depth) {
  return width * depth * height;
}

console.log(prismVolume(3, 4, 5) === 60);

const totalVolume = function (solids) {
  let totalVolume = 0;

  solids.forEach(solid => {
    if (solid.type === 'sphere'){
      totalVolume += sphereVolume(solid.radius);
    }
    else if (solid.type === 'cone'){
      totalVolume += coneVolume(solid.radius, solid.height);
    }
    else if (solid.type === 'prism'){
      totalVolume += prismVolume(solid.height, solid.width, solid.depth);
    }
  });
  return totalVolume;
}

const largeSphere = {
  type: 'sphere',
  radius: 40
}

const smallSphere = {
  type: 'sphere',
  radius: 10
}

const cone = {
  type: 'cone',
  radius: 3,
  height: 5
}

const duck = [
  largeSphere,
  smallSphere,
  cone
]

console.log(272000 < totalVolume(duck) && totalVolume(duck) < 275000);