import { useState } from 'react'
import { Button } from 'react-bootstrap'

function Tab(props) {
  const [tab, setTab] = useState('')
  const onClickTab = (tab) => () => {
    setTab(tab)
  }

  return (
    <>
      <Button
        className={
          tab === 'totalOrder'
            ? 'btn  tab_background btn-primary-reverse SingleOrder-active-state'
            : 'btn  tab_background btn-primary-reverse '
        }
        onClick={onClickTab('totalOrder')}
      >
        <p className="btn_word">所有訂單</p>
      </Button>
      <Button
        className={
          tab === 'finishOrder'
            ? 'btn  tab_background btn-primary-reverse tab_fix SingleOrder-active-state'
            : 'btn  tab_background btn-primary-reverse tab_fix'
        }
        onClick={onClickTab('finishOrder')}
      >
        <p className="btn_word">已完成</p>
      </Button>
      <Button
        className={
          tab === 'cancelOrder'
            ? 'btn  tab_background btn-primary-reverse tab_fix SingleOrder-active-state'
            : 'btn  tab_background btn-primary-reverse tab_fix '
        }
        onClick={onClickTab('cancelOrder')}
      >
        <p className="btn_word">已取消</p>
      </Button>
    </>
  )
}
export default Tab
