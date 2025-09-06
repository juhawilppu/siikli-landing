import { useState } from 'react'
import { useApp } from '@/context/AppContext'
import { Button } from './ui/button'
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover'

export default function LanguageSwitcher() {
  const { language, setLanguage } = useApp()
  const [open, setOpen] = useState(false)

  return (
    <div>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button variant="ghost" size="icon" className="w-10 h-10 text-xl">
            {language === 'fi' ? '🇫🇮' : '🇬🇧'}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-40">
          <div className="flex flex-col gap-2">
            <Button
              variant="ghost"
              className="w-full justify-start text-lg"
              onClick={() => {
                setLanguage('fi')
                setOpen(false)
              }}
            >
              🇫🇮
              {' '}
              <span className="text-base">Suomi</span>
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start text-lg"
              onClick={() => {
                setLanguage('en')
                setOpen(false)
              }}
            >
              🇬🇧
              {' '}
              <span className="text-base">English</span>
            </Button>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  )
}
