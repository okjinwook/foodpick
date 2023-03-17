import { useSelector , useDispatch} from 'react-redux';
import '../css/header.css';

function Header() {
    const mode = useSelector( (state) => state );
    const dispatch = useDispatch();
    var prev = null;
    if(mode !== 0) {
        prev = <div className='back-button' onClick={() => {dispatch({type : 'prev'})}}></div>
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