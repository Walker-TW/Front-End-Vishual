<div align="center">

[![MIT License][license-shield]][license-url]
![Javascript][Javascript]
![React][react]
![CSS][cssCommits]
![HTML commits][htmlCommits]
![NodeJS][NodeJS]
[![LinkedIn][linkedin-shield]][linkedin-url]

</div>
<p align="center">
  <h1 align="center">The Vishual Project</h3>

  <p align="center">
    A single page web app music visualiser that dynamically creates animation based on data returned by the Spotify WEB API.
  </p>
</p>
<div align= "center">

  [*About The Project*](#About-The-Project) | [*The Team*](#The-Team) | [*Getting Started*](#Getting-Started) | [*Running The Program*](#Running-The-Program) | [*Back End*](#The-Back-End) | [*License*](#license)

</div>

## About The Project

![product-screenshot](/public/images/Screentshot.png?raw=true)

The project takes the song data of whatever is being played on a users Spotify account to create a visual that reacts based on user input. The visuals are dynamically created based upon data taken using Spotify's Web API on the song that has been chosen. 

The parameters used to render the visuals on screen include;

- Song Key - which chooses a colour palette
- Danceability - which determines the number of circles on screen
- Song Energy - which determines the speed of the circles
- Valence (or positivity) - which creates a randomised seed of circle size

## The Team

- [Alicia Merlino](https://github.com/acmerlino1)
- [Tom Walker](https://github.com/Walker-TW)
- [Lucian Boatright](https://github.com/lucianboatright)
- [Vish Mayer](https://github.com/Vish-Mayer)

## Getting Started

1. Clone the repository along with the backend server [Back-End-Vishual](https://github.com/Walker-TW/Back-End-Vishual).

```sh
git clone https://github.com/Walker-TW/Front-End-Vishual

git clone https://github.com/Walker-TW/Back-End-Vishual
```

2. Install NPM.

```
$ npm install
```

3. Install NPM packages

```sh
npm install
```

## Running the program

1. Run NPM start to begin the server.

```
$ npm start
```

2. Open your desired port (which will default to [http://localhost:3000](http://localhost:3000) ) to view it in the browser.

3. Sign in to Spotify using their secure server and then play a song via your phone or desktop.

4. Enjoy!

## The Back End

WARNING!!!

The project will not run without the Node.JS server running in another terminal window we would suggest running that directory first before running NPM start.

For directions on running the back end server please visit that portion of the project found [here](https://github.com/Walker-TW/Back-End-Vishual).

## The Visualiser

Image of app being run, and React components highlighted.

![image](src/vishuliser_progect.png)


## License

Distributed under the MIT License. See `LICENSE` for more information.

[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=flat-square
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=flat-square&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/thomas-w-walker 
[React]: https://img.shields.io/badge/React-blue.svg
[Javascript]: https://img.shields.io/badge/JavaScript-yellow.svg
[cssCommits]: https://img.shields.io/badge/CSS-red.svg
[htmlCommits]: https://img.shields.io/badge/HTML-orange.svg
[NodeJS]: https://img.shields.io/badge/Node.JS-darkgreen.svg
