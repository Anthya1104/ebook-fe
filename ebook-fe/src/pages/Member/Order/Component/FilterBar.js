import React from 'react'
// import PriceRangeRadio from './PriceRangeRadio'
import newTab from './newTab'

function FilterBar(props) {
  const { tabTypes, tabs, setTabs } = props

  const handleChecked = (e) => {
    const value = e.target.value
    if (!tabs.includes(value)) return setTabs([...tabs, value])

    if (tabs.includes(value)) {
      const newTags = tabs.filter((v) => v !== value)
      setTabs(newTags)
    }
  }
  return (
    <>
      <div className={`btn btn-primary tab_background`}>已完成訂單</div>
      <div className={`btn btn-primary tab_background`}>已取消訂單</div>
      {tabTypes.map((value, i) => (
        <newTab
          value={value}
          key={i}
          tabs={tabs}
          handleChecked={handleChecked}
        />
      ))}
    </>
  )
}

export default FilterBar
