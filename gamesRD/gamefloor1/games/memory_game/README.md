# Memory Game Project | Udacity FEND Nanodegree | 2018
Project 2 for Udacity's Front-End Web Developer Nanodegree course; completed as part of the Grow with Google Scholarship Program, 2018.

## Authors

Jacob W. Olson

## Getting Started

1. Clone the repository to create a copy on your local machine. Click [here](https://help.github.com/articles/cloning-a-repository/ "GitHub Help — Clone a Repository") for help with this task from GitHub.

2. Open the `index.html` file in your browser. Some tips for doing this from Help Desk Geek are available [here](https://helpdeskgeek.com/how-to/open-an-html-file-in-google-chrome/ ).

    * As an alternative to steps one and two, you can run the repository's `index.html` file on [HTML Preview](http://htmlpreview.github.io/?https://github.com/jacobwolson/memory_game_project--udacity_fend_nanodegree--grow_with_google_scholarship_program--2018/blob/master/index.html).

3. Start playing!

## Playing the Game

* The deck contains eight pairs of matching cards.
* Click a card to reveal its icon.  
* Click another card to see if it's a match.
* If two cards selected in consecutive order are a match, they will stay flipped open.

![Alt text](https://res.cloudinary.com/dnyzg8tsw/image/upload/v1530592900/Udacity%20FEND%20Nanodegree/Cards_Matched_Example_392x452.png "A pair of matched cards will stay open if clicked in consecutive order.")    

* If two cards selected in consecutive order are not a match, they will flip upside-down again, concealing their icons.
* Remember which card is where 🤔 and try to pick all matching pairs of cards in as few clicks as possible!
* When all matching pairs have been selected, the game is complete. Your star rating -- based on how few clicks it took you to win --     and your time will be revealed.
* Play again to exercise your brain some more and to see if you can improve your stats!

## Dependencies

* Card icons from [Font Awesome 4.6.1](https://maxcdn.bootstrapcdn.com/font-awesome/4.6.1/css/font-awesome.min.css).
* Page font "Coda" from [Google Fonts](https://fonts.googleapis.com/css?family=Coda).
* Background image from [Subtle Patterns](https://www.toptal.com/designers/subtlepatterns/geometry-2/).


## Acknowledgements

* Udacity.com supplied the initial HTML and stylings for this project, excluding the timer and the popover HTML and stylings, which are by the author and any further sources acknowledged. Udacity supplied significant hints for writing the JavaScript as comments in a supplied `.js` file. 

  * The starter code from Udacity furthermore included all three dependencies listed above.

* The code for the shuffle function has its origins in the Fisher Yates shuffle algorithm, also known as the Knuth shuffle. The function as used in the project was provided by Udacity as part of the starter code for the project. Udacity grabbed the code from a post by user "CoolAJ86" at http://stackoverflow.com/a/2450976, and CoolAJ86 cites the original post by Ashley Pond V. — Pond posted a JavaScript version of the Fisher-Yates/Knuth shuffle at http://sedition.com/perl/javascript-fy.html, and notes an update to the function per feedback from David Sletten.

* The code for keeping the deck height equal to the deck width as the latter changes proportional to the window was inspired by a post by user "Hussein" at https://stackoverflow.com/questions/5445491/height-equal-to-dynamic-width-css-fluid-layout.

* The code for the timer was inspired by the post "How to Create a Stopwatch in JavaScript" by John Zenith at https://www.ostraining.com/blog/coding/stopwatch/. 

* The use of event delegation for the functionality linked to clicking a card was inspired by fellow Udacity student Matthew Cranford, who suggested the method in his post https://matthewcranford.com/memory-game-walkthrough-part-2-toggling-cards/.

* This README was based on a template provided by Billie Thompson posting under the name "PurpleBooth" at https://gist.github.com/PurpleBooth/109311bb0361f32d87a2. A post by Matias Singers posting under the username "matiassingers" at https://github.com/matiassingers/awesome-readme was also consulted.

* Udacity's FEND Nanodegree program provided the structure and much of the information I needed to learn the basics of HTML, CSS and JavaScript, which allowed me to successfully complete this project. My fellow Udacity students as well as the wider programming community also provided indispensable information, resources, support and encouragement.

* Funding for my learning through Udacity including this project comes courtesy of the Grow with Google Scholarship program.
