# Tic-Tac-Toe Web Application

A modern, interactive Tic-Tac-Toe game built with HTML, CSS, and JavaScript. Play against another player or challenge the computer!

## Features

### 🎮 Game Modes
- **Player vs Player**: Classic two-player gameplay
- **Player vs Computer**: Challenge the AI with smart move detection

### 🎯 Game Features
- **Smart AI**: Computer opponent that can win, block, and make strategic moves
- **Score Tracking**: Keep track of wins for both players
- **Visual Feedback**: Winning combinations are highlighted
- **Responsive Design**: Works perfectly on desktop and mobile devices
- **Modern UI**: Beautiful gradient design with smooth animations

### 🎨 Visual Elements
- **Animated Cell Placement**: Smooth animations when placing X's and O's
- **Winning Highlights**: Winning combinations pulse with special effects
- **Hover Effects**: Interactive feedback on all clickable elements
- **Gradient Backgrounds**: Modern color schemes throughout the interface

## How to Play

1. **Open the Game**: Open `index.html` in your web browser
2. **Choose Mode**: 
   - Leave the checkbox unchecked for Player vs Player mode
   - Check the "Play against Computer" checkbox for Player vs Computer mode
3. **Make Moves**: Click on any empty cell to place your mark (X or O)
4. **Win Conditions**: Get three of your marks in a row (horizontally, vertically, or diagonally)
5. **New Game**: Click "New Game" to start a fresh round
6. **Reset Score**: Click "Reset Score" to clear all win counts

## Game Logic

### Win Detection
The game checks for winning combinations across:
- **Rows**: Top, middle, and bottom rows
- **Columns**: Left, center, and right columns  
- **Diagonals**: Both diagonal directions

### Computer AI Strategy
When playing against the computer, the AI follows this priority:
1. **Win**: If the computer can win in one move, it will
2. **Block**: If the player can win in one move, the computer will block
3. **Strategic Placement**: Prefers center, then corners, then edges
4. **Random**: If no strategic move is available, makes a random move

## File Structure

```
Tic-Tac-Toe/
├── index.html      # Main HTML structure
├── styles.css      # CSS styling and animations
├── script.js       # Game logic and JavaScript functionality
└── README.md       # This documentation file
```

## Technical Details

### Technologies Used
- **HTML5**: Semantic structure and accessibility
- **CSS3**: Modern styling with Flexbox, Grid, and animations
- **JavaScript (ES6+)**: Object-oriented game logic with classes
- **Font Awesome**: Icons for enhanced UI
- **Google Fonts**: Poppins font family for modern typography

### Key Features
- **Object-Oriented Design**: Clean, maintainable code structure
- **Event-Driven Architecture**: Responsive user interactions
- **Responsive Design**: Mobile-first approach with media queries
- **Accessibility**: Proper ARIA labels and keyboard navigation support

### Browser Compatibility
- Chrome (recommended)
- Firefox
- Safari
- Edge

## Getting Started

1. **Download/Clone**: Get all the project files
2. **Open**: Double-click `index.html` or open it in your web browser
3. **Play**: Start playing immediately - no installation required!

## Customization

### Changing Colors
Edit the CSS variables in `styles.css`:
```css
:root {
    --primary-color: #667eea;
    --secondary-color: #764ba2;
    --success-color: #28a745;
    --danger-color: #dc3545;
}
```

### Modifying AI Difficulty
In `script.js`, you can adjust the `findBestMove()` method to change the computer's strategy.

## Future Enhancements

- [ ] Multiple difficulty levels for computer opponent
- [ ] Sound effects and background music
- [ ] Local storage to persist scores
- [ ] Multiplayer support over network
- [ ] Tournament mode with brackets
- [ ] Custom themes and skins

## Contributing

Feel free to fork this project and submit pull requests for improvements!

## License

This project is open source and available under the MIT License.

---

**Enjoy playing Tic-Tac-Toe!** 🎮 