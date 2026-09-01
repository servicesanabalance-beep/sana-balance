-- Update massage prices/durations to match the new price list (2026-09-01).
-- Klassische Massage: 30 min - 55 CHF / 60 min - 95 CHF
-- Wellnessmassage:    30 min - 45 CHF / 60 min - 80 CHF
-- Dorn & Breuss:      60 min - 95 CHF / 75 min - 120 CHF
-- Sportmassage:       30 min - 55 CHF / 60 min - 95 CHF (already correct, description fixed)

-- Klassische Massage (id 1): existing 60 min row -> 95 CHF, add 30 min / 55 CHF
update services set price_eur = 95 where id = 1;
insert into services (name_de, name_en, description_de, duration_minutes, price_eur, is_active)
values (
  'Klassische Massage',
  'Classic Massage',
  'Die klassische Massage ist eine bewährte Technik zur Linderung von Muskelverspannungen.',
  30,
  55,
  true
);

-- Wellnessmassage (id 2): existing 60 min row -> 80 CHF, add 30 min / 45 CHF
update services set price_eur = 80 where id = 2;
insert into services (name_de, name_en, description_de, duration_minutes, price_eur, is_active)
values (
  'Wellnessmassage',
  'Aromatherapy Massage',
  'Die Wellnessmassage schenkt tiefe Entspannung für Körper und Geist.',
  30,
  45,
  true
);

-- Dorn & Breuss (id 11 = 75 min, id 12 = 60 min): fix prices
update services set price_eur = 120 where id = 11;
update services set price_eur = 95 where id = 12;

-- Sportmassage 30 min (id 4): fix garbled description text
update services
set description_de = 'Verspannungen werden gelöst und die Regeneration der Muskeln wird gefördert, sodass Sie sich schneller erholen.'
where id = 4;
