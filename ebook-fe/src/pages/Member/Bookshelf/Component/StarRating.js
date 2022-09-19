import React, { useState, useEffect } from 'react'
import Box from '@mui/material/Box'
import Rating from '@mui/material/Rating'

function StarRating(props) {
  const [value, setValue] = useState(0)

  // 回傳start score
  useEffect(() => {
    props.setScoreFromStarRating(value)
  }, [value])

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
