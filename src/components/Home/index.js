import {Link} from 'react-router-dom'

import Header from '../Header'
import RegisterContext from '../../context/RegisterContext'

import './index.css'

// const topicsList = [
//   {
//     id: 'ARTS_AND_CULTURE',
//     displayText: 'Arts and Culture',
//   },
//   {
//     id: 'CAREER_AND_BUSINESS',
//     displayText: 'Career and Business',
//   },
//   {
//     id: 'EDUCATION_AND_LEARNING',
//     displayText: 'Education and Learning',
//   },
//   {
//     id: 'FASHION_AND_BEAUTY',
//     displayText: 'Fashion and Learning',
//   },
//   {
//     id: 'GAMES',
//     displayText: 'Games',
//   },
// ]

const Home = () => (
  <RegisterContext.Consumer>
    {value => {
      const {isRegistered, name, topic} = value

      return (
        <div className="app-container">
          <Header />
          {isRegistered === true ? (
            <div className="home-container">
              <h1 className="heading"> Hello {name}</h1>
              <p className="description"> Welcome to {topic} </p>

              <img
                src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                alt="meetup"
                className="meet-up"
              />
            </div>
          ) : (
            <div className="home-container">
              <h1 className="heading"> Welcome to Meetup</h1>
              <p className="description"> Please register for the topic </p>

              <Link to="/register">
                <button type="button" className="register-button">
                  Register
                </button>
              </Link>

              <img
                src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                alt="meetup"
                className="meet-up"
              />
            </div>
          )}
        </div>
      )
    }}
  </RegisterContext.Consumer>
)

export default Home
