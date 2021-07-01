import React from 'react'
import PropTypes from 'prop-types'

export const ReactCompOldWay = ({ headerDetails, children, footerDetails }) => {
  return (
    <div
      style={{
        marginLeft: '20px',
        marginRight: '20px',
        border: '1px solid green',
        marginTop: '20px',
        padding: '20px',
      }}
    >
      <div
        style={{
          color: headerDetails.textColor,
          borderBottom: `1px solid ${headerDetails.borderColor}`
        }}
        className="d-flex justify-content-between"
      >
        <h4>{headerDetails.title}</h4>

        {headerDetails.onCloseClick &&
          <button
            style={{
              border: 'none',
              backgroundColor: 'transparent',
              color: headerDetails.textColor,
            }}
            onClick={headerDetails.onCloseClick}
          >
            X
          </button>
        }
      </div>

      <div>
        {children}
      </div>

      {footerDetails &&
        <div style={{ borderTop: `1px solid ${footerDetails.borderColor}` }} >
          <p>
            {footerDetails.label}: <span>{footerDetails.value}</span>
          </p>
        </div>
      }
    </div>
  )
}

ReactCompOldWay.propTypes = {
  headerDetails: PropTypes.shape({
    title: PropTypes.string.isRequired,
    textColor: PropTypes.string,
    borderColor: PropTypes.string,
    onCloseClick: PropTypes.func
  }),
  children: PropTypes.node.isRequired,
  footerDetails: PropTypes.shape({
    borderColor: PropTypes.string,
    label: PropTypes.string,
    value: PropTypes.string,
  })
}

export default ReactCompOldWay
