# Updating and deploying your site

Kanyisola, this guide is for you. You don't need to know any front-end code, and you don't need to install anything. Everything below happens in your browser on GitHub.

- **Live site:** https://duodduo.github.io/kanyisola-portfolio/
- **Repository:** https://github.com/DuoDduo/kanyisola-portfolio

## How it works

1. You edit a file on GitHub and save it.
2. GitHub rebuilds the site automatically.
3. About two minutes later, the live site shows your change.

If a change has a mistake, the build stops and **your live site stays as it was**. A mistake cannot take your site down, so feel free to edit.

## Change text on the site

Almost all your content is in one file: `src/portfolio.js`.

1. Open the repository and click `src`, then `portfolio.js`.
2. Click the **pencil icon** at the top right of the file.
3. Make your change. Use the table below to find the right part of the file. To search, press `Ctrl + F` and type a word from the text you want to change.
4. Click the green **Commit changes** button.
5. Write a short note such as `Update bio`.
6. Leave **Commit directly to the main branch** selected, then click **Commit changes**.
7. Wait about two minutes (see [Check that your change is live](#check-that-your-change-is-live)).

### Where everything is

| What you want to change | Look for this in `portfolio.js` |
| --- | --- |
| Your name | `name:` near the top |
| Your job title | `role:` |
| The two short paragraphs in the top section | `bio:` |
| The paragraphs in About | `story:` |
| Location, Working on and Languages | `facts:` |
| LinkedIn and GitHub links | `social:` |
| Skills | `const skills` |
| Projects | `const projects` |
| Jobs | `const experience` |
| Degrees and training | `const education` |
| Where I can help | `const focus` |
| Highlights | `const highlights` |
| Your email address | `email:` at the very bottom |

### Rules for editing text

The file is code, so each piece of text has to stay inside its quotation marks.

- Only change the words **inside** the quotes.
- Keep the quotes and the comma at the end of the line.

```js
role: 'AI & Machine Learning Engineer, Data Scientist',
```

**If your text contains an apostrophe**, wrap it in double quotes instead of single quotes, otherwise the build will stop:

```js
'I'm an engineer',    // wrong
"I'm an engineer",    // right
```

## Add a new project

1. Open `src/portfolio.js` and click the pencil icon.
2. Search for `const projects`.
3. Copy the block below and paste it on the line straight after `const projects = [` to put it first in the list.
4. Fill in your details and commit.

```js
  {
    name: 'Project name',
    label: 'Team project',
    overview: 'One line on what it is.',
    problem: 'The problem it solves.',
    contribution: 'What you did.',
    features: [
      'First thing it does',
      'Second thing it does',
    ],
    stack: ['Python', 'FastAPI'],
    live: 'https://link-to-the-live-project.com',
    repo: 'https://github.com/Cunyie08/project-name',
  },
```

- If there's no live site or no code to share, delete the `live:` or `repo:` line. The button won't appear.
- You don't need an image. The project simply shows without one.
- To reorder projects, move a whole block, from its `{` to its `},`.
- To remove a project, delete its whole block, from `{` to `},`.

## Add a new job

1. Open `src/portfolio.js` and search for `const experience`.
2. Paste this straight after `const experience = [` to put it first:

```js
  {
    when: 'Jan 2027 – Present',
    title: 'Job title',
    org: 'Company name',
    points: [
      'What you did.',
      'What else you did.',
    ],
  },
```

## Add a skill

1. Open `src/portfolio.js` and search for `const skills`.
2. Find the right group and add your skill inside its `items: [ ... ]` list:

```js
items: ['Python', 'pandas', 'New Skill'],
```

Some well-known tools show a logo automatically. Anything else shows as text, which is fine.

## Replace your CV

The new file must have exactly this name, including capital letters:

`Kanyisola_Fagbayi_CV.pdf`

1. Rename the new PDF on your computer to that exact name.
2. In the repository, open the `public` folder.
3. Click **Add file**, then **Upload files**.
4. Drag your PDF in. It replaces the old one.
5. Click **Commit changes**.

Your CV is public to anyone who visits the site, so check you're happy with the contact details in it.

## Replace your photo

The photo on the site has its background removed, so it sits on the black page. A photo with a background will show that background.

1. Prepare a `.webp` image with a transparent background, about 1100 pixels wide, in a 4:5 portrait shape.
2. Name it exactly `portrait.webp`.
3. Open `src`, then `assets`.
4. Click **Add file**, then **Upload files**, and drag it in.
5. Click **Commit changes**.

## Change the small headings

The small line under each section title, such as "A few things I have built", is in that section's own file in `src/sections`. For example, Projects is in `src/sections/Projects.jsx`.

Find the line that starts with `<Section`, then change the words inside `title='...'` or `sub='...'`:

```jsx
<Section id='projects' title='Projects' sub='A few things I have built.'>
```

Leave `id` as it is, because the menu uses it.

## Change colours or text sizes

Open `src/styles/tokens.css`. Colours are near the top, written as codes such as `#ffffff`. Change a code and every place using that colour updates. You can find colour codes by searching "colour picker" on Google.

## Check that your change is live

1. Open the **Actions** tab at the top of the repository.
2. Your change is at the top of the list:
   - **Yellow dot:** still building. Wait a moment.
   - **Green tick:** finished.
   - **Red cross:** the build stopped (see below).
3. When it's green, open your site and refresh it. If you still see the old version, press `Ctrl + Shift + R`, or `Cmd + Shift + R` on a Mac.

## If you see a red cross

Your live site is still fine, showing the last working version. Something in your last edit needs fixing. It's nearly always one of these:

- A missing quote or comma on a line you edited
- An apostrophe inside single quotes
- A `{`, `}`, `[` or `]` deleted by accident

**To fix it,** open the file again and compare your lines with the examples in this guide.

**To undo it instead:**

1. Open `src/portfolio.js`.
2. Click **History**, then click your last change.
3. Copy the old version of the line, shown in red.
4. Edit the file, put the old line back and commit.

## Good to know

- Your repository is public, so anyone can read the files in it. Never put passwords or private keys in it.
- Enquiries come straight to your email, because the Contact section uses direct links and has no form to maintain.
- The GitHub numbers in the Contact section update on their own.
- The address of the site is set under **Settings**, then **Pages**, in the repository. Only DuoDduo can change that page, so ask if you want your own domain name.

## For developers

```bash
npm install
npm run dev
npm run build
npm run lint
```

The site uses React, Vite and GSAP. Pushing to `main` builds it and deploys it to GitHub Pages through `.github/workflows/deploy.yml`.
