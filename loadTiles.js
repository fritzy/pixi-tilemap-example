const Pixi = require('pixi.js');

const loadTexture = (name) => {

  const texture = Pixi.utils.TextureCache[name];
  for (let col = 0; col < texture.width / 16; ++col) {
    for (let row = 0; row < texture.height / 16; ++row) {
      const t = new Pixi.Texture(texture);
      t.frame = new Pixi.Rectangle(col * 16, row * 16, 16, 16);
      Pixi.Texture.addToCache(t, `${name}-${col}x${row}`);
    }
  }
};


const load = () => {

  return new Promise((resolve, reject) => {

    Pixi.loader.add('assets/wall.json');
    Pixi.loader.add('assets/floor.json');
    Pixi.loader.add('pit0', 'assets/pit0.json');
    Pixi.loader.add('pit1', 'assets/pit1.json');
    Pixi.loader.add('deco0', 'assets/deco0.json');
    Pixi.loader.add('deco1', 'assets/deco1.json');

    const chars = ['player', 'aquatic', 'avian', 'cat', 'dog', 'elemental', 'humanoid', 'misc', 'pest', 'plant', 'quadraped', 'reptile', 'rodent', 'slime', 'undead'];

    for (const char of chars) {
      console.log(char);
      Pixi.loader.add(`${char}0`, `assets/${char}0.json`);
      Pixi.loader.add(`${char}1`, `assets/${char}1.json`);
    }

    Pixi.loader.add('pencil', 'assets/pencil.png');
    Pixi.loader.add('eraser', 'assets/eraser.png');
    Pixi.loader.add('pullrect', 'assets/pullrect.png');
    Pixi.loader.add('floodfill', 'assets/floodfill.png');
    Pixi.loader.add('ui', 'assets/GUI/GUI0.png');
    Pixi.loader.load((loader, resources) => {

      loadTexture('ui');

      resolve(loader, resources);
    });
  });
};


module.exports = {
  load,
  loadTexture
};
