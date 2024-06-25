// Sidebar & Main Content Toggle 
function openSidebar() {
  document.querySelector('.sidebar').classList.add('active');
  document.querySelector('.menu-toggle').classList.remove('active');
  document.querySelector('.main').style.marginLeft = '300px';
}
  
function closeSidebar() {
  document.querySelector('.sidebar').classList.remove('active');
  document.querySelector('.menu-toggle').classList.add('active');
  document.querySelector('.main').style.marginLeft = '0px';
}
