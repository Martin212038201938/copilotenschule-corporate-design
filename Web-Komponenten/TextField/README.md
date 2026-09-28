# TextField

Eingabefeld mit Label, Hinweis und Fehlermeldung. Der Aufrufer liefert `label`, optional `hint`, `error`, `required`, `multiline` sowie alle nativen Input-Attribute.

- Label immer sichtbar über dem Feld, nie nur als Platzhalter.
- Fehler: Rahmen und Text in `danger`, mit Ausrufezeichen-Icon und konkretem Satz („Bitte geben Sie eine geschäftliche E-Mail-Adresse an.“).
- Feldhöhe 48px, Rahmen 2px `line-strong` – ausreichend Kontrast (≥3:1).
