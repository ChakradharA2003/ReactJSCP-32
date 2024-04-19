// Write your code here
import {Component} from 'react'

import './index.css'

const registrationsStatusConstants = {
  initial: 'INITIAL',
  registered: 'REGISTERED',
  yetToRegister: 'YET_TO_REGISTER',
  registrationsClosed: 'REGISTRATIONS_CLOSED',
}

class ActiveEventRegistrationDetails extends Component {
  initialView = () => (
    <div className="initial-container">
      <p className="initial-para">
        Click on an event,to view its registration details
      </p>
    </div>
  )

  yetToRegisterView = () => (
    <>
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
        className="yet-to-register-image"
      />
      <p className="yet-to-register-para">
        A live performance brings so much to your relationship with dance.Seeing
        dance live can often make you fall totally in love with this beautiful
        art form.
      </p>
      <button type="button" className="yet-to-register-btn">
        Register Here
      </button>
    </>
  )

  registeredView = () => (
    <>
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
        className="registered-image"
      />
      <h1 className="registered-para">
        You have already registered for the event
      </h1>
    </>
  )

  registrationsClosedView = () => (
    <>
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
        className="registrations-closed-image"
      />
      <h1 className="registrations-closed-heading">
        Registrations are Closed Now!
      </h1>
      <p className="registrations-closed-para">Stay tuned.We will reopen</p>
    </>
  )

  render() {
    const {status} = this.props
    let view
    switch (status) {
      case registrationsStatusConstants.initial:
        view = this.initialView()
        break
      case registrationsStatusConstants.registered:
        view = this.registeredView()
        break
      case registrationsStatusConstants.registrationsClosed:
        view = this.registrationsClosedView()
        break
      case registrationsStatusConstants.yetToRegister:
        view = this.yetToRegisterView()
        break
      default:
        view = this.initialView()
    }
    return <div className="registration-container">{view}</div>
  }
}
export default ActiveEventRegistrationDetails
