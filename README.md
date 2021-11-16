# The Philosophy Game

## Overview

This app is a variation of the classic rock-paper-scissors game, but instead of choosing rock, paper, or scissorts, players choose philosophers. The user plays as the human player and the program makes random chances as the computer player. There are two editions of the game: 'Classical' and 'Existentialism'. The classical edition offers three choices: Socrates, Plato, and Aristotle. The existentialism edition offers five choices: Fyodor Dostoevsky, Jean-Paul Sartre, Søren Kierkegaard, Friedrich Nietzsche, and Albert Camus.

## How Does It Work?

1. When the app loads, two large buttons appear in the middle of the screeen. The user is prompted to choose which edition to play. The rules for each edition are displayed on the buttons.

<img width="1440" alt="Screen Shot 2021-11-16 at 7 57 07 AM" src="https://user-images.githubusercontent.com/65195952/142008903-5e9db73d-cf3f-42c9-9760-de9318b89dad.png">

2. If the user has played the game before, and has not cleared local storage, previous wins are displayed upon page load.

<img width="1440" alt="Screen Shot 2021-11-16 at 7 21 47 AM" src="https://user-images.githubusercontent.com/65195952/142007317-3ff3ef2f-7059-4eca-8981-4228fba670d9.png">

3. Once the user selects an edition to play, portraits of each philosopher are displayed in the middle of the screen. The user is now prompted to choose a philosopher. When the user hovers over the available choices, the portrait enlarges slightly, and the cursor changes to a pointer to entice the user to click one of the choices.

<img width="1440" alt="Screen Shot 2021-11-16 at 7 22 40 AM" src="https://user-images.githubusercontent.com/65195952/142007432-9155e26f-9e89-4cfc-8179-f0b3603849fd.png">

4. Once the user makes a selection, the buttons go away and the results are dipslayed. The user's choice is diplsayed on the left, while the computer's is displayed on the right, which correspond to the sides of the screen the player's scores are displayed.

5. The results view tells the user whether they won, lost, or tied. If the user wins, the selection on the left is shown with a green border and the user's icon is displayed below the user's choice, showing that the user's choice did, indeed, win.

<img width="1440" alt="Screen Shot 2021-11-16 at 7 19 48 AM" src="https://user-images.githubusercontent.com/65195952/142007926-e070f41d-576f-40e4-9758-a2c50633a793.png">

6. If the computer wins, the selection on the right is shown with a red border and the computer's icon is displayed below the winning choice, indicating that the computer won, and what the computer chose.

<img width="1440" alt="Screen Shot 2021-11-16 at 7 20 43 AM" src="https://user-images.githubusercontent.com/65195952/142008007-d005a0e8-b273-4091-84b9-df26126b87c8.png">

7. If the user and the computer chose the same selection, the same image is displayed twice, indicating that both players chose the same selection, both images are shown with a black border, and no icon is shown below, indicating that it was, in fact, a tie.

<img width="1440" alt="Screen Shot 2021-11-16 at 7 20 24 AM" src="https://user-images.githubusercontent.com/65195952/142008080-28239ab0-9576-4fa6-acf1-b2c5ab2195ed.png">

8. Additionally, a quote is shown below the results, and four seconds are given for the user to read the quote. This quote corresponds with the winning choice. For instance, if the winning choice was Socrates, one of Socrates' quotes will be displayed. There are three quotes for each philosopher and are chosen according to whether the user won, lost, or tied. For example, if the user wins with Socrates, the quote will be, *"The only true wisdom is in knowing that you know nothing."* If the computer wins with Socrates, the quote will be *"The unexamined life is not worth living."* If both players choose Socrates, the quote will be *"There is only one good, knowledge, and one evil, ignorance."*

<img width="1440" alt="Screen Shot 2021-11-16 at 7 54 14 AM" src="https://user-images.githubusercontent.com/65195952/142008383-f6e84048-9640-4271-8d88-c74584f8151b.png">

9. Once the user has made at least one selection, a button appears on the left side of the screen, which allows the user to choose another game. Once clicked, the user is taken back to the home screen and is now able to choose a new game.

<img width="1440" alt="Screen Shot 2021-11-16 at 7 55 06 AM" src="https://user-images.githubusercontent.com/65195952/142008523-713017e8-1772-4212-90da-511f9b89685b.png">

10. If there is any data in local storage, a button is shown on the right side of the page that allows the user to clear local storage and set the scores back to zero. The "Reset Scores" button is hidden once clicked.

<img width="1440" alt="Screen Shot 2021-11-16 at 7 57 07 AM" src="https://user-images.githubusercontent.com/65195952/142008903-5e9db73d-cf3f-42c9-9760-de9318b89dad.png">

11. All buttons enlarge slightly when the user hovers over them with the cursor, indicating that they are clickable. Some also change color slightly. The 'Change Game" and "Reset Scores" buttons are disabled while the results are displayed. While disabled, these buttons do not enlarge, or change color, and the cursor does not turn into a pointer, making it obvious to the user that these are not clickable.

<img width="1440" alt="Screen Shot 2021-11-16 at 7 56 27 AM" src="https://user-images.githubusercontent.com/65195952/142008782-778fbb6f-b743-46c8-8e34-74a68990c4e5.png">


## Contributors

- Turing School of Software & Design Frontend Students
  - Phil Lewis

## Future Feature Additions

- Add more games, such as "Ethics" and "Metaphysics."

## Technologies Used

-HTML, CSS, Javascript

The spec for this project can be found [here](https://frontend.turing.edu/projects/module-1/rock-paper-scissors-solo.html){:target="_blank"}.

## Installation Instructions

- Fork this project to your own Github account
- Clone the repository to your local machine
- `cd` into the project
- Run open `index.html` to see the app and play the game