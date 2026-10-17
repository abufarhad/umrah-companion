import type { Session } from '@supabase/supabase-js'
import { Cloud, CloudDownload, CloudUpload, Download, LogOut, Trash2, Upload } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { Button, Card, Notice, PageHeader, SectionTitle, Segmented, TextField, Toggle } from '../components/ui'
import { LanguageSwitch } from '../components/layout/Layout'
import { useLang } from '../i18n'
import { getSession, onAuthChange, pullState, pushState, sendMagicLink, signOut } from '../lib/cloudSync'
import { date } from '../lib/format'
import { isSupabaseConfigured } from '../lib/supabase'
import { hydrate, useStore, type AppState } from '../state/store'
import { downloadFile } from '../lib/download'

function CloudSync() {
  const { t, lang } = useLang()
  const { state, dispatch } = useStore()
  const [session, setSession] = useState<Session | null>(null)
  const [email, setEmail] = useState('')
  const [msg, setMsg] = useState<{ tone: 'emerald' | 'red'; text: string } | null>(null)
  const [busy, setBusy] = useState(false)

  useEffect(() => {
    let unsub = () => {}
    void getSession().then(setSession)
    void onAuthChange(setSession).then((u) => (unsub = u))
    return () => unsub()
  }, [])

  if (!isSupabaseConfigured) return <Notice tone="blue">{t('settings.cloudOff')}</Notice>

  const run = async (fn: () => Promise<string | null>, ok: string) => {
    setBusy(true)
    const err = await fn()
    setBusy(false)
    setMsg(err ? { tone: 'red', text: `${t('settings.error')}: ${err}` } : { tone: 'emerald', text: ok })
  }

  if (!session)
    return (
      <form
        className="grid gap-3"
        onSubmit={(e) => {
          e.preventDefault()
          if (email) void run(() => sendMagicLink(email), t('settings.linkSent'))
        }}
      >
        <p className="text-sm text-ink-soft">{t('settings.cloudIntro')}</p>
        <TextField label={t('settings.email')} type="email" required autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <Button type="submit" disabled={busy}><Cloud className="size-4" />{t('settings.sendLink')}</Button>
        {msg && <Notice tone={msg.tone}>{msg.text}</Notice>}
      </form>
    )

  return (
    <div className="grid gap-3">
      <p className="text-sm text-ink-soft">{t('settings.signedInAs', { email: session.user.email ?? '' })}</p>
      <div className="grid gap-2 sm:grid-cols-2">
        <Button disabled={busy} onClick={() => run(() => pushState(session.user.id, state), t('settings.saved'))}><CloudUpload className="size-4" />{t('settings.saveCloud')}</Button>
        <Button
          variant="outline"
          disabled={busy}
          onClick={() =>
            run(async () => {
              const r = await pullState<AppState>(session.user.id)
              if (r.error) return r.error
              if (!r.data) return t('settings.nothingSaved')
              if (!confirm(t('settings.restoreConfirm', { date: date(r.updatedAt?.slice(0, 10), lang) }))) return null
              dispatch({ type: 'replace', value: hydrate(r.data) })
              return null
            }, t('settings.restored'))
          }
        >
          <CloudDownload className="size-4" />{t('settings.restoreCloud')}
        </Button>
      </div>
      <Button variant="ghost" onClick={() => void signOut()}><LogOut className="size-4" />{t('settings.signOut')}</Button>
      {msg && <Notice tone={msg.tone}>{msg.text}</Notice>}
    </div>
  )
}

export default function SettingsPage() {
  const { t } = useLang()
  const { state, dispatch } = useStore()
  const file = useRef<HTMLInputElement>(null)
  const s = state.settings

  return (
    <>
      <PageHeader eyebrow={t('settings.eyebrow')} title={t('settings.title')} />
      <div className="mx-auto grid max-w-3xl gap-6 px-4 py-8">
        <Card className="p-5">
          <SectionTitle>{t('settings.language')}</SectionTitle>
          <div className="w-fit rounded-full bg-emerald-900 p-1"><LanguageSwitch /></div>
          <p className="mt-2 text-sm text-ink-muted">{t('settings.languageHint')}</p>
        </Card>
        <Card className="p-5">
          <SectionTitle>{t('settings.accessibility')}</SectionTitle>
          <div className="grid gap-4">
            <Segmented<number> label={t('settings.textSize')} value={s.textScale} onChange={(v) => dispatch({ type: 'settings', value: { textScale: v } })} options={[{ value: 0.9, label: 'A−' }, { value: 1, label: 'A' }, { value: 1.12, label: 'A+' }, { value: 1.25, label: 'A++' }]} />
            <Segmented label={t('settings.motion')} value={s.motion} onChange={(v) => dispatch({ type: 'settings', value: { motion: v } })} options={[{ value: 'system', label: t('settings.motionSystem') }, { value: 'reduce', label: t('settings.motionReduce') }, { value: 'full', label: t('settings.motionFull') }]} />
            <Toggle label={t('settings.translit')} description={t('settings.translitHint')} checked={s.showTransliteration} onChange={(v) => dispatch({ type: 'settings', value: { showTransliteration: v } })} />
          </div>
        </Card>
        <Card className="p-5">
          <SectionTitle>{t('settings.cloud')}</SectionTitle>
          <CloudSync />
        </Card>
        <Card className="p-5">
          <SectionTitle>{t('settings.data')}</SectionTitle>
          <p className="mb-3 text-sm text-ink-soft">{t('settings.dataHint')}</p>
          <div className="grid gap-2 sm:grid-cols-3">
            <Button variant="outline" onClick={() => downloadFile('umrah-companion-backup.json', JSON.stringify(state, null, 2), 'application/json')}><Download className="size-4" />{t('settings.export')}</Button>
            <Button variant="outline" onClick={() => file.current?.click()}><Upload className="size-4" />{t('settings.import')}</Button>
            <Button variant="ghost" className="text-red-700" onClick={() => confirm(t('settings.resetConfirm')) && dispatch({ type: 'resetAll' })}><Trash2 className="size-4" />{t('settings.reset')}</Button>
          </div>
          <input
            ref={file}
            type="file"
            accept="application/json"
            className="hidden"
            onChange={async (e) => {
              const f = e.target.files?.[0]
              if (!f) return
              try {
                dispatch({ type: 'replace', value: hydrate(JSON.parse(await f.text())) })
                alert(t('settings.imported'))
              } catch {
                alert(t('settings.importFailed'))
              }
              e.target.value = ''
            }}
          />
        </Card>
      </div>
    </>
  )
}
