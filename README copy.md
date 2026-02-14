# Workflow Builder Lite Backend

## 1. What is implemented

* User can create workflows
* User can run a workflow by providing input text
* Workflow executes steps sequentially (e.g., clean text → summarize)
* System stores and returns the last 5 workflow runs
* Health endpoint to check backend, database, and LLM status

---

## 2. How to run locally

**Step 1** — Clone the repository

```
git clone https://github.com/Jeelgor/workflow-builder-lite-frontend.git
```

**Step 2** — Install dependencies

```
npm install
```

**Step 3** — Start the server

```
npm run dev
```

Server will run on:

```
http://localhost:5173
```

## Basic Checks & Testing

To make sure the application works correctly, I performed manual testing across both frontend and backend flows. The goal was to verify core functionality, handle edge cases, and ensure the system behaves reliably.

### Frontend Checks

**Workflow Creation**

* Verified that a workflow cannot be created with an empty name
* Confirmed steps can be added and removed dynamically
* Ensured newly created workflows appear immediately without page refresh

**Workflow Execution**

* Prevented running a workflow without selecting one
* Prevented execution with empty input text
* Verified outputs are displayed step-by-step in the correct order
* Checked loading state while workflow is running

**Run History**

* Confirmed only the last 5 runs are displayed
* Verified expand/collapse works for viewing step outputs

**Health Page**

* Confirmed system status is displayed clearly
* Tested failure scenario by using an invalid API key to ensure LLM status changes

**General UI**

* Checked for console errors
* Verified page refresh and navigation behavior