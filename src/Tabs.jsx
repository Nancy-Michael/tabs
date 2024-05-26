import React from 'react'
import TabsTest from './TabsTest'
import './style.css'


function RranomComponent() {
    return <h1>This is random component</h1>
}

const tabs = [
    {
        lable: 'Tab 1',
        content:'this is tab 1'
    },
    {
        lable: 'Tab 2',
        content:'this is tab 2'
    },
    {
        lable: 'Tab 3',
        content:<RranomComponent/>
    }
]

function handleChange(currentTabIndex) {
    console.log(currentTabIndex)
}

function Tabs() {
  return (
    <div>
      <TabsTest tabsContents={tabs} onChange={handleChange}/>
    </div>
  )
}

export default Tabs
