// import { useCart } from '../../../utils/useCart'
import { useCart } from '../../utils/useCart'
import { useNavigate } from 'react-router-dom'
import { useNavigate2 } from 'react-router-dom'
// import ProductList from 'pages/Product/ProductList'
// import ProductList from '../../../pages/Product/ProductList'
import ProductList from '../../Product/ProductList'
import CouponModal from '../components/CouponModal'
import { useSecondCart } from '../../utils/useSecondCart'
import { Link } from 'react-router-dom'
import { useState } from 'react'
function ListItemsWithHook({ tab, handleStep, couponAmount0 }) {
  // 使用hooks 解出所需的狀態與函式(自context)
  const { cart, items, plusOne, minusOne, removeItem } = useCart()
  let navigate = useNavigate()

  /// 9/29優惠券
  const [couponAmount, setCouponAmount] = useState(couponAmount0)
  ///

  const handleClick = (path) => () => {
    navigate(path)
  }

  const { addSecondItem } = useSecondCart()

  return (
    <div>
      <table
        className="table"
        cellPadding="0"
        border="0"
        width="100%"
        cellSpacing="0"
      >
        <thead className="SingleCart-topnav">
          <tr>
            <th style={{ width: 160 }} className="SingleCart-tr">
              商品明細
            </th>
            <th></th>
            {/* <th>單價</th> */}
            {/* <th>數量</th> */}
            <th>小計</th>
            <th className="SingleCart-tr2"></th>
          </tr>
        </thead>
        <tbody className="co-text-color">
          {items.map((v, i) => {
            return (
              <>
                <tr key={v.id}>
                  <td>
                    <Link to={'/Cart/ProductDetail/' + v.id}>
                      <img
                        style={{ width: 120, height: 160 }}
                        src={v.book_img}
                        className="card-img-top ProductList-card-img-top"
                        alt="..."
                      />
                    </Link>
                  </td>
                  <td>{v.book_name}</td>
                  <td>${v.price}</td>
                  {/* 設定tab是購物車還是收藏 */}
                  <td
                    className="ShoppingCart-BtnInMid"
                    // style={{ width: 600 }}
                  >
                    <button
                      type="button"
                      className="btn btn-primary-reverse me-3 ListItemsWithHook-mobile-btn-margin"
                      onClick={() => {
                        removeItem(v.id)
                      }}
                    >
                      移除
                    </button>
                    {tab === 'cart' ? (
                      <button
                        type="button"
                        className="btn btn-primary-reverse"
                        onClick={() => {
                          const item = { ...v, quantity: 1 }
                          removeItem(v.id)
                          addSecondItem(item)
                        }}
                      >
                        移入收藏
                      </button>
                    ) : (
                      <button
                        type="button"
                        className="btn btn-primary-reverse"
                        onClick={() => {
                          removeItem(v.id)
                        }}
                      >
                        移入購物車
                      </button>
                    )}
                  </td>
                </tr>
                {/* <svg
                  className="img-fluid"
                  width="1446"
                  height="12"
                  viewBox="0 0 1446 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1445.77 6L1440 0.226497L1434.23 6L1440 11.7735L1445.77 6ZM0 7H2V5H0V7ZM6 7H10V5H6V7ZM14 7H18V5H14V7ZM22 7H26V5H22V7ZM30 7H34V5H30V7ZM38 7H42V5H38V7ZM46 7H50V5H46V7ZM54 7H58V5H54V7ZM62 7H66V5H62V7ZM70 7H74V5H70V7ZM78 7H82V5H78V7ZM86 7H90V5H86V7ZM94 7H98V5H94V7ZM102 7H106V5H102V7ZM110 7H114V5H110V7ZM118 7H122V5H118V7ZM126 7H130V5H126V7ZM134 7H138V5H134V7ZM142 7H146V5H142V7ZM150 7H154V5H150V7ZM158 7H162V5H158V7ZM166 7H170V5H166V7ZM174 7H178V5H174V7ZM182 7H186V5H182V7ZM190 7H194V5H190V7ZM198 7H202V5H198V7ZM206 7H210V5H206V7ZM214 7H218V5H214V7ZM222 7H226V5H222V7ZM230 7H234V5H230V7ZM238 7H242V5H238V7ZM246 7H250V5H246V7ZM254 7H258V5H254V7ZM262 7H266V5H262V7ZM270 7H274V5H270V7ZM278 7H282V5H278V7ZM286 7H290V5H286V7ZM294 7H298V5H294V7ZM302 7H306V5H302V7ZM310 7H314V5H310V7ZM318 7H322V5H318V7ZM326 7H330V5H326V7ZM334 7H338V5H334V7ZM342 7H346V5H342V7ZM350 7H354V5H350V7ZM358 7H362V5H358V7ZM366 7H370V5H366V7ZM374 7H378V5H374V7ZM382 7H386V5H382V7ZM390 7H394V5H390V7ZM398 7H402V5H398V7ZM406 7H410V5H406V7ZM414 7H418V5H414V7ZM422 7H426V5H422V7ZM430 7H434V5H430V7ZM438 7H442V5H438V7ZM446 7H450V5H446V7ZM454 7H458V5H454V7ZM462 7H466V5H462V7ZM470 7H474V5H470V7ZM478 7H482V5H478V7ZM486 7H490V5H486V7ZM494 7H498V5H494V7ZM502 7H506V5H502V7ZM510 7H514V5H510V7ZM518 7H522V5H518V7ZM526 7H530V5H526V7ZM534 7H538V5H534V7ZM542 7H546V5H542V7ZM550 7H554V5H550V7ZM558 7H562V5H558V7ZM566 7H570V5H566V7ZM574 7H578V5H574V7ZM582 7H586V5H582V7ZM590 7H594V5H590V7ZM598 7H602V5H598V7ZM606 7H610V5H606V7ZM614 7H618V5H614V7ZM622 7H626V5H622V7ZM630 7H634V5H630V7ZM638 7H642V5H638V7ZM646 7H650V5H646V7ZM654 7H658V5H654V7ZM662 7H666V5H662V7ZM670 7H674V5H670V7ZM678 7H682V5H678V7ZM686 7H690V5H686V7ZM694 7H698V5H694V7ZM702 7H706V5H702V7ZM710 7H714V5H710V7ZM718 7H722V5H718V7ZM726 7H730V5H726V7ZM734 7H738V5H734V7ZM742 7H746V5H742V7ZM750 7H754V5H750V7ZM758 7H762V5H758V7ZM766 7H770V5H766V7ZM774 7H778V5H774V7ZM782 7H786V5H782V7ZM790 7H794V5H790V7ZM798 7H802V5H798V7ZM806 7H810V5H806V7ZM814 7H818V5H814V7ZM822 7H826V5H822V7ZM830 7H834V5H830V7ZM838 7H842V5H838V7ZM846 7H850V5H846V7ZM854 7H858V5H854V7ZM862 7H866V5H862V7ZM870 7H874V5H870V7ZM878 7H882V5H878V7ZM886 7H890V5H886V7ZM894 7H898V5H894V7ZM902 7H906V5H902V7ZM910 7H914V5H910V7ZM918 7H922V5H918V7ZM926 7H930V5H926V7ZM934 7H938V5H934V7ZM942 7H946V5H942V7ZM950 7H954V5H950V7ZM958 7H962V5H958V7ZM966 7H970V5H966V7ZM974 7H978V5H974V7ZM982 7H986V5H982V7ZM990 7H994V5H990V7ZM998 7H1002V5H998V7ZM1006 7H1010V5H1006V7ZM1014 7H1018V5H1014V7ZM1022 7H1026V5H1022V7ZM1030 7H1034V5H1030V7ZM1038 7H1042V5H1038V7ZM1046 7H1050V5H1046V7ZM1054 7H1058V5H1054V7ZM1062 7H1066V5H1062V7ZM1070 7H1074V5H1070V7ZM1078 7H1082V5H1078V7ZM1086 7H1090V5H1086V7ZM1094 7H1098V5H1094V7ZM1102 7H1106V5H1102V7ZM1110 7H1114V5H1110V7ZM1118 7H1122V5H1118V7ZM1126 7H1130V5H1126V7ZM1134 7H1138V5H1134V7ZM1142 7H1146V5H1142V7ZM1150 7H1154V5H1150V7ZM1158 7H1162V5H1158V7ZM1166 7H1170V5H1166V7ZM1174 7H1178V5H1174V7ZM1182 7H1186V5H1182V7ZM1190 7H1194V5H1190V7ZM1198 7H1202V5H1198V7ZM1206 7H1210V5H1206V7ZM1214 7H1218V5H1214V7ZM1222 7H1226V5H1222V7ZM1230 7H1234V5H1230V7ZM1238 7H1242V5H1238V7ZM1246 7H1250V5H1246V7ZM1254 7H1258V5H1254V7ZM1262 7H1266V5H1262V7ZM1270 7H1274V5H1270V7ZM1278 7H1282V5H1278V7ZM1286 7H1290V5H1286V7ZM1294 7H1298V5H1294V7ZM1302 7H1306V5H1302V7ZM1310 7H1314V5H1310V7ZM1318 7H1322V5H1318V7ZM1326 7H1330V5H1326V7ZM1334 7H1338V5H1334V7ZM1342 7H1346V5H1342V7ZM1350 7H1354V5H1350V7ZM1358 7H1362V5H1358V7ZM1366 7H1370V5H1366V7ZM1374 7H1378V5H1374V7ZM1382 7H1386V5H1382V7ZM1390 7H1394V5H1390V7ZM1398 7H1402V5H1398V7ZM1406 7H1410V5H1406V7ZM1414 7H1418V5H1414V7ZM1422 7H1426V5H1422V7ZM1430 7H1434V5H1430V7ZM1438 7H1440V5H1438V7Z"
                    fill="#661F1E"
                  />
                </svg> */}
              </>
            )
          })}
        </tbody>
      </table>

      <div>
        <div className="d-flex justify-content-end">
          {/* <form>
            <label className="ListItemsWithHook-placeholder">
              <input
                className="ListItemsWithHook-coupon-input"
                type="text"
                name="name"
                placeholder="請輸入優惠券折扣碼"
              />
            </label>
            <input
              className="ListItemsWithHook-coupon-btn"
              type="submit"
              value="使用"
            />
          </form> */}
          <form>
            <CouponModal setCouponAmount={setCouponAmount} />
          </form>
        </div>

        <div className="d-flex justify-content-end co-text-color">
          共有&nbsp;&nbsp;
          <span className="ListItemsWithHook-text-em-color">
            {' '}
            {cart.totalItems}
          </span>{' '}
          &nbsp; 件商品
        </div>
        <div className="d-flex justify-content-end ListItemsWithHook-text-em-color">
          訂單小計：$ {cart.cartTotal}
        </div>

        {/* /// 9/29優惠券*/}
        <div className="d-flex justify-content-end">
          優惠金額: -{couponAmount}
        </div>
        <div className="d-flex justify-content-end ListItemsWithHook-text-em-color">
          優惠後金額：$ {cart.cartTotal - couponAmount}
        </div>
        {/* /// */}

        <br />
        {cart.isEmpty && '購物車為空'}
        <hr />
      </div>
      <div className="d-flex justify-content-end mb-5">
        <button
          type="button"
          className="btn btn-primary-reverse me-3"
          onClick={handleClick('/Cart/product-list')}
        >
          繼續購物
        </button>
        <button
          type="button"
          className="btn btn-primary-reverse"
          onClick={handleStep(2)}
        >
          結帳
        </button>
      </div>
    </div>
  )
}

export default ListItemsWithHook
