# Component Library - Design System Compliant

## 📦 Komponen Utama (100% Design System Compliant)

Semua komponen di folder `/src/app/components/` sudah **100% compliant** dengan design system yang didefinisikan di `/src/styles/theme.css`.

### ✅ Komponen yang Tersedia

#### Form Components
- **Button** (`Button.tsx`) - Tombol dengan varian blue, black, white, red, dan close button
- **TextField** (`TextField.tsx`) - ⭐ **RECOMMENDED** - Input field lengkap dengan label, error, helper text
- **SelectField** (`SelectField.tsx`) - ⭐ **RECOMMENDED** - Dropdown select lengkap dengan label, error, helper text
- **Input** (`Input.tsx`) - Input field dengan addon, icon, validation (legacy)
- **FormInput** (`FormInput.tsx`) - Simple input dengan label (legacy)
- **Select** (`Select.tsx`) - Dropdown select dengan custom styling (legacy)
- **Textarea** (`Textarea.tsx`) - Text area dengan character counter
- **Checkbox** (`Checkbox.tsx`) - Checkbox dengan indeterminate state

#### Display Components
- **Badge** (`Badge.tsx`) - Badge dengan varian success, warning, critical, informational, neutral

### 🎨 Design System Compliance

Semua komponen menggunakan:
- ✅ **CSS Variables** untuk colors (`var(--primary)`, `var(--foreground)`)
- ✅ **CSS Variables** untuk spacing (`var(--spacing-2)`, `var(--spacing-4)`)
- ✅ **CSS Variables** untuk typography (`var(--text-sm)`, `var(--font-weight-medium)`)
- ✅ **CSS Variables** untuk borders & radius (`var(--radius)`, `var(--radius-button)`)
- ✅ **Inter Font** dari `/src/styles/fonts.css`

### 📝 Cara Penggunaan

```tsx
import { Button } from "./components/Button";
import { Badge } from "./components/Badge";
import { TextField } from "./components/TextField";
import { SelectField } from "./components/SelectField";
import { Textarea } from "./components/Textarea";
import { Checkbox } from "./components/Checkbox";
import { X } from "lucide-react";

// Button
<Button color="blue" size="md">Kirim</Button>

// Close Button (untuk modal/dialog)
<Button closeButton aria-label="Tutup">
  <X className="w-6 h-6 text-foreground" />
</Button>

// Badge
<Badge variant="success" size="sm">Aktif</Badge>

// TextField ⭐ RECOMMENDED (100% design system compliant)
<TextField 
  label="Nama Lengkap"
  placeholder="Masukkan nama lengkap Anda"
  value={name}
  onChange={setName}
  helperText="Nama lengkap sesuai KTP"
  required
/>

// SelectField ⭐ RECOMMENDED (100% design system compliant)
<SelectField 
  label="Provinsi"
  placeholder="Pilih provinsi"
  options={[
    { label: 'DKI Jakarta', value: 'jakarta' },
    { label: 'Jawa Barat', value: 'jabar' }
  ]}
  value={selectedProvinsi}
  onChange={setSelectedProvinsi}
  required
/>

// Textarea
<Textarea 
  placeholder="Deskripsi"
  maxLength={500}
  isInvalid={false}
/>

// Checkbox
<Checkbox checked={isChecked} onChange={handleChange}>
  Saya setuju dengan syarat dan ketentuan
</Checkbox>
```

### 🆕 TextField Component - Full Example

```tsx
import { TextField } from "./components/TextField";
import { Mail, Lock } from "lucide-react";

// Basic
<TextField 
  label="Email"
  placeholder="contoh@email.com"
  value={email}
  onChange={setEmail}
/>

// With validation
<TextField 
  label="Kata Sandi"
  type="password"
  placeholder="Masukkan kata sandi"
  value={password}
  onChange={setPassword}
  error={passwordError}
  errorMessage="Kata sandi minimal 8 karakter"
  required
/>

// With icons
<TextField 
  label="Email"
  placeholder="contoh@email.com"
  value={email}
  onChange={setEmail}
  leftIcon={<Mail className="w-4 h-4" />}
/>

// With character count
<TextField 
  label="Bio"
  placeholder="Ceritakan tentang Anda"
  value={bio}
  onChange={setBio}
  maxLength={200}
  showCharacterCount
  helperText="Maksimal 200 karakter"
/>

// Disabled
<TextField 
  label="Nama Sekolah"
  value="SDN 01 Jakarta"
  disabled
/>
```

### 🆕 SelectField Component - Full Example

