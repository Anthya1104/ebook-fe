import IconStar from '../../../../../img/icon-star-yellow.svg'
import './MemberComment.scss'

const MemberComment = ({ avatar, name, star, recommended }) => {
  return (
    <div className="MemberComment">
      <div className="MemberComment-top">
        <img src={avatar} alt="avatar" className="MemberComment-top-avatar" />
        <div>
          <div className="MemberComment-top-name">{name}</div>
          <div className="MemberComment-top-stars">
            {[...Array(star)].map((e, index) => (
              <img
                ket={index}
                src={IconStar}
                alt={`${e}star`}
                className="MemberComment-top-stars-icon"
              />
            ))}
          </div>
        </div>
      </div>
      <div className="MemberComment-recommend">{recommended}</div>
    </div>
  )
}

export default MemberComment
