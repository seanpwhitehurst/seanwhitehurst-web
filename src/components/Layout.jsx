import React from 'react'

const Layout = ({children}) => {
  return (
    <main className="bg-gradient-to-b from-background to-background-secondary min-h-screen">
      {children}
    </main>
  )
}

export default Layout