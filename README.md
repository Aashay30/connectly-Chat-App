# Connectly - Real-Time Chat Application

Connectly is a modern, real-time chat application built with cutting-edge technologies like **Next.js**, **Convex**, **Clerk**, and **TailwindCSS**. It provides a seamless and intuitive user experience for connecting with friends, creating group chats, and managing conversations.

---

## 🚀 Features

### 🔗 **Authentication**
- Secure user authentication powered by [Clerk](https://clerk.dev).
- Supports user registration, login, and profile management.

### 💬 **Conversations**
- **Direct Messages (DMs):** Chat one-on-one with friends.
- **Group Chats:** Create and manage group conversations with multiple members.
- **Real-Time Messaging:** Messages are updated instantly using Convex's real-time database.

### 👫 **Friends Management**
- Send and receive friend requests.
- Accept or deny friend requests.
- View a list of all your friends.

### 📂 **Group Management**
- Create groups with custom names.
- Add or remove members from groups.
- Leave or delete groups with confirmation dialogs.

### 🛠️ **UI/UX**
- Fully responsive design for desktop and mobile.
- Dark mode support with theme toggling.
- Intuitive and accessible UI components built with [Radix UI](https://www.radix-ui.com) and TailwindCSS.

### 🔔 **Notifications**
- Real-time toast notifications for actions like sending friend requests, accepting requests, and leaving groups.

### 🔍 **Error Handling**
- Graceful error handling with user-friendly messages.
- Fallback components for empty states (e.g., no conversations or friend requests).

---

## 🛠️ Tech Stack

### **Frontend**
- [Next.js](https://nextjs.org) - React framework for server-side rendering and static site generation.
- [TailwindCSS](https://tailwindcss.com) - Utility-first CSS framework for styling.
- [Radix UI](https://www.radix-ui.com) - Accessible and customizable UI primitives.
- [Lucide Icons](https://lucide.dev) - Beautiful and consistent icons.

### **Backend**
- [Convex](https://convex.dev) - Real-time database and serverless backend.
- [Clerk](https://clerk.dev) - Authentication and user management.

### **Other Tools**
- [React Hook Form](https://react-hook-form.com) - Form validation and management.
- [Zod](https://zod.dev) - Schema validation for forms and APIs.
- [Sonner](https://sonner.dev) - Toast notifications.
- [Date-fns](https://date-fns.org) - Date manipulation library.

---

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Aashay30/connectly.git
   cd connectly
   ```

2. Install dependencies:
  ```bash
  npm install
  # or
  yarn install
  # or
  pnpm install
  ```

3. Set up environment variables:

Create a .env.local file in the root directory.
Add the following variables:

  ```bash
  NEXT_PUBLIC_CONVEX_URL=<your-convex-url>
  CLERK_WEBHOOK_SECRET=<your-clerk-webhook-secret>
  ```

4. Start the development server:

  ```bash
  npm run dev
  # or
  yarn dev
  # or
  pnpm dev
  ```
