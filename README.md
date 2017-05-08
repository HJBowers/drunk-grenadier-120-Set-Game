# drunk-grenadier
120-Set-Game
@rogercamps
@HJBowers

## Specifications
 App has one page that displays the full game
 Deck has 81 shuffled cards
 When launched, game deals 12 cards from deck in a 4x3 grid
 Player has a score (starts at 0)
 Player can press a button to reset the game
 When pressed, deck is regenerated and reshuffled and a new grid is dealt
 Player can press a button to deal 3 more cards into the grid (now 5x3)
 Player can click to select 3 cards and UI will indicate that the cards have been “selected”
 When the player selects 3 cards that are a set, the cards are replaced with new ones and the player’s score increments by 1
 When the player selects 3 cards that are not a set, the player is shown a temporary error message (“Not a set”) and the cards are automatically de-selected
 When there are no more cards in the deck or remaining cards have no sets in them, game is over
 “Game Over” message is displayed
 “New Game” button is displayed, which starts a new game if clicked
 Cards and their graphics are rendered with CSS shape tricks (not images)
 Game logic is separated from the rendering logic.
 Repository includes a README file with basic installation and setup instructions.
 All dependencies are properly declared in package.json.
 All major features are added via pull requests with a clear description and concise commit messages.
 Code uses a linter and there are no linting errors.
 Variables, functions, files, etc. have appropriate and meaningful names.
 Functions are small and serve a single purpose.
 The artifact produced is properly licensed, preferably with the MIT license.
Stretch

As a stretch goal, implement multiplayer Set. More than one player can play at once on the same deck.

 Each player writes their own name when they join the game
 Each player has a score on a scoreboard next to their name (starting at 0)
 Once one player selects a card, the grid is frozen for other players
 Player has 5 seconds to select the two other cards
 Countdown timer is displayed to the selecting player
 If 5 seconds pass and they don’t select all 3 cards, all their cards are de-selected and the grid is “unfrozen” (other players can select again)
 All players are notified of the player who is currently selecting (using their name)
 When a player selects a set, all players are notified of who got the set with a temporary message
 When game is over, scoreboard is displayed to all players
