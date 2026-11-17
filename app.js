const REPO="kvxnomxyz/oadtr";
const $=s=>document.querySelector(s);
const esc=s=>String(s??"").replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
async function issues(state){
  const r=await fetch(`https://api.github.com/repos/${REPO}/issues?labels=DTU&state=${state}&per_page=100`);
  if(!r.ok)throw new Error("GitHub API "+r.status);
  return (await r.json()).filter(i=>!i.pull_request);
}
function parse(body){const o={};(body||"").split(/^### /m).slice(1).forEach(b=>{const[l,...r]=b.split("\n");o[l.trim()]=r.join("\n").trim()});return o}
