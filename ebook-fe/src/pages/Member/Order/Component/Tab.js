import { useState } from 'react'

function Tab(props) {
  const [tab, setTab] = useState('')
  const onClickTab = (tab) => () => {
    setTab(tab)
  }

  return (
    <>
      <div
        className={
          tab === 'totalOrder'
            ? 'btn  tab_background btn-primary-reverse SingleOrder-active-state'
            : 'btn  tab_background btn-primary-reverse '
        }
        onClick={onClickTab('totalOrder')}
      >
        <p className="btn_word">所有訂單</p>
      </div>
      <div
        className={
          tab === 'finishOrder'
            ? 'btn  tab_background btn-primary-reverse tab_fix SingleOrder-active-state'
            : 'btn  tab_background btn-primary-reverse tab_fix'
        }
        onClick={onClickTab('finishOrder')}
      >
        <p className="btn_word">已完成</p>
      </div>
      <button
        className={
          tab === 'cancelOrder'
            ? 'btn  tab_background btn-primary-reverse tab_fix SingleOrder-active-state'
            : 'btn  tab_background btn-primary-reverse tab_fix '
        }
        onClick={onClickTab('cancelOrder')}
      >
        <p className="btn_word">已取消</p>
      </button>
    </>
  )
}
export default Tab
