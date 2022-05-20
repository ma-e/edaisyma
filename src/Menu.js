function Menu() {

  function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }

  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

  return (
    <div className="menu-item">
      <div id="mySidenav" className="sidenav">
        <a className="closebtn" onClick={closeNav}>&#x2715;</a>
        <a href="#gallery" onClick={closeNav} >Daisy Ma</a>
        <a href="#contact" onClick={closeNav} >Contact</a>
      </div>
      <span className="openbtn" onClick={openNav}>&#9776;</span>
    </div>
  );
}

export default Menu;