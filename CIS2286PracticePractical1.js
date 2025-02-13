/**
 *
 * @author jdkitson
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
let phonesPurchased = 0;
let numPhones = 0;
let subTotal = 0;
let purchaserName;

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
        + "- P-Purchase a Phone\n"
        + "- V-View Order details\n"
        + "- X-eXit\n"
        + "-------------------------\n"
        + "Option-->";


    //Add a loop below to continuously prompt the user for their choice
    //until they choose to exit.
    let option = "";

    //Capture purchaser name and budget
    purchaserName = prompt("What is your name?");
    budget = prompt("What is your budget?");

    do {
        option = prompt(MENU);
        // while (!"PVX".includes(option.toUpperCase())) {
        //     option = prompt("Invalid option. Please enter P to purchase a phone, V to view order details or X to exit. " + MENU);
        // }

        while (option.toUpperCase() !== "P" && option.toUpperCase() !== "V" && option.toUpperCase() !== "X") {
            option = prompt(MENU);
        }
        processMenuOption(option);
    } while (option.toUpperCase() !== EXIT);


}

/**
 * This method will process the menu option specified in the input
 * parameter. It will call appropriate functionality based on its value.
 *
 * @param option The menu option
 * @since 20171102
 * @author cis1201b
 *
 */
function processMenuOption(option) {
    //Add a switch to process the option

    switch (option.toUpperCase()) {
        case "P":
            purchase();
            break;
        case "BrownV":
            alert(displayOrder());
            break;
        case "X":
            alert(displayOrder() + "Good Bye!" + "\nThank you for using CIS Cellphone Sales App");
            break;
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
        + "I - iPhone X - $400\n"
        + "S - Samsung Galaxy S10 - $450\n"
        + "F - Nokia 2720 - Flip Phone - $150\n"
        + "-------------------------\n"
        + "Option-->";
    let phoneOption;

    phoneOption = prompt(PHONE_MENU);

    while (phoneOption.toUpperCase() !== "I" && phoneOption.toUpperCase() !== "S" && phoneOption.toUpperCase() !== "F") {

        phoneOption = prompt(PHONE_MENU + "Invalid option. Please enter I to purchase an iPhone X, S to purchase a Samsung Galaxy S10 or F to purchase a Nokia 2720. ");
    }

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
    if (budget < phoneCost + (phoneCost * TAX_RATE)) {
        alert("Insufficient funds. Your current budget is " + formatCurrency(budget));
    } else {
        //If budget remains, updates total number phones purchased ,individual phone type totals
        numPhones++;
        subTotal += phoneCost;
        switch (phoneType) {
            case "iPhone X":
                phoneCountOne++;
                break;
            case "Samsung Galaxy S10":
                phoneCountTwo++;
                break;
            case "Nokia 2720":
                phoneCountThree++;
                break;
            default:
                break;
        }

        //adjust budget amount after a successful purchase transaction
        budget -= phoneCost + (phoneCost * TAX_RATE);

        //Prints process phone feedback e.g.You purchased an iPhone X at a cost of $460.00. Your new budget is $540.00 or
        // Insufficient funds. Your current budget is $80.00.
        alert("You purchased a " + phoneType + " at a cost of " + formatCurrency(phoneCost + (phoneCost * TAX_RATE)) + ". Your new budget is " + formatCurrency(budget));

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

    return "Purchaser Name: " + purchaserName
        + "\n Number of Items: 3" + numPhones
        + "\n Purchased: "
        + "\n " + phoneCountOne + " iPhone X(s), "
        + "\n " + phoneCountTwo + " Samsung Galaxy S10(s), "
        + "\n " + phoneCountThree + " Nokia 2720(s) at a cost of $400.00, $450.00, $150.00 each\n" +
        + "\n Subtotal: " + formatCurrency(subTotal)
        + "\n Tax: " + formatCurrency(subTotal * TAX_RATE)
        + "\n Total: " + formatCurrency(subTotal + subTotal * TAX_RATE);
}


//Run the phoneSalesApp
phoneSalesApp();