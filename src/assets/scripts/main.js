/**
 * Import dependencies from node_modules
 * see commented examples below
 */

import $ from 'jquery';
import { createApp } from 'vue';
import { collapse, createMap, currentPage, handleSubmit, menu, modal } from './function';

/**
 * Import components
 */
import Calendar from './../../views/about/Calendar.vue';
import Tournament from './../../views/about/Tournament.vue';

/**
 * Write any other JavaScript below
 */

+( function() {
  /**
   * Nav
   */
  let currentLocation = window.location.pathname.slice(1, window.location.pathname.length);

  if (currentLocation.length > 0) {
    let html = currentLocation.slice(currentLocation.length-5, currentLocation.length)
    if (html === '.html') {
      currentLocation = currentLocation.slice(0, currentLocation.length-5);
    }
    currentPage(currentLocation);
  }



  /*Execute general funcions */
  menu();
  modal();
  collapse("#btnTournament", "#collapseTournament");




  /**
   * Contact form
   */
  const conctactForm = document.getElementById('contact-form');
  const inputValues = ['#name-user', '#email-user', '#message-user'];
  conctactForm.addEventListener('submit', e => {
    handleSubmit(e, inputValues, conctactForm, 'El mensaje');
  }, false);
  



  /**
  * Article 
  */ 
  if($('#about').length) {
    //Map
    createMap('map-location', 41.750306229121676, 1.8436313269920916, '', '', 'Club de tenis', 15);

    //Calendar
    createApp(Calendar).use().mount('#calendar');

    //Tournament
    createApp(Tournament).use().mount('#tournament');
  }
} )();