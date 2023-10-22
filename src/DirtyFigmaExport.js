import Footer from "./Footer"
import Menu from "./Menu"

export function Underlay() {
  return (
    <>
      {/* <Menu /> */}
      {/* <Footer /> */}

    </>
  )
}

export function Overlay() {
  return (
    <div style={{ position: "absolute", top: 40, right: 40 }}>
      <p style={{ flex: "1 1 0%", fontSize: 12, lineHeight: "1em", textAlign: "right", color: "black" }}>
        <a href="https://www.instagram.com/in.daisy.ma/">Instagram</a>
      </p>
    </div>
  )
}
