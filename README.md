# drunk-grenadier: 120-Set-Game
<br>
@rogercamps <br>
@HJBowers

## Description
Set is a game with a small set of rules. This game can be implemented in any technology, although it is a perfect candidate for React because of the real-time nature of the game play.

This goal will challenge your ability to take a formal, defined system from the real world and replicate it in code. You will start with all of the logic of the system (the rules of the game) and most of the UI already designed (use the card graphics). Your work will be mainly in deciding how to replicate that formal logic and user interface using JavaScript, HTML, and CSS.



## Specifications
- [X] **Monday:**  App has one page that displays the full game
- [X] **Monday:**  Deck has 81 shuffled cards
- [X] **Monday:**  When launched, game deals 12 cards from deck in a 4x3 grid
- [X] **Tuesday:** Player can press a button to reset the game
- [X] **Tuesday:** When pressed, deck is regenerated and reshuffled and a new grid is dealt
- [/] **Tuesday:** Player can press a button to deal 3 more cards into the grid (now 5x3)
- [/] **Wednesday:** Player can click to select 3 cards and UI will indicate that the cards have been “selected”
- [/] **Wednesday:** When the player selects 3 cards that are a set, the cards are replaced with new ones and the player’s score increments by 1
- [X] **Wednesday:** When the player selects 3 cards that are not a set, the player is shown a temporary error message (“Not a set”) and the cards are automatically de-selected
- [ ] **Thursday:** When there are no more cards in the deck or remaining cards have no sets in them, game is over
- [ ] **Thursday:** “Game Over” message is displayed
- [X] **Thursday:** “New Game” button is displayed, which starts a new game if clicked
- [X] **Thursday:** Player has a score (starts at 0)
- [ ] **Friday:** Cards and their graphics are rendered with CSS shape tricks (not images)
<br>

<br>
- [ ]  Game logic is separated from the rendering logic.
- [ ]  All major features are added via pull requests with a clear description and concise commit messages.
- [ ]  Code uses a linter and there are no linting errors.
- [ ]  Variables, functions, files, etc. have appropriate and meaningful names.
- [ ]  Functions are small and serve a single purpose.
- [ ]  The artifact produced is properly licensed, preferably with the MIT license.

## Stretch
- [ ] Implement multiplayer Set. More than one player can play at once on the same deck.
- [ ]  Each player writes their own name when they join the game
- [ ]  Each player has a score on a scoreboard next to their name (starting at 0)
- [ ]  Once one player selects a card, the grid is frozen for other players
- [ ]  Player has 5 seconds to select the two other cards
- [ ]  Countdown timer is displayed to the selecting player
- [ ]  If 5 seconds pass and they don’t select all 3 cards, all their cards are de-selected and the grid is “unfrozen” (other players can select again)
- [ ]  All players are notified of the player who is currently selecting (using their name)
- [ ]  When a player selects a set, all players are notified of who got the set with a temporary message
- [ ]  When game is over, scoreboard is displayed to all players
