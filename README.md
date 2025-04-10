# Executive Summary

## Project Title: Predicting Payment Card Fraud with Machine Learning

## Team Members:
- Thomas Gartley  
- Josh Ehlke  
- Leonardo Rodriguez  
- Chandler Foster

## Objective
The goal of this project was to determine whether machine learning could be used to accurately predict payment card fraud based on transaction features. This topic was chosen due to its global financial impact—over $30 billion annually—and its personal relevance to the team.

## Dataset
- **Source:** Kaggle dataset containing 1 million anonymized transactions  
- **Features Included:**
  - Distance from cardholder's address and previous transaction
  - Purchase price ratio to median
  - Repeat retailer flag
  - Chip usage
  - PIN entry
  - Online transaction flag
  - Fraud label (binary)
- **Cleaning:** Minimal, only added an index for unique identification

## Data Exploration & Visualization
The team examined key features to determine their predictive value:
- Fraudulent transactions tended to have a **higher purchase-to-median ratio**
- **Online purchases** were significantly more likely to be fraudulent
- **Chip and PIN usage** correlated with reduced fraud likelihood
- **Repeat retailer** status was not a strong indicator

## Machine Learning Approach
- **Preprocessing:** scikit-learn pipeline with data scaling and train/test split
- **Models Tested:**
  - Logistic Regression (poor performance)
  - K-Nearest Neighbors
  - XGBoost
  - LightGBM
  - Random Forest Classifier (**best performer**)
- **Results:**
  - Random Forest showed near-perfect accuracy and 99% recall
  - Cross-validation confirmed reliability
  - Final model retrained on full dataset for deployment

## Conclusions
- **PIN usage** is the most effective indicator of legitimate transactions
- **Online purchases** are the most vulnerable to fraud
- Financial institutions can use these insights to improve fraud detection systems

## Future Work
- Evaluate if specific retailers or categories correlate with fraud
- Test real-time fraud prevention by integrating the trained model
- Address data limitations such as lack of transaction amounts and merchant details

## Tools Used
- Python, scikit-learn, XGBoost, LightGBM  
- Data visualization libraries for insight generation  
- AI tools for reference and guidance (ChatGPT, DeepSeek)

## Citation
- Kaggle Dataset: [Credit Card Fraud](https://www.kaggle.com/datasets/dhanushnarayananr/credit-card-fraud)
