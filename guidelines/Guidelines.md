⚠️ **IMPORTANT: This is a setup prompt (introductory prompt) containing all standards, copywriting rules, and constraints that MUST be followed in any code generation.**

🚫 You must NOT generate any UI code yet.  
✅ You will only start generating code based on the next prompt, which will define what needs to be built.

Please read and internalize the entire guidelines and rules below before responding to future prompts.

---

## 🎨 Design System — SINGLE SOURCE OF TRUTH

**All UI styling MUST use CSS variables from `/src/styles/theme.css`**

### ⚠️ CRITICAL REQUIREMENT

**Every component MUST use design system tokens. NO EXCEPTIONS.**

- 🎨 **Colors** → Use ONLY from theme.css (e.g., `bg-primary`, NOT `bg-blue-600`)
- 📐 **Spacing** → Use ONLY from theme.css (e.g., `var(--spacing-4)`, NOT `16px`)
- 🔤 **Typography** → Use ONLY Inter font from theme.css
- 🔲 **Borders** → Use ONLY radius from theme.css (e.g., `var(--radius-button)`)

**Purpose:** Design system compliance ensures:
1. Visual consistency across all components
2. Easy global updates via theme.css
3. Perfect sync with Figma design system

### ✅ Design System Rules

1. **Colors**: Use CSS variables for all colors
   - Primary: `bg-primary`, `text-primary`, `hover:bg-primary-hover`
   - Secondary: `bg-secondary`, `text-secondary-foreground`
   - Destructive: `bg-destructive`, `text-destructive-foreground`
   - Background: `bg-background`, `text-foreground`
   - Border: `border-border`, `border-border-light`
   - See `/src/styles/theme.css` for complete color system
   - ❌ NEVER use: `bg-blue-600`, `bg-gray-100`, `text-gray-900`, etc.

2. **Typography**: ONLY use font faces defined in `/src/styles/theme.css`
   - Font family: Inter (already defined)
   - Font sizes: Use CSS variables `var(--text-xs)`, `var(--text-sm)`, `var(--text-base)`, `var(--text-lg)`, `var(--text-xl)`, `var(--text-2xl)`
   - Font weights: Use `var(--font-weight-normal)`, `var(--font-weight-medium)`, `var(--font-weight-bold)`
   - Line heights: Use `var(--line-height-tight)`, `var(--line-height-normal)`, `var(--line-height-relaxed)`
   - **Heading hierarchy:**
     - `<h1>` → ONLY for hero text in hero section
     - `<h2>` → For section titles/headings in all other segments
     - `<h3>`, `<h4>`, etc. → For subsections and nested content
   - ❌ NEVER use custom fonts or hardcoded font sizes

3. **Spacing**: Use CSS variables from theme.css
   - `var(--spacing-1)` through `var(--spacing-8)`
   - Or use Tailwind spacing with design system values
   - ❌ NEVER use arbitrary values like `px-[15px]` or `gap-[10px]`

4. **Border Radius**: Use CSS variables
   - Buttons: `var(--radius-button)`
   - Cards: `var(--radius-card)`
   - General: `var(--radius)`
   - ❌ NEVER use arbitrary values like `rounded-[12px]`

5. **Shadows**: Use defined elevation
   - `var(--elevation-sm)` for cards and modals
   - ❌ NEVER use arbitrary shadows like `shadow-lg` unless mapped

### 📦 Component Guidelines

- ✅ Use existing components from `/src/app/components/` when available
- ✅ For new components, ensure they use CSS variables from theme.css
- ✅ Apply Tailwind CSS classes that reference design system variables
- ❌ Do NOT use hardcoded color values (e.g., `bg-blue-600`)
- ❌ Do NOT use hardcoded spacing or sizing values
- ✅ Prefer `bg-primary` over `bg-blue-600`
- ✅ Prefer `text-foreground` over `text-gray-900`

### 🎯 Example Usage

```jsx
// ✅ CORRECT - Using CSS variables via Tailwind
<button className="bg-primary text-primary-foreground hover:bg-primary-hover rounded-[var(--radius-button)] px-[var(--spacing-4)] py-[var(--spacing-2)]">
  Kirim
</button>

// ✅ CORRECT - Using Tailwind classes mapped to theme
<div className="bg-card text-card-foreground border border-border rounded-lg shadow-sm">
  Card content
</div>

// ❌ WRONG - Hardcoded values
<button className="bg-blue-600 text-white hover:bg-blue-700 rounded-md px-4 py-2">
  Submit
</button>
```

---

## 📄 Copywriting Guidelines — STRICTLY ENFORCED

You are generating UX content for a government-facing platform. Please follow these **strict content rules**:

### 🚫 LANGUAGE RESTRICTION — DO NOT IGNORE
**All generated content must be written 100% in _Bahasa Indonesia_ (Indonesian language).**

- ❌ Do NOT use any English words or phrases in UI content, labels, titles, buttons, placeholders, alerts, etc.
- ✅ Translate **every single piece of content** into formal Bahasa Indonesia, including:
  - Button labels (e.g. "Submit" → "Kirim")
  - Empty states
  - Notifications
  - File inputs (e.g. "Choose File" → "Pilih Berkas")
  - System feedback (e.g. "Success", "Error", "No data", etc.)
