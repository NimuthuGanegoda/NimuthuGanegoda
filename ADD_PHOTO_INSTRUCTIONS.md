# Add Your Profile Photo

Your graduation photo needs to be saved to this repository. Here are the steps:

## Quick Method (Drag & Drop in VS Code):
1. Save your graduation photo to your computer
2. In VS Code file explorer (left sidebar), navigate to `public/images/`
3. Drag and drop your photo into that folder
4. Rename it to `profile.jpg`
5. Run these commands in the terminal:

```bash
cd /workspaces/NimuthuGanegoda
git add public/images/profile.jpg
git commit -m "Add profile photo"
npm run build
git add out/
git commit -m "Rebuild with profile photo"
git push origin main
```

## Alternative: GitHub Web Upload
1. Go to: https://github.com/NimuthuGanegoda/NimuthuGanegoda/tree/main/public/images
2. Click "Add file" → "Upload files"
3. Upload your photo and name it `profile.jpg`
4. Commit directly to main branch
5. GitHub Actions will automatically rebuild and deploy

---

**Note:** The code has already been updated to use `images/profile.jpg`. Once you add the file, your photo will appear on the homepage.

Delete this file after you've added the photo.
