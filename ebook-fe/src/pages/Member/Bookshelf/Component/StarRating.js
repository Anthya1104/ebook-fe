import React, { useState, useEffect } from 'react'
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Rating from '@mui/material/Rating'
import StarOutlineIcon from '@mui/icons-material/StarOutline'
import StarRate from '@mui/icons-material/StarRate'

function StarRating({ setScoreFromStarRating, color, defaultValue }) {
  const [value, setValue] = useState(0)

  // 回傳start score
  useEffect(() => {
    setScoreFromStarRating(value)
  }, [value])

  const StyledRating = styled(Rating)({
    '& .MuiRating-iconEmpty': {
      color: color,
    },
    '& .MuiRating-iconFilled': {
      color: color,
    },
    '& .MuiRating-iconHover': {
      color: color,
    },
  })

  return (
    <>
      <Box
        sx={{
          '& > legend': { mt: 2 },
        }}
      >
        <StyledRating
          name="simple-controlled"
          value={value}
          defaultValue={3}
          onChange={(event, newValue) => {
            setValue(newValue)
          }}
          icon={<StarRate fontSize="30px" />}
          emptyIcon={<StarOutlineIcon fontSize="25px" />}
        />
      </Box>
    </>
  )
}

export default StarRating
