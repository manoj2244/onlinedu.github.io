

function events()
{
	burger=document.querySelector('.burger');
	navbar=document.querySelector('.navbar');
	navlist=document.querySelector('.nav-list');
	rightnav=document.querySelector('.rightnav');

	rightnav.classList.toggle('visibility');
	navlist.classList.toggle('visibility');
	navbar.classList.toggle('responsive-height');
}