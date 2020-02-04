import { Journal } from './journal.js';
import './styles.css';

$(document).ready(function() {
  $("#journal-form").submit(function(event) {
    event.preventDefault();
    var prompt1 = new Journal ($("#title").val(), $("#body").val());
    $("#output-title").html(prompt1.title);
    $("#output-body").html(prompt1.body);
    prompt1.wordCount();
    $("#output-numWords").html(prompt1.numWords);
    prompt1.charCount();
    $("#output-vowel").html(prompt1.vowelCount);
    $("#output-const").html(prompt1.constCount);
    prompt1.wordLimit();
    $("#firstEight").html(prompt1.firstEight);
  });
});