
const Sidebar = (props) =>{
    let friendsElements = props.sidebar.friend
        .map(f => <div> {f.friend}</div>)

    return(
        {friendsElements}
    )
}
export default Sidebar;