import { useSelector , useDispatch} from 'react-redux';
import '../../css/header.css';
import { setPrev } from '../../modules/reducer/stepReducer';

function Header() {
    const mode = useSelector( (store) => store.stepReducer );
    const dispatch = useDispatch();
    var prev = null;
    if(mode !== 0) {
        prev = <div className='back-button' onClick={() => {dispatch(setPrev())}}></div>
    }
    return (
        <div className="header-component component aice jcce">
            {prev}
            <div className='header-logo df'>
                <span className="header-main-logo">오땡메</span>
                <span className="header-sub-logo">오늘 땡기는 메뉴</span>
            </div>
        </div>
    );
}

export default Header;