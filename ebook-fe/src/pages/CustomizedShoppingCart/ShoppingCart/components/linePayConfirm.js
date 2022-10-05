import React, { useEffect } from 'react';
// import Loading from '../../../components/layout/Loading';
import { handleSuccess } from './handleStatusCard';

function LinePayConfirm() {
  useEffect(() => {
    handleSuccess('付款成功', '/admin/order', '平台將為您跳轉至訂單管理頁面');
  }, []);
  return 
//   <Loading />;
}

export default LinePayConfirm;