import React from 'react'
import { useState, useEffect } from 'react'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'

function DropdownSelection() {
  const [anchorValue, setAnchorValue] = useState('')
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (e) => {
    setAnchorEl(e.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Dashboard
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>
          <svg
            width="23"
            height="18"
            viewBox="0 0 23 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.4998 7.75H16.2498C16.94 7.75 17.4998 7.19023 17.4998 6.5C17.4998 5.80977 16.94 5.25 16.2498 5.25H12.535C11.8447 5.25 11.285 5.80977 11.285 6.5C11.285 7.19023 11.8084 7.75 12.4998 7.75ZM12.4998 12.75H18.7498C19.44 12.75 19.9998 12.1902 19.9998 11.5C19.9998 10.8098 19.44 10.25 18.7498 10.25H12.535C11.8447 10.25 11.285 10.8098 11.285 11.5C11.285 12.1902 11.8084 12.75 12.4998 12.75ZM12.4998 2.75H13.7498C14.44 2.75 14.9647 2.19023 14.9647 1.5C14.9647 0.809766 14.4049 0.25 13.7498 0.25H12.4998C11.8096 0.25 11.2498 0.809766 11.2498 1.5C11.2498 2.19023 11.8084 2.75 12.4998 2.75ZM21.2498 15.25H12.535C11.8447 15.25 11.285 15.8098 11.285 16.5C11.285 17.1902 11.8447 17.75 12.535 17.75H21.2498C21.94 17.75 22.4998 17.1902 22.4998 16.5C22.4998 15.8098 21.9412 15.25 21.2498 15.25ZM7.51543 11.918L6.24981 13.3008V1.50117C6.24981 0.809766 5.69122 0.25 4.99981 0.25C4.3084 0.25 3.74981 0.809766 3.74981 1.50117V13.298L2.48418 11.918C2.23762 11.6491 1.90059 11.5125 1.56192 11.5125C1.2604 11.5125 0.957622 11.6211 0.717779 11.8412C0.208794 12.308 0.17481 13.0998 0.640865 13.6095L4.04321 17.363C4.51665 17.881 5.41274 17.881 5.88657 17.363L9.28891 13.6095C9.75532 13.0998 9.72094 12.3084 9.212 11.8412C8.77325 11.375 7.98418 11.4102 7.51543 11.918Z"
              fill="#F5F5F5"
            />
          </svg>
          日期
        </MenuItem>
        <MenuItem onClick={handleClose}>書名</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </>
  )
}

export default DropdownSelection
