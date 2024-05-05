import Headerbox from '@/components/Headerbox'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import React from 'react'

const Home = () => {

  const loggedIn = {
    firstName: 'Jorge',
  }

  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <Headerbox 
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || 'Guest'}
            subtext ="Access and Manage your Account and Transactions efficiently"
          />
          <TotalBalanceBox 
          accounts={[]}
          totalBanks={1}
          totalCurrentBalance={69000.35}
          />
        </header>
      </div>
    </section>
  )
}

export default Home