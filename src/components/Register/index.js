import Header from '../Header'
import RegisterContext from '../../context/RegisterContext'

import './index.css'

const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

// const topicsList = [
//   {
//     id: 'Arts and Culture',
//     displayText: 'Arts and Culture',
//   },
//   {
//     id: 'Career and Business',
//     displayText: 'Career and Business',
//   },
//   {
//     id: 'Education and Learning',
//     displayText: 'Education and Learning',
//   },
//   {
//     id: 'Fashion and Learning',
//     displayText: 'Fashion and Learning',
//   },
//   {
//     id: 'Games',
//     displayText: 'Games',
//   },
// ]

const Register = props => (
  <RegisterContext.Consumer>
    {value => {
      const {
        name,
        topic,
        changeName,
        changeTopic,
        showError,
        registerName,
        updateError,
      } = value

      console.log(topic)

      const submitRegistration = event => {
        event.preventDefault()

        if (name !== '' && topic !== '') {
          const {history} = props
          history.replace('/')
          registerName()
        } else {
          updateError()
        }
      }

      const onChangeName = event => {
        changeName(event.target.value)
      }

      const onChangeTopic = event => {
        changeTopic(event.target.value)
      }

      return (
        <>
          <Header />
          <div className="meet-register-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
              alt="website register"
              className="website-register"
            />
            <form className="form-container" onSubmit={submitRegistration}>
              <h1 className="register-heading">Let us join </h1>
              <label htmlFor="name" className="label-element">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="input-element"
                placeholder="Your Name"
                onChange={onChangeName}
              />
              <label htmlFor="topic" className="label-element" value={name}>
                TOPICS
              </label>
              <select
                id="topic"
                value={topic}
                onChange={onChangeTopic}
                className="input-element"
              >
                {topicsList.map(each => (
                  <option value={each.id} key={each.id}>
                    {each.displayText}
                  </option>
                ))}
              </select>

              <button type="submit" className="register-now-button">
                Register Now
              </button>
              {showError === true ? <p>Please enter your name</p> : ''}
            </form>
          </div>
        </>
      )
    }}
  </RegisterContext.Consumer>
)

export default Register
