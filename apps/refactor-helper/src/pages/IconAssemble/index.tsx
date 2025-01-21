import React from "react";
import Polyline from "./components/Polyline.tsx";

type Props = {

}
const IconAssemble:React.FC<Props> = ({

}) => {
    return (
        <div className={'flex height-100'}>
            {/*左边*/}
            <div style={{width: '160px'}} className={'flex column gap-24 p-24 height-100 border-right'}>
                <div className={'flex column gap-12'}>
                    <div>常用形状</div>
                    <div className={'flex gap-12'}>
                        <svg width="48" height="48" viewBox="0 0 48 48">
                            <rect width="48" height="48" strokeWidth={2} stroke={'var(--color-text-4)'} fill="none"/>
                        </svg>
                        <svg width="48" height="48" viewBox="0 0 48 48">
                            <rect width="48" height="48" strokeWidth={2} stroke={'var(--color-text-4)'} fill="none"/>
                        </svg>
                    </div>
                </div>
            </div>
            {/*中间*/}
            <div className={'flex-1 flex items-center justify-center p-24 bg-gray'}>
                <div className={'relative width-100 bg-white ratio-1'} style={{maxWidth: '480px', minWidth: '48px'}}>
                    {/*辅助线*/}
                    <Polyline/>
                    <svg width="480" height="480" viewBox="0 0 480 480">

                    </svg>
                </div>
            </div>
            {/*右边*/}
            <div style={{width: '120px'}} className={'p-24 height-100 border-left'}></div>
        </div>
    )
}
export default IconAssemble;