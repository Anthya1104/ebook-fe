import React from 'react'

function SortBar(props) {
  const { sortBy, setSortBy } = props
  return (
    <>
      <div className="row">
        <div className="col-sm-12">
          <div className="btn-group">
            <select
              className="form-select form-select-sm"
              aria-label=".form-select-sm example"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="">請選擇排序</option>
              <option value="1">日期舊到新</option>
              <option value="2">日期新到舊</option>
              <option value="3">折扣少到多</option>
              <option value="4">折扣多到少</option>
            </select>
          </div>
        </div>
      </div>
    </>
  )
}

export default SortBar