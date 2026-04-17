# 🎨 Design System - Panduan Penggunaan Warna Semantic

## 📋 Daftar Isi
1. [Background & Surface](#background--surface)
2. [Text & Foreground](#text--foreground)
3. [Action & Interactive](#action--interactive)
4. [Status & Feedback](#status--feedback)
5. [Border](#border)
6. [Icon](#icon)
7. [Sidebar & Navigation](#sidebar--navigation)
8. [Chart](#chart)
9. [Issues & Rekomendasi](#issues--rekomendasi)

---

## 🟦 Background & Surface

### **Page Background**
| Token | Value | Kapan Digunakan |
|-------|-------|-----------------|
| `--background` | `gray-5` (#F1F1F1) | ✅ Background utama aplikasi (body) |
| `--bg-default` | `white` (#FFFFFF) | ⚠️ DUPLIKAT - sebaiknya dihapus |

**🎯 Gunakan:** `--background` untuk `<body>` atau container utama

**⚠️ ISSUE:** `--background` = gray, `--bg-default` = white → **CONFUSING!**

**💡 Rekomendasi:** Hapus `--bg-default`, pakai `--background` saja

---

### **Container/Card Background**
| Token | Value | Kapan Digunakan |
|-------|-------|-----------------|
| `--card` | `white` (#FFFFFF) | ✅ Background untuk card, modal, panel putih |
| `--card-background` | `gray-0` (#F9F9F9) | ✅ Background alternatif untuk nested card atau package card |
| `--surface-neutral-default` | `white` (#FFFFFF) | ⚠️ SAMA dengan `--card` |

**🎯 Contoh Penggunaan:**
```jsx
{/* Card utama - putih bersih */}
<div className="bg-card border border-border rounded-lg">
  Card content
</div>

{/* Card background - abu-abu subtle */}
<div style={{ background: 'var(--card-background)' }}>
  Package card content
</div>
```

**⚠️ ISSUE:** `--card` dan `--surface-neutral-default` sama-sama white

**💡 Rekomendasi:** 
- `--card` → untuk card/modal component
- `--surface-neutral-default` → hapus atau consolidate ke `--card`

---

### **Interactive Surface States**
| Token | Value | Kapan Digunakan |
|-------|-------|-----------------|
| `--surface-hovered` | `gray-5` (#F1F1F1) | ✅ Background saat hover (button, row, card) |
| `--surface-pressed` | `gray-20` (#C7C7C7) | ✅ Background saat pressed/active |
| `--surface-disabled` | `gray-5` (#F1F1F1) | ✅ Background untuk disabled state |
| `--surface-neutral-subdued` | `gray-5` (#F1F1F1) | ⚠️ SAMA dengan surface-hovered & disabled |

**🎯 Contoh:**
```jsx
<button className="bg-card hover:bg-[var(--surface-hovered)] active:bg-[var(--surface-pressed)]">
  Tombol dengan hover state
</button>
```

**⚠️ ISSUE:** 3 token berbeda (`surface-hovered`, `surface-disabled`, `surface-neutral-subdued`) = warna sama

**💡 Rekomendasi:** Consolidate jadi `--surface-subtle` saja

---

### **Status Surface (Light Backgrounds)**
| Token | Value | Kapan Digunakan |
|-------|-------|-----------------|
| `--surface-critical-default` | `red-5` (#FEEDF2) | ✅ Background untuk error banner/alert |
| `--surface-success-default` | `green-5` (#E2F5E0) | ✅ Background untuk success banner/alert |
| `--surface-warning-default` | `orange-5` (#FFEFD6) | ✅ Background untuk warning banner/alert |

**🎯 Contoh:**
```jsx
<div style={{ background: 'var(--surface-success-default)' }} className="p-4 rounded">
  ✓ Data berhasil disimpan
</div>
```

---

### **Popover & Dropdown**
| Token | Value | Kapan Digunakan |
|-------|-------|-----------------|
| `--popover` | `white` (#FFFFFF) | ✅ Background untuk dropdown, tooltip, menu |
| `--input` | `white` (#FFFFFF) | ⚠️ Background untuk input (tapi sama dengan popover) |
| `--input-background` | `white` (#FFFFFF) | ⚠️ DUPLIKAT dari `--input` |

**⚠️ ISSUE:** `--input` dan `--input-background` adalah duplikat

**💡 Rekomendasi:** Hapus `--input`, pakai `--input-background` saja

---

### **Muted/Subdued**
| Token | Value | Kapan Digunakan |
|-------|-------|-----------------|
| `--muted` | `gray-5` (#F1F1F1) | ✅ Background subtle/secondary |
| `--secondary` | `gray-5` (#F1F1F1) | ⚠️ SAMA dengan muted (tapi untuk button secondary) |

**💡 Rekomendasi:** Keep both - berbeda use case (muted = bg subtle, secondary = button)

---

## 📝 Text & Foreground

### **Default Text**
| Token | Value | Kapan Digunakan |
|-------|-------|-----------------|
| `--foreground` | `gray-90` (#323232) | ✅ Text utama di atas `--background` |
| `--text-default` | `gray-90` (#323232) | ⚠️ DUPLIKAT dari `--foreground` |

**⚠️ ISSUE:** Duplikasi

**💡 Rekomendasi:** Pakai `--foreground` saja (standar shadcn/ui)

---

### **Container Foreground**
| Token | Value | Kapan Digunakan |
|-------|-------|-----------------|
| `--card-foreground` | `gray-90` (#323232) | ✅ Text di atas `--card` |
| `--popover-foreground` | `gray-90` (#323232) | ✅ Text di atas `--popover` |

**🎯 Good Practice:** Pair dengan background-nya

---

### **Text Hierarchy**
| Token | Value | Kapan Digunakan |
|-------|-------|-----------------|
| `--text-subdued` | `gray-60` (#727272) | ✅ Secondary text, label, caption |
| `--muted-foreground` | `gray-70` (#5E5E5E) | ⚠️ Mirip dengan text-subdued (subtle difference) |
| `--text-disabled` | `gray-50` (#828282) | ✅ Disabled text |
| `--text-inverse-subdued` | `gray-20` (#C7C7C7) | ✅ Subdued text di atas dark background |

**💡 Rekomendasi:** 
- `--text-subdued` (#727272) untuk secondary text
- `--muted-foreground` (#5E5E5E) untuk muted/tertiary text
- Keep both - ada subtle difference

---

### **Status Text**
| Token | Value | Kapan Digunakan |
|-------|-------|-----------------|
| `--text-critical` | `red-60` (#DF2121) | ✅ Error text |
| `--text-success` | `green-60` (#268326) | ✅ Success text |
| `--text-warning` | `yellow-70` (#8B5104) | ✅ Warning text |

---

## 🔵 Action & Interactive

### **Primary Actions**
| Token | Value | Kapan Digunakan |
|-------|-------|-----------------|
| `--primary` | `blue-60` (#0A65FC) | ✅ Primary button background |
| `--primary-foreground` | `white` (#FFFFFF) | ✅ Text di atas primary button |
| `--primary-hover` | `blue-70` (#0954D9) | ✅ Primary button hover state |
| `--action-default` | `blue-60` (#0A65FC) | ⚠️ DUPLIKAT dari `--primary` |
| `--action-hovered` | `blue-80` (#0746BD) | ⚠️ Berbeda dari `--primary-hover` |
| `--action-pressed` | `blue-90` (#04287E) | ✅ Active/pressed state |

**⚠️ ISSUE:** 
- `--action-default` duplikat `--primary`
- `--action-hovered` (#0746BD) BERBEDA dari `--primary-hover` (#0954D9)

**💡 Rekomendasi:** Hapus semua `--action-*`, pakai `--primary*` saja

---

### **Primary Highlights**
| Token | Value | Kapan Digunakan |
|-------|-------|-----------------|
| `--primary-50` | `blue-5` (#E6F1FF) | ✅ Light blue background (selected state, highlight) |
| `--primary-200` | `blue-10` (#BFDAFE) | ✅ Light blue border (selected state) |

---

### **Secondary & Accent**
| Token | Value | Kapan Digunakan |
|-------|-------|-----------------|
| `--secondary` | `gray-5` (#F1F1F1) | ✅ Secondary button background |
| `--secondary-foreground` | `gray-90` (#323232) | ✅ Text di atas secondary button |
| `--accent` | `blue-90` (#04287E) | ✅ Accent color (link, highlight) |
| `--accent-foreground` | `white` (#FFFFFF) | ✅ Text di atas accent |

---

### **Disabled State**
| Token | Value | Kapan Digunakan |
|-------|-------|-----------------|
| `--interactive-disabled` | `gray-30` (#ADADAD) | ✅ Disabled button/interactive element |
| `--action-disabled` | `gray-30` (#ADADAD) | ⚠️ DUPLIKAT |

**💡 Rekomendasi:** Hapus `--action-disabled`

---

### **Destructive**
| Token | Value | Kapan Digunakan |
|-------|-------|-----------------|
| `--destructive` | `red-60` (#DF2121) | ✅ Delete button, destructive action |
| `--destructive-foreground` | `white` (#FFFFFF) | ✅ Text di atas destructive button |

---

## ✅ Status & Feedback

### **Success**
| Token | Value | Kapan Digunakan |
|-------|-------|-----------------|
| `--success` | `green-40` (#5FB05E) | ✅ Success badge solid background |
| `--success-foreground` | `white` (#FFFFFF) | ✅ Text di atas success solid |
| `--success-light` | `green-5` (#E2F5E0) | ✅ Success light background (alert, banner) |
| `--success-light-foreground` | `green-80` (#135D15) | ✅ Text di atas success light |

---

### **Warning**
| Token | Value | Kapan Digunakan |
|-------|-------|-----------------|
| `--warning` | `orange-30` (#FD9245) | ✅ Warning badge solid background |
| `--warning-foreground` | `white` (#FFFFFF) | ✅ Text di atas warning solid |
| `--warning-light` | `yellow-5` (#FDF2B2) | ✅ Warning light background |
| `--warning-light-foreground` | `orange-80` (#972801) | ✅ Text di atas warning light |

---

### **Critical/Error**
| Token | Value | Kapan Digunakan |
|-------|-------|-----------------|
| `--critical` | `red-60` (#DF2121) | ✅ Critical badge solid background |
| `--critical-foreground` | `white` (#FFFFFF) | ✅ Text di atas critical solid |
| `--critical-light` | `red-5` (#FEEDF2) | ✅ Critical light background |
| `--critical-light-foreground` | `red-80` (#A21013) | ✅ Text di atas critical light |

**⚠️ NOTE:** `--critical` sama dengan `--destructive` (keduanya red-60)

---

### **Info**
| Token | Value | Kapan Digunakan |
|-------|-------|-----------------|
| `--info` | `blue-60` (#0A65FC) | ✅ Info badge solid background |
| `--info-foreground` | `white` (#FFFFFF) | ✅ Text di atas info solid |
| `--info-light` | `blue-5` (#E6F1FF) | ✅ Info light background |
| `--info-light-foreground` | `blue-90` (#04287E) | ✅ Text di atas info light |

---

## 🔲 Border

| Token | Value | Kapan Digunakan |
|-------|-------|-----------------|
| `--border` | `gray-50` (#828282) | ✅ Default border (card, input, divider) |
| `--border-default` | `gray-50` (#828282) | ⚠️ DUPLIKAT dari `--border` |
| `--border-light` | `gray-20` (#C7C7C7) | ✅ Light border (subtle divider) |
| `--border-high` | `gray-60` (#727272) | ✅ High contrast border |
| `--border-hovered` | `gray-90` (#323232) | ✅ Border saat hover |
| `--border-disabled` | `gray-20` (#C7C7C7) | ✅ Border untuk disabled state |
| `--border-critical` | `red-60` (#DF2121) | ✅ Border untuk error/critical state |
| `--ring` | `blue-40` (#5F9FFC) | ✅ Focus ring outline |

**💡 Rekomendasi:** Hapus `--border-default`, pakai `--border`

---

## 🎯 Icon

| Token | Value | Kapan Digunakan |
|-------|-------|-----------------|
| `--icon-default` | `gray-90` (#323232) | ✅ Default icon color |
| `--icon-hovered` | `gray-90` (#323232) | ⚠️ SAMA dengan icon-default |
| `--icon-subdued` | `gray-60` (#727272) | ✅ Secondary/subdued icon |
| `--icon-disabled` | `gray-50` (#828282) | ✅ Disabled icon |
| `--icon-inverse` | `white` (#FFFFFF) | ✅ Icon di atas dark background |
| `--icon-critical` | `red-60` (#DF2121) | ✅ Error/critical icon |
| `--icon-success` | `green-50` (#369536) | ✅ Success icon |
| `--icon-secondary` | `gray-80` (#505050) | ✅ Secondary icon (navigation, etc) |

**💡 Rekomendasi:** `--icon-hovered` bisa diubah jadi blue-60 untuk feedback visual

---

## 🧭 Sidebar & Navigation

| Token | Value | Kapan Digunakan |
|-------|-------|-----------------|
| `--sidebar` | `blue-90` (#04287E) | ✅ Sidebar background |
| `--sidebar-foreground` | `white` (#FFFFFF) | ✅ Text di sidebar |
| `--sidebar-primary` | `blue-60` (#0A65FC) | ✅ Active/selected item di sidebar |
| `--sidebar-primary-foreground` | `white` (#FFFFFF) | ✅ Text di active item |
| `--sidebar-accent` | `blue-40` (#5F9FFC) | ✅ Hover state di sidebar |
| `--sidebar-accent-foreground` | `white` (#FFFFFF) | ✅ Text di hover state |
| `--sidebar-border` | `gray-80` (#505050) | ✅ Border/divider di sidebar |
| `--sidebar-ring` | `blue-40` (#5F9FFC) | ✅ Focus ring di sidebar |

---

## 📊 Chart

| Token | Value | Kapan Digunakan |
|-------|-------|-----------------|
| `--chart-1` | `blue-60` (#0A65FC) | ✅ Chart color 1 |
| `--chart-2` | `teal-40` (#1DB1A7) | ✅ Chart color 2 |
| `--chart-3` | `red-60` (#DF2121) | ✅ Chart color 3 |
| `--chart-4` | `orange-50` (#E65002) | ✅ Chart color 4 |
| `--chart-5` | `purple-50` (#9963F7) | ✅ Chart color 5 |

---

## 🚨 Issues & Rekomendasi

### **Duplikasi yang Harus Dihapus:**

1. **`--bg-default`** → Hapus, pakai `--background`
2. **`--text-default`** → Hapus, pakai `--foreground`
3. **`--border-default`** → Hapus, pakai `--border`
4. **`--action-default`, `--action-hovered`, `--action-pressed`, `--action-disabled`** → Hapus, pakai `--primary*` dan `--interactive-disabled`
5. **`--input`** → Hapus, pakai `--input-background`
6. **`--surface-neutral-default`** → Hapus atau consolidate ke `--card`

### **Inconsistency:**
- `--action-hovered` (#0746BD) ≠ `--primary-hover` (#0954D9) → Seharusnya sama!
- `--icon-hovered` = `--icon-default` → Tidak ada visual feedback

### **Saran Consolidation:**

**Surface States:**
```css
/* Sekarang (3 token untuk warna sama) */
--surface-hovered: gray-5
--surface-disabled: gray-5
--surface-neutral-subdued: gray-5

/* Saran (1 token) */
--surface-subtle: gray-5
```

---

## ✅ Best Practice Penggunaan

### **Hierarchy:**
1. **Raw Palette** → `--blue-60`, `--gray-5` (jangan dipakai langsung!)
2. **Semantic Token** → `--primary`, `--background` (pakai ini!)
3. **Component** → Tailwind class `bg-primary`

### **Pairing:**
Selalu pair background dengan foreground:
```jsx
// ✅ BENAR
<div className="bg-card text-card-foreground">

// ✅ BENAR
<div className="bg-primary text-primary-foreground">

// ❌ SALAH
<div className="bg-card text-foreground"> {/* foreground untuk background, bukan card */}
```

### **State Management:**
```jsx
<button className="
  bg-primary 
  hover:bg-primary-hover 
  disabled:bg-[var(--interactive-disabled)]
">
  Button
</button>
```
