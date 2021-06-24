var myLeads = []
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-El");
var deleteBtn = document.getElementById("delete-btn");
const leads = JSON.parse(localStorage.getItem("myLeads"));
var tabBtn = document.getElementById("tab-btn");

if(leads){
  myLeads = leads;
  render();
}

tabBtn.addEventListener("click",function(){
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
    myLeads.push(tabs[0].url);
    localStorage.setItem("myLeads",JSON.stringify(myLeads));
    render();
  })
})

function render(){
  var listItems= "";
  for(var i=0;i<myLeads.length;i++)
  {
    listItems += "<li>" + "<a href='" + myLeads[i] +"' target='_blank'>" + myLeads[i] + "</a>" + "</li>";
  }
  ulEl.innerHTML = listItems;
}

deleteBtn.addEventListener("dblclick", function(){
  localStorage.clear();
  myLeads= [];
  render();
})

inputBtn.addEventListener("click",function(){
  myLeads.push(inputEl.value);
  inputEl.value = "";
  localStorage.setItem("myLeads", JSON.stringify(myLeads));
  render();
})
