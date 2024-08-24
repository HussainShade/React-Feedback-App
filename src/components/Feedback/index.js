// Write your React code here.
import {Component} from 'react'

import './index.css'

class Feedback extends Component {
  state = {
    isClicked: false,
  }

  onFeedbackClicked = () => {
    this.setState({isClicked: true})
  }

  render() {
    const {isClicked} = this.state
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources

    return (
      <div className="app-container">
        {!isClicked ? (
          <div className="card-container">
            <h1 className="question">
              How satisfied are you with our customer support performance?
            </h1>
            <ul className="feedback-container">
              {emojis.map(emoji => (
                <li className="feedback" key={emoji.id}>
                  <button
                    className="feedback-btn"
                    type="button"
                    onClick={this.onFeedbackClicked}
                  >
                    <img
                      className="emoji"
                      src={emoji.imageUrl}
                      alt={emoji.name}
                    />
                  </button>
                  <p className="feedback-name">{emoji.name}</p>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div className="card-container">
            <img className="love-emoji" src={loveEmojiUrl} alt="love emoji" />
            <h1 className="question">Thank You!</h1>
            <p className="description">
              We will use your feedback to improve our customer support
              performance
            </p>
          </div>
        )}
      </div>
    )
  }
}

export default Feedback
