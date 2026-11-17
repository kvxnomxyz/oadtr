const REPO="kvxnomxyz/oadtr"; 
const $=s=>document.querySelector(s);
const esc=s=>String(s??"").replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
async function allIssues(){
  let out=[];
  for(let p=1;p<=10;p++){
    const r=await fetch(`https://api.github.com/repos/${REPO}/issues?state=all&per_page=100&page=${p}`);
    if(!r.ok)throw new Error("GitHub API "+r.status);
    const a=await r.json();out.push(...a.filter(i=>!i.pull_request));
    if(a.length<100)break;
  }
  return out;
}
// Only uploaded GitHub attachments count. Title and typed description are ignored.
const ATT=/https:\/\/[\w.-]*github(?:usercontent)?\.com\/[^\s)"\'<>\]]*(?:user-attachments|\/files\/)[^\s)"\'<>\]]*/g;
function detect(i){
  const f=((i.body||"").match(ATT)||[]).map(u=>({u,n:decodeURIComponent(u.split("/").pop())}));
  const j=f.find(x=>x.n.toLowerCase()==="device.json"),m=f.find(x=>/\.md$/i.test(x.n));
  if(!j||!m)return null;
  return{name:m.n.replace(/\.md$/i,"").replace(/[-_]+/g," "),json:j.u,md:m.u,issue:i.html_url,num:i.number,date:i.created_at.slice(0,10),state:i.state};
}
