# Shubhankar Borse - Interactive AI Resume

This is your professional portfolio website. It is built with **React**, which makes it interactive and fast, but it means the code needs to be "built" (translated) before it can be viewed as a webpage.

## ❓ "How do I make this a real website?"

You have two main options. You do **not** need to run this on your own computer if you use Option 1.

### Option 1: The "GitHub" Way (Recommended & Free)
*Best if you want to keep the code safe and update it easily later.*

1.  **Create a GitHub Account** and a new **Repository** (name it something like `resume`).
2.  **Upload these files** to that repository.
3.  **Click "Actions"** tab on GitHub. You should see a workflow running (because I added the `.github/workflows/deploy.yml` file).
    *   *Note:* If you don't see it running, go to **Settings > Pages** and set "Source" to "GitHub Actions".
4.  Wait about 2 minutes. GitHub will give you a link (e.g., `https://yourname.github.io/resume`).

### Option 2: The "Drag & Drop" Way
*Best if you just want it online right now and don't care about git.*

1.  You will need to run the "build" command on your computer once.
    *   Install Node.js.
    *   Open a terminal in this folder and run: `npm install` then `npm run build`.
2.  This creates a folder called `dist`.
3.  Go to [Netlify Drop](https://app.netlify.com/drop).
4.  Drag the `dist` folder onto that page.
5.  It is now a live website.

---

## 🤖 AI Features (Optional)

This resume features an **AI Chat Bot** that can answer questions about your work.
*   If you just want the website, you can ignore this. The chat button will be hidden.
*   If you want the chat to work, you need a **Gemini API Key** (free from Google).
    *   **On GitHub:** Go to Settings > Secrets > Actions > New Secret. Name it `API_KEY`. Paste your key.
    *   **On Netlify:** Go to Site Settings > Environment Variables. Add `API_KEY`.

---

## 📂 Editing the Content

You don't need to know code to update your resume text.
*   Open the file named `constants.ts`.
*   You will see your text there (Education, Jobs, Papers).
*   Change the text inside the quotes.
*   Save and Redeploy (push to GitHub or rebuild).
