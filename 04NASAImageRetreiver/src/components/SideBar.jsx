import React from 'react'

export default function SideBar(props) {
    const {handleSideBarToggle, apiData} = props
  return (
    <div className="sidebar">
            <div className="bgOverlay"></div>
            <div className="sidebarContents">
                <h2>{apiData?.title}</h2>
                <div className="descriptionContainer">
                    <p className="descriptionTitle">{apiData?.date}</p>
                    <p>{apiData?.explanation}</p>
                </div>
                <button onClick={handleSideBarToggle}>
                    <i className="fa-solid fa-arrow-right"></i>
                </button>
            </div>
        </div>
  )
}
