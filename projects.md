# Projects I Have Handled

## PV Monitoring System (PRODUCTION)

**Website:** [monitoring.solarion.co](https://monitoring.solarion.co)  
**Github:** [solarion-apps](https://gitlab.com/solarion-apps)
**Image:** 

The PV Monitoring System is a comprehensive solution for monitoring the performance of solar power generation systems (PV) across various Solarion projects in real-time. This system is designed to provide in-depth insights into PV system performance, from energy production to device conditions.

**Key Features:**
- Detailed PV data monitoring
- Integrated grid data monitoring
- Accurate load data monitoring
- Comprehensive inverter data monitoring

### **My Role**
- **Tech Lead:**
  ```
  As the Tech Lead, I was responsible for designing the application architecture and determining the development direction. 
  I conducted a thorough evaluation between developing an IoT module to connect with the Data Logger on the Smartlogger Inverter or utilizing the API services provided by the vendor.

  After a detailed analysis, I decided to use the vendor's API services. The main challenge was that each inverter vendor had different API structures, responses, and rate-limiting policies. 
  To address this, I chose the MERN stack to build a data aggregator capable of efficiently and scalably integrating data from various vendors.
  ```

- **Backend Engineer:**
  ```
  I developed APIs to fetch data from various vendors (such as Huawei, ESolarCloud, etc.) and store it in the database. 
  Additionally, I created scheduled tasks to fetch and update data in real-time, as well as implemented intelligent scheduler logic to handle vendor API rate limits.
  ```

- **Frontend Developer:**
  ```
  I maintained and developed new features on the frontend to ensure an optimal user experience. 
  I was also responsible for improving the user interface to make it more intuitive and responsive.
  ```

- **Technology Stack:**
  ```
  - NextJS
  - TailwindCSS
  - Shadcn UI
  - MongoDB
  - NodeJS
  - ExpressJS
  - N8N
  - Nginx
  - Docker
  - Mapbox
  ```

---

## Smartwatch Monitoring System (DEVELOPMENT)

**Website:** [smartwatch.terretech.id](https://smartwatch.terretech.id)  
**Github:** [smartwatch-monitoring-system](https://gitlab.com/terretech-apps/smartwatch-monitoring-system)

The Smartwatch Monitoring System is a monitoring system designed to track users' health and sleep activities through smartwatches. This system provides valuable insights for users to monitor their health conditions regularly.

### **My Role**
- **Tech Lead:**
  ```
  As the Tech Lead, I designed the application architecture and determined the development flow. 
  Since the vendor did not provide a public API, I decided to fetch data through HTTP requests from the vendor's website. 
  I used N8N to create automated workflows that fetch data from the vendor's website and store it in the database.
  ```

- **Fullstack Engineer:**
  ```
  I developed APIs to fetch data from the database and display it on the frontend. 
  Additionally, I built the frontend to present the data in an interactive and user-friendly dashboard.
  ```

- **Technology Stack:**
  ```
  - Astro
  - ReactJS
  - ECharts
  - TailwindCSS
  - PostgreSQL
  - NodeJS
  - ExpressJS
  - N8N Workflow
  - Nginx
  - Docker
  ```

---

## CRM ODOO Solarion

**Website:** [crm.solarion.id](https://crm.solarion.id)  
**Github:** [crm-odoo-solarion](https://gitlab.com/solarion-apps/crm-odoo-solarion)

CRM ODOO Solarion is a CRM system used to manage customer data, projects, and other aspects. This system is designed to enhance the efficiency of customer relationship and project management.

### **My Role**
- **Fullstack Developer:**
  ```
  I developed custom features on Odoo to meet Solarion's specific needs. 
  I integrated Mapbox to display project locations and maps, as well as integrated Google Workspace API to efficiently manage project resources.
  ```

- **Technology Stack:**
  ```
  - Odoo
  - PostgreSQL
  - Docker
  - NodeJS
  - ExpressJS
  - Mapbox
  - Google Workspace API
  ```

---

## Kreasi Medical Services (CLOSED)

**Website:** [klinis.id](https://klinis.id)  
**Github:** [klinis-apps](https://gitlab.com/terretech-apps/kreasi-apps)

Klinis Apps is a healthcare super app that offers various features such as queue management, doctor consultations via chat and video calls, payments, doctor prescriptions, medical records, and more. Additionally, Klinis also includes e-commerce features and AI-based early disease detection. During the COVID-19 pandemic, Klinis provided vaccination queue services (doses 1, 2, and booster).

### **My Role**
- **Backend Engineer:**
  ```
  I developed APIs for mobile apps and website needs, ensuring seamless integration between various services such as payments, medical records, and doctor consultations.
  ```

- **Web Developer:**
  ```
  I developed the website and CMS for admin, clinics, and vendors, ensuring a user-friendly interface and optimal functionality.
  ```

- **Technology Stack:**
  ```
  - Laravel
  - MySQL
  - Twilio
  - DANA Business API
  - Nginx
  - WebRTC
  - Midtrans
  - Moota
  ```

---

## Approval Management System (PRODUCTION)

**Website:** [ams.solarion.co](https://ams.solarion.co)  
**Github:** [ams-solarion](https://gitlab.com/solarion-apps/ams-solarion)

The Approval Management System (AMS) is a software solution designed to automate and manage the entire approval cycle within an organization. This system covers requests, evaluations, approvals, and tracking processes efficiently. AMS can be customized to meet the specific needs of an organization and helps improve visibility and efficiency in the approval process.

**Advanced Features:**
- Attendance Management (Fingerprint, Face Recognition)
- Leave Management
- Activity Tracking
- Reporting and Analytics

[Project Details](https://drive.google.com/file/d/1uCTQvR9EUZYxcfNA_vy-ODFHM1A6sOFt/view?usp=sharing)

### **My Role**
- **Tech Lead:**
  ```
  As the Tech Lead, I designed the application architecture and determined the development flow, ensuring the system could handle various approval processes efficiently and scalably.
  ```

- **Fullstack Developer:**
  ```
  I developed APIs to fetch data from the database and display it on the frontend. 
  Additionally, I built the frontend to present the data in an interactive and user-friendly dashboard.
  ```

- **Technology Stack:**
  ```
  - Laravel
  - MySQL & Redis
  - WebRTC
  - N8N Workflow
  - Nginx
  - Docker
  ```

--- 

Through the various projects I have handled, I remain committed to delivering innovative, efficient, and business- and user-friendly technological solutions. Each project presents a challenge that I approach with a structured methodology and creative problem-solving.