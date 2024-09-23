import clsx from 'clsx'
import InstallSVG from '../assets/InstallSVG'
import useInstallPWA from '../hook/useInstallPWA'
import { useEffect, useRef, useState } from 'react'

export default function DownloadButton () {
  const { install, canInstall } = useInstallPWA()
  const [show, setShow] = useState(false)
  const modalRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setShow(false)
      }
    }
    if (show === true) {
      document.addEventListener('mousedown', handleClickOutside)
      return () => document.removeEventListener('mousedown', handleClickOutside)
    }
    document.removeEventListener('mousedown', handleClickOutside)
  }, [modalRef, show])

  return (
  <>
    <div className='relative place-content-center'>
      <button className={clsx('w-7 h-7 grid place-content-center relative active:bg-slate-200 transition-colors rounded-full pl-3', { hidden: !canInstall })}
        onClick={() => setShow(ls => !ls)}
        >
        <span className='rotate-90 text-xl'>...</span>
      </button>
      <div ref={modalRef} className={clsx('bg-white w-36 absolute top-0 right-7 rounded-md shadow-lg border', { hidden: !show })}>
          <button onClick={() => { install(); setShow(s => !s) }} className='flex p-2 hover:bg-slate-50 justify-between items-center w-full text-slate-600'>
          <span className='text-lg'>Install</span>
            <InstallSVG />
        </button>
      </div>
    </div>
  </>
  )
}
