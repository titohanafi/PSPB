# 🧹 Design System Cleanup - Keputusan yang Dibutuhkan

## 📌 Prinsip
✅ **PERTAHANKAN:** Semua naming dari Figma Anda  
❌ **HAPUS:** Token template (shadcn/ui) yang duplikat

---

## ⚠️ CONFLICTS - Perlu Keputusan Anda

### **1. Background Aplikasi**

**Dari Template:**
```css
--background: var(--gray-5);  /* #F1F1F1 - abu-abu muda */
```

**Dari Figma Anda:**
```css
--bg-default: var(--white);   /* #FFFFFF - putih bersih */
```

**❓ Pertanyaan:** Background aplikasi seharusnya warna apa?
- [ ] **Gray (#F1F1F1)** → Body abu-abu, card putih (kontras tinggi)
- [ ] **White (#FFFFFF)** → Body putih, perlu card background beda (abu-abu atau shadow)

**💡 Rekomendasi:** 
- Jika pakai Gray → Hapus `--bg-default`, pakai `--background`
- Jika pakai White → Hapus `--background`, pakai `--bg-default`

---

### **2. Primary Button Hover**

**Dari Template:**
```css
--primary: var(--blue-60);        /* #0A65FC - base */
--primary-hover: var(--blue-70);  /* #0954D9 - lebih gelap */
```

**Dari Figma Anda:**
```css
--action-default: var(--blue-60);  /* #0A65FC - base (SAMA) */
--action-hovered: var(--blue-80);  /* #0746BD - LEBIH GELAP lagi */
```

**❓ Pertanyaan:** Hover state primary button seharusnya blue-70 atau blue-80?
- [ ] **Blue-70 (#0954D9)** → Subtle hover (lebih terang)
- [ ] **Blue-80 (#0746BD)** → Strong hover (lebih gelap/kontras)

**💡 Impact:** Ini akan mempengaruhi semua button hover di aplikasi

---

### **3. Text Default**

**Dari Template:**
```css
--foreground: var(--gray-90);     /* #323232 */
```

**Dari Figma Anda:**
```css
--text-default: var(--gray-90);   /* #323232 - SAMA */
```

**✅ Decision:** Hapus `--foreground`, pakai `--text-default` (100% sama)

---

### **4. Border Default**

**Dari Template:**
```css
--border: var(--gray-50);         /* #828282 */
```

**Dari Figma Anda:**
```css
--border-default: var(--gray-50); /* #828282 - SAMA */
```

**✅ Decision:** Hapus `--border`, pakai `--border-default` (100% sama)

---

### **5. Card vs Surface**

**Dari Template:**
```css
--card: var(--white);                    /* #FFFFFF */
--card-foreground: var(--gray-90);       /* #323232 */
--card-background: var(--gray-0);        /* #F9F9F9 */
```

**Dari Figma Anda:**
```css
--surface-neutral-default: var(--white); /* #FFFFFF - SAMA dengan --card */
```

**❓ Pertanyaan:** Apakah card dan surface itu hal yang sama atau berbeda?
- [ ] **Sama** → Hapus `--card`, pakai `--surface-neutral-default`
- [ ] **Beda** → Keep both:
  - `--card` untuk card component (white background)
  - `--surface-neutral-default` untuk general surface
  - `--card-background` untuk nested/secondary card

**💡 Saran:** Keep `--card-background` karena unique (gray-0 untuk secondary container)

---

### **6. Input Background**

**Dari Template:**
```css
--input: var(--white);            /* #FFFFFF */
--input-background: var(--white); /* #FFFFFF - SAMA */
```

**✅ Decision:** Hapus `--input`, pakai `--input-background` (100% sama)

---

## 🗑️ Token yang PASTI Dihapus (Duplikat 100%)

Ini duplikat sempurna, tidak ada conflict:

```css
/* Hapus ini (ada di template) */
--foreground          → Ganti dengan --text-default
--border              → Ganti dengan --border-default
--input               → Ganti dengan --input-background

/* Hapus ini (duplikat internal) */
--action-disabled     → Sama dengan --interactive-disabled (gray-30)
```

---

## 🤔 Token yang Perlu Klarifikasi Fungsi

### **Secondary vs Muted**
```css
--secondary: var(--gray-5);           /* Secondary button bg */
--secondary-foreground: var(--gray-90);

--muted: var(--gray-5);               /* Muted/disabled bg */
--muted-foreground: var(--gray-70);
```

**❓ Apakah ini berbeda?**
- Background sama (gray-5)
- Foreground beda (gray-90 vs gray-70)

**💡 Saran:** Keep both karena foreground berbeda

---

### **Accent - Apakah Digunakan?**
```css
--accent: var(--blue-90);             /* #04287E - dark blue */
--accent-foreground: var(--white);
```

**❓ Apakah accent digunakan di Figma design system Anda?**
- [ ] Ya → Keep
- [ ] Tidak → Hapus

---

### **Destructive vs Critical**
```css
--destructive: var(--red-60);          /* Template naming */
--critical: var(--red-60);             /* Figma naming? */
--text-critical: var(--red-60);
--surface-critical-default: var(--red-5);
--border-critical: var(--red-60);
--icon-critical: var(--red-60);
```

**❓ Apakah destructive dan critical sama?**
- [ ] Sama → Hapus `--destructive`, pakai `--critical` dan `--*-critical`
- [ ] Beda → Keep both (jelaskan use case-nya)

---

### **Popover - Apakah Digunakan?**
```css
--popover: var(--white);
--popover-foreground: var(--gray-90);
```

**❓ Apakah ada token popover di Figma Anda?**
- [ ] Tidak → Hapus, gunakan `--surface-neutral-default` untuk dropdown/tooltip
- [ ] Ya → Keep untuk dropdown/menu/tooltip

---

## 📋 Action Plan

Setelah Anda jawab pertanyaan di atas, saya akan:

1. ✅ Hapus semua token duplikat 100%
2. ✅ Resolve conflicts (pilih satu dari dua)
3. ✅ Update ComponentShowcase.tsx untuk tampilkan token final
4. ✅ Buat mapping guide untuk Tailwind classes
5. ✅ Update dokumentasi final

---

## 🎯 Tolong Jawab:

**Background Aplikasi:**
- [ ] Gray (--background) atau [ ] White (--bg-default)?

**Primary Hover:**
- [ ] Blue-70 (--primary-hover) atau [ ] Blue-80 (--action-hovered)?

**Card vs Surface:**
- [ ] Sama (hapus --card) atau [ ] Beda (keep both)?

**Accent:**
- [ ] Digunakan (keep) atau [ ] Tidak (hapus)?

**Destructive vs Critical:**
- [ ] Sama (consolidate) atau [ ] Beda (explain)?

**Popover:**
- [ ] Digunakan (keep) atau [ ] Tidak (hapus)?

---

Saya tunggu jawaban Anda, lalu saya cleanup theme.css! 🧹
