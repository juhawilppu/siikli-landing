import { ArrowLeft } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import LanguageSwitcher from '../../components/LanguageSwitcher'
import { Button } from '../../components/ui/button'
import { useTranslation } from '../../lib/translations'
import { useIsMobile } from '../../use-mobile'

export default function TopBar({ showBackButton }: { showBackButton?: boolean, hideLoginButton?: boolean }) {
  const t = useTranslation()
  const isMobile = useIsMobile()
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container flex h-16 items-center w-full justify-between items-start px-[10px] md:px-0">
        <NavLink to="/">
          <div className="flex items-center gap-2 md:pl-6">
            <span className="font-bold text-2xl text-primary">Siikli</span>
          </div>
        </NavLink>
        <nav className="hidden md:flex gap-6 items-center">
          <NavLink
            to="/#ominaisuudet"
            className="text-md font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            {t('landing.topbar.features')}
          </NavLink>
          <NavLink
            to="/#hinnoittelu"
            className="text-md font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            {t('landing.topbar.pricing')}
          </NavLink>
          <NavLink
            to="/tuki"
            className="text-md font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            {t('landing.topbar.support')}
          </NavLink>
          <NavLink
            to="/yhteystiedot"
            className="text-md font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            {t('landing.topbar.contact')}
          </NavLink>
        </nav>
        <div className="flex items-center justify-end w-[200px] lg:gap-4">
          <LanguageSwitcher />
          {showBackButton && (
            <Button variant="outline" size="sm" asChild>
              <NavLink to="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                {t('landing.topbar.back')}
              </NavLink>
            </Button>
          )}
          <Button size={isMobile ? 'sm' : 'lg'} className="rounded-full" asChild>
            <a href="https://app.siikli.fi">
              {t('landing.topbar.login')}
            </a>
          </Button>
        </div>
      </div>
    </header>
  )
}
