# CoCoRaHS AI for Earth

[CoCoRaHS](https://www.cocorahs.org/) – Community Collaborative Rain, Hail & Snow Network is a network of volunteer weather observers in the United States, Canada, and the Bahamas that take daily readings of precipitation and report them to a central data store over the internet. This repository hosts resources developed as part of the CoCoRaHS AI for Earth project. The objective of the project is to leverage data science and machine learning techniques to support the key goals that include, (1) Extract insights from observation notes, (2) Use Notebooks to share data analysis, and (3) Improve QC processes.

## Setting up your environment

To get started with the Jupyter Notebooks provided in this repository, we will be using Azure Notebooks as our environment. You use Azure Notebooks, you will need a valid and active Azure account. If you do not have one, you can sign up for a [free trial](https://azure.microsoft.com/en-us/free/).

Once you have your Azure account, please follow the steps outlined in [Azure Notebooks Setup](./azure-notebooks-setup) to complete the setup.

## cocorahs-ai_book1 - Intro to Topic Modeling

The goal here is to do exploratory data analysis (EDA) on the observation notes data available in the CoCoRaHS data source. For this analysis we looked at the DailyPrecipReport that has around **46.5 million** records, out of which around **8 million** records have observation notes. This study takes a random 1% sample from the 8 million records (**91,937** records with notes) to perform the initial EDA. 

Since we are dealing with large amount of unstructured and unlabeled data, the EDA is going to leverage two key unsupervised machine learning algorithms that are suitable for text analysis. Specifically, we will be looking at two topic modeling algorithms: **Latent Dirichlet Allocation (LDA)** and **K-Means Clustering**. 

This notebook is divided into the following sections:

- Setup – load and review the data from notes
- Breakdown of weather terms in the notes
- Topic Modeling with LDA
- Topic Modeling with K-Means Clustering
- Compare predictions from LDA and K-Means on test data

## cocorahs-ai_book2 - Extracting Hail Size and Duration and Condition Monitoring Observer Notes Topic Analysis

[TBD]

## cocorahs-ai_book3 - State and County Level Analysis of Dry and Wet Conditions

[TBD]
