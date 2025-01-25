import styled from "styled-components";
import RotaryFolder from "./RotaryFolder.tsx";
import {ROTARY_FOLDER_DATA} from "./mock.tsx";
import {Fragment, useEffect,  useState} from "react";
import {useNavigate} from "react-router-dom";

export function  Articles() {
    const [time,setTime] = useState('');
    const [date,setDate] = useState({year:'',month:'',day:'',date:''});
    const count = ROTARY_FOLDER_DATA.reduce((acc,subArray)=>acc+subArray.articles.length,0)

    useEffect(() => {
        const now = new Date();
        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, '0');
        const day = String(now.getDate()).padStart(2, '0');
        setDate({year:`${year}`,month:month,day:day,date:`${year}-${month}-${day}`
    });
        const updateClock = () => {
            const now = new Date();
            const hours = String(now.getHours()).padStart(2, '0');
            const minutes = String(now.getMinutes()).padStart(2, '0');
            const seconds = String(now.getSeconds()).padStart(2, '0');
            setTime(`${hours}:${minutes}:${seconds}`);
        }
            updateClock();
            const intervalId = setInterval(updateClock, 1000);
            // Cleanup interval on component unmount
            return () => clearInterval(intervalId);
    },[]);
    const sortData = ROTARY_FOLDER_DATA.map(itm => itm);

    const navigate = useNavigate();
    return (
        <StyledArticlesLayout className={'relative flex justify-center width-100 height-100 overflow-hidden'} style={{backgroundColor:'white'}}>
                <RotaryFolder data={ROTARY_FOLDER_DATA} onClick={(item,parentItem) => navigate(`/articles/details/${parentItem.id}-${item.id}`)}/>
                {/*标题*/}
                <div className={'absolute top-8 left-8 fw-600 fs-18 color-gray-3'}>Outputs of minna 2025</div>

                <div className={'absolute flex column gap-8 fs-12 bottom-8 left-8'}>
                    <div className={'flex column gap-8'}>
                        <div><span className={'fw-600 fs-14'}>{date.year}</span> 年共计 <span
                            className={'fw-600'}>{count}</span> 条记录：
                        </div>
                        <ul className={'flex gap-12 fs-12'}>
                            {sortData.sort((a, b) => b.articles.length - a.articles.length).map((item, index) =>
                                <Fragment key={item.id ?? index}>{
                                    item.articles.length > 0 ? <li className={'flex column gap-4 justify-end items-center'}
                                                                   style={{color: index < 3 ? item.color : 'var(--color-text-5)'}}>
                                        <div className={'fw-600'}>{item.articles.length}</div>
                                        <div style={{width:'4px',height: 24*item.articles.length/sortData[0].articles.length,backgroundColor: index < 3 ? item.color:'var(--color-bg-3)'}}></div>
                                        <div style={{width: '32px', color:'var(--color-text-2)'}} className={'fs-10'}>{item.date}</div>
                                    </li> : <></>
                                }
                                </Fragment>)}
                        </ul>
                    </div>
                </div>
                {/*时间*/}
                <div className={'absolute fw-600 fs-14 top-8 right-8 color-gray-3'}>{date.date} {time}</div>
        </StyledArticlesLayout>
    )
}

const StyledArticlesLayout = styled.div`
`