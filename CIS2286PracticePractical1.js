/**
 *
 * @author Brownhill Udeh
 */

//Declare local variables/attributes

const PHONE_TYPE_1 = "iPhone X";
const PHONE_TYPE_2 = "Samsung Galaxy S10";
const PHONE_TYPE_3 = "Nokia 2720";
const TAX_RATE = 0.15;

const PHONE_ONE_PRICE = 400;
const PHONE_TWO_PRICE = 450;
const PHONE_THREE_PRICE = 150;
const EXIT = "X";

let phoneCountOne = 0;
let phoneCountTwo = 0;
let phoneCountThree = 0;

let budget = 1000;
//let phonesPurchased = "";
let payable = 0;
let numPhones = 0;
let subTotal = 0;
let purchaserName;
// let budgetRemaining = 0;

//Closure counter
let add = (function () {
    let counter = 0;
    return function () { counter += 1; return counter; }
})();

/**
 *
 */
function phoneSalesApp() {

    const EXIT = "X";

    const MENU = "-------------------------\n"
        + "CIS Cellphone Sales App Menu\n"
        + "P - Purchase a Phone\n"
        + "V - View Order details\n"
        + "X - Exit\n"
        + "-------------------------\n"
        + "Option-->";

    //Add a loop below to continuously prompt the user for their choice
    //until they choose to exit.
    let option = "";

    //Capture purchaser name and budget
    do {
        purchaserName = prompt("Enter your punk ass legal name boy!"); // Verify name is entered
    } while (!purchaserName || purchaserName.trim() === "");

    //Verify it is a number 
    budget = Number(budget);
    do {
        budget = prompt("Enter your little ass phone budget boy.");
    } while (isNaN(budget) || budget.trim() === "");

    //Verifying the input
    do {
        option = prompt(MENU);
        while (!"PVX".includes(option.toUpperCase())) {
            option = prompt(MENU + "\n Please enter a letter: P to purchase, V to view order details and X to exit the app.");
        }
        processMenuOption(option);
    } while (option.toUpperCase() !== EXIT);

}

/**
 * This method will process the menu option specified in the input
 * parameter. It will call appropriate functionality based on its value.
 *
 * @param option The menu option
 * @since Feb 13, 2025
 * @author Brownhill Udeh
 *
 */
function processMenuOption(option) {
    //Add a switch to process the option
    switch (option.toUpperCase()) {
        case "P":
            purchase();
            break;
        case "V":
            alert(displayOrder());
            break;
        case "X":
            alert(displayOrder() + "\n Good bye!");
        default:
            break;
    }
}

/**
 *
 */
function purchase() {


    const PHONE_MENU = "------------------------\n"
        + "Phone Menu\n"
        + "- I-iPhone X - $400\n"
        + "- S-Samsung Galaxy S10 - $450\n"
        + "- F- Nokia 2720 - Flip Phone - $150\n"
        + "-------------------------\n"
        + "Option-->";
    let phoneOption;

    do {
        phoneOption = prompt(PHONE_MENU);
    } while (!"ISF".includes(phoneOption.toUpperCase()));

    // processPhone(phoneOption);

    //Process purchase (maybe a Switch?)
    switch (phoneOption.toUpperCase()) {
        case "I":
            processPhone(PHONE_TYPE_1, PHONE_ONE_PRICE);
            break;
        case "S":
            processPhone(PHONE_TYPE_2, PHONE_TWO_PRICE);
            break;
        case "F":
            processPhone(PHONE_TYPE_3, PHONE_THREE_PRICE);
            break;
        default:
            break;
    }
}

/**
 * Verifies there is ample budget for purchase
 * If budget remains, updates total number phones purchased ,individual phone type totals and adjusts budget amount after a successful purchase transaction.
 * Prints process phone feedback e.g. You purchased an iPhone X at a cost of $460.00. Your new budget is $540.00 or Insufficient funds. Your current budget is $80.00.
 *
 * @param phoneType
 * @param phoneCost
 */
function processPhone(phoneType, phoneCost) {
    //Verify there is ample budget for purchase - phone cost including Tax
    payable = (phoneCost + (phoneCost * TAX_RATE));

    if (payable <= budget) {
        // If budget remains, update total number of phones purchased and individual phone type totals
        numPhones++;  // Assuming 'add()' is a function that increments numPhones, otherwise use numPhones++
        subTotal += phoneCost;

        // Update individual phone type totals using switch (avoiding redundancy)
        switch (phoneType) {
            case PHONE_TYPE_1:
                phoneCountOne++;
                break;
            case PHONE_TYPE_2:
                phoneCountTwo++;
                break;
            case PHONE_TYPE_3:
                phoneCountThree++;
                break;
            default:
                alert("I don't know how you got here.");
                break;
        }

        // Adjust budget amount after a successful purchase
        budget -= payable;

        // Provide feedback on the transaction
        alert("You purchased " + phoneType + " at a cost of " + formatCurrency(payable) + ". Your new budget is " + formatCurrency(budget));

    } else {
        // Insufficient funds warning
        alert("Insufficient funds. Your current budget is " + formatCurrency(budget));
    }
}

/**
 *
 * @param amount
 * @param hasSeparator
 * @returns {string}
 */
function formatCurrency(amount, hasSeparator = true) {

    //https://www.samanthaming.com/tidbits/30-how-to-format-currency-in-es6/
    return new Intl.NumberFormat('en-CA',
        { style: 'currency', useGrouping: hasSeparator, currency: 'CAD' }
    ).format(amount);
}

/**
 *
 * @returns {string}
 */
function displayOrder() {

    return " Number of Items: " + (phoneCountOne + phoneCountTwo + phoneCountThree)
        + "\n Purchased: " + numPhones
        + "\n" + phoneCountOne + " iPhone X(s),"
        + "\n" + phoneCountTwo + " Samsung Galaxy S10(s),"
        + "\n" + phoneCountThree + " Nokia 2720(s)"
        + "\n Balance: " + formatCurrency(budget)
        + "\n Subtotal: " + formatCurrency(subTotal)
        + "\n Tax: " + formatCurrency(subTotal * TAX_RATE)
        + "\n Total: " + formatCurrency(subTotal + (subTotal * TAX_RATE));
}

//Run the phoneSalesApp
phoneSalesApp();
