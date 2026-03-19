# Google reCAPTCHA Setup Instructions

## Konfiguracja Google reCAPTCHA v2 dla formularza kontaktowego

### Krok 1: Utwórz klucze reCAPTCHA

1. Przejdź do [Google reCAPTCHA Admin Console](https://www.google.com/recaptcha/admin)
2. Zaloguj się na swoje konto Google
3. Kliknij przycisk **"+"** aby utworzyć nową witrynę

### Krok 2: Wypełnij formularz rejestracji

- **Label**: `SanaBalance Contact Form` (lub dowolna nazwa)
- **reCAPTCHA type**: Wybierz **reCAPTCHA v2** → **"I'm not a robot" Checkbox**
- **Domains**: 
  - Dodaj `localhost` (dla testów lokalnych)
  - Dodaj `sanabalance.ch` (lub Twoją domenę produkcyjną)
  - Dodaj `sanabalance-ch.vercel.app` (jeśli używasz Vercel)
- **Accept the reCAPTCHA Terms of Service**: Zaznacz checkbox
- Kliknij **Submit**

### Krok 3: Skopiuj klucze

Po utworzeniu witryny otrzymasz dwa klucze:
- **Site Key** (klucz publiczny) - używany w przeglądarce
- **Secret Key** (klucz prywatny) - używany na serwerze

### Krok 4: Zaktualizuj zmienne środowiskowe

Otwórz plik `.env.local` i zastąp testowe klucze swoimi prawdziwymi kluczami:

```env
# Google reCAPTCHA v2
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=twój_site_key_tutaj
RECAPTCHA_SECRET_KEY=twój_secret_key_tutaj
```

### Krok 5: Dodaj zmienne do Vercel (dla produkcji)

1. Przejdź do [Vercel Dashboard](https://vercel.com/dashboard)
2. Wybierz swój projekt
3. Przejdź do **Settings** → **Environment Variables**
4. Dodaj następujące zmienne:
   - `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` = twój site key
   - `RECAPTCHA_SECRET_KEY` = twój secret key
5. Kliknij **Save**
6. Zrób redeploy projektu

### Krok 6: Restart serwera deweloperskiego

Po zaktualizowaniu `.env.local`, zrestartuj serwer:

```bash
# Zatrzymaj serwer (Ctrl+C)
# Uruchom ponownie
npm run dev
```

### Testowanie

1. Otwórz formularz kontaktowy na stronie
2. Wypełnij wszystkie pola
3. Zaznacz checkbox "I'm not a robot"
4. Kliknij "Nachricht senden"

### Uwagi

- **Testowe klucze** (obecnie w `.env.local`) działają tylko lokalnie i zawsze przechodzą weryfikację
- **Produkcyjne klucze** są wymagane dla działającej strony
- Nie commituj pliku `.env.local` do repozytorium Git (jest w `.gitignore`)
- Secret Key nigdy nie powinien być ujawniony publicznie

### Rozwiązywanie problemów

**Problem**: reCAPTCHA nie wyświetla się
- Sprawdź czy klucz `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` jest poprawny
- Sprawdź czy domena jest dodana w Google reCAPTCHA Admin Console
- Sprawdź konsolę przeglądarki pod kątem błędów

**Problem**: Weryfikacja zawsze kończy się błędem
- Sprawdź czy `RECAPTCHA_SECRET_KEY` jest poprawny
- Upewnij się że używasz kluczy dla reCAPTCHA v2, nie v3

### Dokumentacja

- [Google reCAPTCHA Documentation](https://developers.google.com/recaptcha/docs/display)
- [react-google-recaptcha Library](https://github.com/dozoisch/react-google-recaptcha)
