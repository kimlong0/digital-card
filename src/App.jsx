import './App.css'
import Description from "./Description"
import Links from "./Links"

export default function App() {
  return (
    <div className="App">
      <div className="main-container">
        <div className='logo-container'>
            <img src="./dist/assets/pfp.png" className="logo" alt="profile picture" />
        </div>
        <div className='description-container'>
          <h1 className='name'>Kimlong Nguyen</h1>
          <p className='speciality'>Frontend Developer</p>
          <a href="https://kimlong0.github.io/portfolio/" className="portfolio" target="_blank">portfolio.website</a>
          <div className="buttons">
            <a className='contact-link' href="mailto: ft.kimlong@gmail.com">
            <button className='contact-button email'><img src="./dist/assets/Mail.svg"/>Email</button>
            </a>
            <a className='contact-link' href='https://www.linkedin.com/in/kimlong-nguyen/' target="_blank">
              <button className='contact-button linkedin'><img src="./dist/assets/linkedin.svg"/>Linkedin</button>
            </a>
          </div>
          <Description />
        </div>
        <Links />
      </div>
    </div>
  )
}
