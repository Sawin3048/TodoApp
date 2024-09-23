import { useEffect, useState } from 'react'

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

export default function useInstallPWA () {
  const [installEvt, setInstallEvt] = useState<BeforeInstallPromptEvent | null>(null)
  const [canInstall, setCanInstall] = useState<boolean>(false)

  useEffect(() => {
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault()
      setInstallEvt(e as BeforeInstallPromptEvent)
      setCanInstall(true)
    }

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt)

    return () => window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt)
  }, [])

  const install = () => {
    if (installEvt) {
      installEvt.prompt()
      installEvt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          setCanInstall(false)
        }
      })
    }
  }

  return { canInstall, install }
}
