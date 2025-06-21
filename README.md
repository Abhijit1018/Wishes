# 🌟 Magical Wishing Website 🌟

This is a whimsical website built with Django that asks for your name and a theme, then presents you with a personalized blessing and a joke, all within a magical, interactive 3D environment.

## Features

-   **Interactive 3D Background:** A beautiful, animated starfield with a central glowing orb, built with Three.js.
-   **Enchanting Audio:** Mystical background music and sound effects for a complete sensory experience.
-   **Themed Wishes:** Choose from Classic, Tech, or Animal themes for a variety of blessings and jokes.
-   **"Wish Again" Functionality:** Get a new wish and joke without reloading the page.
-   **Sharable "Wish Cards":** Download a snapshot of your personalized wish to share with friends.

## Setup and Run

To run this project on your local machine, follow these steps:

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/Abhijit1018/Wishes.git
    cd Wishes
    ```

2.  **Create and activate a virtual environment:**
    ```sh
    # For Windows
    python -m venv venv
    .\venv\Scripts\activate

    # For macOS/Linux
    python3 -m venv venv
    source venv/bin/activate
    ```

3.  **Install the required packages:**
    ```sh
    pip install -r requirements.txt
    ```

4.  **Run the initial database migrations:**
    ```sh
    python manage.py migrate
    ```

5.  **Start the development server:**
    ```sh
    python manage.py runserver
    ```

Open your web browser and navigate to `http://127.0.0.1:8000/` to experience the magic! 
You can also go to the website. The link is provided in the description.
