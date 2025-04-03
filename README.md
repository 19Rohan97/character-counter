# Character Counter

A modern React application that analyzes text in real-time, providing character, word, and sentence counts along with estimated reading time.

## Features

- **Real-time Text Analysis**: Instantly see statistics as you type
- **Character Count**: Track the total number of characters with option to exclude spaces
- **Word Count**: Accurate word counting that ignores extra whitespace
- **Sentence Count**: Count sentences based on punctuation
- **Reading Time Estimation**: Approximate reading time calculation
- **Character Limit**: Optional character limit with visual feedback when exceeded
- **Dark/Light Mode**: Toggle between dark and light themes for comfortable viewing

## Technologies Used

- React 19.1.0
- Tailwind CSS 3.4.17
- Create React App

## Installation

1. Clone the repository:

   ```
   git clone https://github.com/your-username/character-counter.git
   cd character-counter
   ```

2. Install dependencies:

   ```
   npm install
   ```

3. Start the development server:

   ```
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Usage

1. Type or paste text into the text area
2. View real-time statistics in the cards below:
   - Total characters (with option to exclude spaces)
   - Word count
   - Sentence count
3. Toggle options:
   - Exclude spaces from character count
   - Set a character limit with custom value
4. Switch between dark and light modes using the toggle in the header

## Building for Production

```
npm run build
```

This creates an optimized production build in the `build` folder, ready for deployment.

## Screenshots

_[Add screenshots of the application here, showing both dark and light modes]_

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
