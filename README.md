# Reppoo - AI Health Coach Landing Page & Admin CMS

A high-performance landing page built with **Next.js 16**, featuring a custom Admin Panel for real-time content management. This project was developed as part of the **Progbiz Next.js Developer Test Task**.

## 🚀 Live Demo

- **URL:** [https://reppoo-ten.vercel.app/](https://reppoo-ten.vercel.app/)
- **Admin Login:** `/login`
- **Credentials:**
  - **Password:** `admin123`

---

## ✨ Features

### 1. Landing Page (Figma to Web)

- **Pixel Perfect:** Meticulously converted Figma designs into responsive Tailwind CSS components.
- **Dynamic Content:** All sections (Hero, About, Testimonials, FAQ) are fetched from **MongoDB** via Next.js Server Components.
- **GSAP Animations:** Smooth entry animations for Hero text and scroll-triggered fade/slide effects for sections.
- **Smooth Scrolling:** Integrated **Lenis** for a premium, non-jittery scrolling experience.

### 2. Admin Panel

- **Live Content Editor:** Update text and images without any code changes or redeployments.
- **Dashboard:** A clean, custom-designed UI for managing four distinct page sections (Hero, About, Testimonials, and FAQ).
- **Server Actions:** Utilizes Next.js Server Actions with `revalidatePath` to reflect changes on the landing page instantly.

---

## 🛠️ Tech Stack

- **Frontend:** Next.js 15 (App Router), Tailwind CSS, GSAP, Lenis (Smooth Scroll).
- **State Management:** Zustand with `persist` middleware (for local draft persistence).
- **Backend:** Next.js Server Actions & API Routes.
- **Database:** MongoDB Atlas.

---

## ⚙️ Local Setup

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/your-username/reppoo-task.git](https://github.com/your-username/reppoo-task.git)
   cd reppoo-task
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Run the development server:**
   ```bash
   npm run dev
   ```
4. **Open the project:**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the result.

## 📂 Project Structure

The project follows the **Next.js 16 App Router** architecture:

- **`/app`**: Contains all pages, API routes, and Server Actions for database synchronization.
- **`/components`**: Reusable UI components for the landing page (Hero, FAQ, Testimonials).
- **`/components/admin`**: Specific editor components and dashboard layout for the CMS.
- **`/lib`**: Core utility functions and the MongoDB client connection logic (`mongodb.ts`).
- **`/store`**: Zustand store implementation for managing global state and local persistence.
- **`/public`**: Static assets including the logo, product images, and admin avatars.
- **`/types`**: TypeScript interface definitions for testimonials, FAQ items, and page content.
