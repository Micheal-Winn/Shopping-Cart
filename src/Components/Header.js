import '../App.css';

function Header(props) {
    return (
        <div className='flex shopping-card'>
            <div onClick={() => props.handleShow(false)} className='cursor' >Shopping Cart App</div>
            <div onClick={() => props.handleShow(true)} className='cursor'> Cart
                <sup> {props.count} </sup>
            </div>
        </div>
    );
}

export default Header;