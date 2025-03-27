import styled from "styled-components";
import RotaryFolder from "./RotaryFolder.tsx";
// import {ROTARY_FOLDER_DATA} from "./mock.tsx";
import {Fragment, useEffect,  useState} from "react";
import {useNavigate} from "react-router-dom";
import supabase from "../../hooks/supabase.ts";
import getRandomRgbaColor from "../../hooks/getRandomRgba.ts";
import {LandButton} from "@suminhan/land-design";

type articleType = {
    id:string,
    title:string,
    created_at:string,
    edited_at:string,
    tags: string[],
    data: any,
}
export function  Articles() {
    const [time,setTime] = useState('');
    const [date,setDate] = useState({year:'',month:'',day:'',date:''});

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

    const navigate = useNavigate();
    const [articlesData,setArticlesData] = useState<{id:string,name:string,date:string,articles:articleType[],bg:string,color:string}[]>([]);
    const getLatestArticlesData = async () => {
        const {data, error} = await supabase.from('articleGroups').select('id,name,date,articles').eq('year','2025').order('created_at', { ascending: false });
        if(error){
            return;
        }else{
            const resultData = data?.map(i => Object.assign(i,{bg:getRandomRgbaColor(0.1),color:getRandomRgbaColor(1)}))
            setArticlesData(resultData);
        }
    }
    useEffect(() => {
        getLatestArticlesData()
    }, []);
    const sortData = articlesData.map(itm => itm);
    const count = articlesData.reduce((acc,subArray)=>acc+subArray.articles?.length,0)
    const handleCreateNewArticle = async () => {
        // const articleId = `${date.year}-${date.month}-${date.day}-${Date.now().toString()}`;
        const articleId = supabase.rpc('now');
            const res = await supabase.from('articles').insert([{
                id: articleId,
                title: `Untitled Article`,
                data: [],
                date: articleId,
            }])
            if(res.error){
                console.log('新建文章失败！',res.error)}else{
                const now = new Date();
                const month = String(now.getMonth() + 1).padStart(2, '0');
                const curMonthArticles = await  supabase.from('articleGroups').select('articles').eq('name',`${month}月`).single()
                if(curMonthArticles.error){
                    console.log('插入文章失败',curMonthArticles.error)}else{
                    await supabase.from('articleGroups').update({
                        articles: [...curMonthArticles.data.articles, articleId],
                    }).eq('name',`${month}月`)
                }
                navigate(`/newArticles?article_id=${articleId}`);
            }
    }
    return (
        <StyledArticlesLayout className={'relative flex justify-center width-100 height-100 overflow-hidden'} style={{backgroundColor:'white'}}>
            <RotaryFolder data={articlesData}
                           onClick={(item) => navigate(`/2025articles/details?id=2025-${item.id}`)}/>
                {/*标题*/}
                <div className={'absolute top-8 left-8 fw-600 fs-18 color-gray-3'}>Outputs of minna 2025</div>

                <div className={'absolute flex column gap-8 fs-12 bottom-8 left-8'}>
                    <div className={'flex column gap-8'}>
                        <div><span className={'fw-600 fs-14'}>{date.year}</span> 年共计 <span
                            className={'fw-600'}>{count}</span> 条记录：
                        </div>
                        <ul className={'flex gap-12 fs-12'}>
                            {sortData?.sort((a, b) => b.articles?.length - a.articles?.length).map((item, index) =>
                                <Fragment key={item.id ?? index}>{
                                    item.articles?.length > 0 ? <li className={'flex column gap-4 justify-end items-center'}
                                                                   style={{color: index < 3 ? item.color : 'var(--color-text-5)'}}>
                                        <div className={'fw-600'}>{item.articles?.length}</div>
                                        <div style={{width:'4px',height: 24*item.articles?.length/sortData[0].articles?.length,backgroundColor: index < 3 ? item.color:'var(--color-bg-3)'}}></div>
                                        <div style={{width: '32px', color:'var(--color-text-2)'}} className={'fs-10'}>{item.date}</div>
                                    </li> : <></>
                                }
                                </Fragment>)}
                        </ul>
                    </div>
                </div>
                <div className={'absolute bottom-8 right-8'}><LandButton type={'background'} text={'新建'} onClick={handleCreateNewArticle}/></div>
                {/*时间*/}
                <div className={'absolute fw-600 fs-14 top-8 right-8 color-gray-3'}>{date.date} {time}</div>
        </StyledArticlesLayout>
    )
}

const StyledArticlesLayout = styled.div`
`