# KLEKT Technical Test - #001A - Shoe Price Calculator.

- Present solution through screen sharing ( and/or through git repo ).
- Stipulate any assumptions made.
- Time estimate 2-3hrs.

## Tasks

Given several inputs listed in the business rules, write a programme to deduce an overall calculated price for the cost of a listed shoe to the buyer’s location.

a. The calculation should satisfy the following scenario …

*"There is a shoe seller based in <location1\>. With the buyer based in <location2\>. the total price of of the shoe would be <calcluatedPrice\>."*


**Input parameters**

There are several input parameters to consider for the overall calculated shoe price.

1. Initial listing price for the shoe by Seller.
2. Seller location ( can be either UK, US or EU ).
3. Shoe processing fee ( fixed @ 2% for UK, 4% for US, 3%  for EU ).
4. Buyer location ( can be either UK, US, or EU ).
5. Delivery charge ( can be either UK ( £5 ), US ( $5 ), or EU ( €5 ) ).

b. Decide on a simple interface which is able to demonstrate the calculation and overall calculation for the end user.

c. Decide what test senarios are needed and demonstrate coverage.

d. Use any of the shoes listed on the Klekt website for your shoe listing input data. https://www.klekt.com

e. Be prepared to walkthrough the solution and give some idea as to consideration on production where delivery costs and exchange rates are not fixed, but may need to be calculated in real time.

## Business rules ...

If the shoe is in same location there is no additional delivery tax.

Target delivery costs will vary from country to country.

In addition to the above parameters, there are exchange rates required.

*Exchange rates*
- 1 Pound (£) = 1.20 Euro (€)
- 1 Pound (£) = 1.36 USD ($)
- 1 Euro (€) = 1.13 USD ($)
- 1 Euro (€) = 0.83 Pound (£)
- 1 USD ($) = 0.74 Pound (£)
- 1 USD ($) = 0.88 Euro (€)




# plan
1.