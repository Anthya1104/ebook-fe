import React, { useState, useEffect } from 'react'
import Box from '@mui/material/Box'
import Rating from '@mui/material/Rating'

function StarRating() {
  const [value, setValue] = useState(0)

  return (
    <>
      <Box
        sx={{
          '& > legend': { mt: 2 },
        }}
      >
        <Rating
          name="simple-controlled"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue)
          }}
        />
      </Box>
    </>
  )
}

export default StarRating
