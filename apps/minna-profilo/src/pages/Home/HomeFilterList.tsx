import {randomCoverColor} from "./mock.tsx";
import styled from "styled-components";
import {IconRight} from "../../components/Icon.tsx";

type Props = {
    active?:string;
    onClick?: (item: { name:string,value:string}) => void,
}
const HomeFilterList:React.FC<Props> = ({
                                            active='',
                                            onClick
}) => {
    return (<div className={'flex width-100 px-24 border-box'} style={{maxWidth: '1200px', marginInline: 'auto'}}>
        <div className={'flex gap-12'}>
            {randomCoverColor.map((c, i) => <StyledHomeFilterItem key={i} className={`flex items-center gap-8 cursor-pointer ${active === c.name ? 'active':''}`} onClick={() => onClick?.(c)}>
                <div className={'radio flex both-center'} style={{borderColor: c.value,outlineColor: c.value,backgroundColor: active === c.name ? c.value:'transparent'}}><IconRight size={12} color={'white'}/></div>
                {c.name}
            </StyledHomeFilterItem>)}
        </div>
    </div>)
}
const StyledHomeFilterItem = styled.div`
    .radio{
        width: 0;
        height: 0;
        border: 2px solid white;   
        border-radius: 1px;
        transition: all .2s ease-in-out;
        outline: 2px solid white;
        svg{
            opacity: 0;
            transition: opacity 0.2s linear;
        }
    }
    &.active,
    &:hover{
        .radio{
            width: 12px;
            height: 12px;
            border-radius: 4px;
            outline-width: 0;
        }
    }
    &.active svg{
        opacity: 1;
    }
`
export default HomeFilterList;
