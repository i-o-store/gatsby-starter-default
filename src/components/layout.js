import * as React from "react"
import  { GlobalStyle } from "../estilos/estilosGlobales"

const Layout = ({ children }) => {

    return (
        <>
          <GlobalStyle />
          <main>{children}</main>
        </>
    )
}

export default Layout