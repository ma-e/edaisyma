import React from 'react'
import Menu from './Menu'
import Footer from './Footer'
import './Layout.css'
import { createRoot } from "react-dom/client"
import { Suspense } from "react"
import { App } from "./App"
import { Underlay, Overlay } from "./DirtyFigmaExport"
import "./styles.css"

const Layout = (props) => {
    return (
        <React.Fragment>
            <Underlay />
            <Suspense fallback={null}>
                <Menu />
            </Suspense>
            <Overlay />
            {/* <main className="main-content">
                {props.children}
            </main> */}

        </React.Fragment>
    );
}

export default Layout;