```tsx
import { SelectField } from "./components/SelectField";

// Basic
<SelectField 
  label="Tipe Kontribusi"
  placeholder="Pilih tipe kontribusi"
  options={[
    { label: 'Revitalisasi Sekolah', value: 'revitalisasi' },
    { label: 'Renovasi Sekolah', value: 'renovasi' }
  ]}
  value={selectedType}
  onChange={setSelectedType}
/>

// With validation
<SelectField 
  label="Provinsi"
  placeholder="Pilih provinsi"
  options={provinsiOptions}
  value={selectedProvinsi}
  onChange={setSelectedProvinsi}
  error={provinsiError}
  errorMessage="Provinsi wajib dipilih"
  required
/>

// With helper text
<SelectField 
  label="Kabupaten/Kota"
  placeholder="Pilih kabupaten/kota"
  options={kabupatenOptions}
  value={selectedKabupaten}
  onChange={setSelectedKabupaten}
  helperText="Pilih provinsi terlebih dahulu"
/>

// Disabled
<SelectField 
  label="Status"
  options={[{ label: 'Aktif', value: 'active' }]}
  value="active"
  disabled
/>
```

## 🎯 Button Component - Showcase Lengkap

### Varian Warna
```tsx
// Primary (Blue)
<Button color="blue" size="md">Kirim Data</Button>

// Secondary (Black)
<Button color="black" size="md">Batal</Button>

// Tertiary (White)
<Button color="white" size="md">Pelajari Selengkapnya</Button>

// Destructive (Red)
<Button color="red" size="md">Hapus</Button>
```

### Size Variants
```tsx
<Button color="blue" size="sm">Small Button</Button>
<Button color="blue" size="md">Medium Button</Button>
<Button color="blue" size="lg">Large Button</Button>
```

### Ghost Variant
```tsx
<Button color="blue" variant="ghost">Ghost Button</Button>
```

### Loading State
```tsx
<Button color="blue" isLoading>Menyimpan...</Button>
```

### Full Width
```tsx
<Button color="blue" fullWidth>Full Width Button</Button>
```

### Close Button (Modal/Dialog)
```tsx
import { X } from "lucide-react";

// Semi-transparent dengan backdrop blur
<Button closeButton aria-label="Tutup">
  <X className="w-6 h-6 text-foreground" />
</Button>

// Dengan positioning
<Button 
  closeButton 
  className="absolute top-4 right-4"
  aria-label="Tutup"
>
  <X className="w-6 h-6 text-foreground" />
</Button>

// Ukuran icon berbeda untuk konteks tertentu
<Button 
  closeButton 
  className="absolute -top-2 -right-2 shadow-md z-10"
  aria-label="Tutup detail"
>
  <X className="w-4 h-4 text-foreground" />
</Button>
```

### ✅ Implementasi Close Button di Aplikasi
Close button sudah diimplementasikan di:
- **UpdatedLandingPage.tsx** - Modal detail program
- **ProgramSelectionModal.tsx** - Modal pilih program
- **ExplorePageFilterOnRenovasiSekolah.tsx** - Modal peta sekolah (2 close buttons)

Semua menggunakan komponen `Button` dengan prop `closeButton={true}` untuk konsistensi.

### Design System Tokens yang Digunakan
- **Spacing**: `var(--spacing-2)`, `var(--spacing-3)`, `var(--spacing-4)`, `var(--spacing-5)`, `var(--spacing-6)`
- **Border Radius**: `var(--radius-button)` atau `9999px` untuk close button
- **Font Weight**: `var(--font-weight-semibold)`
- **Colors**: `bg-primary`, `bg-foreground`, `bg-card`, `bg-destructive`, dll
- **Backdrop**: `backdrop-blur-sm` untuk close button

### ⚠️ Catatan Penting

1. **JANGAN gunakan komponen dari `/src/app/components/ui/`** kecuali untuk komponen yang memang belum ada versi custom-nya (contoh: DropdownMenu)
2. **SELALU gunakan komponen dari `/src/app/components/`** untuk Button, Badge, Input, Select, Textarea, Checkbox
3. Jika perlu menambah komponen baru, pastikan menggunakan CSS variables dari `/src/styles/theme.css`

### 🔄 Update Design System

Untuk mengubah styling secara global, edit file `/src/styles/theme.css`:
- **Colors**: Ubah nilai `--primary`, `--foreground`, dll
- **Spacing**: Ubah nilai `--spacing-1` sampai `--spacing-8`
- **Typography**: Ubah nilai `--text-xs` sampai `--text-2xl`
- **Borders**: Ubah nilai `--radius`, `--radius-button`, `--radius-card`

Semua komponen akan otomatis update tanpa perlu edit kode komponen!