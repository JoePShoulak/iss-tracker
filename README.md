# ISS Tracker

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Deployment Link

Try it now! https://joepshoulak.github.io/iss-tracker/

## Summary

This project uses an API to get the current location of the ISS (International Space Station). It then uses p5 to render a visualization of both the Earth and the ISS onto a WebGL Canvas. Additional data and the technologies used are listed below. 

## Technologies Used

- The ISS location data is queried from the [WTIA](https://wheretheiss.at/w/developer) API. 
- The visualization of the ISS is done using WebGL, but through the [p5](https://p5js.org/) library (one of my favorites). 
- The app is running on [React](https://reactjs.org/), and to make that happen I used [react-p5-wrapper](https://www.npmjs.com/package/react-p5-wrapper).