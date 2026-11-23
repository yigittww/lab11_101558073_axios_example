# COMP3123 – Full Stack Development I
## Lab 11 – Working with Axios and Fetch API

**Student:** Yiğit Alkoç
**Student ID:** 101558073
**GitHub repository name:** `lab11_101558073_axios_example`

### About the project
A React application that fetches data from a REST API using **Axios** and displays it with **React Bootstrap**.

- `src/PersonList.js` – a class component that calls
  `axios.get('https://randomuser.me/api/?results=10')` inside `componentDidMount()`,
  stores the results in `state = { persons: [] }`, and renders the people in a
  Bootstrap `ListGroup` (photo, full name, email, phone, city/country).
- `src/App.js` – renders the page header and the `PersonList` component.
- `src/index.js` – imports the Bootstrap CSS (`bootstrap/dist/css/bootstrap.min.css`).

### Packages installed
```
npm install --save axios
npm install --save react-bootstrap bootstrap
```

### How to run
```
npm install
npm start
```
Then open http://localhost:3000 in a browser.

### Output
See `output_screenshot.png` – the application running with the list of 10 people
fetched live from the Random User API.

---

## How to upload this to GitHub (for Yigit)

1. Go to https://github.com and sign in with your own account.
2. Click **New repository**.
3. Repository name: **lab11_101558073_axios_example** (exactly this name).
4. Set it to **Public**, do NOT add a README/gitignore from GitHub (the project already has them), and click **Create repository**.
5. On your computer, unzip `lab11_101558073_axios_example.zip`, open a terminal in the extracted folder and run:
   ```
   git init
   git add .
   git commit -m "Lab 11 - Axios and Fetch API"
   git branch -M main
   git remote add origin https://github.com/<YOUR-USERNAME>/lab11_101558073_axios_example.git
   git push -u origin main
   ```
   (Replace `<YOUR-USERNAME>` with your GitHub username. `node_modules` is already excluded by the project's `.gitignore`.)
6. Copy the repository link, e.g. `https://github.com/<YOUR-USERNAME>/lab11_101558073_axios_example`.

## D2L submission checklist
- [ ] This zip file (`lab11_101558073_axios_example.zip`)
- [ ] The output screenshot (`output_screenshot.png`)
- [ ] The GitHub repository link (paste it in the D2L submission comments/text box)
