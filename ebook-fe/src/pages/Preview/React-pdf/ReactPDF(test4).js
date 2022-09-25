import React, { useState } from 'react'
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack'
import Pdf from './Tigra.pdf'
import styles from './Pdf.css'

function App() {
    const [numPages, setNumPages] = useState(0)
    const [pageNumArr, setPageNumArr] = useState([1])
    const [file, setFile] = useState()
    const [noData, setNoData] = useState(<div>Please wait!</div>)
    const [isDisabled,setIsDisabled]= useState(false)
    const [pdfHeight, setPdfHeight] = useState(0)
    const [pdfIndex, setPdfIndex] = useState(1)
    const [percentge, setPercentage] = useState(100)
    const [scrollHeight, setScrollHeight] = useState(0)
    const scrollDom = useRef(null)

    //页面加载完回调
    const documentOnLoadSuccess = (pdf: any) => {
        console.log('加载完', pdf)
        let numPages = pdf.numPages;
        setNumPages(numPages)
        let pageNums = new Array(numPages).keys();
        setPageNumArr(Array.from(pageNums, x => x + 1));
    }
    //页面渲染完回调
    const documentOnRenderSuccess = () => {
        let pdfDom: any = document.getElementsByClassName('react-pdf__Page')[0]
        let height = pdfDom.offsetHeight
        console.log('pdf高度', height)
        setPdfHeight(height)
    }

    const documentLoading = () => {
        return <div>Please wait!</div>;
    }

    useEffect(() => {
        Api(params).then((res) => {
            if (res && res.byteLength) {
                setFile(res);
            } else {
                setNoData(<div>no pdf</div>)
            }
        });

        const dom:any = scrollDom?.current
        dom.addEventListener('scroll', handleScroll)
        return () => dom.removeEventListener('scroll', handleScroll)
    }, [])

　　 //左右翻页
    const leftClick = () => {
        if(isDisabled) return
       
        let index = pdfIndex ===1 ? pdfIndex: pdfIndex-1
        setPdfIndex(index)
        const dom:any = scrollDom?.current
        if(!dom) return
        if(index > 1){
            dom.scrollTop = (index - 1) * pdfHeight + (index - 1) * 10
        }else{
            dom.scrollTop = 0
        }
    }

    const rightClick = () => {
        　　if(isDisabled) return
        　　const dom:any = scrollDom?.current
        　　if(!dom) return

        　　let index = pdfIndex === numPages ? pdfIndex: pdfIndex+1
        　　setPdfIndex(index)

        　　dom.scrollTop = (index - 1) * pdfHeight + (index - 1) * 10
    }
    //放大缩小
    const zoomOut = () => {
        setPercentage((prevalue) => {
            if (prevalue <= 20) {
                return prevalue
            }
            return prevalue - 20
        })
    }
    const zoomIn = () => {
        setPercentage((prevalue) => {
            if (prevalue >= 200) {
                return prevalue
            }
            return prevalue + 20
        })
    }

    //scroll事件
    const handleScroll = (e: any) => {
        // console.log(e)
        const tempScrollHeight = (e.srcElement ? e.srcElement.scrollTop : false)
            || (e.srcElement.body ? e.srcElement.body.scrollTop : 0);
        setScrollHeight(tempScrollHeight)
    }
    // 根据滚动条位置判断页数
    useEffect(() => {
        computeScroll(scrollHeight)
    }, [scrollHeight, pdfHeight])
    //滚动计算
      const computeScroll = (scrollHeight: number) => {
        const dom:any = scrollDom?.current
        if (!dom) return;
        console.log(scrollHeight)
        if (pdfIndex <= 1 && scrollHeight > pdfHeight / 2) {
            console.log('超过一半')
            setPdfIndex(2)
        } else {
            //向下
            if (dom.scrollHeight > scrollHeight && scrollHeight > (pdfHeight + 10) * (pdfIndex - 1)
　　　　　　　　　　&& scrollHeight % (pdfHeight + 10)> pdfHeight / 2) {
                console.log('滚动高度', scrollHeight)
                setPdfIndex((prevalue) => {
                    if (prevalue == numPages) {
                        return prevalue
                    }
                    return prevalue + 1
                })
            }else if(scrollHeight < (pdfHeight + 10) * (pdfIndex - 1) && scrollHeight % (pdfHeight + 10) < pdfHeight /2){
                setPdfIndex((prevalue) => {
                    if (prevalue == 1) {
                        return prevalue
                    }
                    return prevalue - 1
                })
            }
        }
      }
  return (
    <div className={styles.pdfModal}>
            <div className={styles.pdf_container} ref={scrollDom}
                style={numPages==1? {margin: 'auto'}: {}}
                onContextMenu={preventDefault}
            >
                <Document
                    file={Pdf}
                    className={styles.pdf_document}
                    loading={documentLoading}
                    onLoadSuccess={documentOnLoadSuccess}
                    noData={noData}

                >
                    {pageNumArr.map((i, index) => {
                        return <Page
                            key={index}
                            className={styles.pdf_page}
                            pageNumber={i}
                            onRenderSuccess={documentOnRenderSuccess}
                            scale={percentge / 100}/>
                    })}
                </Document>
            </div>
            <div className={styles.btnContainer}>
                <div className={styles.pdfBtn}>
                    <i className='iconfont' onClick={() => zoomOut()}>缩小</i>
                    <span>{percentge}%</span>
                    <i className='iconfont' onClick={() => zoomIn()}>放大</i>
                    <i>{pdfIndex}</i>
                    <i>/{numPages}</i>
                    <i className={`${styles.leftIcon} iconfont`} onClick={() => leftClick()}>上一页</i>
                    <i className='iconfont' onClick={() => rightClick()}>下一页</i>
                    <i className={styles.line}></i>
                    <i className='iconfont' onClick={() => close()}>关闭</i>
                </div>
            </div>
        </div>
  )
}
export default App
