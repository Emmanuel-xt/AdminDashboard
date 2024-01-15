import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className="flex flex-col items-center bg-slate-700 text-white p-2 text-[10px]">
    <p>Copyright © 2023 JS Admin Dashboard | All Rights Reserved</p>

    <div className="flex gap-x-9">
      <Link href="/terms-of-use">Terms & Conditions</Link>
      <Link href="/privacy-policy">Privacy Policy</Link>
    </div>
  </footer>
  )
}

export default Footer