- NEVER leave mixed language content (e.g. "Upload berhasil" ❌)

> If any English word remains in the generated content, the result is considered invalid.

### ✍️ Core Communication Principles

These guide how every message is framed. Apply them before diving into tone or vocabulary:

1. **Write with empathy**  
   Understand user challenges. Offer helpful, relevant copy.

2. **Be clear and concise**  
   Shorten copy wherever possible without sacrificing clarity.

3. **Guide, don't command**  
   Use supportive, empowering phrasing.

4. **Stick to the facts**  
   Ensure accuracy and rely on trusted, official sources.

---

### 📋 Formal Copywriting Requirements

- Prioritize **clarity over tone** if space is tight.
- Use a **formal**, **neutral**, and **respectful** tone. The platform is perceived as part of the Ministry.
- Follow **KBBI** and government regulations.
- Address users using **"Anda"**, refer to the system/platform as **"kami"**


**Preferred Language:**
- ✅ "Mari", ✅ "Selamat datang Bapak/Ibu", ✅ "Terima kasih"
- ❌ "Yuk", ❌ "Halo", ❌ Casual tones or slang

**Avoid:**
- Exclamation marks (!)
- Informal language
- Rare words (e.g., "Apresiasi")

---

### 🔹 Terminology Rules

Always use the terms below **exactly as written**. Avoid any variations.

#### **General Terms (Use ✅ / Avoid ❌):**

- ✅ "mutasi", "rotasi", "jenjang jabatan", "jenjang"
- ✅ "Ahli Pertama", "Ahli Muda", "Ahli Madya", "Ahli Utama"
- ✅ "cek" / ❌ "lihat"
- ✅ "formasi", "ajukan formasi", "pengajuan formasi"
- ✅ "satuan pendidikan" / ❌ "sekolah"
- ✅ "daerah" / ❌ "wilayah"
- ✅ "Provinsi", "Prov."
- ✅ "Kabupaten atau Kota", "Kab.", "Kota", "Kab/Kota"
- ✅ "Indeks Kesulitan Geografis (IKG)", "IKG"
- ✅ "maksimum", "minimum", "maks.", "min."
- ✅ "perbandingan" / ❌ "rasio"
- ✅ "Kunjungi Pusat Bantuan" / ❌ "Hubungi Pusat Bantuan"

#### **Institutional/System Names (Title Case):**

- "Dapodik", "Simtendik", "Kemendikdasmen"
- "Direktorat Jenderal GTK"
- "Kemenpan RB", "Kemendagri", "BKN"

#### **Platform/System References (Sentence case):**

- "kami", "sistem", "di luar sistem", "secara luring"
- Do not use "dasbor"
- Use full names: "Sistem Pengangkatan Kepala Sekolah", etc.

#### **Regulation Format:**

- "peraturan yang berlaku"
- "Perdirjen GTK Nomor ___ Tahun ___"
- "Permenpan RB Nomor ___ Tahun ___"
- "Permendikbud Nomor ___ Tahun ___"

---

### 🌍 Example Copy Patterns

#### **Buttons:**

- ✅ "Ajukan formasi"
- ❌ "Klik di sini untuk mengajukan"

#### **Empty States:**

- ✅ "Belum ada formasi yang tersedia saat ini"

#### **Notifications:**

- ✅ "Formasi berhasil diajukan"
- ❌ "Yeay! Kamu berhasil!"

#### **Page Titles/Subtitles:**

- ✅ "Rotasi Kepala Sekolah" (Title Case)
- ✅ "Kelola proses rotasi di satuan pendidikan Anda." (Sentence case)

### 💡 Usage Notes

- Even if this prompt is written in English, the generated result MUST be in **Bahasa Indonesia only**.
- You may retain React/JSX/HTML structure in English (e.g. `<button>`, `className`, etc.), but **all visible text must be localized** to Bahasa Indonesia.

---

## 🚫 Mandatory Constraints

- ✅ You **MUST** use CSS variables from `/src/styles/theme.css` for all styling
- ✅ You **MUST** use Tailwind CSS for all styling
- ✅ Use existing components from `/src/app/components/` when available
- ✅ Ensure consistent styling, layout, and behavior according to the design system
- ✅ For typography, ONLY use font faces defined in `/src/styles/theme.css`
- ❌ Do **NOT** use hardcoded color values (e.g., `bg-blue-600`, `#0B5FEF`)
- ❌ Do **NOT** use hardcoded spacing or sizing values

---

## 🧠 Critical Instructions

- This prompt does **not** define what to build — it only provides foundational setup and rules.
- **Do not generate any code until the next prompt.**
- The next prompt will define the actual UI to be built.
- In that prompt, you must fully apply the standards defined here.

```jsx
// ✅ DO use:
// CSS variables from theme.css via Tailwind classes
// bg-primary, text-foreground, border-border
// Existing components from /src/app/components/

// ❌ DO NOT use:
// Hardcoded colors: bg-blue-600, #0B5FEF
// Hardcoded values: px-4 (use var(--spacing-4) instead when needed)
// Inline styles
```

**Design System Reference:**
All colors, spacing, typography, borders, and radius values are defined in `/src/styles/theme.css`. This is the **single source of truth** for all styling. Update that file to change the design system globally.

---

Memorize and apply this setup for all future code generation sessions.