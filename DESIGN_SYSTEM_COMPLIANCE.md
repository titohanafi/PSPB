# ✅ Design System Compliance Checklist

**Purpose:** Ensure ALL components follow design system standards from `/src/styles/theme.css`

---

## 🎯 PRINSIP UTAMA

> **SEMUA styling HARUS pakai CSS variables dari design system**  
> **TIDAK ADA PENGECUALIAN**

---

## 📋 Verification Checklist

### ✅ **Colors**

**DO ✅**
- `bg-primary` → var(--primary)
- `bg-secondary` → var(--secondary)
- `bg-destructive` → var(--destructive)
- `bg-card` → var(--card)
- `bg-background` → var(--background)
- `text-foreground` → var(--foreground)
- `text-primary-foreground` → var(--primary-foreground)
- `text-muted-foreground` → var(--muted-foreground)
- `border-border` → var(--border)
- `border-border-light` → var(--border-light)

**DON'T ❌**
- `bg-blue-600` ← Hardcoded Tailwind color
- `bg-gray-100` ← Hardcoded Tailwind color
- `text-gray-900` ← Hardcoded Tailwind color
- `border-gray-300` ← Hardcoded Tailwind color
- `bg-[#0B5FEF]` ← Arbitrary hex value
- `text-[#2F3031]` ← Arbitrary hex value

---

### ✅ **Typography**

**DO ✅**
- Font Family: `'Inter', sans-serif` (dari theme.css)
- Font Size: `var(--text-xs)`, `var(--text-sm)`, `var(--text-base)`, `var(--text-lg)`, `var(--text-xl)`, `var(--text-2xl)`
- Font Weight: `var(--font-weight-normal)`, `var(--font-weight-medium)`, `var(--font-weight-bold)`
- Line Height: `var(--line-height-tight)`, `var(--line-height-normal)`, `var(--line-height-relaxed)`

**DON'T ❌**
- Font Family: `'Roboto'`, `'Poppins'`, atau custom fonts lainnya
- Font Size: `text-[17px]`, `text-[15px]` (arbitrary values)
- Font Weight: `font-[500]`, `font-[550]` (arbitrary values)
- Hardcoded values: `font-size: 16px` di inline styles

---

### ✅ **Spacing**

**DO ✅**
- `px-[var(--spacing-4)]` → 16px from design system
- `py-[var(--spacing-2)]` → 8px from design system
- `gap-[var(--spacing-3)]` → 12px from design system
- `p-[var(--spacing-6)]` → 24px from design system
- `m-[var(--spacing-8)]` → 32px from design system

**ACCEPTABLE ⚠️ (jika mapped di Tailwind)**
- `px-4` (jika 1 unit = 4px)
- `py-2`
- `gap-3`

**DON'T ❌**
- `px-[15px]` ← Arbitrary value tidak ada di design system
- `py-[10px]` ← Arbitrary value tidak ada di design system
- `gap-[18px]` ← Arbitrary value tidak ada di design system
- `p-[25px]` ← Arbitrary value tidak ada di design system

---

### ✅ **Border Radius**

**DO ✅**
- Buttons: `rounded-[var(--radius-button)]` → 4px
- Cards: `rounded-[var(--radius-card)]` → 8px
- General: `rounded-[var(--radius)]` → 4px

**DON'T ❌**
- `rounded-[12px]` ← Arbitrary value
- `rounded-[6px]` ← Arbitrary value
- `rounded-xl` (kecuali mapped ke design system)

---

### ✅ **Shadows**

**DO ✅**
- `shadow-[var(--elevation-sm)]` → Design system shadow
- `shadow-sm` (jika mapped ke design system)

**DON'T ❌**
- `shadow-[0_4px_6px_rgba(0,0,0,0.1)]` ← Arbitrary shadow
- `shadow-lg` (kecuali mapped ke design system)

---

## 🔍 **How to Verify a Component**

### **Step 1: Check Colors**
```jsx
// Scan untuk patterns ini:
bg-blue-*     ❌
bg-gray-*     ❌
bg-red-*      ❌
bg-green-*    ❌
text-gray-*   ❌
border-gray-* ❌

// Harus pakai:
bg-primary          ✅
bg-secondary        ✅
bg-destructive      ✅
bg-card             ✅
text-foreground     ✅
border-border       ✅
```

### **Step 2: Check Spacing**
```jsx
// Cari arbitrary values:
px-[15px]    ❌
py-[10px]    ❌
gap-[18px]   ❌
m-[25px]     ❌

// Harus pakai:
px-[var(--spacing-4)]  ✅
py-[var(--spacing-2)]  ✅
gap-[var(--spacing-3)] ✅
m-[var(--spacing-6)]   ✅
```

### **Step 3: Check Typography**
```jsx
// Cari custom fonts:
font-family: 'Roboto'  ❌
font-family: 'Poppins' ❌

// Harus pakai:
font-family: 'Inter', sans-serif  ✅

// Cari arbitrary sizes:
text-[17px]  ❌
text-[15px]  ❌

// Harus pakai:
var(--text-base)  ✅
var(--text-sm)    ✅
```

### **Step 4: Check Border Radius**
```jsx
// Cari arbitrary radius:
rounded-[12px]  ❌
rounded-[6px]   ❌

// Harus pakai:
rounded-[var(--radius-button)]  ✅
rounded-[var(--radius-card)]    ✅
```

---

## 📊 **Component Audit Template**

Copy template ini untuk audit setiap component:

