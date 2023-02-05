import React, { Component } from "react";
import Nav from 'react-bootstrap/Nav'
import { LinkContainer } from "react-router-bootstrap";
import Tilt from 'react-parallax-tilt';

class Header extends Component {
  titles = [];

  constructor() {
    super();
    this.state = { checked: false };
    this.onThemeSwitchChange = this.onThemeSwitchChange.bind(this);
  }

  onThemeSwitchChange(checked) {
    this.setState({ checked });
    this.setTheme();
  }

  setTheme() {
    var dataThemeAttribute = "data-theme";
    var body = document.body;
    var newTheme =
      body.getAttribute(dataThemeAttribute) === "dark" ? "light" : "dark";
    body.setAttribute(dataThemeAttribute, newTheme);
  }

  render() {
    if (this.props.sharedData) {
      var name = this.props.sharedData.name;
      this.titles = this.props.sharedData.titles; //...map(x => [ x.toUpperCase(), 1500 ] ).flat();
    }

    const HeaderTitleTypeAnimation = React.memo( () => {
      return this.titles
    }, (props, prevProp) => true);

    return (
      <header id="home" style={{ height: window.innerHeight - 100, display: 'block' }}>
        <Nav activeKey="/home" fill style={{ position: 'absolute', top: 10, right: 10 }}>
          <Nav.Item> 
            <LinkContainer to="/">
              <Nav.Link href="/">Home</Nav.Link>
            </LinkContainer>
          </Nav.Item>
          <Nav.Item>        
            <LinkContainer to="/about">
              <Nav.Link eventKey="about">About</Nav.Link>
            </LinkContainer>
          </Nav.Item>
        </Nav>
        <div className="row aligner" style={{height: '100%'}}>
          <div className="col-md-12">
            <div>
            <Tilt tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            perspective={800}>
            <img className="glassCard" height="200px" src="images/profile_photo.jpeg" alt="Deshon" />
            </Tilt>
              <br/>
              <h1 className="mb-0">
                {name}
              </h1>
              <div className="title-container">
                <HeaderTitleTypeAnimation />
              </div>
              
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
