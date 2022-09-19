import React, { useState, useEffect } from 'react'
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Rating from '@mui/material/Rating'
import StarOutlineIcon from '@mui/icons-material/StarOutline'
import StarRate from '@mui/icons-material/StarRate'

function StarRating(props) {
  const [value, setValue] = useState(0)

  // 回傳start score
  useEffect(() => {
    props.setScoreFromStarRating(value)
  }, [value])

  const StyledRating = styled(Rating)({
    '& .MuiRating-iconEmpty': {
      color: '#F5F5F5',
    },
    '& .MuiRating-iconFilled': {
      color: '#F5F5F5',
    },
    '& .MuiRating-iconHover': {
      color: '#F5F5F5',
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