```markdown
### Component: [ComponentName]
**File:** /src/app/components/[filename].tsx
**Date:** [Date]

#### Colors
- [ ] Semua warna dari design system (bg-primary, text-foreground, dll)
- [ ] Tidak ada hardcoded colors (bg-blue-600, #0B5FEF, dll)

#### Typography
- [ ] Font family: Inter (dari theme.css)
- [ ] Font sizes: var(--text-*) atau mapped Tailwind classes
- [ ] Font weights: var(--font-weight-*) atau mapped Tailwind classes

#### Spacing
- [ ] Spacing: var(--spacing-*) atau mapped Tailwind classes
- [ ] Tidak ada arbitrary values (px-[15px], gap-[10px], dll)

#### Border Radius
- [ ] Radius: var(--radius-*) atau mapped Tailwind classes
- [ ] Tidak ada arbitrary values (rounded-[12px], dll)

#### Shadows
- [ ] Shadows: var(--elevation-*) atau mapped Tailwind classes

**Status:** ✅ Compliant / ⚠️ Needs Fix / ❌ Non-Compliant

**Notes:**
[Any additional notes]
```

---

## 🎨 **Complete Example**

### ✅ **COMPLIANT Component**

```tsx
// File: /src/app/components/FormCard.tsx

export function FormCard() {
  return (
    <div className="
      bg-card                         ← ✅ Design system color
      text-card-foreground            ← ✅ Design system color
      border border-border            ← ✅ Design system color
      rounded-[var(--radius-card)]    ← ✅ Design system radius
      shadow-[var(--elevation-sm)]    ← ✅ Design system shadow
      p-[var(--spacing-6)]            ← ✅ Design system spacing
      gap-[var(--spacing-4)]          ← ✅ Design system spacing
    ">
      <h2 className="
        text-[var(--text-xl)]         ← ✅ Design system font size
        font-[var(--font-weight-medium)] ← ✅ Design system font weight
      ">
        Ajukan Formasi
      </h2>
      
      <button className="
        bg-primary                    ← ✅ Design system color
        text-primary-foreground       ← ✅ Design system color
        hover:bg-primary-hover        ← ✅ Design system color
        rounded-[var(--radius-button)] ← ✅ Design system radius
        px-[var(--spacing-4)]         ← ✅ Design system spacing
        py-[var(--spacing-2)]         ← ✅ Design system spacing
      ">
        Kirim
      </button>
    </div>
  );
}
```

### ❌ **NON-COMPLIANT Component**

```tsx
// File: /src/app/components/BadFormCard.tsx

export function BadFormCard() {
  return (
    <div className="
      bg-white                 ← ❌ Hardcoded! Harus bg-card
      text-gray-900            ← ❌ Hardcoded! Harus text-card-foreground
      border border-gray-300   ← ❌ Hardcoded! Harus border-border
      rounded-lg               ← ⚠️ Might be OK if mapped, prefer var(--radius-card)
      shadow-md                ← ⚠️ Might be OK if mapped, prefer var(--elevation-sm)
      p-6                      ← ⚠️ Might be OK if mapped, prefer var(--spacing-6)
      gap-4                    ← ⚠️ Might be OK if mapped, prefer var(--spacing-4)
    ">
      <h2 className="
        text-2xl               ← ⚠️ Might be OK if mapped, prefer var(--text-xl)
        font-semibold          ← ⚠️ Might be OK if mapped, prefer var(--font-weight-medium)
      ">
        Submit Form
      </h2>
      
      <button className="
        bg-blue-600            ← ❌ CRITICAL! Harus bg-primary
        text-white             ← ❌ Harus text-primary-foreground
        hover:bg-blue-700      ← ❌ Harus hover:bg-primary-hover
        rounded-md             ← ⚠️ Prefer var(--radius-button)
        px-4 py-2              ← ⚠️ Prefer var(--spacing-4) var(--spacing-2)
      ">
        Submit
      </button>
    </div>
  );
}
```

---

## 🚀 **Quick Fix Guide**

### **Find & Replace Pattern:**

| Find (❌) | Replace (✅) |
|-----------|--------------|
| `bg-blue-600` | `bg-primary` |
| `bg-blue-700` | `bg-primary-hover` |
| `bg-white` | `bg-card` or `bg-background` |
| `bg-gray-100` | `bg-secondary` or `bg-muted` |
| `text-gray-900` | `text-foreground` |
| `text-gray-500` | `text-muted-foreground` |
| `border-gray-300` | `border-border` |
| `rounded-lg` | `rounded-[var(--radius-card)]` |
| `rounded-md` | `rounded-[var(--radius-button)]` |

---

## 📝 **Summary**

### **Design System Files:**
- **Source of Truth:** `/src/styles/theme.css`
- **Guidelines:** `/guidelines/Guidelines.md`
- **Migration Doc:** `/DESIGN_SYSTEM_MIGRATION.md`
- **Compliance Doc:** `/DESIGN_SYSTEM_COMPLIANCE.md` (this file)

### **Golden Rules:**
1. ✅ **ALWAYS** use CSS variables from theme.css
2. ❌ **NEVER** hardcode colors, spacing, or typography
3. 🎨 **Colors:** bg-primary NOT bg-blue-600
4. 📐 **Spacing:** var(--spacing-4) NOT arbitrary values
5. 🔤 **Typography:** Inter font ONLY from theme.css

---

✅ **Compliance = Consistency + Maintainability + Figma Sync**
