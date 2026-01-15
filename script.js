/*
 * FILE			         : script.js
 * PROJECT		         : Portfolio
 * PROGRAMMER	         : Eumee Garcia
 * FIRST VERSION         : 2025-09-04
 * DESCRIPTION	         : This is a JavaScript file thats contains the function
						   to control tab navigation and seasonal theme changes.
 */

//Removes the active class from elements that match the selector
function clearActive(selector) 
{
	//Select matching elements and remove the active class
    document.querySelectorAll(selector).forEach(el => el.classList.remove("active"));
}

function openTab(event, tabId, season) 
{
	//Hide all tab content sections 
    clearActive(".tab-content");
	
	//Remove active styling from all tab buttons
    clearActive(".tab-btn");

	//Show selected tab content 
    document.getElementById(tabId).classList.add("active");
    //Highlight the clicked tab button
	event.currentTarget.classList.add("active");

	//Change the page theme
    document.body.className = season;
}
