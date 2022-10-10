import Breadcrumb from 'react-bootstrap/Breadcrumb';

function BreadcrumbExample() {
  return (
    <Breadcrumb>
      <Breadcrumb.Item href="#">首頁</Breadcrumb.Item>
      <Breadcrumb.Item href="#">分類導覽</Breadcrumb.Item> 
      <Breadcrumb.Item active>觀光旅遊</Breadcrumb.Item>
      {/* 到時候要怎麼帶資料? */}
    </Breadcrumb>
  );
}

export default BreadcrumbExample;