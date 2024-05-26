import React, { useState } from 'react'

function TabsTest({ tabsContents, onChange }) {

    const [currentTabIndex, setCurrentTabIndex] = useState(0);

    function handleOnClick(getCurrentIndex) {
        setCurrentTabIndex(getCurrentIndex)
        onChange(getCurrentIndex)
    }

  return (
    <div className='wrapper'>
          <div className="heading">
              {
                  tabsContents.map((tabItem,index) => (
                      <div className={`tab-item ${currentTabIndex===index?'active':''}`}
                          onClick={() => handleOnClick(index)}
                          key={tabItem.lable}>
                          <span>{tabItem.lable}</span>
                      </div>
                  ))
              }
          </div>
          <div className='content' style={{color:'red'}}>
          {
              tabsContents[currentTabIndex] && tabsContents[currentTabIndex].content
          }
      </div>
    </div>
  )
}

export default TabsTest
