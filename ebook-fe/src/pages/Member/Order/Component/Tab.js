import { useState } from 'react'

function Tab(props) {
  const [tab, setTab] = useState('order')
  const onClickTab = (tab) => () => {
    setTab(tab)
  }

  return (
    <>
      <div
        className={`btn btn-primary tab_background ${
          tab === 'totalOrder' ? 'SingleOrder-active-state' : ''
        }`}
        onClick={onClickTab('totalOrder')}
      >
        所有訂單
      </div>
      <div
        className={`btn btn-primary tab_background ${
          tab === 'finishOrder' ? 'SingleOrder-active-state' : ''
        }`}
        onClick={onClickTab('finishOrder')}
      >
        已完成
      </div>
      <div
        className={`btn btn-primary tab_background ${
          tab === 'cancelOrder' ? 'SingleOrder-active-state' : ''
        }`}
        onClick={onClickTab('cancelOrder')}
      >
        已取消
      </div>
    </>
  )
}
export default Tab
