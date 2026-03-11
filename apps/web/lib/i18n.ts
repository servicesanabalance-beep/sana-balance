import messages from '@/i18n/messages/de.json'

type Messages = typeof messages

export function useTranslations(namespace: keyof Messages) {
  return (key: string) => {
    const keys = key.split('.')
    let value: any = messages[namespace]
    
    for (const k of keys) {
      value = value?.[k]
    }
    
    return value || key
  }
}
