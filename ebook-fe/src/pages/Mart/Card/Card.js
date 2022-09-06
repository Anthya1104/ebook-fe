import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
// import book1 from 'react-bootstrap/Image'

function BasicExample() {
  return (
    <>
    <h1>怎麼連到商品主頁???</h1>
    <Card style={{ width: '15rem' }}>
      <Card.Img variant="top" src={require('./book1.jpg')} />
      <Card.Body>
        <Card.Title>原子習慣</Card.Title>
        <Card.Text>
          {/* <div>書名</div> */}
          <div>詹姆斯．克利爾</div>
          <div>$230</div>
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}

        <div className="d-grid gap-2">
          <Button variant="primary" size="md">
            加入購物車
          </Button>
          <Button variant="primary" size="md">
            加入收藏
          </Button>
          <Button variant="primary" size="md">
            試閱
          </Button>
        </div>
      </Card.Body>
    </Card>
    </>
  )
}

export default BasicExample
