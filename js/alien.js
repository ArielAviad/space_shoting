
Alien  = function (game, sprite){
      Phaser.Sprite.call(this, game, game.world.randomX, -30, 'invader');

      var weapon = game.add.weapon(30,'bullet');
      weapon.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS;
      weapon.bulletSpeed = enemyBulletSpeed;
      weapon.fireRate = 10;
      weapon.trackSprite(sprite,0,0);
      this.weapon = weapon;
};

Alien.prototype = Object.create(Phaser.Sprite.prototype);

Alien.prototype.constructor = Alien;

Alien.prototype.update = function (){
    this.weapon.fire();
}
