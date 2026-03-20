# KorttiApp — Product Information

## What is KorttiApp?

KorttiApp is a digital wallet for work-related certification cards, designed for Finnish workers and professionals. Think Apple Pay or Google Wallet, but for occupational safety and competence cards instead of payment cards.

Users photograph their physical cards, enter the expiration date and issuer, and carry them all in one sleek, fast mobile app. Cards can be shown to others on-screen or shared as a PDF.

## The Problem

Finnish workers carry multiple physical certification cards (safety, first aid, hot work permits, etc.) that are easy to lose, forget, or damage. There's no convenient way to have them all at hand when needed on a job site.

## The Solution

KorttiApp digitizes these cards into a beautiful, wallet-style mobile experience. Snap a photo, save it, and your card is always with you — ready to show or share.

## Target Audience

- Construction workers
- Industrial and manufacturing workers
- Maintenance and facility workers
- Anyone in Finland who holds occupational safety certifications
- Employers and site managers who need to verify workers' certifications

## Supported Card Types (examples)

- **Työturvakortti** — Occupational Safety Card
- **Tulityökortti** — Hot Work Permit Card
- **Tieturvakortti** — Road Safety Card
- **Ensiapukortti** — First Aid Card
- **Valttikortti** — Workforce Competence Card
- **Perehdytykset** — Site orientation/induction documents
- Any other work-related card or document the user wants to store

## Key Features

### Digital Wallet Experience
- Cards displayed as full-width photo thumbnails in a stacked wallet layout
- Tap to expand a card; other cards fade into the background
- Smooth spring animations and haptic feedback for a premium feel
- Dark mode support on both platforms

### Smart Card Capture
- Take a photo with the camera or import from photo library
- Import cards from PDF files
- **Automatic card edge detection** — the app finds the card boundaries and crops it perfectly
- **OCR auto-fill** — the app reads the expiration date and card name from the photo automatically

### Two Content Types
- **Cards (Kortit)** — standard wallet-card format (credit card aspect ratio)
- **Orientations (Perehdytykset)** — document/certificate format (A4 portrait aspect ratio), with optional expiration

### Expiration Tracking
- Green/white: card is valid
- Orange: card expires within 30 days
- Red: card has expired
- Expiration status visible at a glance on every card thumbnail

### PDF Sharing
- Select one or more cards
- Generate a professional multi-page PDF with card photo, name, issuer, and expiration date
- Share via email, AirDrop, messaging, or any other app

### Card Image Sharing
- Share an individual card photo directly via the native share sheet

### Manual Reordering
- Long-press and drag to reorder cards
- Order is saved automatically

### Edit & Delete
- Edit card name, issuer, or expiration date at any time
- Delete cards with a confirmation step

## Platforms

- **iOS** — native Swift/SwiftUI app (iOS 17+)
- **Android** — native Kotlin/Jetpack Compose app (Android 8.0+)

Both apps are fully native — no cross-platform frameworks. Each uses platform-specific best practices and design language.

## Languages

- Finnish (fi)
- English (en)

## Privacy & Security

- **100% local storage** — all data stays on the device
- No backend, no cloud sync, no account required
- No data leaves the device unless the user explicitly shares it
- Card photos stored in the app's sandboxed storage

## Technology Highlights

- Apple Vision framework for card edge detection and OCR (iOS)
- Google ML Kit Document Scanner and Text Recognition (Android)
- Perspective-corrected card cropping
- Native PDF generation
- Material 3 / Material You dynamic theming (Android)
- SwiftUI with system dark/light mode support (iOS)

## User Flow Summary

1. **Add** — Tap +, snap a photo (or import), confirm the auto-detected crop and details, save
2. **Browse** — Scroll through your wallet, see expiration status at a glance
3. **Show** — Tap a card to expand it full-screen and show it to someone
4. **Share** — Select cards and generate a PDF, or share a single card photo
5. **Manage** — Edit details, reorder cards, delete cards you no longer need

## Design Philosophy

- Speed and ease of use above all
- Wallet-inspired UI: stacked cards, expand-to-focus, dark detail view
- Minimal steps to add and view a card
- Smart automation (OCR, edge detection) to reduce manual input
- Platform-native look and feel on both iOS and Android

## Branding

- **App name:** KorttiApp
- **Accent color:** Deep blue (#1565C0 on Android, system blue on iOS)
- **Card detail view:** Black background for a premium, wallet-like aesthetic
- **Theming:** Supports dark mode; Android uses Material You dynamic color
