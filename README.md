# Software Design and Development - Booking App Demo

## วิธีการใช้งาน

1.  **Clone Repository:**
    
    เปิด Terminal และไปยังไดเรกทอรีที่คุณต้องการเก็บโปรเจกต์ จากนั้นรันคำสั่ง:
    
    ```bash
    git clone [https://github.com/Kritternai/Software-Design-and-Development-Booking-App-Demo.git](https://github.com/Kritternai/Software-Design-and-Development-Booking-App-Demo.git)
    ```
    
2.  **เริ่มต้น Backend:**
    
    ไปยังไดเรกทอรี `backend` และเริ่มต้นเซิร์ฟเวอร์:
    
    ```bash
    cd Software-Design-and-Development-Booking-App-Demo/hotel-booking-system/backend
    npm start
    ```
    
3.  **เริ่มต้น Frontend:**
    
    ไปยังไดเรกทอรี `frontend` และเริ่มต้นแอปพลิเคชัน:
    
    ```bash
    cd Software-Design-and-Development-Booking-App-Demo/hotel-booking-system/frontend
    npm run dev
    ```
    
    หากพบข้อผิดพลาด `sh: vite: command not found` ให้รันคำสั่ง:
    
    ```bash
    npm install vite --save-dev
    ```
    
    จากนั้นรัน `npm run dev` อีกครั้ง
    
4.  **เปิดแอปพลิเคชัน:**
    
    เปิดเว็บเบราว์เซอร์และไปยัง `http://localhost:5173/` เพื่อเข้าถึงแอปพลิเคชัน
    
5.  **เข้าสู่ระบบ Admin:**
    
    ไปยัง `http://localhost:5173/admin` เพื่อเข้าสู่ระบบผู้ดูแลระบบ
    
    * Username: `admin`
    * Password: `admin123`

## Ex

* ตรวจสอบให้แน่ใจว่าคุณได้ติดตั้ง Node.js และ npm (Node Package Manager) ก่อนที่จะเริ่มใช้งาน
* หากมีปัญหาในการติดตั้ง dependencies ให้ลองลบ `node_modules` และ `package-lock.json` แล้วรัน `npm install` ใหม่อีกครั้ง
* หากมีปัญหาในการรันโปรแกรมให้ตรวจสอบ version ของ node.js และ npm ว่าเป็น version ที่รองรับหรือไม่
* หากยังพบปัญหาอยู่ กรุณาแจ้งปัญหาไว้ใน repository ของ GitHub

# สารบัญการทดลอง
## ทฤษฎีที่เกี่ยวข้องกับการพัฒนาส่วน Back-end
  - [1. REST API](booking-web-application-demo.md#1-rest-api)
  - [2. Node.js และ Express](booking-web-application-demo.md#2-node-js-และ-express)
- [การเตรียมสภาพแวดล้อม](booking-web-application-demo.md#การเตรียมสภาพแวดล้อม)
- [การพัฒนา Backend API](booking-web-application-demo.md#การทดลองที่-2-การพัฒนา-backend-api)
  - [2.1 การติดตั้งและตั้งค่าโปรเจค Node.js](booking-web-application-demo.md#21-การติดตั้งและตั้งค่าโปรเจค-nodejs)
  - [2.2 การสร้างฐานข้อมูล](booking-web-application-demo.md#22-การสร้างฐานข้อมูล)
  - [2.3 การสร้าง API Endpoints](booking-web-application-demo.md#23-การสร้าง-api-endpoints)
  - [2.4 การทดสอบ API ด้วย Postman](booking-web-application-demo.md#24-การทดสอบ-api-ด้วย-postman)

## ทฤษฎีที่เกี่ยวข้องกับการพัฒนาส่วน Front-end
- [1. React](booking-web-application-demo.md#1-react)
  - [หลักการสำคัญของ React](booking-web-application-demo.md#หลักการสำคัญของ-react)
  - [วิวัฒนาการของ React](booking-web-application-demo.md#วิวัฒนาการของ-react)
  - [การจัดการ State ใน React](booking-web-application-demo.md#การจัดการ-state-ใน-react)
  - [Virtual DOM ใน React](booking-web-application-demo.md#virtual-dom-ใน-react)
  - [ข้อดีของ React](booking-web-application-demo.md#ข้อดีของ-react)
  - [React Hooks](booking-web-application-demo.md#react-hooks)
- [2. Tailwind CSS](booking-web-application-demo.md#2-tailwind-css)

## ขั้นตอนการทดลองสร้าง Front-end ด้วย React
- [3.1 การตั้งค่าโปรเจค React](booking-web-application-demo.md#31-การตั้งค่าโปรเจค-react)
- [3.2 การสร้าง Components ต่าง ๆ](booking-web-application-demo.md#32-การสร้าง-components-ต่าง-ๆ)
  - [3.2.1 App Component](booking-web-application-demo.md#321-app-component)
  - [3.2.2 BookingForm Component](booking-web-application-demo.md#322-bookingform-component)
  - [3.2.3 AuthContext Component](booking-web-application-demo.md#323-authcontext-component)
  - [3.2.4 Login Component](booking-web-application-demo.md#324-login-component)
  - [3.2.5 ProtectedRoute Component](booking-web-application-demo.md#325-protectedroute-component)
  - [3.2.6 BookingList Component](booking-web-application-demo.md#326-bookinglist-component)
  - [3.2.7 BookingEdit Component](booking-web-application-demo.md#327-bookingedit-component)
  - [3.2.8 AdminDashboard Component](booking-web-application-demo.md#328-admindashboard-component)
