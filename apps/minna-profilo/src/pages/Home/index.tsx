import HomeListItem from "./HomeListItem";
import Slogan from "./Slogan";
import { HomeData } from "./mock";
import getRandomRgbaColor from "../../hooks/getRandomRgba";

export function Home() {
    
    return (
        <div className="home-layout relative width-100 height-100vh" style={{overflow:'auto'}}>
            <div className="flex justify-center pt-16" style={{color:getRandomRgbaColor(1)}}><Slogan/></div>
             <div className={`relative flex column gap-32 width-100`}  style={{paddingTop:'64px'}}>
                    {
                    HomeData?.map((item, index) => <div key={item.id ?? index}>
                        <HomeListItem data={item} />
                    </div>)
                    }
            </div>
       </div>
    )
}

