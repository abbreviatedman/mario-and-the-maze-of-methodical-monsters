function newMonster(level) {
	return {
		level: level,
		isAlive: true,
		hitPoints: 30,
		attackMin: level,
		attackMax: (level + 1) * 2,
		armor: level,
		
		// This method will calculate an attack damage based on the monster's attackMin and attackMax and return it for our `attack` method's use.
		getAttackDamage: function() {
			// Get the difference between `this.attackMax` and `this.attackMin` (adding 1 to it if you like your ranges inclusive) and put it in a variable.


			// Now return a random number in that range plus `this.attackMin`.

		},

		// This method calculates the  damage the monster should have for this attack using `this.getAttackDamage`, then passes that to the PLAYER'S `takeDamage` method. Finally, it takes the return value of the player's `takeDamage` method and returns it in turn. That way, the front end can figure out what to tell the user about damage that's been done.
		attack: function() {

		},

		// This method handles the player's damage dealt. Its returning of two different types of data (a string or a number) is non-standard and generally bad practice. But hey at least... itsa me, Mario?
		takeDamage(baseAttack) {
			// First, mitigate that base attack damage by subtracting our armor from it. That result is how much damage we're taking, and we'll need to return it, so keep it around in a variable. 


			// Then subtract that value from our hit points... unless the value is less than 0, in which case we shouldn't subtract anything at all (or subtract 0, same thing).


			// If our hit points are now at or below 0, set our `isAlive` property to false and then return the return value of calling our `dropItem` method.


			// As long as our hit points are above 0, return the damage we took.
		
		},

		// This method is the real doozy of our monster objects. We're going to calculate whether to return a weapon or an armor piece, as well as which particular item, and tell the front end what happened so it can tell the user.
		dropItem: function() {
			// First, randomly flip a coin (a 50/50 chance) and go to an armor block of code or a weapon block of code.

				// Now for both the armor and weapon parts, get a random index for that particular array (the ones in `weapons.js` and `armor.js`!). Optionally, increase the index by the monster's level, so that harder monsters give better items. if you do this, adjust the index to make sure it doesn't go out of bounds!


				// Now IF the new armor or weapon is the one the player currently owns, return an empty string so the front end knows what's up.


				// If not, set the new item as the player's and return `armor` or `weapon` depending on which we got.
		
			}
	}
}