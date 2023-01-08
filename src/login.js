const renderForm = () => {
    return ( 
        <div className="form">
            <form>
                <div className="input-container">
                    <label>Username</label>
                    <input type="text" placeholder="Enter your username" required></input>
                </div>
                <div className="input-container">
                    <label>Password</label>
                    <input type="password" required placeholder="Enter your password" />
                </div>
            </form>
        </div>
     );
}
 
export default renderForm;
