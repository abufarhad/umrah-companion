import { lazy, Suspense, type ReactNode } from 'react'
import { createBrowserRouter, Link } from 'react-router'
import { Layout } from '../components/layout/Layout'
import { useLang } from '../i18n'

const HomePage = lazy(() => import('../pages/HomePage'))
const GuidePage = lazy(() => import('../pages/GuidePage'))
const GuideStepPage = lazy(() => import('../pages/GuideStepPage'))
const QuickPage = lazy(() => import('../pages/QuickPage'))
const DuasPage = lazy(() => import('../pages/DuasPage'))
const DuaPage = lazy(() => import('../pages/DuaPage'))
const VirtuesPage = lazy(() => import('../pages/VirtuesPage'))
const ExplorePage = lazy(() => import('../pages/ExplorePage'))
const SitePage = lazy(() => import('../pages/SitePage'))
const LibraryPage = lazy(() => import('../pages/LibraryPage'))
const MediaPage = lazy(() => import('../pages/MediaPage'))
const PlanPage = lazy(() => import('../pages/PlanPage'))
const BudgetPage = lazy(() => import('../pages/BudgetPage'))
const ItineraryPage = lazy(() => import('../pages/ItineraryPage'))
const SummaryPage = lazy(() => import('../pages/SummaryPage'))
const SettingsPage = lazy(() => import('../pages/SettingsPage'))
const HistoryPage = lazy(() => import('../pages/HistoryPage'))
const PlacePage = lazy(() => import('../pages/PlacePage'))

function Loading() {
  return <div className="mx-auto h-64 max-w-6xl animate-pulse px-4 py-10"><div className="h-8 w-1/2 rounded-lg bg-sand-200" /></div>
}

const s = (el: ReactNode) => <Suspense fallback={<Loading />}>{el}</Suspense>

function NotFound() {
  const { t } = useLang()
  return (
    <div className="mx-auto max-w-xl px-4 py-24 text-center">
      <h1 className="font-display text-3xl font-semibold text-emerald-900">{t('errors.notFound')}</h1>
      <Link to="/" className="mt-4 inline-block font-semibold text-emerald-800 underline">{t('nav.home')}</Link>
    </div>
  )
}

function RouteError() {
  const { t } = useLang()
  return (
    <div className="mx-auto max-w-xl px-4 py-24 text-center">
      <h1 className="font-display text-2xl font-semibold text-emerald-900">{t('errors.generic')}</h1>
      <button type="button" className="mt-4 font-semibold text-emerald-800 underline" onClick={() => location.reload()}>{t('errors.reload')}</button>
    </div>
  )
}

export const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <RouteError />,
    children: [
      { path: '/', element: s(<HomePage />) },
      { path: '/guide', element: s(<GuidePage />) },
      { path: '/guide/quick', element: s(<QuickPage />) },
      { path: '/guide/:pageId', element: s(<GuideStepPage />) },
      { path: '/duas', element: s(<DuasPage />) },
      { path: '/duas/:duaId', element: s(<DuaPage />) },
      { path: '/virtues', element: s(<VirtuesPage />) },
      { path: '/explore', element: s(<ExplorePage />) },
      { path: '/explore/:siteId', element: s(<SitePage />) },
      { path: '/library', element: s(<LibraryPage />) },
      { path: '/media', element: s(<MediaPage />) },
      { path: '/history', element: s(<HistoryPage />) },
      { path: '/history/:placeId', element: s(<PlacePage />) },
      { path: '/plan', element: s(<PlanPage />) },
      { path: '/budget', element: s(<BudgetPage />) },
      { path: '/itinerary', element: s(<ItineraryPage />) },
      { path: '/summary', element: s(<SummaryPage />) },
      { path: '/settings', element: s(<SettingsPage />) },
      { path: '*', element: <NotFound /> },
    ],
  },
])
