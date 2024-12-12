# Project Setup and Run Guide

This project is a full-stack application with a Flask backend and a Next.js frontend. Below are the instructions to set up and run both parts of the application.

## Prerequisites

- Ensure you have Python (3.x) and Node.js (20.x or later) installed on your machine.
- You'll also need `npm` or `yarn` for managing the frontend dependencies.

### 1. Backend Setup (Flask)

#### Step 1: Navigate to the Backend Directory

Open your terminal and `cd` into the backend folder of the project.

```bash
cd backend
```

For Linux or macOS:
```bash
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
python3 run.py
```

For Windows:
```bash
python3 -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
python3 run.py
```

### 2. FrontEnd Setup (Next.js)

#### Step 1: Navigate to the Frontend Directory

```bash
npm install --legacy-peer-deps
npm install
npm outdated
npx npm-check-updates -u
```
