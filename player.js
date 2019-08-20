const player =  {
	hitPoints: 100,
	attackMin: 0,
	attackMax: 3,
	level: 1,
	armor: armor[0],
	weapon: weapons[0],
	isAlive: true,
	
	// This will be similar to the monster's `getAttackDamage`, except you should modify it by adding the player's weapon's `attackBonus` property. You can optionally make the player stronger by adding the value of his level to the attack.
	getAttackDamage: function() {
	
	},

	// This one is close to the monster's, except that it will of course call the monster's `takeDamage` method instead of the player's. And because the monster can change, we'll take in the current monster as a parameter.
	attack: function(monster) {
	
	},
	
	// This method is very similar to the monster's version as well, except we'll be mitigating not with an `armor` property, but with our current armor's `armorBonus` property, since our armor, unlike the monster's, can change. Also, we don't have to drop items for the monster to pick up, so just always return the damage we've mitigated!
	takeDamage(baseAttack) {
	
	},

	// When the front end sees the monster is dead an we should level up, increment our `level` and our `attackMax` properties.
	levelUp() {
	
	},

	// When the game is reset, we'll need to put all of our regular properties (but not our methods, of course) back to where they started. Remember that those properties can be accessed and changed just like any variable!
	reset: function() {
	
	}
}