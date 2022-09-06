import Table from 'react-bootstrap/Table'
import './CartTable.scss'

function ResponsiveExample() {
  return (
    <Table responsive>
      <thead>
        <tr>
          <th></th>
          <th>商品明細</th>
          <th>小計</th>
          {/* {Array.from({ length: 2 }).map((_, index) => (
            <th key={index}>Table heading</th>
          ))} */}
        </tr>
      </thead>
      <tbody>
        <tr>
          {/* <td>1</td> */}
          {Array.from({ length: 2 }).map((_, index) => (
            <td key={index}>Table cell {index}</td>
          ))}
        </tr>
        <tr>
          {/* <td>2</td> */}
          {Array.from({ length: 2 }).map((_, index) => (
            <td key={index}>Table cell {index}</td>
          ))}
        </tr>
        <tr>
          {/* <td>3</td> */}
          {Array.from({ length: 2 }).map((_, index) => (
            <td key={index}>Table cell {index}</td>
          ))}
        </tr>
      </tbody>
    </Table>
  )
}

export default ResponsiveExample
