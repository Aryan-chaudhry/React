import './header.css';

function Header(){
    // not connect to database let suppose my database is array of string
   let username = "";
   if(username == ""){
    username = "No User"
   }

    return(
        <>
        <div className="div-header">
            <ul className="header-li">
                <li>Home</li>
                <li>search</li>
                <li>Find Rank</li>
                <li>User:  &nbsp; {username}</li>
            </ul>
        </div>
        </>
    )
}

export default Header;