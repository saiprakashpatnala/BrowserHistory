import {Component} from 'react'

import AppItem from '../AppItem'

import './index.css'

const initialHistoryList = [
  {
    id: 0,
    timeAccessed: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
    title: 'Instagram',
    domainUrl: 'instagram.com',
  },
  {
    id: 1,
    timeAccessed: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
    title: 'Twitter. It’s what’s happening / Twitter',
    domainUrl: 'twitter.com',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook – log in or sign up',
    domainUrl: 'facebook.com',
  },
  {
    id: 3,
    timeAccessed: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
    title: 'LinkedIn: Log In or Sign Up',
    domainUrl: 'linkedin.com',
  },
  {
    id: 4,
    timeAccessed: '04:00 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
    title: 'Hashnode: Everything you need to start blogging as a developer!',
    domainUrl: 'hashnode.com',
  },
  {
    id: 5,
    timeAccessed: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
    title: 'GitHub: Where the world builds software · GitHub',
    domainUrl: 'github.com',
  },

  {
    id: 6,
    timeAccessed: '02:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'reactjs.org',
  },
  {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'stackoverflow.com',
  },

  {
    id: 8,
    timeAccessed: '09:25 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
    title: 'Gmail',
    domainUrl: 'mail.google.com',
  },
  {
    id: 9,
    timeAccessed: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    title: 'Google',
    domainUrl: 'google.com',
  },
]

class SearchItem extends Component {
  state = {val: '', arr: initialHistoryList}

  setVal = event => {
    this.setState({val: event.target.value})
  }

  delItem = id => {
    const {arr} = this.state
    const result = arr.filter(each => each.id !== id)
    this.setState({arr: result})
  }

  render() {
    const {val, arr} = this.state
    const filterResults = arr.filter(each =>
      each.title.toLowerCase().includes(val.toLowerCase()),
    )

    return (
      <div className="bg-con">
        <div className="inp-con">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            className=""
            alt="app logo"
          />
          <div className="search-con">
            <img
              src="https://assets.ccbp.in/frontend/react-js/search-img.png"
              className="sea"
              alt="search"
            />
            <input
              type="search"
              className="inp"
              value={val}
              onChange={this.setVal}
            />
          </div>
        </div>
        <div>
          {filterResults.length > 0 ? (
            <ul className="list-con">
              {filterResults.map(each => (
                <AppItem details={each} key={each.id} delItem={this.delItem} />
              ))}
            </ul>
          ) : (
            <p>There is no history to show</p>
          )}
        </div>
      </div>
    )
  }
}

export default SearchItem
