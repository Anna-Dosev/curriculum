

const Nav = ({ navbar }) => {
    const navItems = navbar.map((navItem, index) => {
        return (
        <a href={navItem.href}>{navItem.text}</a>
        )
    })
    return (
    <div>
        <nav id="navbar">
        {navItems}
        </nav>
    </div>
    )
}

export default Nav;
