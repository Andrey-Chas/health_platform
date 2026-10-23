# 📁 health_platform - Project Structure

*Generated on: 10/21/2026, 7:51:34 PM*

## 📋 Quick Overview

| Metric | Value |
|--------|-------|
| 📄 Total Files | 45 |
| 📁 Total Folders | 20 |
| 🌳 Max Depth | 4 levels |
| 🛠️ Tech Stack | React, Next.js, TypeScript, CSS, Node.js |

## ⭐ Important Files

- 🟡 🚫 **.gitignore** - Git ignore rules
- 🔵 🔍 **eslint.config.mjs** - ESLint config
- 🟡 ▲ **next.config.ts** - Next.js config
- 🟡 🔒 **package-lock.json** - Dependency lock
- 🔴 📦 **package.json** - Package configuration
- 🔴 📖 **README.md** - Project documentation
- 🟡 🔷 **tsconfig.json** - TypeScript config

## 📊 File Statistics

### By File Type

- 🔷 **.ts** (TypeScript files): 18 files (40.0%)
- ⚛️ **.tsx** (React TypeScript files): 7 files (15.6%)
- 🎨 **.svg** (SVG images): 5 files (11.1%)
- ⚙️ **.json** (JSON files): 4 files (8.9%)
- 📖 **.md** (Markdown files): 3 files (6.7%)
- 🚫 **.gitignore** (Git ignore): 1 files (2.2%)
- 🖼️ **.ico** (Icon files): 1 files (2.2%)
- 🎨 **.css** (Stylesheets): 1 files (2.2%)
- 📄 **.mjs** (Other files): 1 files (2.2%)
- 📄 **.sql** (Other files): 1 files (2.2%)
- ⚙️ **.toml** (TOML files): 1 files (2.2%)
- 📄 **.prisma** (Other files): 1 files (2.2%)
- 📄 **.tsbuildinfo** (Other files): 1 files (2.2%)

### By Category

- **TypeScript**: 18 files (40.0%)
- **React**: 7 files (15.6%)
- **Assets**: 6 files (13.3%)
- **Config**: 5 files (11.1%)
- **Other**: 4 files (8.9%)
- **Docs**: 3 files (6.7%)
- **DevOps**: 1 files (2.2%)
- **Styles**: 1 files (2.2%)

### 📁 Largest Directories

- **root**: 45 files
- **app**: 16 files
- **app\generated\prisma**: 9 files
- **app\generated**: 9 files
- **public**: 5 files

## 🌳 Directory Structure

```
health_platform/
├── 🟡 🚫 **.gitignore**
├── 📖 AGENTS.md
├── 🚀 app/
│   ├── 📂 (auth)/
│   │   ├── 📂 login/
│   │   │   └── ⚛️ page.tsx
│   │   └── 📂 register/
│   │   │   └── ⚛️ page.tsx
│   ├── 🔌 api/
│   │   └── 📂 auth/
│   │   │   └── 📂 [...nextauth]/
│   │   │   │   └── 🔷 route.ts
│   ├── 🖼️ favicon.ico
│   ├── 📂 generated/
│   │   └── 📂 prisma/
│   │   │   ├── 🔷 browser.ts
│   │   │   ├── 🔷 client.ts
│   │   │   ├── 🔷 commonInputTypes.ts
│   │   │   ├── 🔷 enums.ts
│   │   │   ├── 📂 internal/
│   │   │   │   ├── 🔷 class.ts
│   │   │   │   ├── 🔷 prismaNamespace.ts
│   │   │   │   └── 🔷 prismaNamespaceBrowser.ts
│   │   │   ├── 📂 models/
│   │   │   │   └── 🔷 User.ts
│   │   │   └── 🔷 models.ts
│   ├── 🎨 globals.css
│   ├── ⚛️ layout.tsx
│   └── ⚛️ page.tsx
├── 🔷 auth.ts
├── 🧩 components/
│   ├── 📂 auth/
│   │   ├── ⚛️ LoginForm.tsx
│   │   └── ⚛️ RegisterForm.tsx
│   └── 🎨 ui/
│   │   └── ⚛️ button.tsx
├── ⚙️ components.json
├── 🔵 🔍 **eslint.config.mjs**
├── 📚 lib/
│   ├── 📂 auth/
│   │   ├── 🔷 actions.ts
│   │   └── 🔷 login.ts
│   ├── 🔷 prisma.ts
│   └── 🔷 utils.ts
├── 🔷 next-env.d.ts
├── 🟡 ▲ **next.config.ts**
├── 🟡 🔒 **package-lock.json**
├── 🔴 📦 **package.json**
├── 📂 prisma/
│   ├── 📂 migrations/
│   │   ├── 📂 20261014131441_init/
│   │   │   └── 📄 migration.sql
│   │   └── ⚙️ migration_lock.toml
│   └── 📄 schema.prisma
├── 🔷 prisma.config.ts
├── 📖 project_structure.md
├── 🌐 public/
│   ├── 🎨 file.svg
│   ├── 🎨 globe.svg
│   ├── 🎨 next.svg
│   ├── 🎨 vercel.svg
│   └── 🎨 window.svg
├── 🔴 📖 **README.md**
├── 🟡 🔷 **tsconfig.json**
└── 📄 tsconfig.tsbuildinfo
```

## 📖 Legend

### File Types
- 🚫 DevOps: Git ignore
- 📖 Docs: Markdown files
- ⚛️ React: React TypeScript files
- 🔷 TypeScript: TypeScript files
- 🖼️ Assets: Icon files
- 🎨 Styles: Stylesheets
- ⚙️ Config: JSON files
- 📄 Other: Other files
- ⚙️ Config: TOML files
- 🎨 Assets: SVG images

### Importance Levels
- 🔴 Critical: Essential project files
- 🟡 High: Important configuration files
- 🔵 Medium: Helpful but not essential files
