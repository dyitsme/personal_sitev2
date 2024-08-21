---
title: Real estate price predictor
description: This app predicts the estimated price, perceived safety, and price factors of a property within Pasig and Parañaque cities.
date: 2024-08-09
cover: /img/homebudget.png
github: https://github.com/dyitsme/realestate_frontend
app: https://homebudget-comet.vercel.app/
tags:
---

## Introduction 
In my bachelor's thesis, I created an app called HomeBudget that helps homebuyers, sellers, and investors make informed decisions on residential properties in Pasig and Parañaque cities. It does this by giving an estimated price of the propertty based on its information and a photo of its exterior. The app also displays other information such as the perceived safety surrounding the property and the property’s price factors. Furthermore, hazard information such including flood periods and faultlines can be toggled on the map.


## Method
- Collected listing information in the Lamudi website
- Gathered hazard information from Project NOAH website and GEM repository
- Conducted a crowdsourcing survey where participants rated the perceived safety of images from both cities.
- Utilized the safety information to train the Siamese Neural Network model
- Used listing data to train the XGBoost model


## Results

The results from the survey show that some barangays are perceived as more safe than others. Looking at the higher rated images, these images usually contain trees, clear roads, modern buildings, and high walls. Lower rated images usually have construction sites, congested roads, and informal settlements.

<img src="/img/safety_scores.png"/>

<img src="/img/high_low_rated.png"/>

As for the price factors, the highest contributors were operation type (buy/rent), land size, floor area, number of transportation amenities, and bedrooms. The operation type had the highest contribution because of the large difference in price between rent and buy listings.

<img src="/img/price_factors.png" class=""/>


## Offline installation
1. Clone the repository
```
git clone https://github.com/dyitsme/realestate_frontend.git
```
1. Have Node v21.6.1 installed [here](https://nodejs.org/en) 
2. Install the necessary libraries:

```bash
npm install
```
3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser.

5. Head [here](https://github.com/dyitsme/realestate_backend) and follow the steps to install the server for this app.

## Pages
- `/` shows the landing page
- `/map` displays the app dashboard
- `/about` displays the about page