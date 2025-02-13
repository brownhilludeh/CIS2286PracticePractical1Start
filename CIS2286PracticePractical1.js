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


    do {
        option = prompt(MENU);
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

    phoneOption = prompt(PHONE_MENU);

    //Process purchase (maybe a Switch?)


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

    //If budget remains, updates total number phones purchased ,individual phone type totals


    //adjust budget amount after a successful purchase transaction

    //Prints process phone feedback e.g.You purchased an iPhone X at a cost of $460.00. Your new budget is $540.00 or
    // Insufficient funds. Your current budget is $80.00.


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

    return "";
}


//Run the phoneSalesApp
phoneSalesApp();
