import './Header.css'

function Header(){
    return(
        <>
    <div className='navbar'>
             <div className='logo'></div>

        <ul>
            <li>💡</li>
            <li>Store</li>
            <li>Mac</li>
            <li>iPad</li>
            <li>watch</li>
            <li>AirPods</li>
            <li>TV & Home</li>
            <li>Entertainment</li>
            <li>Accessories</li>
            <li>Support</li>

        </ul>
        <div className='icons'>
       <span>🔍</span>
        <span>👜</span>
        </div>
    </div>
    <Againnav />
    </>
    )
    
    

}

function Againnav(){
    return(
           <div className='head'>
        <button id='btn'>Overview</button>
        <button id='btn'>Switch to iPhone</button>
        <button id='btn'>Tech Specs</button>
      </div>

    )
}

export default Header;