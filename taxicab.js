const blocksAway = function(directions) {
  let position = {
    east: 0,
    north: 0
  };
  let orientation = 'default';
  
  directions.forEach(direction => {
  
    if (typeof direction === 'string'){
      if (direction === 'left'){
        switch (orientation){
          case 'default':
           orientation = 'north';
            break;
          case 'north':
           orientation = 'west';
            break;
          case 'west':
           orientation = 'south';
            break;
          case 'south':
           orientation = 'east';
            break;
          case 'east':
           orientation = 'north';
            break;
        }
      }
      else if (direction === 'right'){
        switch (orientation){
          case 'default':
           orientation = 'east';
            break;
          case 'north':
           orientation = 'east';
            break;
          case 'west':
           orientation = 'north';
            break;
          case 'south':
           orientation = 'west';
            break;
          case 'east':
           orientation = 'south';
            break;
        }
      }
    }
    else if (typeof direction === 'number'){
      switch (orientation){
        case 'north':
          position.north += direction;
          break;
        case 'west':
          position.east -= direction;
          break;
        case 'south':
          position.north -= direction;
          break;
        case 'east':
          position.east += direction;
      }
    }
  });
  return position;
};

console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));

