import React from 'react';
import './AboutPage.css';

class AboutPage extends React.Component{
  componentDidMount = () => {
    if(this.props.error){
      this.props.resetError()
    }
  }
  
  render(){
    return(
      <section className='about-info'>
        <h2>About Us...</h2>
        <p>
          Hi There,
        </p>
        <p>
          Welome to the Ultimate Moviegoers Guide. We hope that you find just the movie you are looking for!
          Use our interactive application to search for your favorite movies! Happy Movie Watching!
        </p>
        <p>
          Sincerely, <span className='signature'>The Ultimate Moviegoers Guide Team</span>
        </p>
      </section>
    )
  }
}

export default AboutPage;