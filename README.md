# FT Search

This app was built as the solution to a tech test set by the <em>Financial Times</em>. It allows users to search the <em>FT</em>’s archives by keyword. Searching for ‘brexit’, for example, returns a list of Brexit-related headlines. Each headline is dated and links to the article.

![screenshot](/public/images/ScreenShot.png)

The app is deployed on Heroku at https://ft-search-test.herokuapp.com/.

To run it on your machine, clone this repo, run `npm install` to install the dependencies, then `npm start` and navigate to http://localhost:3000/ in your browser.

Tests are written in Jest and are run with the `npm test` command.

### Test Requirements

In keeping with the test instructions, the app is:

<strong>Server-rendered</strong>
* All important processing is rendered server-side

<strong>Progressively Enhanced</strong>
* Enhanced with CSS
* Browser-agnostic
* Doesn't use script tags
* Works on mobile/tablet

<strong>Responsive</strong>
* Uses the viewport meta tag to allow it to be viewed on mobile
* Font-sizes are defined in vw units
* Laid out with the <em>FT</em>’s responsive framework, o-grids
* The form is laid out using the <em>FT</em>’s o-forms components
* Padding and positioning is defined with percentages to make them scalable

<strong>Accessible</strong>
* Uses header tags in their proper order so as not to confuse screenreaders
* Form field and button are clearly labelled
* The site is entirely keyboard navigable
* The contrast ratio is 19:1, easily in keeping with WCAG standards

### Bonus Points

In addition, the app meets the following bonus criteria:
1. It is built using Javascript and Node.js
2. It is deployed on [Heroku](https://ft-search-test.herokuapp.com/)
3. It does not rely on front-end frameworks
4. It has a similar look and feel to ft.com
5. It is performant over 3G networks
6. It uses Origami components
