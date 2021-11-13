import React from 'react'

const Layout = ({children}) => {
  return (
    <main className="bg-background min-h-screen">
      {children}
    </main>
  )
}

export default Layout