# Fullstack-test-SKU
Requirements:

Stack - NodeJS, Express, Postgresql with React and app state management library (Redux, MobX or Recoil), TypeScript. Functional style is preferable. No UI frameworks, or style libraries, CSS/SCSS only.
Deploy using Google Cloud Platform. (Register for a free Google Cloudd Account - https://cloud.google.com/)

All assets (images, icons) are of your choice. Inline SVG is preferable.

## Task - Fetch Products from Shopify:
Build a simple single page app that:
- Fitches products from Shopify (Using Shopify api) - You can use REST APIs or GraphQL.
- Saves the products (And all product fiels) in a postgresql DB.
- Shows the products index page. (Design is given below, display fields based on your understanding of the design). 
***Use fetched Shopify data to create responsive card view for profucts with a header, toolbar and search.

### Shopify API Key
- Shopify API KEY: b4ae10a58cdad4e4107e31ba83a455b5
- Shopify API Pass: *Will be provided to you*

#### Optional subtask
Searching a product should show the search results without refreshing the page.


### Desgin
![Products page](https://arabian-giftcards.fra1.digitaloceanspaces.com/SKU.png)



## Optional Task - Refactor
Refactor below example to React functional component with hooks and TypeScript:

```javascript
import React, { Component } from "react";
import "bootswatch/journal/bootstrap.css";
// import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

import { Navbar, NavItem, Nav, Grid, Row, Col } from "react-bootstrap";

const PLACES = [
  { name: "Palo Alto", zip: "94303" },
  { name: "San Jose", zip: "94088" },
  { name: "Santa Cruz", zip: "95062" },
  { name: "Honolulu", zip: "96803" }
];

class WeatherDisplay extends Component {
  constructor() {
    super();
    this.state = {
      weatherData: null
    };
  }

  componentWillMount() {
    const zip = this.props.zip;
    const URL = "http://api.openweathermap.org/data/2.5/weather?q=" +
      zip +
      "&appid=b1b35bba8b434a28a0be2a3e1071ae5b&units=imperial";
    fetch(URL).then(res => res.json()).then(json => {
      this.setState({ weatherData: json });
    });
  }

  componentWillUnmount() {
    this.setState({ weatherData:null })
  }

  render() {
    const weatherData = this.state.weatherData;
    if (!weatherData) return <div>Loading</div>;
    const weather = weatherData.weather[0];
    const iconUrl = "http://openweathermap.org/img/w/" + weather.icon + ".png";
    return (
      <div>
        <h1>
          {weather.main} in {weatherData.name}
          <img src={iconUrl} />
        </h1>
        <p>Current: {weatherData.main.temp}°</p>
        <p>High: {weatherData.main.temp_max}°</p>
        <p>Low: {weatherData.main.temp_min}°</p>
        <p>Wind Speed: {weatherData.wind.speed} mi/hr</p>
      </div>
    );
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      activePlace: 0
    };
  }
  render() {
    const activePlace = this.state.activePlace;
    return (
      <div>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              React Simple Weather App
            </Navbar.Brand>
            <a href="https://github.com/ericvicenti/intro-to-react">Learn to build me</a>
          </Navbar.Header>
        </Navbar>
        <Grid>
          <Row>
            <Col md={4} sm={4}>
              <h3>Select a city</h3>
              <Nav
                bsStyle="pills"
                stacked
                activeKey={activePlace}
                onSelect={index => {
                  this.setState({ activePlace: index });
                }}
              >
                {PLACES.map((place, index) => (
                  <NavItem key={index} eventKey={index}>{place.name}</NavItem>
                ))}
              </Nav>
            </Col>
            <Col md={8} sm={8}>
              <WeatherDisplay key={activePlace} zip={PLACES[activePlace].zip} />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
```

# Submitting Results:
#### Task 1:
- Provide a github repository with the solution.
- Provide a link to access the deployed solution.

#### Task 2:
- Provide a github repository with the solution.

### Thank you and good luck :)

