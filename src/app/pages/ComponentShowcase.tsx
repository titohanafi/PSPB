import React, { useState } from "react";
import { Button } from "../components/Button";
import { Badge } from "../components/Badge";
import { Checkbox } from "../components/Checkbox";
import { Input } from "../components/Input";
import { Select, Option } from "../components/Select";
import { Textarea } from "../components/Textarea";
import { Search, Mail, Calendar, ArrowRight, Trash2, Edit, Copy, Download, MoreVertical } from "lucide-react";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuTrigger 
} from "../components/ui/dropdown-menu";
import { DropdownMenuItemAction } from "../components/DropdownMenuItemAction";
import { SafeButton } from "../components/ui/SafeButton";

export default function ComponentShowcase() {
  const [checkboxValue, setCheckboxValue] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [selectValue, setSelectValue] = useState("");
  const [textareaValue, setTextareaValue] = useState("");

  const selectOptions: Option[] = [
    { label: "Jakarta", value: "jakarta" },
    { label: "Bandung", value: "bandung" },
    { label: "Surabaya", value: "surabaya" },
    { label: "Yogyakarta", value: "yogyakarta" },
  ];

  const ColorToken = ({ name, cssVar, bgColor, hexValue }: { name: string; cssVar: string; bgColor?: string; hexValue?: string }) => (
    <div className="flex items-center gap-3">
      <div 
        className={bgColor || ""}
        style={{ 
          width: '48px', 
          height: '48px', 
          borderRadius: 'var(--radius)',
          border: '1px solid var(--border)',
          ...(cssVar && !bgColor && { background: `var(${cssVar})` })
        }}
      />
      <div className="flex-1">
        <p 
          className="text-foreground"
          style={{ fontSize: 'var(--text-sm)', fontWeight: 'var(--font-weight-medium)' }}
        >
          {name}
        </p>
        <div className="flex flex-col gap-0.5">
          <code className="text-muted-foreground" style={{ fontSize: 'var(--text-xs)' }}>
            {cssVar}
          </code>
          {hexValue && (
            <code className="text-muted-foreground" style={{ fontSize: 'var(--text-xs)' }}>
              {hexValue}
            </code>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div 
      className="min-h-screen bg-background"
      style={{ padding: 'var(--spacing-6)' }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div style={{ marginBottom: 'var(--spacing-8)' }}>
          <h1 
            className="text-foreground"
            style={{
              fontSize: 'var(--text-2xl)',
              fontWeight: 'var(--font-weight-medium)',
              marginBottom: 'var(--spacing-2)'
            }}
          >
            Showcase Komponen & Design System
          </h1>
          <p 
            className="text-muted-foreground"
            style={{
              fontSize: 'var(--text-base)',
              fontWeight: 'var(--font-weight-normal)',
              marginBottom: 'var(--spacing-4)'
            }}
          >
            Referensi visual untuk memastikan konsistensi design system di semua halaman
          </p>
          <div 
            className="bg-blue-50 border-l-4 text-foreground"
            style={{ 
              padding: 'var(--spacing-4)',
              borderRadius: 'var(--radius)',
              borderLeftColor: 'var(--primary)',
              backgroundColor: 'var(--blue-10)'
            }}
          >
            <p style={{ fontSize: 'var(--text-sm)', fontWeight: 'var(--font-weight-medium)' }}>
              💡 Halaman ini adalah kontrol visual design system
            </p>
            <p className="text-muted-foreground" style={{ fontSize: 'var(--text-sm)', marginTop: 'var(--spacing-1)' }}>
              Gunakan halaman ini untuk memastikan semua komponen di halaman lain mengikuti design system yang sama
            </p>
          </div>
        </div>

        {/* Design Tokens - Colors */}
        <section 
          className="bg-card rounded-lg shadow-sm border border-border"
          style={{ 
            padding: 'var(--spacing-6)',
            marginBottom: 'var(--spacing-6)',
            borderRadius: 'var(--radius-card)'
          }}
        >
          <h2 
            className="text-foreground"
            style={{
              fontSize: 'var(--text-xl)',
              fontWeight: 'var(--font-weight-medium)',
              marginBottom: 'var(--spacing-4)'
            }}
          >
            Design Tokens - Warna
          </h2>

          {/* Background & Surface */}
          <div style={{ marginBottom: 'var(--spacing-6)' }}>
            <h3 
              className="text-foreground"
              style={{
                fontSize: 'var(--text-lg)',
                fontWeight: 'var(--font-weight-medium)',
                marginBottom: 'var(--spacing-3)'
              }}
            >
              Background & Surface
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ColorToken name="✅ Surface Default (FIGMA)" cssVar="--surface-default" hexValue="white = #FFFFFF" />
              <ColorToken name="✅ Surface Neutral Default (FIGMA)" cssVar="--surface-neutral-default" hexValue="gray-5 = #F1F1F1" />
              <ColorToken name="✅ Surface Neutral Subdued" cssVar="--surface-neutral-subdued" hexValue="gray-10 = #D8D8D8" />
              <ColorToken name="✅ Surface Hovered" cssVar="--surface-hovered" hexValue="gray-10 = #D8D8D8" />
              <ColorToken name="✅ Surface Pressed" cssVar="--surface-pressed" hexValue="gray-20 = #C7C7C7" />
              <ColorToken name="✅ Surface Disabled" cssVar="--surface-disabled" hexValue="gray-5 = #F1F1F1" />
              <ColorToken name="✅ Surface Critical" cssVar="--surface-critical-default" hexValue="red-5 = #FEEDF2" />
              <ColorToken name="✅ Surface Success" cssVar="--surface-success-default" hexValue="green-5 = #E2F5E0" />
              <ColorToken name="✅ Surface Warning" cssVar="--surface-warning-default" hexValue="orange-5 = #FFEFD6" />
              <ColorToken name="✅ Surface Input" cssVar="--surface-input" hexValue="white = #FFFFFF" />
              <ColorToken name="⚠️ Background (DEPRECATED)" cssVar="--background" hexValue="→ surface-default (white)" />
              <ColorToken name="⚠️ Card (DEPRECATED)" cssVar="--card" hexValue="→ surface-neutral-default (gray-5)" />
              <ColorToken name="⚠️ Card Background" cssVar="--card-background" hexValue="gray-0 = #F9F9F9" />
              <ColorToken name="⚠️ Muted (DEPRECATED)" cssVar="--muted" hexValue="→ surface-neutral-subdued" />
            </div>
          </div>

          {/* Text Colors */}
          <div style={{ marginBottom: 'var(--spacing-6)' }}>
            <h3 
              className="text-foreground"
              style={{
                fontSize: 'var(--text-lg)',
                fontWeight: 'var(--font-weight-medium)',
                marginBottom: 'var(--spacing-3)'
              }}
            >
              Text
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ColorToken name="✅ Text Default (FIGMA)" cssVar="--text-default" hexValue="gray-90 = #323232" />
              <ColorToken name="✅ Text Subdued" cssVar="--text-subdued" hexValue="gray-60 = #727272" />
              <ColorToken name="✅ Text Disabled" cssVar="--text-disabled" hexValue="gray-50 = #828282" />
              <ColorToken name="✅ Text Inverse Subdued" cssVar="--text-inverse-subdued" hexValue="gray-20 = #C7C7C7" />
              <ColorToken name="✅ Text Critical" cssVar="--text-critical" hexValue="red-60 = #DF2121" />
              <ColorToken name="✅ Text Success" cssVar="--text-success" hexValue="green-60 = #268326" />
              <ColorToken name="✅ Text Warning" cssVar="--text-warning" hexValue="yellow-70 = #8B5104" />
              <ColorToken name="⚠️ Foreground (DEPRECATED)" cssVar="--foreground" hexValue="→ text-default" />
              <ColorToken name="⚠️ Muted Foreground (OK to use)" cssVar="--muted-foreground" hexValue="→ text-subdued" />
            </div>
          </div>

          {/* Action & Interactive */}
          <div style={{ marginBottom: 'var(--spacing-6)' }}>
            <h3 
              className="text-foreground"
              style={{
                fontSize: 'var(--text-lg)',
                fontWeight: 'var(--font-weight-medium)',
                marginBottom: 'var(--spacing-3)'
              }}
            >
              Action & Interactive
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ColorToken name="Primary" cssVar="--primary" hexValue="blue-60 = #0A65FC" />
              <ColorToken name="Primary Foreground" cssVar="--primary-foreground" hexValue="white = #FFFFFF" />
              <ColorToken name="Primary Hover" cssVar="--primary-hover" hexValue="blue-70 = #0954D9" />
              <ColorToken name="Primary 50" cssVar="--primary-50" hexValue="blue-5 = #E6F1FF" />
              <ColorToken name="Primary 200" cssVar="--primary-200" hexValue="blue-10 = #BFDAFE" />
              <ColorToken name="Secondary" cssVar="--secondary" hexValue="gray-5 = #F1F1F1" />
              <ColorToken name="Secondary Foreground" cssVar="--secondary-foreground" hexValue="gray-90 = #323232" />
              <ColorToken name="Accent" cssVar="--accent" hexValue="blue-90 = #04287E" />
              <ColorToken name="Accent Foreground" cssVar="--accent-foreground" hexValue="white = #FFFFFF" />
              <ColorToken name="Interactive Disabled" cssVar="--interactive-disabled" hexValue="gray-30 = #ADADAD" />
              <ColorToken name="Action Default" cssVar="--action-default" hexValue="blue-60 = #0A65FC" />
              <ColorToken name="Action Hovered" cssVar="--action-hovered" hexValue="blue-80 = #0746BD" />
              <ColorToken name="Action Pressed" cssVar="--action-pressed" hexValue="blue-90 = #04287E" />
              <ColorToken name="Action Disabled" cssVar="--action-disabled" hexValue="gray-30 = #ADADAD" />
            </div>
          </div>

          {/* Destructive & Status Colors */}
          <div style={{ marginBottom: 'var(--spacing-6)' }}>
            <h3 
              className="text-foreground"
              style={{
                fontSize: 'var(--text-lg)',
                fontWeight: 'var(--font-weight-medium)',
                marginBottom: 'var(--spacing-3)'
              }}
            >
              Destructive & Status
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ColorToken name="Destructive" cssVar="--destructive" hexValue="red-60 = #DF2121" />
              <ColorToken name="Destructive Foreground" cssVar="--destructive-foreground" hexValue="white = #FFFFFF" />
              <ColorToken name="Success" cssVar="--success" hexValue="green-40 = #5FB05E" />
              <ColorToken name="Success Foreground" cssVar="--success-foreground" hexValue="white = #FFFFFF" />
              <ColorToken name="Success Light" cssVar="--success-light" hexValue="green-5 = #E2F5E0" />
              <ColorToken name="Success Light Foreground" cssVar="--success-light-foreground" hexValue="green-80 = #135D15" />
              <ColorToken name="Warning" cssVar="--warning" hexValue="orange-30 = #FD9245" />
              <ColorToken name="Warning Foreground" cssVar="--warning-foreground" hexValue="white = #FFFFFF" />
              <ColorToken name="Warning Light" cssVar="--warning-light" hexValue="yellow-5 = #FDF2B2" />
              <ColorToken name="Warning Light Foreground" cssVar="--warning-light-foreground" hexValue="orange-80 = #972801" />
              <ColorToken name="Critical" cssVar="--critical" hexValue="red-60 = #DF2121" />
              <ColorToken name="Critical Foreground" cssVar="--critical-foreground" hexValue="white = #FFFFFF" />
              <ColorToken name="Critical Light" cssVar="--critical-light" hexValue="red-5 = #FEEDF2" />
              <ColorToken name="Critical Light Foreground" cssVar="--critical-light-foreground" hexValue="red-80 = #A21013" />
              <ColorToken name="Info" cssVar="--info" hexValue="blue-60 = #0A65FC" />
              <ColorToken name="Info Foreground" cssVar="--info-foreground" hexValue="white = #FFFFFF" />
              <ColorToken name="Info Light" cssVar="--info-light" hexValue="blue-5 = #E6F1FF" />
              <ColorToken name="Info Light Foreground" cssVar="--info-light-foreground" hexValue="blue-90 = #04287E" />
            </div>
          </div>

          {/* Border */}
          <div style={{ marginBottom: 'var(--spacing-6)' }}>
            <h3 
              className="text-foreground"
              style={{
                fontSize: 'var(--text-lg)',
                fontWeight: 'var(--font-weight-medium)',
                marginBottom: 'var(--spacing-3)'
              }}
            >
              Border
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ColorToken name="Border" cssVar="--border" hexValue="gray-50 = #828282" />
              <ColorToken name="Border Light" cssVar="--border-light" hexValue="gray-20 = #C7C7C7" />
              <ColorToken name="Ring" cssVar="--ring" hexValue="blue-40 = #5F9FFC" />
              <ColorToken name="Border Default" cssVar="--border-default" hexValue="gray-50 = #828282" />
              <ColorToken name="Border High" cssVar="--border-high" hexValue="gray-60 = #727272" />
              <ColorToken name="Border Disabled" cssVar="--border-disabled" hexValue="gray-20 = #C7C7C7" />
              <ColorToken name="Border Hovered" cssVar="--border-hovered" hexValue="gray-90 = #323232" />
              <ColorToken name="Border Critical" cssVar="--border-critical" hexValue="red-60 = #DF2121" />
            </div>
          </div>

          {/* Icon Colors */}
          <div style={{ marginBottom: 'var(--spacing-6)' }}>
            <h3 
              className="text-foreground"
              style={{
                fontSize: 'var(--text-lg)',
                fontWeight: 'var(--font-weight-medium)',
                marginBottom: 'var(--spacing-3)'
              }}
            >
              Icon
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ColorToken name="Icon Default" cssVar="--icon-default" hexValue="gray-90 = #323232" />
              <ColorToken name="Icon Hovered" cssVar="--icon-hovered" hexValue="gray-90 = #323232" />
              <ColorToken name="Icon Subdued" cssVar="--icon-subdued" hexValue="gray-60 = #727272" />
              <ColorToken name="Icon Disabled" cssVar="--icon-disabled" hexValue="gray-50 = #828282" />
              <ColorToken name="Icon Inverse" cssVar="--icon-inverse" hexValue="white = #FFFFFF" />
              <ColorToken name="Icon Critical" cssVar="--icon-critical" hexValue="red-60 = #DF2121" />
              <ColorToken name="Icon Success" cssVar="--icon-success" hexValue="green-50 = #369536" />
              <ColorToken name="Icon Secondary" cssVar="--icon-secondary" hexValue="gray-80 = #505050" />
            </div>
          </div>

          {/* Sidebar & Other Colors */}
          <div>
            <h3 
              className="text-foreground"
              style={{
                fontSize: 'var(--text-lg)',
                fontWeight: 'var(--font-weight-medium)',
                marginBottom: 'var(--spacing-3)'
              }}
            >
              Sidebar & Chart
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ColorToken name="Sidebar" cssVar="--sidebar" hexValue="blue-90 = #04287E" />
              <ColorToken name="Sidebar Foreground" cssVar="--sidebar-foreground" hexValue="white = #FFFFFF" />
              <ColorToken name="Sidebar Primary" cssVar="--sidebar-primary" hexValue="blue-60 = #0A65FC" />
              <ColorToken name="Sidebar Primary Foreground" cssVar="--sidebar-primary-foreground" hexValue="white = #FFFFFF" />
              <ColorToken name="Sidebar Accent" cssVar="--sidebar-accent" hexValue="blue-40 = #5F9FFC" />
              <ColorToken name="Sidebar Accent Foreground" cssVar="--sidebar-accent-foreground" hexValue="white = #FFFFFF" />
              <ColorToken name="Sidebar Border" cssVar="--sidebar-border" hexValue="gray-80 = #505050" />
              <ColorToken name="Sidebar Ring" cssVar="--sidebar-ring" hexValue="blue-40 = #5F9FFC" />
              <ColorToken name="Badge Info" cssVar="--badge-info" hexValue="cyan-20 = #8CCFF7" />
              <ColorToken name="Chart 1" cssVar="--chart-1" hexValue="blue-60 = #0A65FC" />
              <ColorToken name="Chart 2" cssVar="--chart-2" hexValue="teal-40 = #1DB1A7" />
              <ColorToken name="Chart 3" cssVar="--chart-3" hexValue="red-60 = #DF2121" />
              <ColorToken name="Chart 4" cssVar="--chart-4" hexValue="orange-50 = #E65002" />
              <ColorToken name="Chart 5" cssVar="--chart-5" hexValue="purple-50 = #9963F7" />
            </div>
          </div>
        </section>

        {/* Design Tokens - Typography */}
        <section 
          className="bg-card rounded-lg shadow-sm border border-border"
          style={{ 
            padding: 'var(--spacing-6)',
            marginBottom: 'var(--spacing-6)',
            borderRadius: 'var(--radius-card)'
          }}
        >
          <h2 
            className="text-foreground"
            style={{
              fontSize: 'var(--text-xl)',
              fontWeight: 'var(--font-weight-medium)',
              marginBottom: 'var(--spacing-4)'
            }}
          >
            Design Tokens - Typography
          </h2>

          {/* Font Sizes */}
          <div style={{ marginBottom: 'var(--spacing-6)' }}>
            <h3 
              className="text-foreground"
              style={{
                fontSize: 'var(--text-lg)',
                fontWeight: 'var(--font-weight-medium)',
                marginBottom: 'var(--spacing-3)'
              }}
            >
              Ukuran Teks (Font Sizes)
            </h3>
            <div className="space-y-3">
              <div className="flex items-baseline gap-4">
                <div style={{ width: '150px' }}>
                  <code className="text-muted-foreground block" style={{ fontSize: 'var(--text-xs)' }}>--text-xs</code>
                  <code className="text-muted-foreground block" style={{ fontSize: 'var(--text-xs)' }}>12px</code>
                </div>
                <p style={{ fontSize: 'var(--text-xs)' }}>Teks sangat kecil (Extra Small)</p>
              </div>
              <div className="flex items-baseline gap-4">
                <div style={{ width: '150px' }}>
                  <code className="text-muted-foreground block" style={{ fontSize: 'var(--text-xs)' }}>--text-sm</code>
                  <code className="text-muted-foreground block" style={{ fontSize: 'var(--text-xs)' }}>14px</code>
                </div>
                <p style={{ fontSize: 'var(--text-sm)' }}>Teks kecil (Small)</p>
              </div>
              <div className="flex items-baseline gap-4">
                <div style={{ width: '150px' }}>
                  <code className="text-muted-foreground block" style={{ fontSize: 'var(--text-xs)' }}>--text-base</code>
                  <code className="text-muted-foreground block" style={{ fontSize: 'var(--text-xs)' }}>16px</code>
                </div>
                <p style={{ fontSize: 'var(--text-base)' }}>Teks standar (Base)</p>
              </div>
              <div className="flex items-baseline gap-4">
                <div style={{ width: '150px' }}>
                  <code className="text-muted-foreground block" style={{ fontSize: 'var(--text-xs)' }}>--text-lg</code>
                  <code className="text-muted-foreground block" style={{ fontSize: 'var(--text-xs)' }}>19px</code>
                </div>
                <p style={{ fontSize: 'var(--text-lg)' }}>Teks besar (Large)</p>
              </div>
              <div className="flex items-baseline gap-4">
                <div style={{ width: '150px' }}>
                  <code className="text-muted-foreground block" style={{ fontSize: 'var(--text-xs)' }}>--text-xl</code>
                  <code className="text-muted-foreground block" style={{ fontSize: 'var(--text-xs)' }}>24px</code>
                </div>
                <p style={{ fontSize: 'var(--text-xl)' }}>Teks sangat besar (Extra Large)</p>
              </div>
              <div className="flex items-baseline gap-4">
                <div style={{ width: '150px' }}>
                  <code className="text-muted-foreground block" style={{ fontSize: 'var(--text-xs)' }}>--text-2xl</code>
                  <code className="text-muted-foreground block" style={{ fontSize: 'var(--text-xs)' }}>42px</code>
                </div>
                <p style={{ fontSize: 'var(--text-2xl)' }}>Heading besar (2XL)</p>
              </div>
            </div>
          </div>

          {/* Font Weights */}
          <div style={{ marginBottom: 'var(--spacing-6)' }}>
            <h3 
              className="text-foreground"
              style={{
                fontSize: 'var(--text-lg)',
                fontWeight: 'var(--font-weight-medium)',
                marginBottom: 'var(--spacing-3)'
              }}
            >
              Ketebalan Teks (Font Weights)
            </h3>
            <div className="space-y-3">
              <div className="flex items-baseline gap-4">
                <code className="text-muted-foreground" style={{ fontSize: 'var(--text-xs)', width: '200px' }}>--font-weight-normal</code>
                <p style={{ fontSize: 'var(--text-base)', fontWeight: 'var(--font-weight-normal)' }}>Normal (400)</p>
              </div>
              <div className="flex items-baseline gap-4">
                <code className="text-muted-foreground" style={{ fontSize: 'var(--text-xs)', width: '200px' }}>--font-weight-medium</code>
                <p style={{ fontSize: 'var(--text-base)', fontWeight: 'var(--font-weight-medium)' }}>Medium (500)</p>
              </div>
              <div className="flex items-baseline gap-4">
                <code className="text-muted-foreground" style={{ fontSize: 'var(--text-xs)', width: '200px' }}>--font-weight-bold</code>
                <p style={{ fontSize: 'var(--text-base)', fontWeight: 'var(--font-weight-bold)' }}>Bold (700)</p>
              </div>
            </div>
          </div>

          {/* Line Heights */}
          <div>
            <h3 
              className="text-foreground"
              style={{
                fontSize: 'var(--text-lg)',
                fontWeight: 'var(--font-weight-medium)',
                marginBottom: 'var(--spacing-3)'
              }}
            >
              Tinggi Baris (Line Heights)
            </h3>
            <div className="space-y-4">
              <div>
                <code className="text-muted-foreground" style={{ fontSize: 'var(--text-xs)' }}>--line-height-tight</code>
                <p 
                  className="border border-border-light" 
                  style={{ 
                    fontSize: 'var(--text-base)', 
                    lineHeight: 'var(--line-height-tight)',
                    padding: 'var(--spacing-2)',
                    marginTop: 'var(--spacing-1)'
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Line height tight untuk teks padat.
                </p>
              </div>
              <div>
                <code className="text-muted-foreground" style={{ fontSize: 'var(--text-xs)' }}>--line-height-normal</code>
                <p 
                  className="border border-border-light" 
                  style={{ 
                    fontSize: 'var(--text-base)', 
                    lineHeight: 'var(--line-height-normal)',
                    padding: 'var(--spacing-2)',
                    marginTop: 'var(--spacing-1)'
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Line height normal untuk keterbacaan standar.
                </p>
              </div>
              <div>
                <code className="text-muted-foreground" style={{ fontSize: 'var(--text-xs)' }}>--line-height-relaxed</code>
                <p 
                  className="border border-border-light" 
                  style={{ 
                    fontSize: 'var(--text-base)', 
                    lineHeight: 'var(--line-height-relaxed)',
                    padding: 'var(--spacing-2)',
                    marginTop: 'var(--spacing-1)'
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Line height relaxed untuk keterbacaan maksimal.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Design Tokens - Spacing */}
        <section 
          className="bg-card rounded-lg shadow-sm border border-border"
          style={{ 
            padding: 'var(--spacing-6)',
            marginBottom: 'var(--spacing-6)',
            borderRadius: 'var(--radius-card)'
          }}
        >
          <h2 
            className="text-foreground"
            style={{
              fontSize: 'var(--text-xl)',
              fontWeight: 'var(--font-weight-medium)',
              marginBottom: 'var(--spacing-4)'
            }}
          >
            Design Tokens - Spacing & Radius
          </h2>

          {/* Spacing */}
          <div style={{ marginBottom: 'var(--spacing-6)' }}>
            <h3 
              className="text-foreground"
              style={{
                fontSize: 'var(--text-lg)',
                fontWeight: 'var(--font-weight-medium)',
                marginBottom: 'var(--spacing-3)'
              }}
            >
              Spacing
            </h3>
            <div className="space-y-3">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                <div key={num} className="flex items-center gap-4">
                  <code className="text-muted-foreground" style={{ fontSize: 'var(--text-xs)', width: '120px' }}>
                    --spacing-{num}
                  </code>
                  <div 
                    className="bg-primary"
                    style={{ 
                      width: `var(--spacing-${num})`,
                      height: 'var(--spacing-4)',
                      borderRadius: 'var(--radius)'
                    }}
                  />
                  <span className="text-muted-foreground" style={{ fontSize: 'var(--text-sm)' }}>
                    {num * 4}px
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Border Radius */}
          <div>
            <h3 
              className="text-foreground"
              style={{
                fontSize: 'var(--text-lg)',
                fontWeight: 'var(--font-weight-medium)',
                marginBottom: 'var(--spacing-3)'
              }}
            >
              Border Radius
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <code className="text-muted-foreground" style={{ fontSize: 'var(--text-xs)' }}>--radius</code>
                <div 
                  className="bg-primary mt-2"
                  style={{ 
                    width: '100px',
                    height: '100px',
                    borderRadius: 'var(--radius)'
                  }}
                />
              </div>
              <div>
                <code className="text-muted-foreground" style={{ fontSize: 'var(--text-xs)' }}>--radius-button</code>
                <div 
                  className="bg-primary mt-2"
                  style={{ 
                    width: '100px',
                    height: '100px',
                    borderRadius: 'var(--radius-button)'
                  }}
                />
              </div>
              <div>
                <code className="text-muted-foreground" style={{ fontSize: 'var(--text-xs)' }}>--radius-card</code>
                <div 
                  className="bg-primary mt-2"
                  style={{ 
                    width: '100px',
                    height: '100px',
                    borderRadius: 'var(--radius-card)'
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Button Component */}
        <section 
          className="bg-card rounded-lg shadow-sm border border-border"
          style={{ 
            padding: 'var(--spacing-6)',
            marginBottom: 'var(--spacing-6)',
            borderRadius: 'var(--radius-card)'
          }}
        >
          <h2 
            className="text-foreground"
            style={{
              fontSize: 'var(--text-xl)',
              fontWeight: 'var(--font-weight-medium)',
              marginBottom: 'var(--spacing-4)'
            }}
          >
            Button
          </h2>

          {/* Colors */}
          <div style={{ marginBottom: 'var(--spacing-6)' }}>
            <h3 
              className="text-foreground"
              style={{
                fontSize: 'var(--text-lg)',
                fontWeight: 'var(--font-weight-medium)',
                marginBottom: 'var(--spacing-3)'
              }}
            >
              Warna (Colors)
            </h3>
            <div className="flex flex-wrap gap-3">
              <Button color="blue" size="md">Primary (Blue)</Button>
              <Button color="black" size="md">Secondary (Black)</Button>
              <Button color="white" size="md">Tertiary (White)</Button>
              <Button color="red" size="md">Destructive (Red)</Button>
            </div>
          </div>

          {/* Sizes */}
          <div style={{ marginBottom: 'var(--spacing-6)' }}>
            <h3 
              className="text-foreground"
              style={{
                fontSize: 'var(--text-lg)',
                fontWeight: 'var(--font-weight-medium)',
                marginBottom: 'var(--spacing-3)'
              }}
            >
              Ukuran (Sizes)
            </h3>
            <div className="flex flex-wrap items-center gap-3">
              <Button color="blue" size="sm">Small</Button>
              <Button color="blue" size="md">Medium</Button>
              <Button color="blue" size="lg">Large</Button>
            </div>
          </div>

          {/* States */}
          <div style={{ marginBottom: 'var(--spacing-6)' }}>
            <h3 
              className="text-foreground"
              style={{
                fontSize: 'var(--text-lg)',
                fontWeight: 'var(--font-weight-medium)',
                marginBottom: 'var(--spacing-3)'
              }}
            >
              State (States)
            </h3>
            <div className="flex flex-wrap gap-3">
              <Button color="blue" size="md">Default</Button>
              <Button color="blue" size="md" disabled>Disabled</Button>
              <Button color="blue" size="md" isLoading>Loading</Button>
            </div>
          </div>

          {/* With Icons */}
          <div style={{ marginBottom: 'var(--spacing-6)' }}>
            <h3 
              className="text-foreground"
              style={{
                fontSize: 'var(--text-lg)',
                fontWeight: 'var(--font-weight-medium)',
                marginBottom: 'var(--spacing-3)'
              }}
            >
              Dengan Icon (With Icons)
            </h3>
            <div className="flex flex-wrap gap-3">
              <Button color="blue" size="md" icon={Search}>Cari</Button>
              <Button color="blue" size="md" icon={Mail}>Kirim Email</Button>
              <Button color="blue" size="md" icon={Calendar}>Pilih Tanggal</Button>
            </div>
          </div>

          {/* Icon Position */}
          <div style={{ marginBottom: 'var(--spacing-6)' }}>
            <h3 
              className="text-foreground"
              style={{
                fontSize: 'var(--text-lg)',
                fontWeight: 'var(--font-weight-medium)',
                marginBottom: 'var(--spacing-3)'
              }}
            >
              Posisi Icon (Icon Position)
            </h3>
            <div className="flex flex-wrap gap-3">
              <Button color="blue" size="md" icon={ArrowRight} iconPosition="left">Icon di Kiri</Button>
              <Button color="blue" size="md" icon={ArrowRight} iconPosition="right">Icon di Kanan</Button>
              <Button color="white" size="lg" icon={ArrowRight} iconPosition="right">Temukan Area Dukungan</Button>
            </div>
          </div>

          {/* Variants */}
          <div>
            <h3 
              className="text-foreground"
              style={{
                fontSize: 'var(--text-lg)',
                fontWeight: 'var(--font-weight-medium)',
                marginBottom: 'var(--spacing-3)'
              }}
            >
              Varian (Variants)
            </h3>
            <div className="flex flex-wrap gap-3">
              <Button color="blue" size="md" variant="solid">Solid</Button>
              <Button color="blue" size="md" variant="ghost">Ghost</Button>
              <Button color="blue" size="md" variant="solid" fullWidth>Full Width</Button>
            </div>
          </div>
        </section>

        {/* Badge Component */}
        <section 
          className="bg-card rounded-lg shadow-sm border border-border"
          style={{ 
            padding: 'var(--spacing-6)',
            marginBottom: 'var(--spacing-6)',
            borderRadius: 'var(--radius-card)'
          }}
        >
          <h2 
            className="text-foreground"
            style={{
              fontSize: 'var(--text-xl)',
              fontWeight: 'var(--font-weight-medium)',
              marginBottom: 'var(--spacing-4)'
            }}
          >
            Badge
          </h2>

          {/* Badge Variants */}
          <div style={{ marginBottom: 'var(--spacing-6)' }}>
            <h3 
              className="text-foreground"
              style={{
                fontSize: 'var(--text-lg)',
                fontWeight: 'var(--font-weight-medium)',
                marginBottom: 'var(--spacing-3)'
              }}
            >
              Varian Standar
            </h3>
            <div className="flex flex-wrap gap-3">
              <Badge variant="success">Success</Badge>
              <Badge variant="warning">Warning</Badge>
              <Badge variant="critical">Critical</Badge>
              <Badge variant="informational">Informational</Badge>
              <Badge variant="neutral">Neutral</Badge>
            </div>
          </div>

          {/* Expressive Badges */}
          <div style={{ marginBottom: 'var(--spacing-6)' }}>
            <h3 
              className="text-foreground"
              style={{
                fontSize: 'var(--text-lg)',
                fontWeight: 'var(--font-weight-medium)',
                marginBottom: 'var(--spacing-3)'
              }}
            >
              Varian Ekspresif
            </h3>
            <div className="flex flex-wrap gap-3">
              <Badge variant="expressive-success">Success</Badge>
              <Badge variant="expressive-warning">Warning</Badge>
              <Badge variant="expressive-critical">Critical</Badge>
              <Badge variant="expressive-informational">Informational</Badge>
              <Badge variant="expressive-neutral">Neutral</Badge>
            </div>
          </div>

          {/* Badge Sizes */}
          <div>
            <h3 
              className="text-foreground"
              style={{
                fontSize: 'var(--text-lg)',
                fontWeight: 'var(--font-weight-medium)',
                marginBottom: 'var(--spacing-3)'
              }}
            >
              Ukuran
            </h3>
            <div className="flex flex-wrap items-center gap-3">
              <Badge variant="informational" size="sm">Small</Badge>
              <Badge variant="informational" size="md">Medium</Badge>
            </div>
          </div>
        </section>

        {/* Checkbox Component */}
        <section 
          className="bg-card rounded-lg shadow-sm border border-border"
          style={{ 
            padding: 'var(--spacing-6)',
            marginBottom: 'var(--spacing-6)',
            borderRadius: 'var(--radius-card)'
          }}
        >
          <h2 
            className="text-foreground"
            style={{
              fontSize: 'var(--text-xl)',
              fontWeight: 'var(--font-weight-medium)',
              marginBottom: 'var(--spacing-4)'
            }}
          >
            Checkbox
          </h2>

          <div className="space-y-4">
            <div>
              <h3 
                className="text-foreground"
                style={{
                  fontSize: 'var(--text-lg)',
                  fontWeight: 'var(--font-weight-medium)',
                  marginBottom: 'var(--spacing-3)'
                }}
              >
                State
              </h3>
              <div className="space-y-3">
                <Checkbox checked={false}>Unchecked</Checkbox>
                <Checkbox checked={true}>Checked</Checkbox>
                <Checkbox indeterminate={true}>Indeterminate</Checkbox>
                <Checkbox disabled={true}>Disabled</Checkbox>
                <Checkbox checked={true} disabled={true}>Checked & Disabled</Checkbox>
              </div>
            </div>

            <div>
              <h3 
                className="text-foreground"
                style={{
                  fontSize: 'var(--text-lg)',
                  fontWeight: 'var(--font-weight-medium)',
                  marginBottom: 'var(--spacing-3)'
                }}
              >
                Posisi Label
              </h3>
              <div className="space-y-3">
                <Checkbox position="normal">Label di sebelah kanan</Checkbox>
                <Checkbox position="reverse">Label di sebelah kiri</Checkbox>
              </div>
            </div>
          </div>
        </section>

        {/* Input Component */}
        <section 
          className="bg-card rounded-lg shadow-sm border border-border"
          style={{ 
            padding: 'var(--spacing-6)',
            marginBottom: 'var(--spacing-6)',
            borderRadius: 'var(--radius-card)'
          }}
        >
          <h2 
            className="text-foreground"
            style={{
              fontSize: 'var(--text-xl)',
              fontWeight: 'var(--font-weight-medium)',
              marginBottom: 'var(--spacing-4)'
            }}
          >
            Input
          </h2>

          <div className="space-y-6 max-w-md">
            <div>
              <h3 
                className="text-foreground"
                style={{
                  fontSize: 'var(--text-lg)',
                  fontWeight: 'var(--font-weight-medium)',
                  marginBottom: 'var(--spacing-3)'
                }}
              >
                Standar
              </h3>
              <Input
                placeholder="Masukkan teks di sini"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
            </div>

            <div>
              <h3 
                className="text-foreground"
                style={{
                  fontSize: 'var(--text-lg)',
                  fontWeight: 'var(--font-weight-medium)',
                  marginBottom: 'var(--spacing-3)'
                }}
              >
                Dengan Helper Text
              </h3>
              <Input
                placeholder="Email Anda"
                helperText="Kami tidak akan membagikan email Anda"
              />
            </div>

            <div>
              <h3 
                className="text-foreground"
                style={{
                  fontSize: 'var(--text-lg)',
                  fontWeight: 'var(--font-weight-medium)',
                  marginBottom: 'var(--spacing-3)'
                }}
              >
                State Error
              </h3>
              <Input
                placeholder="Email tidak valid"
                isInvalid={true}
                errorMessage="Format email tidak sesuai"
              />
            </div>

            <div>
              <h3 
                className="text-foreground"
                style={{
                  fontSize: 'var(--text-lg)',
                  fontWeight: 'var(--font-weight-medium)',
                  marginBottom: 'var(--spacing-3)'
                }}
              >
                Disabled
              </h3>
              <Input
                placeholder="Input disabled"
                disabled={true}
                value="Tidak dapat diedit"
              />
            </div>

            <div>
              <h3 
                className="text-foreground"
                style={{
                  fontSize: 'var(--text-lg)',
                  fontWeight: 'var(--font-weight-medium)',
                  marginBottom: 'var(--spacing-3)'
                }}
              >
                Dengan Icon
              </h3>
              <Input
                placeholder="Cari..."
                icon={<Search className="w-4 h-4" />}
              />
            </div>

            <div>
              <h3 
                className="text-foreground"
                style={{
                  fontSize: 'var(--text-lg)',
                  fontWeight: 'var(--font-weight-medium)',
                  marginBottom: 'var(--spacing-3)'
                }}
              >
                Dengan Counter
              </h3>
              <Input
                placeholder="Maksimal 50 karakter"
                showCounter={true}
                maxLength={50}
              />
            </div>

            <div>
              <h3 
                className="text-foreground"
                style={{
                  fontSize: 'var(--text-lg)',
                  fontWeight: 'var(--font-weight-medium)',
                  marginBottom: 'var(--spacing-3)'
                }}
              >
                Ukuran
              </h3>
              <div className="space-y-3">
                <Input placeholder="Small" size="sm" />
                <Input placeholder="Medium" size="md" />
              </div>
            </div>
          </div>
        </section>

        {/* Select Component */}
        <section 
          className="bg-card rounded-lg shadow-sm border border-border"
          style={{ 
            padding: 'var(--spacing-6)',
            marginBottom: 'var(--spacing-6)',
            borderRadius: 'var(--radius-card)'
          }}
        >
          <h2 
            className="text-foreground"
            style={{
              fontSize: 'var(--text-xl)',
              fontWeight: 'var(--font-weight-medium)',
              marginBottom: 'var(--spacing-4)'
            }}
          >
            Select
          </h2>

          <div className="space-y-6 max-w-md">
            <div>
              <h3 
                className="text-foreground"
                style={{
                  fontSize: 'var(--text-lg)',
                  fontWeight: 'var(--font-weight-medium)',
                  marginBottom: 'var(--spacing-3)'
                }}
              >
                Standar
              </h3>
              <Select
                options={selectOptions}
                value={selectValue}
                onChange={setSelectValue}
                placeholder="Pilih kota"
              />
            </div>

            <div>
              <h3 
                className="text-foreground"
                style={{
                  fontSize: 'var(--text-lg)',
                  fontWeight: 'var(--font-weight-medium)',
                  marginBottom: 'var(--spacing-3)'
                }}
              >
                Dengan Label
              </h3>
              <Select
                label="Kota"
                options={selectOptions}
                value={selectValue}
                onChange={setSelectValue}
                placeholder="Pilih kota"
              />
            </div>
          </div>
        </section>

        {/* Textarea Component */}
        <section 
          className="bg-card rounded-lg shadow-sm border border-border"
          style={{ 
            padding: 'var(--spacing-6)',
            marginBottom: 'var(--spacing-6)',
            borderRadius: 'var(--radius-card)'
          }}
        >
          <h2 
            className="text-foreground"
            style={{
              fontSize: 'var(--text-xl)',
              fontWeight: 'var(--font-weight-medium)',
              marginBottom: 'var(--spacing-4)'
            }}
          >
            Textarea
          </h2>

          <div className="space-y-6 max-w-md">
            <div>
              <h3 
                className="text-foreground"
                style={{
                  fontSize: 'var(--text-lg)',
                  fontWeight: 'var(--font-weight-medium)',
                  marginBottom: 'var(--spacing-3)'
                }}
              >
                Standar
              </h3>
              <Textarea
                placeholder="Masukkan deskripsi di sini"
                value={textareaValue}
                onChange={(e) => setTextareaValue(e.target.value)}
              />
            </div>

            <div>
              <h3 
                className="text-foreground"
                style={{
                  fontSize: 'var(--text-lg)',
                  fontWeight: 'var(--font-weight-medium)',
                  marginBottom: 'var(--spacing-3)'
                }}
              >
                Dengan Helper Text
              </h3>
              <Textarea
                placeholder="Masukkan catatan"
                helperText="Informasi ini bersifat opsional"
              />
            </div>

            <div>
              <h3 
                className="text-foreground"
                style={{
                  fontSize: 'var(--text-lg)',
                  fontWeight: 'var(--font-weight-medium)',
                  marginBottom: 'var(--spacing-3)'
                }}
              >
                State Error
              </h3>
              <Textarea
                placeholder="Deskripsi tidak valid"
                isInvalid={true}
                errorMessage="Deskripsi harus diisi minimal 10 karakter"
              />
            </div>

            <div>
              <h3 
                className="text-foreground"
                style={{
                  fontSize: 'var(--text-lg)',
                  fontWeight: 'var(--font-weight-medium)',
                  marginBottom: 'var(--spacing-3)'
                }}
              >
                Disabled
              </h3>
              <Textarea
                placeholder="Textarea disabled"
                isDisabled={true}
                value="Tidak dapat diedit"
              />
            </div>

            <div>
              <h3 
                className="text-foreground"
                style={{
                  fontSize: 'var(--text-lg)',
                  fontWeight: 'var(--font-weight-medium)',
                  marginBottom: 'var(--spacing-3)'
                }}
              >
                Dengan Counter
              </h3>
              <Textarea
                placeholder="Maksimal 200 karakter"
                maxLength={200}
              />
            </div>
          </div>
        </section>

        {/* DropdownMenuItemAction Component */}
        <section 
          className="bg-card rounded-lg shadow-sm border border-border"
          style={{ 
            padding: 'var(--spacing-6)',
            marginBottom: 'var(--spacing-6)',
            borderRadius: 'var(--radius-card)'
          }}
        >
          <h2 
            className="text-foreground"
            style={{
              fontSize: 'var(--text-xl)',
              fontWeight: 'var(--font-weight-medium)',
              marginBottom: 'var(--spacing-4)'
            }}
          >
            DropdownMenuItemAction
          </h2>

          <p 
            className="text-muted-foreground"
            style={{
              fontSize: 'var(--text-base)',
              marginBottom: 'var(--spacing-6)'
            }}
          >
            Komponen menu item untuk dropdown dengan icon dan text. Dioptimalkan untuk consistency dan maintainability dalam design system.
          </p>

          {/* Default Variant */}
          <div style={{ marginBottom: 'var(--spacing-6)' }}>
            <h3 
              className="text-foreground"
              style={{
                fontSize: 'var(--text-lg)',
                fontWeight: 'var(--font-weight-medium)',
                marginBottom: 'var(--spacing-3)'
              }}
            >
              Varian Default
            </h3>
            <div className="flex flex-wrap gap-4">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <SafeButton
                    className="flex items-center gap-2 transition-colors py-[var(--spacing-3)] px-[var(--spacing-4)] rounded-button bg-secondary text-secondary-foreground border border-border-light cursor-pointer hover:opacity-80"
                    style={{
                      fontSize: 'var(--action-size)',
                      fontWeight: 'var(--action-weight)',
                      lineHeight: 'var(--action-height)',
                    }}
                  >
                    <MoreVertical className="w-5 h-5" />
                    Aksi
                  </SafeButton>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="bg-surface-default shadow-elevation-sm border-0">
                  <DropdownMenuItemAction
                    icon={Edit}
                    label="Edit"
                    onClick={() => alert('Edit diklik')}
                  />
                  <DropdownMenuItemAction
                    icon={Copy}
                    label="Duplikat"
                    onClick={() => alert('Duplikat diklik')}
                  />
                  <DropdownMenuItemAction
                    icon={Download}
                    label="Unduh"
                    onClick={() => alert('Unduh diklik')}
                  />
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          {/* Destructive Variant */}
          <div style={{ marginBottom: 'var(--spacing-6)' }}>
            <h3 
              className="text-foreground"
              style={{
                fontSize: 'var(--text-lg)',
                fontWeight: 'var(--font-weight-medium)',
                marginBottom: 'var(--spacing-3)'
              }}
            >
              Varian Destructive
            </h3>
            <p 
              className="text-muted-foreground"
              style={{
                fontSize: 'var(--text-sm)',
                marginBottom: 'var(--spacing-3)'
              }}
            >
              Untuk aksi berbahaya seperti hapus atau reset, menggunakan warna critical dari design system.
            </p>
            <div className="flex flex-wrap gap-4">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <SafeButton
                    className="flex items-center gap-2 transition-colors py-[var(--spacing-3)] px-[var(--spacing-4)] rounded-button bg-secondary text-secondary-foreground border border-border-light cursor-pointer hover:opacity-80"
                    style={{
                      fontSize: 'var(--action-size)',
                      fontWeight: 'var(--action-weight)',
                      lineHeight: 'var(--action-height)',
                    }}
                  >
                    <MoreVertical className="w-5 h-5" />
                    Kelola
                  </SafeButton>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="bg-surface-default shadow-elevation-sm border-0">
                  <DropdownMenuItemAction
                    icon={Edit}
                    label="Edit Program"
                    onClick={() => alert('Edit Program diklik')}
                  />
                  <DropdownMenuItemAction
                    icon={Copy}
                    label="Duplikat Program"
                    onClick={() => alert('Duplikat Program diklik')}
                  />
                  <DropdownMenuItemAction
                    icon={Trash2}
                    label="Hapus Program"
                    onClick={() => alert('Hapus Program diklik')}
                    variant="destructive"
                  />
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          {/* Specifications */}
          <div>
            <h3 
              className="text-foreground"
              style={{
                fontSize: 'var(--text-lg)',
                fontWeight: 'var(--font-weight-medium)',
                marginBottom: 'var(--spacing-3)'
              }}
            >
              Spesifikasi Design System
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div 
                className="border border-border-light rounded p-4"
                style={{
                  backgroundColor: 'var(--surface-neutral-default)'
                }}
              >
                <p 
                  className="text-foreground"
                  style={{ 
                    fontSize: 'var(--text-sm)', 
                    fontWeight: 'var(--font-weight-medium)',
                    marginBottom: 'var(--spacing-2)'
                  }}
                >
                  Typography
                </p>
                <div className="space-y-1">
                  <p className="text-muted-foreground" style={{ fontSize: 'var(--text-xs)' }}>
                    Font Size: <code>var(--action-size)</code> = 16px
                  </p>
                  <p className="text-muted-foreground" style={{ fontSize: 'var(--text-xs)' }}>
                    Font Weight: <code>var(--action-weight)</code> = semibold
                  </p>
                  <p className="text-muted-foreground" style={{ fontSize: 'var(--text-xs)' }}>
                    Line Height: <code>var(--action-height)</code> = 24px
                  </p>
                </div>
              </div>

              <div 
                className="border border-border-light rounded p-4"
                style={{
                  backgroundColor: 'var(--surface-neutral-default)'
                }}
              >
                <p 
                  className="text-foreground"
                  style={{ 
                    fontSize: 'var(--text-sm)', 
                    fontWeight: 'var(--font-weight-medium)',
                    marginBottom: 'var(--spacing-2)'
                  }}
                >
                  Spacing
                </p>
                <div className="space-y-1">
                  <p className="text-muted-foreground" style={{ fontSize: 'var(--text-xs)' }}>
                    Padding: <code>px-4 py-2</code> = 16px × 8px
                  </p>
                  <p className="text-muted-foreground" style={{ fontSize: 'var(--text-xs)' }}>
                    Gap Icon-Text: <code>gap-3</code> = 12px
                  </p>
                  <p className="text-muted-foreground" style={{ fontSize: 'var(--text-xs)' }}>
                    Icon Size: <code>20px × 20px</code>
                  </p>
                </div>
              </div>

              <div 
                className="border border-border-light rounded p-4"
                style={{
                  backgroundColor: 'var(--surface-neutral-default)'
                }}
              >
                <p 
                  className="text-foreground"
                  style={{ 
                    fontSize: 'var(--text-sm)', 
                    fontWeight: 'var(--font-weight-medium)',
                    marginBottom: 'var(--spacing-2)'
                  }}
                >
                  Colors - Default
                </p>
                <div className="space-y-1">
                  <p className="text-muted-foreground" style={{ fontSize: 'var(--text-xs)' }}>
                    Text: <code>var(--text-default)</code>
                  </p>
                  <p className="text-muted-foreground" style={{ fontSize: 'var(--text-xs)' }}>
                    Icon: <code>var(--icon-default)</code>
                  </p>
                  <p className="text-muted-foreground" style={{ fontSize: 'var(--text-xs)' }}>
                    Background: <code>var(--surface-default)</code>
                  </p>
                  <p className="text-muted-foreground" style={{ fontSize: 'var(--text-xs)' }}>
                    Hover: <code>var(--surface-subdued)</code>
                  </p>
                </div>
              </div>

              <div 
                className="border border-border-light rounded p-4"
                style={{
                  backgroundColor: 'var(--surface-neutral-default)'
                }}
              >
                <p 
                  className="text-foreground"
                  style={{ 
                    fontSize: 'var(--text-sm)', 
                    fontWeight: 'var(--font-weight-medium)',
                    marginBottom: 'var(--spacing-2)'
                  }}
                >
                  Colors - Destructive
                </p>
                <div className="space-y-1">
                  <p className="text-muted-foreground" style={{ fontSize: 'var(--text-xs)' }}>
                    Text: <code>var(--text-critical)</code>
                  </p>
                  <p className="text-muted-foreground" style={{ fontSize: 'var(--text-xs)' }}>
                    Icon: <code>var(--icon-critical)</code>
                  </p>
                  <p className="text-muted-foreground" style={{ fontSize: 'var(--text-xs)' }}>
                    Background: <code>var(--surface-default)</code>
                  </p>
                  <p className="text-muted-foreground" style={{ fontSize: 'var(--text-xs)' }}>
                    Hover: <code>var(--surface-subdued)</code>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <div 
          className="text-center text-muted-foreground"
          style={{
            paddingTop: 'var(--spacing-6)',
            paddingBottom: 'var(--spacing-6)',
            fontSize: 'var(--text-sm)'
          }}
        >
          Semua komponen menggunakan CSS variables dari <code className="bg-muted px-2 py-1 rounded">/src/styles/theme.css</code>
        </div>
      </div>
    </div>
  );
}