import { AnimatePresence, MotionConfig, motion } from 'motion/react'
import { BookOpen, Calculator, Landmark, Map as MapIcon, Sparkles, CalendarDays, Compass, Home, Images, Library, Menu, Plane, Settings, ClipboardList, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, NavLink, Outlet, ScrollRestoration, useLocation } from 'react-router'
import { MiniPlayer } from '../../audio/Player'
import { useLang } from '../../i18n'
import { useStore } from '../../state/store'
import { cx } from '../ui'

export const NAV = [
  { to: '/', key: 'nav.home', icon: Home, end: true },
  { to: '/guide', key: 'nav.guide', icon: BookOpen },
  { to: '/duas', key: 'nav.duas', icon: Sparkles },
  { to: '/explore', key: 'nav.explore', icon: MapIcon },
  { to: '/library', key: 'nav.library', icon: Library },
  { to: '/history', key: 'nav.history', icon: Landmark },
  { to: '/media', key: 'nav.media', icon: Images },
  { to: '/plan', key: 'nav.planner', icon: Plane },
  { to: '/budget', key: 'nav.budget', icon: Calculator },
  { to: '/itinerary', key: 'nav.itinerary', icon: CalendarDays },
  { to: '/summary', key: 'nav.summary', icon: ClipboardList },
  { to: '/settings', key: 'nav.settings', icon: Settings },
] as const

const MOBILE = ['/guide', '/duas', '/explore', '/plan', '/summary']

export function LanguageSwitch({ compact = false }: { compact?: boolean }) {
  const { lang, setLang, t } = useLang()
  return (
    <div role="group" aria-label={t('common.language')} className="flex rounded-full bg-emerald-950/40 p-0.5 text-sm ring-1 ring-white/15">
      {(['bn', 'en'] as const).map((l) => (
        <button
          key={l}
          type="button"
          lang={l}
          aria-pressed={lang === l}
          onClick={() => setLang(l)}
          className={cx(
            'relative min-h-9 rounded-full px-3 font-semibold transition-colors',
            lang === l ? 'text-emerald-950' : 'text-white/80 hover:text-white',
          )}
        >
          {lang === l && <motion.span layoutId="lang-pill" className="absolute inset-0 rounded-full bg-gold-300" transition={{ type: 'spring', bounce: 0.2, duration: 0.4 }} />}
          <span className="relative">{l === 'bn' ? (compact ? 'বাং' : 'বাংলা') : compact ? 'EN' : 'English'}</span>
        </button>
      ))}
    </div>
  )
}

function Header() {
  const { t } = useLang()
  const [open, setOpen] = useState(false)
  const loc = useLocation()
  useEffect(() => setOpen(false), [loc.pathname])

  return (
    <header className="sticky top-0 z-40 bg-emerald-900/95 text-white backdrop-blur supports-[backdrop-filter]:bg-emerald-900/85">
      <div className="mx-auto flex h-16 max-w-6xl items-center gap-3 px-4">
        <Link to="/" className="flex items-center gap-2 font-display text-lg font-semibold">
          <span className="grid size-9 place-items-center rounded-xl bg-gold-400 text-emerald-950" aria-hidden>
            <Compass className="size-5" />
          </span>
          <span className="leading-tight">{t('app.name')}</span>
        </Link>
        <nav aria-label={t('nav.main')} className="ml-4 hidden flex-1 items-center gap-0.5 xl:flex">
          {NAV.filter((n) => ['/guide', '/duas', '/explore', '/history', '/plan', '/budget', '/summary'].includes(n.to)).map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              className={({ isActive }) =>
                cx('rounded-lg px-2.5 py-2 text-sm font-medium whitespace-nowrap transition-colors', isActive ? 'bg-white/15 text-white' : 'text-white/75 hover:text-white')
              }
            >
              {t(n.key)}
            </NavLink>
          ))}
        </nav>
        <div className="ml-auto flex items-center gap-2">
          <LanguageSwitch compact />
          <Link to="/settings" aria-label={t('nav.settings')} className="hidden size-10 place-items-center rounded-lg text-white/80 hover:bg-white/10 xl:grid">
            <Settings className="size-5" />
          </Link>
          <button
            type="button"
            className="grid size-10 place-items-center rounded-lg hover:bg-white/10 xl:hidden"
            aria-label={open ? t('common.close') : t('nav.menu')}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav
            aria-label={t('nav.main')}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-white/10 xl:hidden"
          >
            <ul className="mx-auto grid max-w-6xl grid-cols-2 gap-1 px-4 py-3 sm:grid-cols-3">
              {NAV.map((n) => (
                <li key={n.to}>
                  <NavLink
                    to={n.to}
                    end={'end' in n}
                    className={({ isActive }) => cx('flex min-h-11 items-center gap-2 rounded-lg px-3 text-sm', isActive ? 'bg-white/15' : 'hover:bg-white/10')}
                  >
                    <n.icon className="size-4 text-gold-300" aria-hidden />
                    {t(n.key)}
                  </NavLink>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}

function MobileTabBar() {
  const { t } = useLang()
  return (
    <nav aria-label={t('nav.quick')} className="no-print fixed inset-x-0 bottom-0 z-40 border-t border-sand-200 bg-white/95 pb-[env(safe-area-inset-bottom)] backdrop-blur lg:hidden">
      <ul className="mx-auto grid max-w-md grid-cols-5">
        {NAV.filter((n) => MOBILE.includes(n.to)).map((n) => (
          <li key={n.to}>
            <NavLink
              to={n.to}
              end={'end' in n}
              className={({ isActive }) =>
                cx('flex min-h-14 flex-col items-center justify-center gap-0.5 text-[11px] font-medium', isActive ? 'text-emerald-800' : 'text-ink-muted')
              }
            >
              <n.icon className="size-5" aria-hidden />
              <span className="max-w-full truncate px-1">{t(n.key.replace('nav.', 'nav.tabs.'))}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

function Footer() {
  const { t } = useLang()
  return (
    <footer className="mt-16 border-t border-sand-200 bg-sand-100 pb-44 lg:pb-24">
      <div className="mx-auto grid max-w-6xl gap-6 px-4 py-10 text-sm text-ink-soft sm:grid-cols-3">
        <div>
          <p className="font-display text-base font-semibold text-emerald-900">{t('app.name')}</p>
          <p className="mt-2">{t('footer.about')}</p>
        </div>
        <div>
          <p className="font-semibold text-emerald-900">{t('footer.accuracyTitle')}</p>
          <p className="mt-2">{t('footer.accuracy')}</p>
        </div>
        <div>
          <p className="font-semibold text-emerald-900">{t('footer.privacyTitle')}</p>
          <p className="mt-2">{t('footer.privacy')}</p>
        </div>
      </div>
    </footer>
  )
}

export function Layout() {
  const loc = useLocation()
  const { state } = useStore()
  const reduced = state.settings.motion === 'reduce' ? 'always' : state.settings.motion === 'full' ? 'never' : 'user'
  const { t } = useLang()
  return (
    <MotionConfig reducedMotion={reduced}>
      <a href="#main" className="sr-only z-50 rounded bg-gold-300 px-3 py-2 focus:not-sr-only focus:fixed focus:top-2 focus:left-2">
        {t('common.skip')}
      </a>
      <Header />
      {/* Enter-only transition: never delays access to content. */}
      <motion.main
        id="main"
        key={loc.pathname.split('/')[1] ?? ''}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
        className="min-h-[70vh]"
      >
        <Outlet />
      </motion.main>
      <Footer />
      <MiniPlayer />
      <MobileTabBar />
      <ScrollRestoration />
    </MotionConfig>
  )
}
