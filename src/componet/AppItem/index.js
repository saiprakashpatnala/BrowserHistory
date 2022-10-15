import './index.css'

const AppItem = props => {
  const {details, delItem} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = details

  const del = () => {
    delItem(id)
  }

  return (
    <li className="list-item">
      <div className="img-con">
        <p>{timeAccessed}</p>
        <img src={logoUrl} className="logo" alt="domain logo" />
        <p>{title}</p>
        <p>{domainUrl}</p>
      </div>
      <button className="button" type="button" onClick={del} testid="delete">
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default AppItem
