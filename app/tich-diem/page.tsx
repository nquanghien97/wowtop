import React from 'react'
import Banner from './Banner'
import SendCodeForm from './SendCodeForm'

function page() {
  return (
    <main>
      <Banner />
      <section className="max-w-7xl m-auto py-8">
        <div>
          <p className="mb-2 text-center text-3xl">Nhập mã của bạn</p>
          <SendCodeForm />
        </div>
      </section>
    </main>
  )
}

export default page