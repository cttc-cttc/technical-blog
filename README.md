# kwy's technical blog : Spring Boot + React (Vite)

Spring Boot와 React Vite를 이용한 기술 블로그 사이드 프로젝트 입니다.

- 🧩 **Backend**: Spring Boot (Java) / IDE: IntelliJ Community
- ⚛️ **Frontend**: React + Vite (TypeScript) / IDE: Visual Studio Code

## 📁 프로젝트 구조
```plaintext
technical-blog/  
├── backend/           # Spring Boot (Java)
│   ├── src/  
│   ├── build.gradle  
│   ├── settings.gradle  
│   └── ...  
├── frontend/          # React + Vite (TypeScript)
│   ├── src/  
│   ├── public/  
│   ├── package.json  
│   ├── vite.config.ts  
│   └── ...  
├── .gitignore  
└── README.md  
```

## 설치한 패키지들
```bash
npm install axios
npm install -D eslint prettier eslint-plugin-react eslint-plugin-react-hooks eslint-config-prettier eslint-plugin-prettier @typescript-eslint/eslint-plugin @typescript-eslint/parser

npm install tailwindcss @tailwindcss/vite
npm install -D @types/node
npx shadcn@latest init

npm install react-router-dom

npm install @toast-ui/react-editor @toast-ui/editor --legacy-peer-deps
npm install @toast-ui/editor-plugin-color-syntax --legacy-peer-deps
```

## 설치한 shadcn 컴포넌트
```bash
npx shadcn@latest add button
npx shadcn@latest add navigation-menu
npx shadcn@latest add dropdown-menu
npx shadcn@latest add card
npx shadcn@latest add aspect-ratio
npm install sonner next-themes --force
npm install sonner@latest --legacy-peer-deps
```

## 개발 실행 환경
```bash
npm install --legacy-peer-deps
npm run dev
```
