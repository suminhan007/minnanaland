import HomeListItem from "./HomeListItem";
import {HomeData} from "./mock.tsx";
import getRandomRgbaColor from "../../hooks/getRandomRgba.ts";
import Slogan from "./Slogan.tsx";
import HomeFilterList from "./HomeFilterList.tsx";
import {  useState} from "react";

export function Home() {
    const [type,setType] = useState<string>('');
    // const newData = useMemo(() => HomeData?.map(i => Object.assign(i,{cards:i.cards?.filter(j =>j.type?.includes(type))})),[type])
    return (
        <div className="home-layout relative width-100 height-100vh" style={{overflow:'auto'}}>
            <div className="flex justify-center pt-16" style={{color:getRandomRgbaColor(1),marginTop:'64px'}}><Slogan/></div>
            <div className={`relative flex column gap-32 width-100`} style={{paddingTop: '64px'}}>
                <HomeFilterList active={type} onClick={item => item.name === type ? setType(''): setType(item.name)}/>
                {
                    HomeData?.map((item, index) => <div key={item.id ?? index}>
                        <HomeListItem data={item} type={type}/>
                    </div>)
                }
            </div>
        </div>
    )
}

