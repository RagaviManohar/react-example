import React from 'react'
import PropTypes from 'prop-types'

export const ReactCompNewWay = ({ children }) => (
  <div
    style={{
      marginLeft: '20px',
      marginRight: '20px',
      border: '1px solid green',
      marginTop: '20px',
      padding: '20px',
    }}
  >
    {children}
  </div>
)

ReactCompNewWay.propTypes = {
  children: PropTypes.node.isRequired,
}

ReactCompNewWay.defaultProps = {}

ReactCompNewWay.Header = ({ borderColor, children, onCloseClick }) => (
  <div
    style={{
      borderBottom: `1px solid ${borderColor}`
    }}
    className="d-flex justify-content-between"
  >
    {children}

    {onCloseClick &&
      <button
        style={{
          border: 'none',
          backgroundColor: 'transparent',
          color: "red",
        }}
        onClick={onCloseClick}
      >
        X
      </button>
    }
  </div>
)

ReactCompNewWay.Header.propTypes = {
  borderColor: PropTypes.string,
  children: PropTypes.node.isRequired,
  onCloseClick: PropTypes.func,
}

ReactCompNewWay.Header.defaultProps = {
  borderColor: 'green',
  onCloseClick: null,
}

ReactCompNewWay.Title = ({ title, textColor }) => (
  <h4 style={{ color: textColor }} >{title}</h4>
)

ReactCompNewWay.Title.propTypes = {
  title: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
}

ReactCompNewWay.Title.defaultProps = {
  textColor: 'green'
}

ReactCompNewWay.Body = ({ children }) => (
  <div>
    {children}
  </div>
)

ReactCompNewWay.Body.propTypes = {
  children: PropTypes.node.isRequired,
}

ReactCompNewWay.Body.defaultProps = {}

ReactCompNewWay.Footer = ({ borderColor, label, value }) => (
  <div style={{ borderTop: `1px solid ${borderColor}` }} >
    <p>
      {label}: <span>{value}</span>
    </p>
  </div>
)

ReactCompNewWay.Footer.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  borderColor: PropTypes.string,
}

ReactCompNewWay.Footer.defaultProps = {
  borderColor: 'green',
}

export default ReactCompNewWay
