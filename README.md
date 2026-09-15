# The Hive Makerspace Policies

Welcome! This repository holds the official collection of rules and policies for the Interdisciplinary Design Commons (The Hive Makerspace).

By hosting our policies here, we maintain a transparent, version-controlled history of all rules. If you are an active Peer Instructor (PI), Master Peer Instructor (MPI), Staff member, or community member who would like to propose a change, clarification, or addition to the policies, you can do so by submitting a Pull Request (PR).

## How to Propose a Change

We use a standard Git branch and Pull Request workflow. If you are new to GitHub, don't worry—you can do all of this directly through the GitHub website!

### Step 1: Create a Branch

Never make changes directly to the `main` branch. Instead, create a new branch for your specific proposal.

1. Click on the branch dropdown (usually says `main`) in the top left of the file view.
2. Type a short, descriptive name for your branch (e.g., `update-3d-print-times` or `fix-typo-section-2`).
3. Click **Create branch**.

### Step 2: Make Your Edits

1. Navigate to the `policies.adoc` file in your new branch.
2. Click the **pencil icon** (Edit this file) in the top right corner of the file view.
3. Make your proposed changes.
   * **Formatting Note:** We use AsciiDoc (`.adoc`). Please ensure you match the existing formatting, especially the nested bullet points (`*`, `**`, `***`) and the bolded hardcoded numbers (e.g., `*1.5.2.1.*`).

### Step 3: Commit Your Changes

1. Scroll down to the **Commit changes** box at the bottom of the page.
2. Write a clear, brief commit message explaining *what* you changed (e.g., "Clarified safety glasses rule in Machine Shop").
3. Add a more detailed description if your change needs extra context.
4. Make sure "Commit directly to the `[your-branch-name]` branch" is selected.
5. Click **Commit changes**.

### Step 4: Open a Pull Request (PR)

1. Go to the **Pull requests** tab at the top of the repository.
2. Click the green **New pull request** button.
3. Set the `base` branch to `main` and the `compare` branch to the branch you just created.
4. Click **Create pull request**.
5. Fill out the PR description explaining *why* you are proposing this policy change.
6. Click **Create pull request** one last time to submit it for review!

---

## Exporting to HTML

The `policies.adoc` source can be converted to a standalone HTML snippet suitable for embedding on the website.

### Prerequisites

[Node.js](https://nodejs.org/) and [PNPM](https://pnpm.io/) must be installed. Then install dependencies once:

```bash
pnpm install
```

### Run the Export

```bash
pnpm run export
```

This runs `export.ts` via `tsx` and writes the output to `export.html` in the root of the repository.
