# Connectly - Real-Time Chat Application

Connectly is a modern, real-time chat application built with cutting-edge technologies like **Next.js**, **Convex**, **Clerk**, and **TailwindCSS**. It provides a seamless and intuitive user experience for connecting with friends, creating group chats, and managing conversations.

---

![NextJS](https://img.shields.io/badge/next%20js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)![Shadcn](https://img.shields.io/badge/shadcn%2Fui-000000?style=for-the-badge&logo=shadcnui&logoColor=white)![Zod](https://img.shields.io/badge/Zod-000000?style=for-the-badge&logo=zod&logoColor=3068B7
)![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

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

# Key Challenges and Solutions in `LeaveGroupDialog` Component

## 1. **Challenge: Handling Asynchronous Operations with User Feedback ⏳**
- **Problem:**  
  The `leaveGroup` mutation is an asynchronous operation, and the user needs immediate feedback on the status of the action (success or failure). Additionally, the UI should prevent duplicate submissions while the operation is pending.
- **Solution:**  
  - Utilized the `useMutationState` hook to manage the mutation state (`pending`) and disable action buttons (`Cancel` and `Leave`) during processing.
  - Integrated the `toast` library to provide real-time feedback:
    - `toast.success` for successful group leave notifications ✅.
    - `toast.error` for error handling, distinguishing between known (`ConvexError`) and unknown errors ❌.

## 2. **Challenge: Graceful Error Handling 🛡️**
- **Problem:**  
  Errors during the `leaveGroup` mutation (e.g., network issues or backend errors) must be managed gracefully to maintain a smooth user experience.
- **Solution:**  
  - Checked for `ConvexError` instances to display tailored error messages (`error.data`).
  - Provided a generic error message (`'Unexpected Error Occurred'`) as a fallback for unforeseen issues.
  - Deployed `toast.error` to display error messages in a non-intrusive manner.


## 3. **Challenge: Preventing Unintended Actions 🚫**
- **Problem:**  
  Leaving a group is a critical, irreversible action. Users must be clearly informed of the consequences before proceeding.
- **Solution:**  
  - Incorporated an `AlertDialog` component to present a confirmation dialog with a clear warning message in the `AlertDialogDescription`.
  - Offered two distinct options: `Cancel` to abort the action and `Leave` to confirm, ensuring user control and awareness.

## 4. **Challenge: Managing Component State 🔄**
- **Problem:**  
  The `open` state of the dialog must be managed externally to allow parent components to control its visibility.
- **Solution:**  
  - Passed `open` and `setOpen` as props to the `LeaveGroupDialog` component.
  - Employed the `onOpenChange` callback of the `AlertDialog` to synchronize the dialog's state with the parent component.

## 5. **Challenge: Accessibility and User Experience ♿**
- **Problem:**  
  The dialog must be accessible and deliver a seamless experience for all users, including those utilizing assistive technologies.
- **Solution:**  
  - Leveraged the accessible `AlertDialog` component from the UI library.
  - Ensured the proper use of semantic elements like `AlertDialogHeader`, `AlertDialogTitle`, and `AlertDialogDescription` to aid screen readers.

## 6. **Challenge: Ensuring Consistent UI Behavior 🎨**
- **Problem:**  
  The UI should remain consistent and responsive during the mutation process.
- **Solution:**  
  - Disabled the `Cancel` and `Leave` buttons while the mutation is pending to prevent duplicate submissions.
  - Maintained a clean and minimal design for the dialog, ensuring consistency with the overall application UI.

---

## Summary
The `LeaveGroupDialog` component exemplifies robust handling of asynchronous operations, error management, and user experience design. By addressing these challenges, the component ensures a seamless, reliable, and accessible experience for users performing critical actions like leaving a group.

---

# Key Takeaways from the Connectly Project

## 1. Real-Time Functionality ⏱️
- Leveraged **Convex** to implement real-time updates for conversations, ensuring instant message delivery and seamless user interactions.
- Demonstrated expertise in developing real-time applications with a serverless backend.

## 2. Authentication and Authorization 🔐
- Integrated **Clerk** for secure user authentication and authorization.
- Implemented user registration, login, and session management, showcasing proficiency with modern authentication solutions.

## 3. Scalable and Modular Architecture 🏗️
- Designed a scalable architecture with reusable components and hooks, ensuring maintainability and extensibility.
- Employed modular design patterns for dialogs, forms, and API interactions.

## 4. Responsive and Accessible UI 📱♿
- Developed a fully responsive user interface using **TailwindCSS** and **Radix UI**, ensuring optimal performance across devices.
- Prioritized accessibility by using semantic components and supporting assistive technologies.

## 5. Error Handling and User Feedback 🚨
- Implemented robust error handling with clear, user-friendly feedback using **Sonner** for toast notifications.
- Differentiated between known and unknown errors to provide precise and meaningful messages.

## 6. Critical Action Confirmation ⚠️
- Designed confirmation dialogs (e.g., `LeaveGroupDialog`) for critical actions, ensuring users are well informed about irreversible changes.
- Utilized accessible and intuitive dialog components to enhance user confidence and safety.

## 7. State Management 🔄
- Managed complex component states using React hooks such as `useState` and custom hooks like `useMutationState`.
- Ensured smooth user interactions by effectively handling pending states and preventing duplicate actions.

## 8. Dark Mode Support 🌙
- Added dark mode functionality, allowing users to seamlessly toggle between light and dark themes for a personalized experience.

## 9. Team Collaboration and Group Management 👥
- Implemented features for creating, managing, and leaving group conversations.
- Demonstrated the ability to handle complex relational data structures within a real-time environment.

## 10. Scalability and Performance 🚀
- Designed the application to effortlessly scale using a serverless backend, ensuring high performance under load.
- Optimized API calls and implemented lazy-loading for components to enhance performance and minimize resource usage.

## 11. Error Resilience 🔧
- Ensured application stability through graceful error handling and fallback UI components, even during unexpected failures.

## 12. Modern Development Practices 💻
- Adhered to best practices in React development, including component-based architecture and TypeScript for enhanced type safety.
- Maintained high code quality with tools like **ESLint** and **Prettier**, ensuring consistency and readability.

## 13. Deployment and CI/CD 🚢
- Deployed the application on **Vercel**, demonstrating proficiency with modern deployment pipelines.
- Configured environment variables and streamlined the deployment process for reliability.

## 14. User-Centric Design 🎨
- Focused on delivering a seamless, intuitive user experience with real-time notifications, responsive design, and accessible components.
- Ensured the design catered to both technical and non-technical users.

## 15. Learning and Growth 📚
- Gained hands-on experience with cutting-edge technologies such as **Convex**, **Clerk**, **TailwindCSS**, and **Radix UI**.
- Enhanced problem-solving skills by addressing challenges in real-time updates, error handling, and state management.

---

## Summary
The Connectly project exemplifies expertise in building scalable, real-time applications using modern technologies. It highlights proficiency in both frontend and backend development, exceptional user experience design, and adherence to software engineering best practices, making it a significant asset to any software engineering portfolio.

