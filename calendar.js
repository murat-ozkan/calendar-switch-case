//? *********** CALENDAR PAGE FOR SWITCH CASE EXAMPLE **********//

const day = prompt("Please enter the day in lower case:");

switch (day) {
  case "pazartesi":
    alert(`You have InClass lesson on ${day}`);
    break;
  case "sali":
    alert(`You have InClass lesson on ${day}`);
    break;
  case "carsamba":
    alert(`You have InClass lesson on ${day}`);
    break;
  case "persembe":
    alert(`You have InClass lesson on ${day}`);
    break;
  case "cuma":
    alert(`You have TeamWork lesson on ${day}`);
    break;
  case "cumartesi":
    alert(`You have InClass + TeamWork lessons on ${day}`);
    break;
  case "pazar":
    alert(`You don't have a lesson on ${day}. Please study yourself.`);
    break;
  default:
    alert(`Please enter a day name. Do not use Turkish characters.`);
}

//? *********** by muratozkan **********//
