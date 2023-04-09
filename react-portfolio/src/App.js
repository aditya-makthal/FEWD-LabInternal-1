import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <header id="home">
        <h1>Welcome to My Portfolio</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel urna nec neque hendrerit malesuada. Ut fringilla massa in magna consectetur, in rhoncus urna volutpat. Donec tincidunt aliquam dolor, ut tempor metus.</p>
      </header>
      <section id="about">
        <h2>About Me</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel urna nec neque hendrerit malesuada. Ut fringilla massa in magna consectetur, in rhoncus urna volutpat. Donec tincidunt aliquam dolor, ut tempor metus.</p>
      </section>
      <section id="portfolio">
        <h2>Portfolio</h2>
        <div className="card">
          <img src="https://www.w3schools.com/w3images/lights.jpg" alt="Project 1" />
          <div className="card-body">
            <h5 className="card-title">Project 1</h5>
            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fringilla, sapien ut commodo sodales, nisi ex tincidunt quam, at consectetur lectus dolor vel nisi.</p>
            <a href="#" className="btn btn-primary">View Project</a>
          </div>
        </div>
      </section>
      <section id="contact">
        <h2>Contact Me</h2>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" className="form-control" id="name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" className="form-control" id="email" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea className="form-control" id="message" rows="3"></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </section>
    </div>
  );
}

export default App;
