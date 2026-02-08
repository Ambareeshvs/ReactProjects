import React from 'react'

export default function Footer(props) {
    const {handleSideBarToggle, apiData} = props
  return (
    <footer>
        <div className="bgGradient"></div>
        <div>
            <h1>NASA Image Project</h1>
            <h2>{apiData?.title}</h2>
        </div>
        <button onClick={handleSideBarToggle}>
            <i className="fa-solid fa-circle-info"></i>
        </button>
    </footer>
  )
}
