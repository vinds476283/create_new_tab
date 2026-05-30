var b = document.getElementById("my-clone-btn");
if (b) b.remove();

var btn = document.createElement("button");
btn.id = "my-clone-btn";
btn.innerHTML = "⧉";
btn.style.cssText = `
  position:fixed;
  top:12px;
  left:12px;
  z-index:9999;
  background:#5a7fbf;
  color:white;
  border:1px solid #eee;
  border-radius:6px;
  width:42px;
  height:38px;
  font-size:18px;
  cursor:pointer;
  text-align:center;
  line-height:38px;
`;

btn.onclick = () => window.open(location.href, '_blank');
//
document.body.appendChild(btn);