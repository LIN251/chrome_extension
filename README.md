# Chrome extension demo for sales management. 


## Load chrome extension
1. You can either clone the project or download the zip file.
2. If you only want to run the extension, you'll only need the dist folder.
3. Launch the Google Chrome browser and click on the three-dot menu icon in the top-right corner of the window.
4. Select "More tools" from the menu, and then click on "Extensions."
5. Enable Developer mode by toggling the switch in the top-right corner.
6. Click on the "Load unpacked" button located in the top-left corner of the screen.
7. Locate the dist folder in the downloaded extension file, and select it.
8. Once the extension is loaded, its icon should appear on the toolbar.

## Backend info
1. The backend for this extension utilizes Firestore.
2. All data is stored within Firestore.
3. Since this is a demonstration, there are currently no security restrictions or login verification in place. The API  is publicly accessible, but these settings can be modified as needed.

## Extension datails
### Product pages
1. This page displays a comprehensive list of all available products.
2. Additionally, there is a feedback section where customers can submit their feedback directly to the sales team.


![Product page](https://github.com/LIN251/chrome_extension/READMEIMG/../../../../../README_IMG/product.jpg)


### Sales pages
1. Salespeople can use this page to add new products to the product page.
2. The page includes a feedback list that provides customer information and a time stamp for each feedback submission.
3. Salespeople can respond to feedback by clicking on the reply button.
4. A new entry will be created to indicate that the feedback has been replied to.
5. Firebase will be notified and update the corresponding value in the "replied" section.
6. Although no email notifications are currently sent, all reply data is recorded in Firebase and will automatically show in the sales section. Email replies may be added in the future, if necessary.


![sales page](https://github.com/LIN251/chrome_extension/READMEIMG/../../../../../README_IMG/sales.jpg)

### Tech stack
1. React, Js, chrome
2. Firebase
3. Webpack
4. Html, css



