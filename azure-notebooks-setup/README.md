# Azure Notebooks Setup

At a high level, here are the setup tasks you will need to perform to prepare your Azure Notebooks Environment (the detailed instructions follow):

1. Setup an Azure Notebooks account. 

2. Setup Azure Notebooks Project

3. Start the Notebook Server

4. Update your Notebook Environment 

## Task 1: Setup an Azure Notebooks account
1. In your browser, navigate to https://notebooks.azure.com/.

2. Select Sign In from the top, right corner and sign in using your Microsoft Account credentials. After a successful login, you will have implicitly created the account and are ready to continue.

## Task 2: Setup Azure Notebooks Project

1. Log in to [Azure Notebooks](https://notebooks.azure.com/).

2. Navigate to **My Projects** page

3. Select **Upload GitHub Repo**.

4. In the Upload GitHub Repository dialog, for the GitHub repository provide `https://github.com/solliancenet/cocorahs-ai.git`, and select **Import**. Allow the import a few moments to complete, the dialog will dismiss once the import has completed.

	![In the dialog the GitHub URL to upload the project repository is shown.](images/01.png 'Upload GitHub Repository')

## Task 3: Start the Notebook Server

1. Navigate to your project: `cocorahs-ai->notebooks`

2. Start your Notebook server on `Free Compute` by selecting the **Play** icon in the toolbar as shown:

	![The image shows the Azure Notebooks Projects page and highlights the area to select.](images/02_2.png 'Start Notebook Server')

3. It should open **Jupyter Notebooks** interface.

## Task 4: Update your Notebook Environment 

1. Open notebook: **setup.ipynb**

	![Jupyter Notebooks Interface with setup.ipynb notebook selected.](images/03.png 'Jupyter Notebooks')

2. Run each cell in the notebook to install the required libraries.

3. Note that you will have to update your Notebook environment each time you start a new session on `Free Compute`.
