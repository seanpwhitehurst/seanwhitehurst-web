import React from 'react'

const Layout = ({children}) => {
  return (
    <main className="bg-gradient-to-r from-background to-background-secondary min-h-screen">
      {children}
    </main>
  )
}

export default Layout