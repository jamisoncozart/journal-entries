import { Journal } from './journal.js';
import './styles.css';

$(document).ready(function() {
  $("#journal-form").submit(function(event) {
    event.preventDefault();
    var prompt1 = new Journal ($("#title").val(), $("#body").val());
    console.log(prompt1);
  })
})