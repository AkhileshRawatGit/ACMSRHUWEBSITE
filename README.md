# ACM Chapter Website - Futuristic & Premium

A modern, highly interactive ACM Chapter Website built with a futuristic dark theme, smooth scrolling, and role-based access control.

## 🚀 Tech Stack

### Frontend
- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (Animations)
- **Lenis** (Smooth Scrolling)
- **React Hook Form** + **Yup** (Validation)

### Backend
- **Node.js** + **Express.js**
- **Prisma ORM**
- **Passport.js** + **JWT** (Authentication)
- **Supabase/PostgreSQL**
- **Bcrypt** (Security)

## 🛠️ Installation & Setup

### 1. Clone the repository
```bash
git clone <repository-url>
cd ACMWEBSITE
```

### 2. Backend Setup
```bash
cd backend
npm install
```
- Create a `.env` file in the `backend` folder (refer to `.env.example`).
- Initialize the database:
```bash
npx prisma generate
npx prisma migrate dev
```
- Start the server:
```bash
npm run dev
```

### 3. Frontend Setup
```bash
cd frontend
npm install
npm run dev
```
- Open [http://localhost:3000](http://localhost:3000) to view the site.

## 🔑 Key Features
- **Public Site**: Hero, About, Events, Gallery, Team.
- **Auth**: Secure login with JWT and Passport.js.
- **Admin Dashboard**: Full CRUD for Managing Events, Team, and Gallery.
- **Animations**: Smooth parallax, hover effects, and premium micro-interactions.

## 📁 Project Structure
- `frontend/`: Next.js application.
- `backend/`: Express API with Prisma.
