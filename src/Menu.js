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
        <a href="#gallery">Daisy Ma</a>
        <a href="#contact">Contact</a>
      </div>
      <span className="openbtn" onClick={openNav}>&#9776;</span>
    </div>
  );
}

export default Menu;