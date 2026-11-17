# OADTR - Open Android Device Tree Repository
Setup:
```
sed -i 's#OWNER/oadtr#YOURUSER/oadtr#' app.js
gh label create DTU -R YOURUSER/oadtr --color 5319e7
```
Then enable GitHub Pages (Settings -> Pages -> main / root).
Seed issues: Actions tab -> "Seed DTU issues" -> Run workflow (run once)
`devices/index.json` entries: `{"brand":"","name":"","model":"","codename":""}`
